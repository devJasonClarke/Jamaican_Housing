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
      <TheSearchSection />
    </SectionPaddingAlt>
    <SectionPadding v-if="loading == true"  class="pt-0"
      ><TheRealEstatePropertiesListingLoader title="rent"
    /></SectionPadding>
    <SectionPadding v-else-if="!properties.length"  class="pt-0">
       <v-container>
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center flex-column"
        outlined
        ><p class="text-h6 text-center font-weight-regular">
         There are no properties as yet.
          <br />This is the perfect opprotunity to add yours!<!--  Add your first propery today! -->
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
    <SectionPadding v-else id="top" class="pt-0">
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import img from "~/assets/images/houses/2.jpg";
export default {
  fetch() {
    console.log("fetch");
    console.log(this.properties);
    if (this.properties.length == 0) {
      this.getPropertiesForRent();
    } else {
      this.setLoading(false);
    }
  },
  data() {
    return {
      title: "Rent A Home | Jamaica Housing",
      description: "rent",
      img: img
    };
  },
  computed: {
    target() {
      const value = "#top";
      return value;
    },
    ...mapGetters({
      properties: "getPropertiesForRent/properties",
      lastVisible: "getPropertiesForRent/lastVisible",
      loading: "getPropertiesForRent/loading",
      paginateNext: "getPropertiesForRent/paginateNext"
    })
  },
  methods: {
    ...mapActions({
      logError: "errors/logError",
      getPropertiesForRent: "getPropertiesForRent/getPropertiesForRent",
      setLoading: "getPropertiesForRent/setLoading"
    }),
    previous() {
      console.log("previous");

      this.$vuetify.goTo(this.target);
      setTimeout(() => (this.loading = false), 3000);
    },
    next() {
      console.log("next");
      this.getPropertiesForRent();
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
