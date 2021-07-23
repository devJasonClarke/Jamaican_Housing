<template>
  <div class="">
    <div v-if="errorMessage">
      <v-snackbar v-model="error" :timeout="20000" left>
        {{ errorMessage }}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="error = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      error: true,
      close: null
    };
  },
  async fetch() {
    //  await this.getIpInfo();
    await this.getCurrencies();
  },
  methods: {
    ...mapActions({
      //    getIpInfo: "api/getIPInfo",
      getCurrencies: "api/getCurrencies",
      checkTheme: "colorTheme/checkTheme"
    })
  },
  computed: {
    ...mapGetters({
      country: "api/country",
      errorMessage: "api/errorMessage"
    })
  },
  mounted() {
    this.checkTheme();
  }
};
</script>

<style lang="scss" scoped></style>
