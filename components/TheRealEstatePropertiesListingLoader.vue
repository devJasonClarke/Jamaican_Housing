<template>
        <v-container>
        <p class="text-body mb-6">Real Estate For {{title}}</p>

        <v-row>
          <v-col v-for="index in 8" :key="index+'a'" cols="12" sm='4' md="3" class="mb-4">
                  <v-sheet
  
    class="pa-3 rounded-lg"
  >
    <v-skeleton-loader
      class="mx-auto "
  
      type="image,article"
    ></v-skeleton-loader>
  </v-sheet>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required:true
    }
  },
}
</script>

<style>

</style>