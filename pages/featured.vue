<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-img :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary
        mainTitle="Featured Listings "
        paragraph="Premium listings that are a cut above the rest. With 10 times more exposure than regular listings, these real estate deals usually leave the market before you know it."
      />
    </SectionPadding>

    <v-divider></v-divider>

    <div id="top"></div>
    <SectionPadding class="backgroundShade">
      <TheRealEstatePropertiesListingLoader
     
        v-if="loading"
        title="sale"
      />
      <TheRealEstatePropertiesListing
        v-else
        title="Featured listings around you"
        :card="featuredProperties"
     
      />
    </SectionPadding>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import img from "~/assets/images/houses/3.jpg";
export default {
  data() {
    return {
      title: "Featured Listings | Jamaica Housing",
      description:
        "Premium listings that are a cut above the rest. With 10 times more exposure than regular listings, these real estate deals usually leave the market before you know it",
      img: img,
      loading: false
    };
  },
  computed: {
    ...mapGetters({
      featuredProperties: "properties/featuredProperties"
    })
  },

  methods: {}
};
</script>
