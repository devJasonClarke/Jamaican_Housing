<template>
  <v-container>
    <swiper class="swiper" :options="sponsorSwiperOption">
      <swiper-slide class="sliide">
        <a
          href="https://genr83d.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img :src="sponsorOne" class="images"
        /></a>
      </swiper-slide>
      <swiper-slide class="sliide">
        <a
          href="https://smarthubja.io/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img :src="sponsorTwo" class="images"
        /></a>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </v-container>
</template>

<script>
import sponsorOne from "../assets/images/sponsors/genr8-3d.webp";
import sponsorTwo from "../assets/images/sponsors/smarthub.svg";
export default {
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

.images {
  display: block;
  max-height: 150px;
  width: auto;
  margin: 0 auto;
  transition: 0.35s ease;
  &:hover {
    transform: scale(1.02);
  }
}

@media screen and (max-width: 700px) {
  .images {
    height: auto;
    width: 200px;
  }
}
@media screen and (max-width: 501px) {
  .images {
    height: 100px;
    width: auto;
  }
}
</style>
