<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Payment History</h1>
     <SectionPadding >
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center flex-column pa-3"
        outlined
        ><p class="text-body-1 text-sm-h6 text-center font-weight-regular">
          No payment history found.
        </p>
        <v-icon>mdi-credit-card-outline mdi-36px</v-icon>
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
      return `${this.profile.personalDetails.displayName} | Payments | Dashboard`;
    },
    description() {
      return `${this.profile.personalDetails.displayName} payments.`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
