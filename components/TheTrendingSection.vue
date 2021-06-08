<template>
  <v-container>
    <v-row>
      <v-col md="8" sm="6">
        <v-hover v-slot="{ hover }">
          <nuxt-link to="/buy">
            <v-img
              :src="img"
              class="d-flex align-center rounded-lg image-height"
              :class="{ 'on-hover': hover }"
              gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
            >
              <p
                class=" white--text text-center font-weight-black text-h4 text-uppercase"
              >
                Kingston
              </p>
            </v-img>
          </nuxt-link>
        </v-hover>
      </v-col>

      <v-col md="4" sm="6">
        <v-hover v-slot="{ hover }">
          <nuxt-link to="/buy">
            <v-img
              :src="img"
              class="d-flex align-center rounded-lg image-height"
              :class="{ 'on-hover': hover }"
              gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
            >
              <p
                class=" white--text text-center font-weight-black text-h4 text-uppercase"
              >
                St. James
              </p>
            </v-img>
          </nuxt-link>
        </v-hover>
      </v-col>

      <v-col md="4" sm="6">
        <v-hover v-slot="{ hover }">
          <nuxt-link to="/buy">
            <v-img
              :src="img"
              class="d-flex align-center rounded-lg image-height"
              :class="{ 'on-hover': hover }"
              gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
            >
              <p
                class=" white--text text-center font-weight-black text-h4 text-uppercase"
              >
                St. Ann
              </p>
            </v-img>
          </nuxt-link>
        </v-hover>
      </v-col>

      <v-col md="4" sm="6">
        <v-hover v-slot="{ hover }">
          <nuxt-link to="/buy">
            <v-img
              :src="img"
              class="d-flex align-center rounded-lg image-height"
              :class="{ 'on-hover': hover }"
              gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
            >
              <p
                class=" white--text text-center font-weight-black text-h4 text-uppercase"
              >
                Portland
              </p>
            </v-img>
          </nuxt-link>
        </v-hover>
      </v-col>

      <v-col md="4" sm="12">
        <v-hover v-slot="{ hover }">
          <nuxt-link to="/buy">
            <v-img
              :src="img"
              class="d-flex align-center rounded-lg image-height"
              :class="{ 'on-hover': hover }"
              gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
            >
              <p
                class=" white--text text-center font-weight-black text-h4 text-uppercase"
              >
                Manchester
              </p>
            </v-img>
          </nuxt-link>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import img from "~/assets/images/house.jpg";
export default {
  data() {
    return {
      img: img
    };
  }
};
</script>

<style lang="scss" scoped>
.v-image {
  transition: 0.4s ease-in-out;
  &.on-hover {
    transform: translateY(-5px);
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
