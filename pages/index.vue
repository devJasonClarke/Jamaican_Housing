<template>
  <div>
    <TheHomePageHeader />
    <TheHomePageHeaderSearchSection />
    <SectionTitlesNoLink
      subTitle="FIND YOUR HOME TODAY"
      mainTitle="Discover the best investment opportunities around you"
    
    />
    <v-container class="sub-section-margin-top">
      <v-row >
        <v-col cols="12" sm="12" md="4">
          <div class="d-flex  flex-column mr-2">
            <v-avatar size="62" color="green lighten-4">
              <v-icon dark color="green">
                mdi-home-search-outline mdi-36px
              </v-icon>
            </v-avatar>
            <p class="mt-6">Search For THE PERFECT PLACE</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              atque repellendus voluptas ut doloremque impedit.
            </p>
          </div></v-col
        >
        <v-col cols="12" sm="12" md="4">
          <div class="d-flex   flex-column mr-2">
            <v-avatar size="62" color="green lighten-4" class="">
              <v-icon dark color="green">mdi-key-variant mdi-36px</v-icon>
            </v-avatar>
            <p class="mt-6">Rent THE PERFECT PLACE</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              atque repellendus voluptas ut doloremque impedit.
            </p>
          </div></v-col
        >
        <v-col cols="12" sm="12" md="4">
          <div class="d-flex  flex-column mr-2">
            <v-avatar size="62" color="green lighten-4"
              ><v-icon dark color="green"
                >mdi-home-group mdi-36px</v-icon
              ></v-avatar
            >
            <p class="mt-6">List THE PERFECT PLACE</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              atque repellendus voluptas ut doloremque impedit.
            </p>
          </div></v-col
        >
      </v-row>
    </v-container>
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
.height {
  height: 100vh;
}
</style>
