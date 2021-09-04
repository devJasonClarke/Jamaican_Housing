<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Verify Account</h1>
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
      return `${this.profile.name.displayName} | Verify Account`;
    },
    description() {
      return `Verify your account ${this.profile.name.displayName}`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
