<template>
  <div class="section-margin-top ">
    <swiper class="swiper" :options="propertySwiperOption">
      <swiper-slide class="sliide" v-for="(property, index) in featuredProperties" :key="index">
      <TheCardSwiper :card='property' />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {

  data() {
    return {
      propertySwiperOption: {
        initialSlide: 0,
        slidesPerView: 1,
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
  },
    computed: {
    ...mapGetters({
      featuredProperties: "properties/featuredProperties"
    })
  },
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
