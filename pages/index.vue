<template>
  <div>
<the-home-page-header />
    <v-container class="tabs">
      <v-sheet>
        <div class="tab-buttons">
          <v-btn
            depressed
            tile
            x-large
            class="mr-1 rounded-t-lg"
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
          class="rounded-b-lg rounded-tr-lg"
        >
          {{ tabs }}
        </v-card>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>

import TheHomePageHeader from '../components/TheHomePageHeader.vue';
export default {
  components: { TheHomePageHeader },
  data() {
    return {
      tabs: "buy",
      toggle: ["buy", "rent"]
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

.header-img {
  height: 590px;
}
.header-text-container {
  display: flex;
  align-items: center;
  min-height: 590px;
  color: white;

  h1 {
    font-size: 72px;
  }

  p {
    font-size: 20px;
  }
}
</style>
