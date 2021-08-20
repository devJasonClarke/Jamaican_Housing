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
          @click="previous"
        >
          <v-icon dark>
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small color="green accent-4" @click="next">
          <v-icon dark>
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </div>
    </SectionPadding>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  async fetch() {
    console.log("fetch");
    await this.$fireModule.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        const db = this.$fire.firestore;
        let properties = [];
        this.loading = true;
        db.collection("properties")
          .where("owner", "==", user.uid)

          .onSnapshot(
            querySnapshot => {
              properties = [];
              querySnapshot.forEach(doc => {
                properties.push([doc.data(), doc.id]);
              });
              this.properties = properties;
              console.log(`Fetch properties ${properties}`);
              this.loading = false;
              if (this.properties === []) {
                this.properties = "no properties";
              }
            },
            error => {
              console.log("Firebase");
              console.log(error);
            }
          );
      } else {
        // User is signed out
        // ...
      }
    });
  },

  data() {
    return {
      loading: false,
      properties: [],
      loading: true,
      iconColor: "rgba(0, 200, 83, 0.5)"
    };
  },
  layout: "dashboard",
  computed: {
    target() {
      const value = "#top";
      return value;
    },
    ...mapGetters({
      featuredProperties: "properties/featuredProperties",
      user: "authentication/user",
      currencyRate: "api/currencyRate"
    })
  },
  methods: {
    shortenMoney(num) {
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
    previous() {
      this.loading = true;
      this.$vuetify.goTo(this.target);
      setTimeout(() => (this.loading = false), 3000);
    },
    next() {
      console.log("next");
      this.loading = true;
      this.$vuetify.goTo(this.target);
      setTimeout(() => (this.loading = false), 3000);
    }
  }
};
</script>

<style lang="scss" scoped></style>
