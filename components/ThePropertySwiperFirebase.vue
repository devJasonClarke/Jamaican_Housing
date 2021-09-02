<template>
  <section>
    <swiper class="swiper" :options="propertySwiperOptions">
      <swiper-slide class="sliide" v-for="(img, i) in images" :key="i">
        <img
          :src="img.src"
          class="img"
          height="450"
          width="100%"
          @click="showImg(i)"
          :alt="`Property Image ${i}`"
        />
      

      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <vue-easy-lightbox
      :visible="visible"
      :imgs="images"
      :index="index"
      :loop="true"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </section>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  components: {
    VueEasyLightbox
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      visible: false,
      index: 2,
      propertySwiperOptions: {
        slidesPerView: 1,
       // loop: true,
        /*       mousewheel: true, */
        spaceBetween: 0,
        /*  autoplay: {
          delay: 10000,
          disableOnInteraction: false
        }, */ 
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
  },
  methods: {
    showImg(i) {
      console.log(`show: ${i}`);
      this.index = i;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.img {
  cursor: pointer;
}
</style>
