<template>
  <v-container>
    <h1>Properties</h1>

    <!--  {{ properties }} -->
    <TheRealEstatePropertiesListingLoader
      v-if="loading === true"
      title="sale"
    />
    <SectionPadding v-else-if="properties.length < 1">
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center flex-column"
        outlined
        ><p class="text-h6 text-center font-weight-regular">
          No properties as yet.
          <br />Add your first propery today!
        </p>
        <v-btn
          nuxt
          :to="{ name: 'dashboard-add-property' }"
          dark
          color="green accent-4"
        >
          <v-icon left>mdi-home-import-outline</v-icon> Add Property</v-btn
        >
      </v-sheet>
    </SectionPadding>

    <SectionPadding v-else id="top">
      <TheSearchSection />
      <TheRealEstatePropertiesListingFirebase
        title="Real Estate for Sale"
        :properties="properties"
      />
      <div class="d-flex justify-center align-center mt-4">
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="green accent-4"
          @click="$vuetify.goTo('#top')"
        >
          <v-icon dark>
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          :dark="paginateNext.dark"
          small
          color="green accent-4"
          @click="next"
          :disabled="paginateNext.disabled"
        >
          <v-icon dark>
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </div>
    </SectionPadding>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  async fetch() {
    console.log("fetch");
    await this.loadProperties();
  },

  data() {
    return {
      loading: false,
      properties: [],
      lastVisible: null,
      loading: true,
      paginateNext: {
        disabled: false,
        dark: true
      },
      iconColor: "rgba(0, 200, 83, 0.5)"
    };
  },
  layout: "dashboard",
  computed: {
    ...mapGetters({
      featuredProperties: "properties/featuredProperties",
      user: "authentication/user",
      currencyRate: "api/currencyRate"
    })
  },
  methods: {
    ...mapActions({
      logError: "errors/logError"
    }),
    async loadProperties() {
      await this.$fireModule.auth().onAuthStateChanged(user => {
        this.loading = true;
        if (user) {
          console.log("lastVisible");
          console.log(this.lastVisible);

          const ref = this.$fire.firestore
            .collection("properties")
            .where("uploader", "==", user.uid)
            .orderBy("timestamp", "desc")
            .startAfter(
              this.lastVisible || {
                parish: "St. Ann",
                details: {
                  propertyFor: "Sale",
                  community: "Big Mango",
                  garages: "0",
                  bathrooms: "0",
                  propertyId: "",
                  bedrooms: "0",
                  rentType: "",
                  price: "100000000",
                  parish: "St. Ann",
                  size: "1000",
                  propertyType: "Farm/Agriculture"
                },
                timestamp: { seconds: 1629599693, nanoseconds: 943000000 },
                tours: { virtualTour: "", youtube: "" },
                uploader: "Zm29pU2QULXXuFgQrNB2s5bHXTq1",
                price: "100000000",
                verified: false,
                amenities: [
                  { title: "Wifi", icon: "mdi-wifi" },
                  { title: "Furnished", icon: "mdi-sofa" },
                  { title: "24 Hour Security", icon: "mdi-cctv" },
                  { title: "Swimming Pool", icon: "mdi-pool" }
                ],
                bedrooms: "0",
                type: "Farm/Agriculture",
                featured: false,
                description: {
                  name: "Jason Clarke Residential",
                  description: "Jason Clarke Residential"
                }
              }
            )
            .limit(2);

          ref.get().then(
            querySnapshot => {
              this.lastVisible =
                querySnapshot.docs[querySnapshot.docs.length - 1];

              if (querySnapshot.empty) {
                console.log("Empty Rass");
                this.paginateNext = {
                  disabled: true,
                  dark: false
                };
              }
              if (querySnapshot.empty && this.properties.length) {
                this.logError("You have no more properties.");
              }

              querySnapshot.forEach(doc => {
                this.properties.push([doc.data(), doc.id]);
              });

              console.log(`Fetch properties ${this.properties}`);
              this.loading = false;
              if (this.properties === []) {
                this.properties = "no properties";
                this.loading = false;
              }
            },
            error => {
              console.log("Firebase");
              console.log(error);
            }
          );
        } else {
          this.loading = false;
        }
      });
    },
    shortenNumber(num) {
      num = Math.round((num + Number.EPSILON) * 100) / 100;

      if (num < 1000) {
        return num;
      }
      var si = [
        { v: 1e3, s: "K" },
        { v: 1e6, s: "M" },
        { v: 1e9, s: "B" },
        { v: 1e12, s: "T" },
        { v: 1e15, s: "P" },
        { v: 1e18, s: "E" }
      ];
      var i;
      for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].v) {
          break;
        }
      }
      return (
        (num / si[i].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
        si[i].s
      );
    },
    next() {
      console.log("next");
      this.loadProperties();

      // this.loading = true;
      //  this.$vuetify.goTo(this.target);
      //  setTimeout(() => (this.loading = false), 3000);
    }
  }
};
</script>

<style lang="scss" scoped></style>
