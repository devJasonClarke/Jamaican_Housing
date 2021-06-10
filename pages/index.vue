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
      <v-container>
        <swiper class="swiper" :options="sponsorSwiperOption">
          <swiper-slide class="sliide">
         
              <img :src="sponsorOne" class="images" />
       
          </swiper-slide>
          <swiper-slide class="sliide">
           
              <img :src="sponsorTwo" class="images" />
           
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </v-container>
    </SectionPadding>
    <SectionPadding class="background-shade"></SectionPadding>
  </div>
</template>

<script>
import TheHomePageHeader from "../components/TheHomePageHeader.vue";
import sponsorOne from "../assets/images/sponsors/genr8-3d.webp";
import sponsorTwo from "../assets/images/sponsors/smarthub.svg";
export default {
  components: { TheHomePageHeader },
  data() {
    return {
      sponsorOne: sponsorOne,
      sponsorTwo: sponsorTwo,
      sponsorSwiperOption: {
        slidesPerView: 1,
        loop: true,

        /*  centeredSlides: true, */

        spaceBetween: 30,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true
        },
        breakpoints: {
          // when window width is >= 320px
          400: {
            slidesPerView: 2,
         
          }
        }
      },
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
.swiper {
  padding-bottom: 50px;
}
.swiper-slide {
  width: 200px;
}

.images {
  display: block;
  max-height: 150px;
  width: auto;
  margin: 0 auto;
}

@media screen and (max-width: 700px) {
  .images {
    height: auto;
    width: 200px;
  }
}
@media screen and (max-width: 400px) {
  .images {
    height: 100px;
    width: auto;
  }
}
</style>
