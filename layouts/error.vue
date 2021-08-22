<template>
  <v-container class="error-background ma-0 pa-0 d-flex justify-center align-center flex-column text-center" fluid>
    <h1 class="text-h3 text-md-h1 white--text" v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 class="text-h3 text-md-h1" v-else>
      {{ otherError }}
    </h1>

    <v-btn link nuxt :to="{name: 'index'}" flat dark color="green" class="mt-9">
      Return to home page
    </v-btn>
  </v-container>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "404 Property Not Found",
      otherError: "An unknown error has occurred"
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 20px;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

</style>
