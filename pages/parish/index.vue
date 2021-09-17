<template>
  <div>
      <TheMetaTags :title="title" :description="description"/>
    <v-img :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary
        mainTitle="Parishes"
        paragraph="Jamaica is divided into 14 unique parishes. Click on a parish below to learn more about it and see the real estate that's available. For more detailed searches we recommend you use the Buy or Rent page."
      />
    </SectionPadding>

    <v-divider></v-divider>

    <SectionPadding class="backgroundShade">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" sm="6">
            <nuxt-link
              :to="{ name: 'parish-clarendon' }"
            >
              <v-img
                :src="require('~/assets/images/houses/1.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  Clarendon
                </p>
              </v-img>
            </nuxt-link>
          </v-col>

          <v-col cols="12" md="4" sm="6">
            <nuxt-link
              :to="{ name: 'parish-hanover' }"
            >
              <v-img
                :src="require('~/assets/images/parishes/hanover.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  Hanover
                </p>
              </v-img>
            </nuxt-link>
          </v-col>

          <v-col cols="12" md="4" sm="6">
            <nuxt-link
              :to="{ name: 'parish-kingston' }"
            >
              <v-img
                :src="require('~/assets/images/parishes/kingston.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  Kingston
                </p>
              </v-img>
            </nuxt-link>
          </v-col>

          <v-col cols="12" md="4" sm="6">
            <nuxt-link
              :to="{ name: 'parish-manchester' }"
            >
              <v-img
                :src="require('~/assets/images/houses/4.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  Manchester
                </p>
              </v-img>
            </nuxt-link>
          </v-col>

          <v-col cols="12" md="4" sm="6">
            <nuxt-link
              :to="{ name: 'parish-portland' }"
            >
              <v-img
                :src="require('~/assets/images/parishes/portland.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  Portland
                </p>
              </v-img>
            </nuxt-link>
          </v-col>
          <v-col cols="12" md="6" sm="6">
            <nuxt-link
              :to="{ name: 'parish-st-andrew' }"
            >
              <v-img
                :src="require('~/assets/images/parishes/st-andrew.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  St. Andrew
                </p>
              </v-img>
            </nuxt-link>
          </v-col>
          <v-col cols="12" md="6" sm="6">
            <nuxt-link
              :to="{ name: 'parish-st-ann' }"
            >
              <v-img
                :src="require('~/assets/images/extra-images/5.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  St. Ann
                </p>
              </v-img>
            </nuxt-link>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <nuxt-link
              :to="{ name: 'parish-st-catherine' }"
            >
              <v-img
                :src="require('~/assets/images/parishes/st-catherine.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  St. Catherine
                </p>
              </v-img>
            </nuxt-link>
          </v-col>
          <v-col cols="12" md="8" sm="6">
            <nuxt-link
              :to="{ name: 'parish-st-elizabeth' }"
            >
              <v-img
                :src="require('~/assets/images/parishes/st-elizabeth.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  St. Elizabeth
                </p>
              </v-img>
            </nuxt-link>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <nuxt-link
              :to="{ name: 'parish-st-james' }"
            >
              <v-img
                :src="require('~/assets/images/parishes/st-james.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  St. James
                </p>
              </v-img>
            </nuxt-link>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <nuxt-link
              :to="{ name: 'parish-st-mary' }"
            >
              <v-img
                :src="require('~/assets/images/parishes/st-mary.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  St. Mary
                </p>
              </v-img>
            </nuxt-link>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <nuxt-link
              :to="{ name: 'parish-st-thomas' }"
            >
              <v-img
                :src="require('~/assets/images/extra-images/1.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  St. Thomas
                </p>
              </v-img>
            </nuxt-link>
          </v-col>
          <v-col cols="12" md="6" sm="6">
            <nuxt-link
              :to="{ name: 'parish-trelawny' }"
            >
              <v-img
                :src="require('~/assets/images/parishes/trelawny.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  Trelawny
                </p>
              </v-img>
            </nuxt-link>
          </v-col>
          <v-col cols="12" md="6" sm="6">
            <nuxt-link
              :to="{ name: 'parish-westmoreland' }"
            >
              <v-img
                :src="require('~/assets/images/extra-images/6.jpg')"
                class="d-flex image  align-center rounded-lg image-height"
                gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
              >
                <p
                  class=" white--text text-center font-weight-black text-h4 text-uppercase"
                >
                  Westmoreland
                </p>
              </v-img>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-container>
    </SectionPadding>
  </div>
</template>

<script>
import img from "~/assets/images/houses/3.jpg";
export default {
  data() {
    return {
       title: 'Parishes | Real Estate Ja',
      description: 'parishes',
      img: img,
      loading: false,
      card: {
        title: "Sunny Private Studio Apartment",
        parish: "St. James",
        realEstateType: "Apartment",
        squareMeters: 80,
        beds: 3,
        bathroom: 2,
        price: 70
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.image {
  transition: 0.35s ease;
  &:hover {
    transform: translateY(-3px);
  }
}
.image-height {
  height: 292px;
}
@media screen and (max-width: 960px) {
  .image-height {
    height: 200px;
  }
}
</style>
