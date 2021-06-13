<template>
  <div>
    <v-img :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary mainTitle="Buy Real Estate" />
    </SectionPadding>

    <v-divider></v-divider>
    <SectionPaddingAlt>
      <TheSearchSection />
    </SectionPaddingAlt>
    <div id="top"></div>
    <SectionPadding class="backgroundShade">
      <TheRealEstatePropertiesListingLoader
        v-if="loading"
        title="sale"
        :card="card"
      />
      <TheRealEstatePropertiesListing v-else title="Real Estate for Sale" :card="card" />
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
  </div>
</template>

<script>
import img from "~/assets/images/house.jpg";
export default {
  data() {
    return {
        img: img,
      loading: false,
      card: {
        title: "Sunny Private Studio Apartment",
        parish: "St. James",
        realEstateType: "Apartment",
        squareMeters: 80,
        beds: 3,
        bathroom: 2,
        price: 70
      }
    };
  },
  computed: {
    target() {
      const value = "#top";
      if (!isNaN(value)) return Number(value);
      else return value;
    },
    options() {
      return {
        offset: 10
      };
    }
  },

  methods: {
    previous() {
      console.log("previous");
      this.loading = true;
      this.$vuetify.goTo(this.target, this.options);
      setTimeout(() => (this.loading = false), 3000);
    },
    next() {
      console.log("next");
      this.loading = true;
      this.$vuetify.goTo(this.target, this.options);
      setTimeout(() => (this.loading = false), 3000);
    }
  }
};
</script>
