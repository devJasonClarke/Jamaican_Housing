<template>
  <v-snackbar v-model="snackbar" :timeout="20000" right>
    {{ error }}

    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      snackbar: false,
      error: null,
      close: null
    };
  },
  async fetch() {
    await this.getIpAddress();
    await this.getIpInfo();
    await this.getCurrencies();
  },
  methods: {
    ...mapActions({
      getIpAddress: "api/getIPAddress",
      getIpInfo: "api/getIPInfo",
      getCurrencies: "api/getCurrencies",
      checkTheme: "colorTheme/checkTheme"
    })
  },
  computed: {
    ...mapGetters({
      ipAddress: "api/ipAddress"
    })
  },
  mounted() {
    this.checkTheme();
  }
};
</script>

<style lang="scss" scoped></style>
