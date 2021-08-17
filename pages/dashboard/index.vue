<template>
  <v-container>
    <h1>Properties</h1>

    <SectionPadding v-if="false" id="top">
      <TheSearchSection />
      <TheRealEstatePropertiesListingLoader v-if="loading" title="sale" />
      <TheRealEstatePropertiesListing
        v-else
        title="Real Estate for Sale"
        :card="featuredProperties"
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
    <div v-else>
      <div v-for="(property, i) in properties" :key="i" class="mb-6">
      <!--   {{ property }} -->
        <v-card
          nuxt
          :to="{ name: 'property' }"
          outlined
          width="300"
          elevation="0"
          class="rounded-lg card"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200"
            class="pa-3"
          >
            <v-chip
              class="text-uppercase"
              color="orange accent-4"
              small
              label
              dark
            >
              Featured
            </v-chip>
            <v-chip
              class="text-uppercase"
              color="green accent-4"
              small
              label
              dark
            >
              For {{ property[0].details.status }}
            </v-chip>
          </v-img>
          <div>
            <v-card-title>
              <!-- {{ card.title }} -->
              {{ property[0].description.name }}
            </v-card-title>

            <v-card-subtitle class="pb-4 primary-green">
              <v-icon :color="iconColor">mdi-map-marker mdi-18px</v-icon>
              <!-- {{ card.parish }} -->
              {{ property[0].details.community }},
              {{ property[0].details.parishes }}
            </v-card-subtitle>

            <v-card-text
              class=" text-uppercase section-titles-Subtitle grey--text"
            >
              <!--   {{ card.realEstateType }} -->
              {{ property[0].details.propertyType }}
            </v-card-text>

            <div class="px-4 pb-2 d-flex justify-space-between primary-color">
              <p>
                <v-icon :color="iconColor"
                  >mdi-ruler-square mdi-flip-v mdi-18px</v-icon
                >
                <!--    {{ card.squareMeters }} -->
                {{ property[0].details.size }}
                m<sup>2</sup>
              </p>
              <p>
                <v-icon :color="iconColor">mdi-bed mdi-18px</v-icon>
                <!--  {{ card.beds }} -->
                {{ property[0].details.bedRooms }}
              </p>
              <p>
                <v-icon :color="iconColor">mdi-shower-head mdi-18px</v-icon>
                <!--   {{ card.bathroom }} -->
                {{ property[0].details.bathRooms }}
              </p>
              <p>
                <v-icon :color="iconColor">mdi-currency-usd mdi-18px</v-icon>

                {{ shortenMoney(property[0].details.price * currencyRate) }}
              </p>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  async fetch() {
    const user = this.$fire.auth.currentUser;
    console.log("fetch");
    console.log(user);
    const db = this.$fire.firestore;
    let properties = [];
    this.loading = true;
    await db
      .collection("properties")
      .where("owner", "==", "lxX1nHAb4TfjI1SsbhqCuDL19rk2")
      .onSnapshot(
        querySnapshot => {
          properties = [];
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots

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
  },

  data() {
    return {
      loading: false,
      properties: [],
      loading: true
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
