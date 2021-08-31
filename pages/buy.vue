<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-img :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary
        mainTitle="Buy Real Estate"
        paragraph=" Prepare a short list of features you would like in a home, such as
          location, beds & bath's required, bearing in mind affordability and
          accommodation requirements."
      />
    </SectionPadding>

    <v-divider></v-divider>
    <SectionPaddingAlt>
      <TheSearchSection />
    </SectionPaddingAlt>

    <!-- <SectionPadding class="backgroundShade" id="top">
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
    </SectionPadding> -->
    <SectionPadding  id="top">
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import img from "~/assets/images/houses/3.jpg";
export default {
  fetch() {
    console.log("fetch");
    console.log(this.properties);
    if (this.properties.length == 0) {
      this.getPropertiesForSale();
    } else {
      this.setLoading(false);
    }
  },
  data() {
    return {
      title: "Buy Real Estate | Jamaica Housing",
      description: "buy",
      img: img,
      loading: false
    };
  },
  computed: {
    target() {
      const value = "#top";
      return value;
    },
    ...mapGetters({
      featuredProperties: "properties/featuredProperties",
      properties: "getPropertiesForSale/properties",
      lastVisible: "getPropertiesForSale/lastVisible",
      loading: "getPropertiesForSale/loading",
      paginateNext: "getPropertiesForSale/paginateNext"
    })
  },

  methods: {
    ...mapActions({
      logError: "errors/logError",
      getPropertiesForSale: "getPropertiesForSale/getPropertiesForSale",
      setLoading: "getPropertiesForSale/setLoading"
    }),
    previous() {
      this.loading = true;
      this.$vuetify.goTo(this.target);
      setTimeout(() => (this.loading = false), 3000);
    },
    next() {
      console.log("next");
      this.getPropertiesForSale();
    }
  }
};
</script>
