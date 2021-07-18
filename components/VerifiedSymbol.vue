<template>
  <v-tooltip color="blue" top>
    <template v-slot:activator="{ on, attrs }">
      <v-icon color="blue" dark v-bind="attrs" v-on="on">
        mdi-check-decagram
      </v-icon>
    </template>
    <span class="text-capitalize">Verified {{role}}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    role: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
