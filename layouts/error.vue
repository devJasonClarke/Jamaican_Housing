<template>
  <v-container
    class="error-background ma-0 pa-0 d-flex justify-center align-center flex-column text-center"
    fluid
  >
<div  v-if="error.statusCode === 404">
      <h1 class="text-h3 text-md-h1 white--text">
     404
    </h1>
    <p class="text-h5 text-md-h4 white--text mt-6">We've searched the entire website but could not find this page.</p>
</div>
    <h1 class="text-h3  white--text" v-else>
      {{ otherError }}
    </h1>

    <v-btn
      link
      nuxt
      :to="{ name: 'index' }"
      elevation="0"
      dark
      color="green"
      class="mt-6"
    >
      Return to home page
    </v-btn>
  </v-container>
</template>

<script>
export default {
  layout: "error",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "We have searched the entire website but could not find this page",
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
