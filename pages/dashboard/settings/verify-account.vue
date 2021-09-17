<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Verify Account</h1>
    <SectionPadding class="pt-9">
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center flex-column pa-3"
        outlined
        ><p class="text-body-1 text-sm-h6 text-center font-weight-regular">
          Account not verified.
        </p>

        <v-icon>mdi-check-decagram mdi-36px</v-icon>
      </v-sheet>
    </SectionPadding>
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
      return `${this.profile.personalDetails.displayName} | Verify Account | Dashboard`;
    },
    description() {
      return `Verify your account ${this.profile.personalDetails.displayName}`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
