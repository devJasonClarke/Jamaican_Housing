<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Verify Account</h1>
         <SectionPadding >
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center flex-column"
        outlined
        ><p class="text-h6 text-center font-weight-regular">
        Account not verified.
        </p>
              <v-btn
          nuxt
          :to="{ name: 'contact' }"
          dark
          color="green accent-4"
        >
          <v-icon left>mdi-check-decagram </v-icon> Contact us to verify account</v-btn
        >

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
      return `${this.profile.name.displayName} | Verify Account`;
    },
    description() {
      return `Verify your account ${this.profile.name.displayName}`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
