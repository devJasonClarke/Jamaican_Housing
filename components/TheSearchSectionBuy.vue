<template>
  <section>
    <v-form ref="form" v-model="valid" lazy-validation>
      <!-- {{ selectedParish }}
      {{ selectedBedrooms }}
      {{ selectedRealEstateType }}
      {{ selectedMaxPrice }} -->
      <v-container>
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
              @change="resetPropertySearch"
              required
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
              :items="maxPrices.buy"
              color="green"
              item-color="green"
              :rules="[v => !!v || 'Item is required']"
              @change="resetPropertySearch"
              required
            >
              <template slot="selection" slot-scope="{ item }">
                $ {{ numberWithCommas(item.value * currencyRate) }}
                {{ activeCurrency }}
              </template>
              <template slot="item" slot-scope="{ item }">
                $ {{ numberWithCommas(item.value * currencyRate) }}
                {{ activeCurrency }}
              </template>
            </v-select>
          </v-col>

          <v-col>
            <v-select
              outlined
              dense
              label="BEDROOMS "
              v-model="selectedBedrooms"
              prepend-icon="mdi-bed"
              hide-details
              :items="bedrooms"
              color="green"
              item-color="green"
              :rules="[v => !!v || 'Item is required']"
              @change="resetPropertySearch"
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
              @change="resetPropertySearch"
              required
            ></v-select>
          </v-col>

          <v-col md="2">
            <v-btn
              v-if="!propertySearch"
              color="green accent-4"
              dark
              block
              class="pa-5 "
              @click="validate"
              >Search</v-btn
            >
            <v-btn
              v-else
              color="green accent-4"
              dark
              block
              class="pa-5 "
              @click="$vuetify.goTo('#results')"
              >Search</v-btn
            >
          </v-col>
        </v-row></v-container
      >
    </v-form>
    <v-btn
      v-if="searchedProperties.length > 0"
      class="text-capitalize"
      color="red"
      text
      elevation="0"
      @click="removeTheFilters"
      ><v-icon>mdi-delete mdi-18px</v-icon> Remove filters</v-btn
    >
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      valid: false
    };
  },
  methods: {
    ...mapActions({
      setParish: "getPropertiesForSale/setParish",
      setType: "getPropertiesForSale/setType",
      setPrice: "getPropertiesForSale/setPrice",
      setBedrooms: "getPropertiesForSale/setBedrooms",
      getSearchedPropertiesForSale:
        "getPropertiesForSale/getSearchedPropertiesForSale",
      getPropertiesForSale: "getPropertiesForSale/getPropertiesForSale",
      removeFilters: "getPropertiesForSale/removeFilters",
      resetPropertySearch: "getPropertiesForSale/resetPropertySearch"
    }),
    removeTheFilters() {
      this.removeFilters();
      // console.log("removeFilters");
      // console.log(this.properties);
      if (this.properties.length < 1) {
        this.getPropertiesForSale();
      }
    },
    numberWithCommas(x) {
      x = Math.round((x + Number.EPSILON) * 100) / 100;

      x = x.toString();
      let pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
      return x;
    },
    validate() {
      if (this.$refs.form.validate()) {
        // console.log("valid");
        this.getSearchedPropertiesForSale();
      } else {
        // console.log("not");
      }
    }
  },
  computed: {
    ...mapGetters({
      parishes: "selectOptions/parishes",
      realEstateType: "selectOptions/realEstateType",
      maxPrices: "selectOptions/maxPrices",
      bedrooms: "selectOptions/bedrooms",
      search: "getPropertiesForSale/search",
      activeCurrency: "api/activeCurrency",
      currencyRate: "api/currencyRate",
      searchedProperties: "getPropertiesForSale/searchedProperties",
      properties: "getPropertiesForSale/properties",
      propertySearch: "getPropertiesForSale/propertySearch"
    }),
    selectedParish: {
      get() {
        return this.search.parish;
      },
      set(value) {
        this.setParish(value);
      }
    },
    selectedRealEstateType: {
      get() {
        return this.search.type;
      },
      set(value) {
        this.setType(value);
      }
    },
    selectedMaxPrice: {
      get() {
        return this.search.price;
      },
      set(value) {
        this.setPrice(value);
      }
    },
    selectedBedrooms: {
      get() {
        return this.search.bedrooms;
      },
      set(value) {
        this.setBedrooms(value);
      }
    }
  }
};
</script>

<style></style>
