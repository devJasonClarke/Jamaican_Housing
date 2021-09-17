<template>
  <v-container>
    <swiper class="swiper" :options="sponsorSwiperOption">
      <swiper-slide class="sliide" v-for="(sponsor, i) in sponsors" :key="i">
        <a
          :href="sponsor.url"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            v-if="$vuetify.theme.dark && sponsor.darkImage"
            :src="sponsor.darkImage"
            class="images"
            :alt="sponsor.name"
            width="100%"
            height="100%"
          />
          <img
            v-else
            :src="sponsor.image"
            class="images"
            :alt="sponsor.name"
            width="100%"
            height="100%"
          />
        </a>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </v-container>
</template>

<script>
import sponsors from "~/static/sponsors/sponsors";
export default {
  data() {
    return {
      sponsors: sponsors.sponsors,
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
          501: {
            slidesPerView: 2
          }
        }
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
</style>
