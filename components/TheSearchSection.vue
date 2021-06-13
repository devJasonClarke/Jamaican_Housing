<template>
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
        ></v-select>
      </v-col>

      <v-col>
        <v-select
          outlined
          dense
          label="BEDROOMS "
          v-model="selectedParish"
          prepend-icon="mdi-bed"
          hide-details
          :items="bedrooms"
          color="green"
          item-color="green"
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
        ></v-select>
      </v-col>

      <v-col md="2">
        <v-btn color="green accent-4" dark block class="pa-5 ">Search</v-btn>
      </v-col>
    </v-row></v-container
  >
</template>

<script>
export default {
  data() {
    return {
      selectedParish: "",
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
  }
};
</script>

<style></style>
