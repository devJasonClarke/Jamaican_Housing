<template>
  <v-container>
    <h1>Properties</h1>

    <SectionPadding id="top">
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
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false
    };
  },
  layout: "dashboard",
  computed: {
    target() {
      const value = "#top";
      return value;
    },
    ...mapGetters({
      featuredProperties: "properties/featuredProperties"
    })
  },
  methods: {
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
