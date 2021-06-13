<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="pa-md-0">
        <h1 class="text-h3 font-weight-bold text-capitalize">
          {{ mainTitle }} In {{ location }}
        </h1>
      </v-col>
      <v-col cols="12" sm="9" class=" px-md-0 pb-0 pt-8 ">
        <p
          class="text-h6 text-capitalize font-weight-regular grey--black text--lighten-5 mb-0"
        >
          Prepare a short list of features you would like in a home, such as
          location, beds & bath's required, bearing in mind affordability and
          accommodation requirements.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    location: {
      type: String,
      required: true
    },
    mainTitle: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
