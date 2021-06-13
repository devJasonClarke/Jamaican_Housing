<template>
  <div>
    <v-img :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary
        mainTitle="Rent A Home"
        paragraph=" Prepare a short list of features you would like in a home, such as
          location, beds & bath's required, bearing in mind affordability and
          accommodation requirements."
      />
    </SectionPadding>

    <v-divider></v-divider>
    <SectionPaddingAlt>
      <TheSearchSection />
    </SectionPaddingAlt>
    <div id="top"></div>
    <SectionPadding class="backgroundShade">
      <TheRealEstatePropertiesListingLoader
        v-if="loading"
        title="rent"
        :card="card"
      />
      <TheRealEstatePropertiesListing
        v-else
        title="Homes for rent"
        :card="card"
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
      return value;
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

<style lang="scss" scoped>
.card {
  transition: 0.4s all ease;
  &:hover {
    transform: scale(1.04);
  }
}
</style>
