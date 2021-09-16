<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
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
    <v-container class="px-6 px-sm-0">
      <SectionPaddingAlt>
        <TheSearchSectionRent />
      </SectionPaddingAlt>
      <div id="results"></div>
      <SectionPadding v-if="loading == true" class="pt-0"
        ><TheRealEstatePropertiesListingLoader title="rent"
      /></SectionPadding>

      <div v-else-if="searchedProperties.length"  >
        <SectionPadding class="pt-0 " v-if="!searchedProperties.length">
          <v-sheet
            height="200px"
            class="d-flex justify-center align-center flex-column pa-3"
            outlined
            ><p class="text-body-1 text-sm-h6 text-center font-weight-regular">
              There are no properties that match these criteria as yet.
              <br />This is the perfect opportunity to add yours!<!--  Add your first propery today! -->
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
        <SectionPadding v-else class="pt-0">
          <TheRealEstatePropertiesListingFirebase
            title="Real Estate for Rent"
            :properties="searchedProperties"
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
              :dark="paginateNextSearched.dark"
              small
              color="green accent-4"
              @click="searchNext"
              :disabled="paginateNextSearched.disabled"
            >
              <v-icon dark>
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </div>
        </SectionPadding>
      </div>

      <div v-else  >
        <SectionPadding v-if="!properties.length" class="pt-0">
          <v-sheet
            height="200px"
            class="d-flex justify-center align-center flex-column pa-3"
            outlined
            ><p class="text-body-1 text-sm-h6 text-center font-weight-regular">
              There are no properties as yet.
              <br />This is the perfect opportunity to add yours!<!--  Add your first propery today! -->
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
        <SectionPadding v-else   class="pt-0">
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
      </div>
    </v-container>
    <SectionPadding class="backgroundShade">
      <SectionTitles
        subTitle="FIND YOUR HOME TODAY"
        mainTitle="Featured listings around you"
        linkMessage="See all featured listings "
        route="featured"
      />

      <TheFeaturedProperties />
    </SectionPadding>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import img from "~/assets/images/key2.jpg";
export default {
  fetch() {
    console.log("fetch");
    console.log(this.properties);
    if (
      this.search.parish &&
      this.search.type &&
      this.search.price &&
      this.search.bedrooms &&
      this.searchedProperties.length == 0
    ) {
      console.log("searched");
      this.getSearchedPropertiesForRent();
    } else if (this.properties.length == 0) {
      this.getPropertiesForRent();
    } else {
      this.setLoading(false);
    }
  },
  data() {
    return {
      title: "Rent A Home | Real Estate Ja",
      description: "rent",
      img: img
    };
  },
  computed: {
    target() {
      const value = "#results";
      return value;
    },
    ...mapGetters({
      properties: "getPropertiesForRent/properties",
      lastVisible: "getPropertiesForRent/lastVisible",
      paginateNext: "getPropertiesForRent/paginateNext",
      searchedProperties: "getPropertiesForRent/searchedProperties",
      userSearch: "getPropertiesForRent/userSearch",
      search: "getPropertiesForRent/search",

      properties: "getPropertiesForRent/properties",
      lastVisible: "getPropertiesForRent/lastVisible",
      loading: "getPropertiesForRent/loading",
      paginateNextSearched: "getPropertiesForRent/paginateNextSearched",
      paginateNext: "getPropertiesForRent/paginateNext"
    })
  },
  methods: {
    ...mapActions({
      logError: "errors/logError",
      getSearchedPropertiesForRent:
        "getPropertiesForRent/getSearchedPropertiesForRent",
      getSearchedPropertiesForRentNext:
        "getPropertiesForRent/getSearchedPropertiesForRentNext",
      getPropertiesForRent: "getPropertiesForRent/getPropertiesForRent",
      setLoading: "getPropertiesForRent/setLoading"
    }),
    previous() {
      console.log("previous");

      this.$vuetify.goTo(this.target);
    },
    next() {
      console.log("next");
      this.getPropertiesForRent();
    },
    searchNext() {
      console.log("search next");
      this.getSearchedPropertiesForRentNext();
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
