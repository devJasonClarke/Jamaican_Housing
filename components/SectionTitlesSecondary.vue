<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="pa-md-0">
        <h1 class="text-h4 text-sm-h3 font-weight-bold text-capitalize">
          {{ mainTitle }}
        </h1>
      </v-col>
      <v-col cols="12" sm="9" class=" px-md-0 pb-0 pt-md-6 ">
        <p
          class="text-body-1 text-sm-h6 text-capitalize font-weight-regular grey--black text--lighten-5 mb-0"
        >
         {{paragraph}}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    mainTitle: {
      type: String,
      required: true
    },
    paragraph: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
