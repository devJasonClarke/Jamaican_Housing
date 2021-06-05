<template>
  <v-container  >
    <v-row>
      <v-col cols="12" class=" pb-0 text-center">
        <p
          class="mb-1 text-subtitle-1 font-weight-bold text-uppercase section-titles-Subtitle"
        >
          {{ subTitle }}
        </p>
      </v-col>
      <v-col
        cols="12"
        class="text-center"
      >
        <p class="text-h4 font-weight-bold pr-2">
          {{ mainTitle }}
        </p>
      </v-col
      >
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
    },
    linkMessage: {
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
