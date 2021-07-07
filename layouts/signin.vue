<template>
   <v-app>
   <v-main class="d-flex justify-center align-center pa-sm-3 py-6 px-3 full-height">
      <v-container fluid class="ma-0 pa-0">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.full-height {
  min-height: 100vh;
  background-image: url('~/assets/images/house.jpg');
}
</style>