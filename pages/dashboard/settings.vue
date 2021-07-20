<template>
  <div>
    <h1>Settings</h1>
    <v-text-field
      v-model="price"
  @input="thePrice"
      single-line
      outlined
      dense
    ></v-text-field>
    {{ newPrice }}
  </div>
</template>

<script>
export default {
  layout: "dashboard",

  data() {
    return {
      price: "1223234324",
      newPrice: null
    };
  },

  methods: {
    thePrice() {
      this.newPrice = Number(this.price.replace(/[^0-9]/g, ""));
      console.log(typeof(this.newPrice))
    }
  }
};
</script>

<style lang="scss" scoped></style>
