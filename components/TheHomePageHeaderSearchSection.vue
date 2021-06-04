<template>
  <div>
    <v-container class="tabs">
      <v-sheet>
        <div class="tab-buttons">
          <v-btn
            depressed
            tile
            x-large
            class="mr-1 rounded-t-lg "
            @click="changeTab(toggle[0])"
            color="white"
            >Buy</v-btn
          >
          <v-btn
            depressed
            tile
            x-large
            @click="changeTab(toggle[1])"
            color="grey lighten-1"
            class="rounded-t-lg"
            >Rent</v-btn
          >
        </div>
        <v-card
          tile
          height="90"
          color="white"
          elevation="3"
          class="rounded-b-lg rounded-tr-lg d-flex align-center"
        >
          <v-container fluid class="px-6">
            <v-row align="center" justify="space-around">
              <v-col>
                <v-select
                  outlined
                  dense
                  label="PARISH"
                  prepend-icon="mdi-map-marker"
                  hide-details
                  :items="items"
                  color="green"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  outlined
                  dense
                  label="TYPE"
                  prepend-icon="mdi-home-city"
                  hide-details
                  :items="items"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  outlined
                  dense
                  label="MAX PRICE"
                  prepend-icon="mdi-cash-multiple "
                  hide-details
                  :items="items"
                ></v-select>
              </v-col>

              <v-col cols="2">
                <v-btn color="green accent-4" dark block class="pa-5 "
                  >Search</v-btn
                >
              </v-col>
            </v-row></v-container
          >
        </v-card>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: "buy",
      toggle: ["buy", "rent"],
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    };
  },

  methods: {
    changeTab(x) {
      this.tabs = x;
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  margin-top: -110px;
}
</style>
