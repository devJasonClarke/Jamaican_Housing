<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-img :lazy-src="img" :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary
        mainTitle="Featured Listings "
        paragraph="Premium listings that are a cut above the rest. With up to 75% more exposure than regular listings, these real estate deals usually leave the market before you know it."
      />
    </SectionPadding>

    <v-divider></v-divider>

    <div id="results"></div>
    <SectionPadding class="backgroundShade">
      <TheListingRealEstatePropertiesLoader v-if="loading" title="sale" />

      <SectionPadding v-else class="pt-9">
        <TheListingRealEstatePropertiesFirebase
          title="Featured listings around you"
          :properties="properties"
        />
        <div class="d-flex justify-center align-center mt-4">
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="green accent-4"
            @click="$vuetify.goTo('#results')"
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
    </SectionPadding>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import img from "~/assets/images/houses/3.jpg";
export default {
  fetch() {
    // console.log("fetch");
    // console.log(this.properties);

    if (this.properties.length == 0) {
      this.getFeaturedProperties();
    } else {
      this.setLoading(false);
    }
  },
  data() {
    return {
      title: "Featured Listings | Real Estate Ja",
      description:
        "Premium listings that are a cut above the rest. With up to 75% more exposure than regular listings, these real estate deals usually leave the market before you know it",
      img: img
    };
  },
  computed: {
    target() {
      const value = "#results";
      return value;
    },
    ...mapGetters({
      properties: "getProperties/featured/properties",
      lastVisible: "getProperties/featured/lastVisible",
      paginateNext: "getProperties/featured/paginateNext",

      properties: "getProperties/featured/properties",

      loading: "getProperties/featured/loading",

      paginateNext: "getProperties/featured/paginateNext"
    })
  },
  methods: {
    ...mapActions({
      logError: "snackbars/errors/logError",
      getFeaturedProperties: "getProperties/featured/getFeaturedProperties",

      setLoading: "getProperties/featured/setLoading"
    }),

    previous() {
      // console.log("previous");

      this.$vuetify.goTo(this.target);
    },
    next() {
      // console.log("next");
      this.getFeaturedProperties();
    }
  }
};
</script>
