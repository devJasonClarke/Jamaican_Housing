<template>
  <v-card class="mx-auto" max-width="252" nuxt :to="{ name: 'property' }">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="168"
  
    >
    <div class="ma-3">
      <v-chip class="text-uppercase" color="orange accent-4" small label dark>
        Featured
      </v-chip>
      <v-chip class="text-uppercase" color="green accent-4" small label dark>
        For Rent
      </v-chip>
    </div>
      </v-img
    >

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
        <v-icon :color="iconColor">mdi-ruler-square mdi-flip-v mdi-18px</v-icon>
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
      iconColor: "rgba(0, 200, 83, 0.5)"
    };
  }
};
</script>

<style lang="scss" scoped></style>
