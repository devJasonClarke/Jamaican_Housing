<template>
  <div>
    <v-container class="tabs">
      <div class="tab-buttons">
        <v-btn
          depressed
          tile
          x-large
          :class="[tabs === 'buy' ? '' : 'tint', 'mr-1 rounded-t-lg']"
          @click="changeTab(toggle[0])"
          >Buy</v-btn
        >
        <v-btn
          depressed
          tile
          x-large
          @click="changeTab(toggle[1])"
          :class="[tabs === 'rent' ? '' : 'tint', 'rounded-t-lg']"
          >Rent</v-btn
        >
      </div>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card
          tile
          min-height="90"
          elevation="3"
          class="rounded-b-lg rounded-tr-lg d-flex align-center pa-3"
        >
          <v-container fluid class="px-6">
            <v-row
              align="center"
              justify="space-around"
              class="flex-column flex-md-row"
            >
              <v-col>
                <v-select
                  outlined
                  dense
                  label="PARISH"
                  v-model="selectedParish"
                  prepend-icon="mdi-map-marker"
                  hide-details
                  :items="parishes"
                  color="green"
                  item-color="green"
                  :rules="[v => !!v || 'Item is required']"
                  required
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  outlined
                  dense
                  label="TYPE"
                  v-model="selectedRealEstateType"
                  prepend-icon="mdi-home-city"
                  hide-details
                  :items="realEstateType"
                  color="green"
                  item-color="green"
                  :rules="[v => !!v || 'Item is required']"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  outlined
                  dense
                  label="MAX PRICE"
                  v-model="selectedMaxPrice"
                  prepend-icon="mdi-cash-multiple "
                  hide-details
                  :items="maxPrices[tabs]"
                  color="green"
                  item-color="green"
                  :rules="[v => !!v || 'Item is required']"
                  required
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  :items="currencyCodeList"
                  v-model="selectedCurrency"
                  @change="setActiveCurrency(selectedCurrency)"
                  label="Currency"
                  prepend-icon="mdi-currency-usd"
                  dense
                  outlined
                  hide-details="true"
                  color="green accent-4"
                  item-color="green"
                ></v-select>
              </v-col>

              <v-col md="2">
                <v-btn
                  color="green accent-4"
                  dark
                  block
                  class="pa-5 "
                  @click="validate"
                  >Search</v-btn
                >
              </v-col>
            </v-row></v-container
          >
        </v-card>
      </v-form>
    </v-container>
    <!--     {{selectedParish}}
    {{selectedRealEstateType}}
    {{selectedMaxPrice}} -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      valid: false,
      currency: "$",
      tabs: "buy",
      toggle: ["buy", "rent"],
      selectedParish: "",
      selectedRealEstateType: "",
      selectedMaxPrice: "",
      selectedCurrency: "JMD"
    };
  },

  methods: {
    changeTab(x) {
      this.tabs = x;
      this.selectedMaxPrice = "";
      this.selectedRealEstateType = "";
      this.selectedParish = "";
    },
    validate() {
      if (this.$refs.form.validate()) {
        console.log("valid");
      } else {
        console.log("not");
      }
    },
    ...mapActions({
      setActiveCurrency: "api/setActiveCurrency"
    }),
    setTheCurrency() {
      const getCurrency = localStorage.getItem("activeCurrency");
      //   console.log(`getCurrency: from default ${getCurrency}`);
      if (getCurrency) {
        this.selectedCurrency = getCurrency;
      }
    }
  },
  mounted() {
    this.setTheCurrency();
  },
  computed: {
    ...mapGetters({
      parishes: "selectOptions/parishes",
      realEstateType: "selectOptions/realEstateType",
      maxPrices: "selectOptions/maxPrices",
      currencyCodeList: "api/currencyCodeList",
      activeCurrency: "api/activeCurrency"
    })
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  margin-top: -110px;
}
.tint {
  opacity: 0.55;
}
</style>
