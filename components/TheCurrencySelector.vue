<template>
  <v-sheet>
    <v-select
      :items="currencyCodeList"
      v-model="selectedCurrency"
      @change="setActiveCurrency(selectedCurrency)"
      label="Currency"
      dense
      outlined
       hide-details="true"
      class="px-2 pt-0 mt-0 mx-0 select-max-width"
      color="green accent-4"
      item-color="green"
    ></v-select>
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedCurrency: "JMD"
    };
  },
  methods: {
    ...mapActions({
      setActiveCurrency: "api/setActiveCurrency"
    }),
    setTheCurrency() {
      const getCurrency = localStorage.getItem("activeCurrency");
      //   console.log(`getCurrency: from default ${getCurrency}`);
      if (getCurrency) {
        this.selectedCurrency = getCurrency;
      }
    }
  },
  mounted() {
    this.setTheCurrency();
  },
  computed: {
    ...mapGetters({
      currencyCodeList: "api/currencyCodeList",
      activeCurrency: "api/activeCurrency"
    })
  }
};
</script>

<style lang="scss" scoped>
.select-max-width {
  max-width: 150px;
}
</style>
