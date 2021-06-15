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
export default {
  data() {
    return {
        valid: false,
      selectedParish: "",
      selectedBedrooms: "",
      selectedRealEstateType: "",
      selectedMaxPrice: "",
      bedrooms: ["1", "2", "3", "4 +"],

      realEstateType: [
        "Apartment",
        "Commercial Building/Offices",
        "Development Land (Commercial)",
        "Development Land (Residential)",
        "Factory",
        "Farm/Agriculture",
        "House",
        "Townhouse",
        "Warehouse"
      ],
      maxPrices: [
        "$ 5,000,000 JMD",
        "$ 14,000,000 JMD",
        "$ 25,000,000 JMD",
        "$ 50,000,000 JMD",
        "$ 75,000,000 JMD",
        "$ 100,000,000 JMD",
        "$ 150,000,00 JMD"
      ]
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
  }
};
</script>

<style></style>
