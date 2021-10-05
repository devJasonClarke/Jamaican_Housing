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
          <v-col>
            <v-text-field
              outlined
              dense
              :label="`MAX PRICE (${activeCurrency})`"
              v-model.number="selectedMaxPrice"
              prepend-icon="mdi-currency-usd "
              hide-details
              type="number"
              color="green"
              :rules="[v => !!v || 'Item is required']"
              @change="resetPropertySearch"
              required
            >
            </v-text-field>
            <!--            <v-select
              outlined
              dense
              label="MAX PRICE"
              v-model="selectedMaxPrice"
              prepend-icon="mdi-currency-usd "
              hide-details
              :items="maxPrices.rent"
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
            </v-select> -->
          </v-col>

          <v-col
            v-if="
              selectedRealEstateType === '' ||
                selectedRealEstateType === 'House' ||
                selectedRealEstateType === 'Apartment' ||
                selectedRealEstateType === 'Townhouse'
            "
          >
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
      v-if="selectedParish && selectedRealEstateType && selectedMaxPrice"
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
      setParish: "getProperties/forRent/setParish",
      setType: "getProperties/forRent/setType",
      setPrice: "getProperties/forRent/setPrice",
      setBedrooms: "getProperties/forRent/setBedrooms",
      getSearchedPropertiesForRent:
        "getProperties/forRent/getSearchedPropertiesForRent",
      getPropertiesForRent: "getProperties/forRent/getPropertiesForRent",
      removeFilters: "getProperties/forRent/removeFilters",
      resetPropertySearch: "getProperties/forRent/resetPropertySearch"
    }),
    removeTheFilters() {
      this.removeFilters();
      // console.log("removeFilters");
      // console.log(this.properties);
      if (this.properties.length < 1) {
        this.getPropertiesForRent();
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
        if (
          this.selectedRealEstateType === "Commercial Building/Offices" ||
          this.selectedRealEstateType === "Development Land (Commercial)" ||
          this.selectedRealEstateType === "Development Land (Residential)" ||
          this.selectedRealEstateType === "Factory" ||
          this.selectedRealEstateType === "Farm/Agriculture"
        ) {
          this.setBedrooms("0");
        }
        this.getSearchedPropertiesForRent();
      } else {
        // console.log("not");
      }
    }
  },
  computed: {
    ...mapGetters({
      parishes: "selectOptions/selectOptions/parishes",
      realEstateType: "selectOptions/selectOptions/realEstateType",
      maxPrices: "selectOptions/selectOptions/maxPrices",
      bedrooms: "selectOptions/selectOptions/bedrooms",
      search: "getProperties/forRent/search",
      activeCurrency: "api/api/activeCurrency",
      currencyRate: "api/api/currencyRate",
      searchedProperties: "getProperties/forRent/searchedProperties",
      properties: "getProperties/forRent/properties",
      propertySearch: "getProperties/forRent/propertySearch"
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
