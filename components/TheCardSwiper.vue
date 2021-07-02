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
          {{ shortenMoney(card.price * currencyRate) }} 
      </p>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
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
  },
  methods: {
    shortenMoney(num) {
          num = Math.round((num + Number.EPSILON) * 100) / 100;

      if (num < 1000) {
        return num;
      }
      var si = [
        { v: 1e3, s: "K" },
        { v: 1e6, s: "M" },
        { v: 1e9, s: "B" },
        { v: 1e12, s: "T" },
        { v: 1e15, s: "P" },
        { v: 1e18, s: "E" }
      ];
      var i;
      for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].v) {
          break;
        }
      }
      return (
        (num / si[i].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
        si[i].s
      );
    }
  },
   computed: {
    ...mapGetters({
      country: "api/country",
      activeCurrency: "api/activeCurrency",
      currencyRate: "api/currencyRate"
    })
  }
};
</script>

<style lang="scss" scoped></style>
