<template>
  <v-app class="font">
    <TheAPICalls />
<!--     {{ ipAddress }}
    <img :src="country.flag" height="60" width="60" />
    {{ country.flag }}
<p>
  {{country.currencySymbol}}
    {{1000 * currencies.USD}}
  {{currencies.USD}}
  {{currencies}}
</p> -->


    <TheNavigation />
    <v-main>
      <v-container fluid class="ma-0 pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
 

  methods: {
    ...mapActions({
      getIpAddress: "api/getIPAddress",
      getIpInfo: "api/getIPInfo"
    })
  },
  computed: {
    ...mapGetters({
      ipAddress: "api/ipAddress",
      country: "api/country",
      currencies: 'api/currencies'
    })
  }
};
</script>
