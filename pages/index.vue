<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <TheHomePageHeader />
    <TheSearchSectionHomePage />
    <SectionPadding>
      <SectionTitlesNoLink
        subTitle="FIND YOUR HOME TODAY"
        mainTitle="Discover the best investment opportunities around you"
      />
      <SectionHompageOpportunitiesExplaination />
    </SectionPadding>
    <SectionPadding class="backgroundShade">
      <SectionTitles
        subTitle="FIND YOUR HOME TODAY"
        mainTitle="Featured listings around you"
        linkMessage="See all featured listings "
        route="featured"
      />

      <TheFeaturedProperties />
    </SectionPadding>
    <SectionPadding>
      <SectionTitles
        subTitle="MOST POPULAR parishes"
        mainTitle="What's trending"
        linkMessage="See all parishes "
        route="parish"
      />
      <TheTrendingSection />
    </SectionPadding>
    <SectionPadding>
      <SectionTitles
        subTitle="Our Amazing support system"
        mainTitle="Premiere Sponsors & Partners"
        linkMessage="Become a sponsor "
        route="sponsors"
      />
      <TheSponsorsAndPartnersSwiper />
    </SectionPadding>

    <SectionPadding class="backgroundShade">
      <TheHomepageSectionSubTitlesNoLink
        subTitle="START Browsing TODAY"
        mainTitle="Real Estate JA allows you to add or discover the best offers on the Jamaican Real Estate market"
      />
    </SectionPadding>
  </div>
</template>

<script>
import TheHomePageHeader from "../components/TheHomePageHeader.vue";

export default {
  components: { TheHomePageHeader },
  data() {
    return {
      title: "Home | Real Estate Ja",
      description: "Welcome To Real Estate Ja"

      /*       card: {
        title: "Sunny Private Studio Apartment",
        parish: "St. James",
        realEstateType: "Apartment",
        squareMeters: 80,
        beds: 3,
        bathroom: 2,
        price: 70
      } */
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
