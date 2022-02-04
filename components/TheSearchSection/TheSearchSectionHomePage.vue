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
      <v-form
        ref="formBuy"
        v-model="validBuy"
        lazy-validation
        v-if="tabs === 'buy'"
      >
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
                  v-model="selectedParishBuy"
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
                  v-model="selectedRealEstateTypeBuy"
                  prepend-icon="mdi-home-city"
                  hide-details
                  :items="realEstateType"
                  color="green"
                  item-color="green"
                  :rules="[v => !!v || 'Item is required']"
                ></v-select>
              </v-col>
              <v-col>
                <v-text-field
                  outlined
                  dense
                  :label="`MAX PRICE (${activeCurrency})`"
                  v-model="selectedMaxPriceBuy"
                  prepend-icon="mdi-currency-usd "
                  hide-details
                  type="number"
                  color="green"
                  :rules="[v => !!v || 'Item is required']"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col
                v-if="
                  selectedRealEstateTypeBuy === '' ||
                    selectedRealEstateTypeBuy === 'House' ||
                    selectedRealEstateTypeBuy === 'Apartment' ||
                    selectedRealEstateTypeBuy === 'Townhouse'
                "
              >
                <v-select
                  outlined
                  dense
                  label="BEDROOMS "
                  v-model="selectedBedroomsBuy"
                  prepend-icon="mdi-bed"
                  hide-details
                  :items="bedrooms"
                  color="green"
                  item-color="green"
                  :rules="[v => !!v || 'Item is required']"
                  required
                ></v-select>
              </v-col>

              <v-col md="2">
                <v-btn
                  color="green accent-4"
                  dark
                  block
                  class="pa-5 "
                  @click="validateBuy"
                  >Search</v-btn
                >
              </v-col>
            </v-row></v-container
          >
        </v-card>
      </v-form>
      <v-form ref="formRent" v-model="validRent" lazy-validation v-else>
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
                  v-model="selectedParishRent"
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
                  v-model="selectedRealEstateTypeRent"
                  prepend-icon="mdi-home-city"
                  hide-details
                  :items="realEstateType"
                  color="green"
                  item-color="green"
                  :rules="[v => !!v || 'Item is required']"
                ></v-select>
              </v-col>
              <v-col>
                <v-text-field
                  outlined
                  dense
                  :label="`MAX PRICE (${activeCurrency})`"
                  v-model="selectedMaxPriceRent"
                  prepend-icon="mdi-currency-usd "
                  hide-details
                  type="number"
                  color="green"
                  :rules="[v => !!v || 'Item is required']"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col
                v-if="
                  selectedRealEstateTypeRent === '' ||
                    selectedRealEstateTypeRent === 'House' ||
                    selectedRealEstateTypeRent === 'Apartment' ||
                    selectedRealEstateTypeRent === 'Townhouse'
                "
              >
                <v-select
                  outlined
                  dense
                  label="BEDROOMS "
                  v-model="selectedBedroomsRent"
                  prepend-icon="mdi-bed"
                  hide-details
                  :items="bedrooms"
                  color="green"
                  item-color="green"
                  :rules="[v => !!v || 'Item is required']"
                  required
                ></v-select>
              </v-col>

              <v-col md="2">
                <v-btn
                  color="green accent-4"
                  dark
                  block
                  class="pa-5 "
                  @click="validateRent"
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
      validRent: false,
      validBuy: false,
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

    validateRent() {
      if (this.$refs.formRent.validate()) {
        // console.log("valid Rent");
        if (
          this.selectedRealEstateTypeRent === "Commercial Building/Offices" ||
          this.selectedRealEstateTypeRent === "Development Land (Commercial)" ||
          this.selectedRealEstateTypeRent ===
            "Development Land (Residential)" ||
          this.selectedRealEstateTypeRent === "Factory" ||
          this.selectedRealEstateTypeRent === "Farm/Agriculture"
        ) {
          this.setBedroomsRent("0");
        }

        this.getSearchedPropertiesForRent();
        this.$router.push({ name: "rent", hash: "#results" });
      } else {
        // console.log("not");
      }
    },
    validateBuy() {
      if (this.$refs.formBuy.validate()) {
        // console.log("valid Buy");
        if (
          this.selectedRealEstateTypeBuy === "Commercial Building/Offices" ||
          this.selectedRealEstateTypeBuy === "Development Land (Commercial)" ||
          this.selectedRealEstateTypeBuy === "Development Land (Residential)" ||
          this.selectedRealEstateTypeBuy === "Factory" ||
          this.selectedRealEstateTypeBuy === "Farm/Agriculture"
        ) {
          this.setBedroomsBuy("0");
        }

        this.getSearchedPropertiesForSale();
        this.$router.push({ name: "buy", hash: "#results" });
      } else {
        // console.log("not");
      }
    },
    numberWithCommas(x) {
      x = Math.round((x + Number.EPSILON) * 100) / 100;

      x = x.toString();
      let pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
      return x;
    },

    ...mapActions({
      setActiveCurrency: "api/api/setActiveCurrency",
      setParishBuy: "getProperties/forSale/setParish",
      setTypeBuy: "getProperties/forSale/setType",
      setPriceBuy: "getProperties/forSale/setPrice",
      setBedroomsBuy: "getProperties/forSale/setBedrooms",

      getSearchedPropertiesForSale:
        "getProperties/forSale/getSearchedPropertiesForSale",
      getSearchedPropertiesForRent:
        "getProperties/forRent/getSearchedPropertiesForRent",

      setParishRent: "getProperties/forRent/setParish",
      setTypeRent: "getProperties/forRent/setType",
      setPriceRent: "getProperties/forRent/setPrice",
      setBedroomsRent: "getProperties/forRent/setBedrooms"
    }),
    setTheCurrency() {
      const getCurrency = localStorage.getItem("activeCurrency");
      // console.log(`getCurrency: from default ${getCurrency}`);
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
      parishes: "selectOptions/selectOptions/parishes",
      realEstateType: "selectOptions/selectOptions/realEstateType",
      maxPrices: "selectOptions/selectOptions/maxPrices",
      currencyCodeList: "api/api/currencyCodeList",
      activeCurrency: "api/api/activeCurrency",
      currencyRate: "api/api/currencyRate",
      bedrooms: "selectOptions/selectOptions/bedrooms",
      searchBuy: "getProperties/forSale/search",
      searchRent: "getProperties/forRent/search"
    }),
    selectedParishBuy: {
      get() {
        return this.searchBuy.parish;
      },
      set(value) {
        this.setParishBuy(value);
      }
    },
    selectedRealEstateTypeBuy: {
      get() {
        return this.searchBuy.type;
      },
      set(value) {
        this.setTypeBuy(value);
      }
    },
    selectedMaxPriceBuy: {
      get() {
        return this.searchBuy.price;
      },
      set(value) {
        this.setPriceBuy(value);
      }
    },
    selectedBedroomsBuy: {
      get() {
        return this.searchBuy.bedrooms;
      },
      set(value) {
        this.setBedroomsBuy(value);
      }
    },

    selectedParishRent: {
      get() {
        return this.searchRent.parish;
      },
      set(value) {
        this.setParishRent(value);
      }
    },
    selectedRealEstateTypeRent: {
      get() {
        return this.searchRent.type;
      },
      set(value) {
        this.setTypeRent(value);
      }
    },
    selectedMaxPriceRent: {
      get() {
        return this.searchRent.price;
      },
      set(value) {
        this.setPriceRent(value);
      }
    },
    selectedBedroomsRent: {
      get() {
        return this.searchRent.bedrooms;
      },
      set(value) {
        this.setBedroomsRent(value);
      }
    }
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
