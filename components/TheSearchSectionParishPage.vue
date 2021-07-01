<template>
      <v-form ref="form" v-model="valid" lazy-validation>
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
          label="MAX PRICE"
          v-model="selectedMaxPrice"
          prepend-icon="mdi-cash-multiple "
          hide-details
          :items="maxPrices"
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
      </v-form>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
        valid: false,
      selectedParish: "",
      selectedBedrooms: "",
      selectedRealEstateType: "",
      selectedMaxPrice: "",

    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log("valid");
      } else {
        console.log("not");
      }
    }
  },
    computed: {
    ...mapGetters({
      parishes: "selectOptions/parishes",
      realEstateType: "selectOptions/realEstateType",
      maxPrices: "selectOptions/maxPrices"
    })
  },
};
</script>

<style></style>
