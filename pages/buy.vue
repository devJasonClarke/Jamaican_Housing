<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-img :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary
        mainTitle="Buy Real Estate"
        paragraph=" Buying a property is one of the biggest decisions you'll have to make in life 
        and it's worth putting in the effort to make sure you get it right. 
        Prepare a list of the features you would like in a property and use Real Estate Ja to find it!"
      />
    </SectionPadding>

    <v-divider></v-divider>
    <v-container class="px-6 px-sm-0">
      <SectionPaddingAlt>
        <TheSearchSectionBuy />
      </SectionPaddingAlt>
      <div id="results"></div>
      <SectionPadding v-if="loading == true" class="pt-0"
        ><TheListingRealEstatePropertiesLoader title="sale"
      /></SectionPadding>
      <div v-else-if="searchedProperties.length">
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
          <TheListingRealEstatePropertiesFirebase
            title="Real Estate for Sale"
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

      <div v-else>
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
        <SectionPadding v-else class="pt-0">
          <TheListingRealEstatePropertiesFirebase
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
        subTitle="our Premium properties"
        mainTitle="Featured listings around you"
        linkMessage="See all featured listings "
        route="featured"
      />

      <TheSwiperPropertyFeatured />
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
    if (
      this.search.parish &&
      this.search.type &&
      this.search.price &&
      this.search.bedrooms &&
      this.searchedProperties.length == 0
    ) {
      // console.log("searched");
      this.getSearchedPropertiesForSale();
    } else if (this.properties.length == 0) {
      this.getPropertiesForSale();
    } else {
      this.setLoading(false);
    }
  },
  data() {
    return {
      title: "Buy Real Estate | Real Estate Ja",
      description: "buy",
      img: img,
      sp: []
    };
  },
  computed: {
    target() {
      const value = "#results";
      return value;
    },
    ...mapGetters({
      properties: "getProperties/forSale/properties",
      lastVisible: "getProperties/forSale/lastVisible",
      paginateNext: "getProperties/forSale/paginateNext",
      searchedProperties: "getProperties/forSale/searchedProperties",
      userSearch: "getProperties/forSale/userSearch",
      search: "getProperties/forSale/search",

      lastSearchedVisible: "getProperties/forSale/lastSearchedVisible",
      paginateNextSearched: "getProperties/forSale/paginateNextSearched",
      loading: "getProperties/forSale/loading"
    })
  },

  methods: {
    ...mapActions({
      logError: "snackbars/errors/logError",
      getPropertiesForSale: "getProperties/forSale/getPropertiesForSale",
      getSearchedPropertiesForSaleNext:
        "getProperties/forSale/getSearchedPropertiesForSaleNext",
      getSearchedPropertiesForSale:
        "getProperties/forSale/getSearchedPropertiesForSale",
      setLoading: "getProperties/forSale/setLoading"
    }),
    previous() {
      this.loading = true;
      this.$vuetify.goTo(this.target);
      setTimeout(() => (this.loading = false), 3000);
    },
    next() {
      // console.log("next");
      this.getPropertiesForSale();
    },
    searchNext() {
      // console.log("search next");
      this.getSearchedPropertiesForSaleNext();
    }
  }
};
</script>
