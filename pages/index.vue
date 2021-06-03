<template>
  <div>
    <TheHomePageHeader />
    <TheHomePageHeaderSearchSection />

      <SectionTitles
        subTitle="FIND YOUR HOME TODAY"
        mainTitle=" Featured listings around you"
        linkMessage="See all featured listings "
      />

  </div>
</template>

<script>
import TheHomePageHeader from "../components/TheHomePageHeader.vue";
export default {
  components: { TheHomePageHeader },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.top {
  margin-top: 80px;
  height: 100vh;
}
</style>
