<template>
  <swiper class="swiper" :options="propertySwiperOptions">
    <swiper-slide class="sliide" v-for="index in 6" :key="index">
      <img :src="require('~/assets/images/house.jpg')" height="450" width="100%"/>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
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
