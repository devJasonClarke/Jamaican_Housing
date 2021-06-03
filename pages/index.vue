<template>
  <div>
    <TheHomePageHeader />
    <TheHomePageHeaderSearchSection />
    <v-container class="top">
      <SectionTitles
        subTitle="FIND YOUR HOME TODAY"
        mainTitle=" Featured listings around you"
        linkMessage="See all featured listings "
      />
    </v-container>
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
  background: rgb(255, 215, 215);
  margin-top: 90px;
  height: 100vh;
}
</style>
