<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Account Info</h1>
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
      return `${this.profile.name.displayName} | Account Info`;
    },
    description() {
      return `${this.profile.name.displayName} Account Info`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
