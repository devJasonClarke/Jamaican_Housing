<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <TheHomePageHeader />

    <TheSearchSectionHomePage />
    <SectionPadding>
      <SectionTitlesNoLink
        subTitle="FIND YOUR PROPERTY TODAY"
        mainTitle="Discover the best Real Estate opportunities around you"
      />
    <TheHompageOpportunitiesExplaination />
    </SectionPadding>
    <SectionPadding class="backgroundShade">
      <SectionTitles
        subTitle="our Premium properties"
        mainTitle="Featured listings around you"
        linkMessage="See all featured listings "
        route="featured"
      />

      <TheSwiperPropertyFeatured />
    </SectionPadding>
    <SectionPadding>
      <SectionTitles
        subTitle="trending destinations"
        mainTitle=" Most visited parishes"
        linkMessage="See all parishes "
        route="parish"
      />
      <TheTrendingSection />
    </SectionPadding>
    <SectionPadding>
      <SectionTitles
        subTitle="Our Amazing support system"
        mainTitle="Premiere Sponsors & Partners"
        linkMessage="Meet the family"
        route="sponsors"
      />
      <TheSwiperSponsorsAndPartners />
    </SectionPadding>

    <SectionPadding class="backgroundShade">
      <TheHomepageSectionSubTitlesNoLink
        subTitle="START Browsing TODAY"
        mainTitle="Real Estate JA allows you to add or Discover the best offers on the Jamaican Real Estate market."
      />
    </SectionPadding>
  </div>
</template>

<script>
import TheHomePageHeader from "../components/TheHomepage/TheHomePageHeader.vue";

export default {
  components: { TheHomePageHeader },
  data() {
    return {
      title: "Home | Real Estate Ja",
      description: "Welcome To Real Estate Ja",
t: true
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
