<template>
  <div>
    <TheMetaTags
      :title="`${parish} | Real Estate Ja | Parish`"
      :description="description"
    />
    <v-img :lazy-src='img' :src="img" min-height="300" max-height="400"></v-img>

    <SectionPadding>
      <SectionTitlesSecondary
        :mainTitle="parish"
        paragraph="Hanover was established on the 12th of November in 1723. 
       It was named in honour of the British monarch, George I, who was a member of the German House of Hanover.
        From Jamaica's safest ports to an expansive panorama of the bay, Hanover captures the natural beauty of Jamaica."
      />
    </SectionPadding>

    <v-divider></v-divider>
    <v-container class="px-6 px-sm-0">
      <div id="results"></div>
      <SectionPadding v-if="loading == true" class="pt-9"
        ><TheListingRealEstatePropertiesLoader title="rent"
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
          <TheListingRealEstatePropertiesFirebase
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

      <TheSwiperPropertyFeaturedFirebase />
    </SectionPadding>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import img from "~/assets/images/parishes/hanover.jpg";
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
      parish: "Hanover",
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
      properties: "getProperties/hanover/properties",
      lastVisible: "getProperties/hanover/lastVisible",
      paginateNext: "getProperties/hanover/paginateNext",

      properties: "getProperties/hanover/properties",

      loading: "getProperties/hanover/loading",

      paginateNext: "getProperties/hanover/paginateNext"
    })
  },
  methods: {
    ...mapActions({
      logError: "snackbars/errors/logError",
      getParishProperties: "getProperties/hanover/getParishProperties",

      setLoading: "getProperties/hanover/setLoading"
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
