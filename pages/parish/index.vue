<template>
  <div>
      <TheMetaTags :title="title" :description="description"/>
    <v-img :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary
        mainTitle="Parishes"
        paragraph=" Prepare a short list of features you would like in a home, such as
          location, beds & bath's required, bearing in mind affordability and
          accommodation requirements."
      />
    </SectionPadding>

    <v-divider></v-divider>

    <SectionPadding class="backgroundShade">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" sm="6">
            <nuxt-link
              :to="{ name: 'parish-slug', params: { slug: 'clarendon' } }"
            >
              <v-img
                :src="img"
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
              :to="{ name: 'parish-slug', params: { slug: 'hanover' } }"
            >
              <v-img
                :src="img"
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
              :to="{ name: 'parish-slug', params: { slug: 'kingston' } }"
            >
              <v-img
                :src="img"
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
              :to="{ name: 'parish-slug', params: { slug: 'manchester' } }"
            >
              <v-img
                :src="img"
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
              :to="{ name: 'parish-slug', params: { slug: 'portland' } }"
            >
              <v-img
                :src="img"
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
              :to="{ name: 'parish-slug', params: { slug: 'st-andrew' } }"
            >
              <v-img
                :src="img"
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
              :to="{ name: 'parish-slug', params: { slug: 'st-ann' } }"
            >
              <v-img
                :src="img"
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
              :to="{ name: 'parish-slug', params: { slug: 'st-catherine' } }"
            >
              <v-img
                :src="img"
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
              :to="{ name: 'parish-slug', params: { slug: 'st-elizabeth' } }"
            >
              <v-img
                :src="img"
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
              :to="{ name: 'parish-slug', params: { slug: 'st-james' } }"
            >
              <v-img
                :src="img"
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
              :to="{ name: 'parish-slug', params: { slug: 'st-mary' } }"
            >
              <v-img
                :src="img"
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
              :to="{ name: 'parish-slug', params: { slug: 'st-thomas' } }"
            >
              <v-img
                :src="img"
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
              :to="{ name: 'parish-slug', params: { slug: 'trelawny' } }"
            >
              <v-img
                :src="img"
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
              :to="{ name: 'parish-slug', params: { slug: 'westmoreland' } }"
            >
              <v-img
                :src="img"
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
import img from "~/assets/images/house.jpg";
export default {
  data() {
    return {
       title: 'Parishes | Jamaica Housing',
      descritpion: 'parishes',
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
