<template>
  <div class="section-margin-top ">
    <swiper class="swiper" :options="propertySwiperOption">
      <swiper-slide class="sliide" v-for="index in 7" :key="index">
        <v-card class="mx-auto" max-width="252" nuxt :to="{ name: 'buy' }">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="168"
          ></v-img>

          <v-card-title>
            {{ card.title }}
          </v-card-title>

          <v-card-subtitle class="pb-4 primary-green">
            <v-icon :color="iconColor">mdi-map-marker mdi-18px</v-icon>
            {{ card.parish }}
          </v-card-subtitle>

          <v-card-text class=" text-uppercase section-titles-Subtitle">
            {{ card.realEstateType }}
          </v-card-text>

          <div class="px-4 pb-2 d-flex justify-space-between primary-color">
            <p>
              <v-icon :color="iconColor"
                >mdi-ruler-square mdi-flip-v mdi-18px</v-icon
              >
              {{ card.squareMeters }} m<sup>2</sup>
            </p>
            <p>
              <v-icon :color="iconColor">mdi-bed mdi-18px</v-icon>
              {{ card.beds }}
            </p>
            <p>
              <v-icon :color="iconColor">mdi-shower-head mdi-18px</v-icon>
              {{ card.bathroom }}
            </p>
            <p>
              <v-icon :color="iconColor">mdi-tag mdi-18px</v-icon>
              {{ card.price }}K
            </p>
          </div>
        </v-card>
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

        /*         loop: true,
        loopedSlides: 0, */

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
