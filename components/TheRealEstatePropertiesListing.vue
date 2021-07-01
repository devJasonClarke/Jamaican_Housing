<template>
  <v-container>
    <p class="text-body mb-6">{{ title }}</p>

    <v-row>
      <v-col
      v-for="(property, index) in card"
        :key="index"
        cols="12"
        sm="4"
        md="3"
        class="mb-4"
      >
        <TheCard :card="property"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    card: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      iconColor: "rgba(0, 200, 83, 0.5)"
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  transition: 0.4s all ease;
  &:hover {
    transform: scale(1.04);
  }
}
</style>
