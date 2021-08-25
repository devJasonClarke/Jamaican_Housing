<template>
  <div>
    <TheMetaTags
      :title="`${parish.name} | Jamaica Housing`"
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
    <SectionPaddingAlt>
      <TheSearchSectionParishPage />
    </SectionPaddingAlt>
    <div id="top"></div>
    <SectionPadding class="backgroundShade">
      <TheRealEstatePropertiesListingLoader
        v-if="loading"
        title="sale"
      
      />
      <TheRealEstatePropertiesListing
      
        v-else
        :title="title"
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
  </div>
</template>

<script>
import parishes from "~/assets/parishes/parishes";
import { mapGetters } from "vuex";
export default {
    fetchOnServer: false,
  data() {

    return {
      parish: "",
      loading: false,
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
  async fetch() {
    let theParam = String(this.$route.params.slug);
    let j = () => parishes.parishes.find(parish => parish.slug == theParam);
    this.parish = j();
  },
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
      console.log("previous");
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
