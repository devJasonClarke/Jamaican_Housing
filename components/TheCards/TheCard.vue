<template>
  <v-card
    nuxt
    :to="{ name: 'property' }"
    outlined
    elevation="0"
    class="rounded-lg card"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200"
      class="pa-3"
    >
      <v-chip class="text-uppercase" color="orange accent-4" small label dark>
        Featured
      </v-chip>
      <v-chip class="text-uppercase" color="green accent-4" small label dark>
        For Rent
      </v-chip>
    </v-img>
    <div>
      <v-card-title> {{ card.title }} Your </v-card-title>

      <v-card-subtitle class="pb-4 primary-green">
        <v-icon :color="iconColor">mdi-map-marker mdi-18px</v-icon>
        {{ card.parish }}
      </v-card-subtitle>

      <v-card-text class=" text-uppercase section-titles-Subtitle grey--text">
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
          <v-icon :color="iconColor">mdi-shower mdi-flip-h mdi-18px</v-icon>
          {{ card.bathroom }}
        </p>
        <p>
          <v-icon :color="iconColor">mdi-currency-usd mdi-18px</v-icon>

          {{ shortenNumber(card.price * currencyRate) }}
        </p>
      </div>
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
    shortenNumber(num) {
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
