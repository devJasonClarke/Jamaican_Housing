<template>
  <div>
    <v-img
      :src="img"
      class="header-img"
      gradient="to top right, rgba(0,0,0,.35), rgba(0,0,0,.35)"
    >
      <v-container class="d-flex align-center header-text-container">
        <div class="mb-16">
          <h1
          
               :class="{ 'text-h2 text-sm-h1 white--text font-weight-bold': $vuetify.breakpoint.xsOnly  }"
           
          >
            Let us guide you <br />
            home
          </h1>
          <p>Discover the best offers on the Jamaican real estate market.</p>
        </div>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import img from "~/assets/images/house.jpg";
export default {
  data() {
    return {
      img: img
    };
  }
};
</script>

<style lang="scss" scoped>
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
