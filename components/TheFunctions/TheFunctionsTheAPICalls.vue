<template>
  <span v-if="false"></span>
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
      //    getIpInfo: "api/api/getIPInfo",
      getCurrencies: "api/api/getCurrencies",
      checkTheme: "colorTheme/colorTheme/checkTheme"
    }),
    resetError(){
      this.error = false;
    
    }
  },
  computed: {
    ...mapGetters({
      country: "api/api/country",
      errorMessage: "api/api/errorMessage"
    })
  },
  watch:{
errorMessage: function (){
    this.error = true;
}
  },
  mounted() {
    this.checkTheme();
  }
};
</script>

<style lang="scss" scoped></style>
