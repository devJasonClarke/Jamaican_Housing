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
    <SectionPadding>
      <SectionTitles
        subTitle="Our Amazing support system"
        mainTitle="Premiere Sponsors & Partners"
        linkMessage="Become a sponsor "
      />
      <TheSponsorsAndPartnersSwiper />
    </SectionPadding>
    <SectionPadding class="background-shade">
      <TheHomepageSectionSubTitlesNoLink
        subTitle="START Browsing TODAY"
        mainTitle="Real Estate JA allows you to add or discover the best offers on the Jamaican Real Estate market"
      />
    </SectionPadding>
    <SectionPadding class="background-shade">
 
      <v-container>
        <v-row>
          <v-col cols="12" md="4" sm="12">
            <p class="text-uppercase text-subtitle-1 font-weight-bold" >Real Estate JA</p>
            <p>Discover the best offers on the Jamaican Real Estate market</p>
          </v-col>

          <v-col cols="12" md="2" sm="6">
            <p class="text-uppercase text-subtitle-1 font-weight-bold">Market</p>
            <ul class="pa-0 red--text">
              <li>
                <nuxt-link  :to="{ name: 'buy' }"
                  >Buy</nuxt-link
                >
              </li>
              <li>
                <nuxt-link  :to="{ name: 'rent' }"
                  >Rent</nuxt-link
                >
              </li>
              <li>
                <nuxt-link  :to="{ name: 'sell' }"
                  >Sell</nuxt-link
                >
              </li>
              <li>
                <nuxt-link  :to="{ name: 'dashboard' }"
                  >Add A Listing</nuxt-link
                >
              </li>
            </ul>
          </v-col>

          <v-col cols="12" md="2" sm="6">
            <p class="text-uppercase text-subtitle-1 font-weight-bold">Resources</p>
            <ul class="pa-0">
              <li>
                <nuxt-link  :to="{ name: 'contact' }"
                  >Contact</nuxt-link
                >
              </li>

              <li>
                <nuxt-link  :to="{ name: 'blog' }"
                  >Blog</nuxt-link
                >
              </li>
            </ul>
          </v-col>

          <v-col cols="12" md="4" sm=12>
            <p class="text-uppercase text-subtitle-1 font-weight-bold">Keep up to date with the market</p>
            <p>Enter you email address to receive the top real estate deals currently on the market</p>
            <v-text-field
              label="Your Email Address"
              :rules="rules"
              hide-details="auto"
              outlined
              dense
        
              color="green accent-4"
            >
              <v-icon slot="append">
                mdi-email
              </v-icon>
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
      
    </SectionPadding>
    <div class="footer green darken-4 white--text  text-center">
    <p class="py-7 ma-0">  2021. Real Estate JA. All rights reserved.
</p>

    </div>
  </div>
</template>

<script>
import TheHomePageHeader from "../components/TheHomePageHeader.vue";

export default {
  components: { TheHomePageHeader },
  data() {
    return {
      rules: [
        value =>
          !value ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
          "E-mail must be valid"
      ],
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

<style lang="scss" scoped></style>
