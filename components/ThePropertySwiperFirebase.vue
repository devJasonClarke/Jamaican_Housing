<template>
  <swiper class="swiper" :options="propertySwiperOptions">
    <swiper-slide class="sliide" v-for="(img, i) in images" :key="i">
      <img class="img" :src="img" height="450" width="100%" />
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      propertySwiperOptions: {
        slidesPerView: 1,
        loop: true,
        /*         mousewheel: true, */
        spaceBetween: 0,
        /*  autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },  */
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        /*      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }, */
        breakpoints: {
          // when window width is >= 320px
          900: {
            slidesPerView: 3
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
