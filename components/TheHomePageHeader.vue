<template>
  <div>
    <v-img
      :src="img"
      class="header-img"
      gradient="to top right, rgba(0,0,0,.3), rgba(0,0,0,.2)"
    >
      <v-container class="d-flex align-center header-text-container">
        <div class="mb-16 max-width">
          <h1
            :class="{
              'text-h2 text-sm-h1 white--text font-weight-bold':
                $vuetify.breakpoint.xsOnly
            }"
          >
            Let us guide you
            home
          </h1>
          <p class="mt-4 mt-sm-1">Discover the best offers on the Jamaican real estate market.</p>
        </div>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import img from "~/assets/images/houses/3.jpg"; 
export default {
  data() {
    return {
      img: img
    };
  }
};
</script>

<style lang="scss" scoped>
.max-width{
  width: 535px;
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

@media screen and (max-width: 536px) {
  .max-width{
  max-width: 535px;
}
}
</style>
