<template>
  <v-row>
    <v-col md="5" class="pb-0 px-16 pt-16">
       
    </v-col>
    <v-col md="7" class="pb-0">
      <v-img :src="img" height="100vh" />
    </v-col>
  </v-row>
</template>

<script>
import img from "~/assets/images/house.jpg";
export default {
  layout: "login-signup",
  data() {
    return {
      img: img
    };
  }
};
</script>

<style lang="scss" scoped></style>
