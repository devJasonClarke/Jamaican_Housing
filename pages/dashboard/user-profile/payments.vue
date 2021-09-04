<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Payments</h1>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "dashboard",
  computed: {
    ...mapGetters({
      profile: "profile/profile"
    }),
    title() {
      return `${this.profile.name.displayName} | Payments`;
    },
    description() {
      return `${this.profile.name.displayName} payments.`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
