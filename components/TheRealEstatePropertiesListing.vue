<template>
  <v-container>
    <p class="text-body mb-6">{{ title }}</p>

    <v-row>
      <v-col
        v-for="index in 8"
        :key="index"
        cols="12"
        sm="4"
        md="3"
        class="mb-4"
      >
        <v-card
          nuxt
          :to="{ name: 'buy' }"
          outlined
          elevation="0"
          class="rounded-lg card"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200"
          ></v-img>
          <div>
            <v-card-title>
              {{ card.title }}
            </v-card-title>

            <v-card-subtitle class="pb-4 primary-green">
              <v-icon :color="iconColor">mdi-map-marker mdi-18px</v-icon>
              {{ card.parish }}
            </v-card-subtitle>

            <v-card-text
              class=" text-uppercase section-titles-Subtitle grey--text"
            >
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
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      iconColor: "rgba(0, 200, 83, 0.5)"
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  transition: 0.4s all ease;
  &:hover {
    transform: scale(1.04);
  }
}
</style>
