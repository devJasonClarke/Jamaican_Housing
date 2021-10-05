<template>
  <div class="section-margin-top ">
    <swiper class="swiper" :options="propertySwiperOption">
      <swiper-slide
        class="sliide"
        v-for="(property, index) in properties"
        :key="index"
      >
        <TheCardAltFirebase :property="property" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  fetch() {
    // console.log("fetch");
    // console.log(this.properties);

    if (this.properties.length == 0) {
      this.getFeaturedProperties();
    } else {
      this.setLoading(false);
    }
  },
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
    target() {
      const value = "#results";
      return value;
    },
    ...mapGetters({
      properties: "getProperties/featured/properties",
      lastVisible: "getProperties/featured/lastVisible",
      paginateNext: "getProperties/featured/paginateNext",

      properties: "getProperties/featured/properties",

      loading: "getProperties/featured/loading",

      paginateNext: "getProperties/featured/paginateNext"
    })
  },
  methods: {
    ...mapActions({
      logError: "snackbars/errors/logError",
      getFeaturedProperties: "getProperties/featured/getFeaturedProperties",

      setLoading: "getProperties/featured/setLoading"
    })
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
  transition: 0.35s ease;
}
</style>
