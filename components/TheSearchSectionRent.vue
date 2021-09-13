<template>
  <section>
    <v-form ref="form" v-model="valid" lazy-validation>
      {{ selectedParish }}
      {{ selectedBedrooms }}
      {{ selectedRealEstateType }}
      {{ selectedMaxPrice }}
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
              :item-text="maxPrices.buy.text"
              :item-value="maxPrices.buy.value"
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
              label="BEDROOMS "
              v-model="selectedBedrooms"
              prepend-icon="mdi-bed"
              hide-details
              :items="bedrooms"
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
              required
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
    </v-form>
    <!--       <v-form ref="form" v-model="valid" lazy-validation>
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
          required
        ></v-select>
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
          required
        ></v-select>
      </v-col>

      <v-col md="2">
        <v-btn color="green accent-4" dark block class="pa-5 " @click="validate"
          >Search</v-btn
        >
      </v-col>
    </v-row></v-container
  >
      </v-form> -->
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
      setParish: "selectOptions/setParish",
      setType: "selectOptions/setType",
      setPrice: "selectOptions/setPrice",
      setBedrooms: "selectOptions/setBedrooms",
  getSearchedPropertiesForSale: "getPropertiesForSale/getSearchedPropertiesForSale",
    }),
    validate() {
      if (this.$refs.form.validate()) {
        console.log("valid");
        this.getSearchedPropertiesForSale();
      } else {
        console.log("not");
      }
    }
  },
  computed: {
    ...mapGetters({
      parishes: "selectOptions/parishes",
      realEstateType: "selectOptions/realEstateType",
      maxPrices: "selectOptions/maxPrices",
      bedrooms: "selectOptions/bedrooms",
      search: "selectOptions/search"
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
