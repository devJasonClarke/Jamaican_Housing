<template>
  <div class="section-margin-top ">
    <swiper class="swiper" :options="propertySwiperOption">
      <swiper-slide class="sliide" v-for="index in 7" :key="index">
      <TheCardSwiper :card='card' />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      propertySwiperOption: {
        initialSlide: 0,
        slidesPerView: 1,
        mousewheel: true,
        centeredSlides: true,
        spaceBetween: 15,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true
        },
        breakpoints: {
          // when window width is >= 320px
          501: {
            initialSlide: 3,
            slidesPerView: "auto",
            spaceBetween: 30
          }
        }
      },

      iconColor: "rgba(0, 200, 83, 0.5)"
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  padding-bottom: 50px;
}

.swiper-slide {
  width: 252px;
  min-height: 340px;
  transition: .35s ease;

}
</style>
