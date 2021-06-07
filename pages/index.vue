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
    </SectionPadding>
  </div>
</template>

<script>
import TheHomePageHeader from "../components/TheHomePageHeader.vue";
import sellSvg from "~/assets/images/svg/sell.svg";
import rentSvg from "~/assets/images/svg/rent.svg";
import buySvg from "~/assets/images/svg/buy.svg";
export default {
  components: { TheHomePageHeader },
  data() {
    return {
      sellSvg: sellSvg,
      rentSvg: rentSvg,
      buySvg: buySvg
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
