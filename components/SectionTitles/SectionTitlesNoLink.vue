<template>
  <v-container>
    <v-row>
      <v-col cols="11" class=" pb-0">
        <p
          class="mb-1 text-subtitle-1 font-weight-bold text-uppercase section-titles-Subtitle"
        >
          {{ subTitle }}
        </p>
      </v-col>
      <v-col
        cols="12"
        class="d-flex justify-space-between flex-column flex-sm-row pt-0 align-sm-end"
      >
        <p class="text-h4 font-weight-bold pr-2">
          {{ mainTitle }}
        </p>
        <v-spacer></v-spacer>
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
