<template>
  <v-container>
    <swiper class="swiper" :options="sponsorSwiperOption">
      <swiper-slide class="sliide">
        <a
          href="https://genr83d.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img :src="require('~/assets/images/sponsors/genr8-3d.webp')" class="images"
        /></a>
      </swiper-slide>
      <swiper-slide class="sliide">
        <a
          href="https://smarthubja.io/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img  :src="require('~/assets/images/sponsors/smarthub.svg')" class="images"
        /></a>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </v-container>
</template>

<script>
export default {
  data() {
    return {

 
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
