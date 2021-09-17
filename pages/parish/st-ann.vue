<template>
  <div>
    <TheMetaTags
      :title="`${parish} | Real Estate Ja | Parish`"
      :description="description"
    />
    <v-img :src="img" min-height="300" max-height="400"></v-img>

    <SectionPadding>
      <SectionTitlesSecondary
        :mainTitle="parish"
        paragraph="
  St. Ann is the largest parish in Jamaica.
   When Christopher Columbus first came to Jamaica in 1494, 
   he landed on the shores of St. Ann at Discovery Bay. St. Ann is revered for its agricultural products, tourism which is the major economic activity in the parish and commerce. "
      />
    </SectionPadding>

    <v-divider></v-divider>
    <v-container class="px-6 px-sm-0">
      <div id="results"></div>
      <SectionPadding v-if="loading == true" class="pt-9"
        ><TheRealEstatePropertiesListingLoader title="rent"
      /></SectionPadding>

      <div v-else>
        <SectionPadding v-if="!properties.length" class="pt-9">
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
        <SectionPadding v-else class="pt-9">
          <TheRealEstatePropertiesListingFirebase
            :title="`Real Estate from ${parish}`"
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

      <TheFeaturedProperties />
    </SectionPadding>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import img from "~/assets/images/extra-images/5.jpg";
export default {
  fetch() {
    // console.log("fetch");
    // console.log(this.properties);

    if (this.properties.length == 0) {
      this.getParishProperties();
    } else {
      this.setLoading(false);
    }
  },
  data() {
    return {
      parish: "St. Ann",
      description: "rent",
      img: img,
      valid: false,
      saleOrRent: [
        { text: "Rent", value: "rent" },
        { text: "Sale", value: "buy" }
      ]
    };
  },
  computed: {
    target() {
      const value = "#results";
      return value;
    },
    ...mapGetters({
      properties: "getStAnnProperties/properties",
      lastVisible: "getStAnnProperties/lastVisible",
      paginateNext: "getStAnnProperties/paginateNext",

      properties: "getStAnnProperties/properties",

      loading: "getStAnnProperties/loading",

      paginateNext: "getStAnnProperties/paginateNext"
    })
  },
  methods: {
    ...mapActions({
      logError: "errors/logError",
      getParishProperties: "getStAnnProperties/getParishProperties",

      setLoading: "getStAnnProperties/setLoading"
    }),

    previous() {
      // console.log("previous");

      this.$vuetify.goTo(this.target);
    },
    next() {
      // console.log("next");
      this.getParishProperties();
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
