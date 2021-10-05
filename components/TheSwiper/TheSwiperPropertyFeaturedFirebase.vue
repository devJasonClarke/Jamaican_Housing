<template>
  <div class="section-margin-top ">
    <swiper class="swiper" :options="propertySwiperOption" v-if="loading">
      <swiper-slide class="sliide" v-for="index in 7" :key="index">
        <v-card outlined class="pa-3 rounded-lg">
          <v-skeleton-loader
            class="mx-auto "
            type="image,article"
          ></v-skeleton-loader>
        </v-card>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <v-container class="px-6 px-sm-0 py-3" v-else-if="!properties.length">
      <SectionPadding class="py-0 ">
        <v-sheet
          height="200px"
          class="d-flex justify-center align-center flex-column pa-3"
          outlined
          ><p class="text-body-1 text-sm-h6 text-center font-weight-regular">
            There are no featured properties as yet.
            <br />This is the perfect time to feature yours!<!--  Add your first propery today! -->
          </p>
          <v-btn nuxt :to="{ name: 'contact' }" dark color="green accent-4">
            <v-icon left>mdi-home-import-outline</v-icon> Feature
            Property</v-btn
          >
        </v-sheet>
      </SectionPadding>
    </v-container>
    <swiper class="swiper" :options="propertySwiperOption" v-else>
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
