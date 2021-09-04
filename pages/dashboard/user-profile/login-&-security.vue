<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Login & security</h1>
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
      return `${this.profile.name.displayName} | Login & security`;
    },
    description() {
      return `${this.profile.name.displayName} login & security`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
