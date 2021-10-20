<template>
  <div>
    <v-container class="mt-6 mb-9">
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="pa-6 ml-sm-3 mb-6"    elevation="3">
            <v-img
              height="150"
              width="150"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              class="rounded-circle mx-auto my-0"
            ></v-img>
            <div class="text-center d-flex flex-column">
              <p class="text-h5 font-weight-bold mt-4 mb-0">
                Jason Clarke
           <SymbolVerified role="realtor"/>
                <v-tooltip color="blue" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon color="blue" dark v-bind="attrs" v-on="on">
                    mdi-star-check-outline 
                    </v-icon>
                  </template>
                  <span>Verified Owner</span>
                </v-tooltip>
              </p>
              <a href="mailto:JasonClarke@gmail.com" class="text-subtitle-1"
                >Jasonclarke@gmail.com</a
              >
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="`tel:${phoneNumber}`"
                class="text-subtitle-1"
                >{{ formattedNumber }}</a
              >
            </div>
            <v-divider class="mt-2 mb-4"></v-divider>
            <div class="d-flex justify-center">
              <a
                target="_blank"
                rel="nofollow noopener"
                href="https://www.facebook.com/"
              >
                <v-btn icon color="blue darken-3" x-large>
                  <v-icon>mdi-facebook </v-icon>
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                href="https://www.instagram.com/jasonclarke.dev/"
              >
                <v-btn icon color="pink darken-1" x-large>
                  <v-icon>mdi-instagram </v-icon>
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                href="https://www.linkedin.com/in/devjasonclarke/"
              >
                <v-btn icon color="blue darken-2" x-large>
                  <v-icon>mdi-linkedin </v-icon>
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="`https://wa.me/${phoneNumber}`"
              >
                <v-btn icon color="green" x-large>
                  <v-icon>mdi-whatsapp </v-icon>
                </v-btn>
              </a>
            </div>
            <v-divider class="mt-2 mb-4"></v-divider>
            <div class="max-width mx-auto my-0">
              <div class="d-flex align-center mb-3">
                <v-avatar
                  size="46"
                  color="blue lighten-5"
                  class="rounded-circle mr-3"
                >
                  <v-icon dark color="blue">
                    mdi-star mdi-36px
                  </v-icon>
                </v-avatar>
                <p class="mb-0">Ja Housing Owner</p>
              </div>
              <div class="d-flex align-center mb-3">
                <v-avatar
                  size="46"
                  color="blue lighten-5"
                  class="rounded-circle mr-3"
                >
                  <v-icon dark color="blue">
                    mdi-star-check-outline mdi-36px
                  </v-icon>
                </v-avatar>
                <p class="mb-0">Verified Owner</p>
              </div>
              <div class="d-flex align-center mb-3">
                <v-avatar
                  size="46"
                  color="blue lighten-5"
                  class="rounded-circle mr-3"
                >
                  <v-icon dark color="blue">
                    mdi-check-decagram mdi-36px
                  </v-icon>
                </v-avatar>
                <p class="mb-0">Verified Realtor</p>
              </div>
              <div class="d-flex align-center mb-3">
                <v-avatar
                  size="46"
                  color="blue lighten-5"
                  class="rounded-circle mr-3"
                >
                  <v-icon dark color="blue">
                    mdi-seal mdi-36px
                  </v-icon>
                </v-avatar>
                <p class="mb-0">Recommended</p>
              </div>
              <div class="d-flex align-center mb-3">
                <v-avatar
                  size="46"
                  color="blue lighten-5"
                  class="rounded-circle mr-3"
                >
                  <v-icon dark color="blue">
                    mdi-home-search mdi-36px
                  </v-icon>
                </v-avatar>
                <p class="mb-0">Experienced</p>
              </div>

              <div class="d-flex align-center mb-3">
                <v-avatar
                  size="46"
                  color="blue lighten-5"
                  class="rounded-circle mr-3"
                >
                  <v-icon dark color="blue">
                    mdi-certificate mdi-36px
                  </v-icon>
                </v-avatar>
                <p class="mb-0">Top Performer</p>
              </div>
            </div>
            <v-divider class="mt-2 mb-4"></v-divider>
            <div class="max-width mx-auto my-0">
              <p class="mb-2 text-h6 font-weight-bold">Jason Provided</p>
              <ul class="body-1">
                <li class="grey--text text--darken-2">&#8226; Government ID</li>
                <li class="grey--text text--darken-2">
                  &#8226; Realtor License
                </li>
                <li class="grey--text text--darken-2">&#8226; Email address</li>
                <li class="grey--text text--darken-2">&#8226; Phone number</li>
              </ul>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="8">
          <p class="text-h4 font-weight-bold">Hello, I'm Jason</p>
          <p class="body-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            sit explicabo officia eligendi fugiat delectus rem tempore ratione.
            Possimus saepe nobis eaque tempora sint, quos corporis deleniti
            laborum voluptatem omnis.
          </p>
          <TheListingRealEstatePropertiesLoader v-if="loading" title="sale" />
          <TheListingRealEstatePropertiesProfile
            v-else
            title="Real Estate"
            :card="featuredProperties"
          />
        </v-col>
      </v-row>
    </v-container>
    <SectionPadding class="backgroundShade">
      <SectionTitles
        subTitle="our Premium properties"
        mainTitle="Featured listings around you"
        linkMessage="See all featured listings "
        route="featured"
      />

      <TheSwiperPropertyFeaturedFirebase />
    </SectionPadding>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      iconColor: "rgba(0, 200, 83, 1)",
      phoneNumber: 18763147199,
      loading: false,
      flex: false
    };
  },
  methods: {},
  computed: {
       target() {
      const value = "#top";
      return value;
    },
    ...mapGetters({
      featuredProperties: "properties/featuredProperties"
    }),

    formattedNumber() {
      /* var phone = this.phoneNumber.toString().replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3'); */

      var phone = [
        this.phoneNumber.toString().slice(0, 3),
        "-",
        this.phoneNumber.toString().slice(3, 6),
        "-",
        this.phoneNumber.toString().slice(6)
      ].join("");
      return phone;
    }
  }
};
</script>

<style lang="scss" scoped>

.max-width {
  width: 208px;
}
.icons-max-width {
  max-width: 400px;
}
.amendities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
