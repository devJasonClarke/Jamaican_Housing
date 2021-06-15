<template>
  <v-container>
    <v-row>
      <v-col cols="12" class=" pb-0 text-center text-sm-left">
        <p
          class="mb-1 text-subtitle-1 font-weight-bold text-uppercase section-titles-Subtitle"
        >
          {{ subTitle }}
        </p>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="d-flex justify-space-between flex-column flex-sm-row pt-0 text-center text-sm-left"
      >
        <p class="text-h5  pr-2 sub-title">
          {{ mainTitle }}
        </p>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
        class="d-flex align-center justify-center flex-column flex-row pt-0 mt-3 mt-sm-0"
      >
        <v-btn x-large dark depressed color="green accent-4"
          >Create Your Account
          <v-icon right dark>
            mdi-account-plus
          </v-icon></v-btn
        >
        <p class="text-center mt-3 ">It's Free!</p>

        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    subTitle: {
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

<style lang="scss" scoped>
.section-titles-Subtitle {
  letter-spacing: 3px !important ;
  color: var(--primary-green);
}
</style>
