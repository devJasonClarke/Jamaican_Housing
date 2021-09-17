<template>
  <div>
    <TheMetaTags
      :title="`${parish.name} | Real Estate Ja`"
      :description="parish.description"
    />
    <v-img :src="parish.image" min-height="300" max-height="400"></v-img>
    
    <SectionPadding>
      <SectionTitlesSecondary
        :mainTitle="parish.name"
        :paragraph="parish.description"
      />
    </SectionPadding>

    <v-divider></v-divider>
    <v-container class="px-6 px-sm-0">
      <SectionPaddingAlt>
        <TheSearchSectionParishPage />
      </SectionPaddingAlt>
      <!--   {{ properties }} -->
      <SectionPadding v-if="loading == true" class="pt-9"
        ><TheRealEstatePropertiesListingLoader title="sale"
      /></SectionPadding>
      <SectionPadding v-else-if="!properties.length" class="pt-9">
        <v-container>
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
        </v-container>
      </SectionPadding>
      <SectionPadding v-else id="top" class="pt-9">
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
            @click="$vuetify.goTo('#top')"
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
import parishes from "~/assets/parishes/parishes";
import { mapGetters, mapActions } from "vuex";
export default {
  fetchOnServer: false,
  fetch() {
    let theParam = String(this.$route.params.slug);
    let j = () => parishes.parishes.find(parish => parish.slug == theParam);
    this.parish = j();

    console.log(this.parish.name);

    if (this.properties.length == 0) {
      this.getParishProperties(this.parish.name);
    } else {
      this.setLoading(false);
    }
  },
  data() {
    return {
      parish: {
        name: "",
        image: "",
        description: ""
      },
      title: `The Best Real Estate`,
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

    ...mapGetters({
      properties: "getParishProperties/properties",
      lastVisible: "getParishProperties/lastVisible",
      loading: "getParishProperties/loading",
      paginateNext: "getParishProperties/paginateNext"
    })
  },

  methods: {
    ...mapActions({
      logError: "errors/logError",
      getParishProperties: "getParishProperties/getParishProperties",
      setLoading: "getParishProperties/setLoading"
    }),
    previous() {
      console.log("previous");
      this.loading = true;
      this.$vuetify.goTo(this.target);
      setTimeout(() => (this.loading = false), 3000);
    },
    next() {
      console.log("next");
      this.getParishProperties(this.parish.name);
    }
  }
};
</script>
