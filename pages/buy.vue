<template>
  <div>
    <SectionPadding>
      <SectionTitlesSecondary
        location="St. James"
        mainTitle="Buy Real Estate"
      />
    </SectionPadding>

    <v-divider></v-divider>
    <SectionPaddingAlt>
      <TheSearchSection />
    </SectionPaddingAlt>

    <SectionPadding class="backgroundShade">
           <TheRealEstatePropertiesListingLoader
        v-if="loading"
        title="sale"
        :card="card"
      />
      <TheRealEstatePropertiesListing v-else title="sale" :card="card" />
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
export default {
  data() {
    return {
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
  
  methods: {
    previous() {
      console.log("previous");
      this.loading = true;
      setTimeout(() => (this.loading = false), 3000);
    },
    next() {
      console.log("next");
      this.loading = true;
      setTimeout(() => (this.loading = false), 3000);
    }
  }
};
</script>

