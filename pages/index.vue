<template>
  <div>
    <TheHomePageHeader />
    <TheHomePageHeaderSearchSection />
    <SectionPadding>
      <SectionTitlesNoLink
        subTitle="FIND YOUR HOME TODAY"
        mainTitle="Discover the best investment opportunities around you"
      />
      <SectionHompageOpportunitiesExplaination />
    </SectionPadding>
    <SectionPadding class="background-shade">
      <SectionTitles
        subTitle="FIND YOUR HOME TODAY"
        mainTitle="Featured listings around you"
        linkMessage="See all featured listings "
      />

      <TheRealEstatePropertySwiper :card="card" />
    </SectionPadding>
    <SectionPadding>
      <SectionTitles
        subTitle="MOST POPULAR parishes"
        mainTitle="What's trending"
        linkMessage="See all parishes "
      />
<TheTrendingSection />
    </SectionPadding>
  </div>
</template>

<script>
import TheHomePageHeader from "../components/TheHomePageHeader.vue";

export default {
  components: { TheHomePageHeader },
  data() {
    return {

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
  }
};
</script>

<style lang="scss" scoped>

</style>
