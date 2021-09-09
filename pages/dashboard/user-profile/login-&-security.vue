<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Login & security</h1>
    <SectionPadding>
      {{ firstPassword }}
      {{ secondPassword }}
      <v-tabs
        v-model="tab"
        background-color="transparent"
        :color="iconColor"
        show-arrows
      >
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="py-12 px-6">
        <v-tab-item>
          <p class="text-h6 ">
            Reset your Real Estate Ja password.
          </p>
          <p class="text-body-2 mb-12">
            Feel free to reset your password.
          </p>
          <v-form ref="descriptionForm" @submit.prevent="sendCode">
            <v-btn v-if="sent" large color="success" depressed
              >Sent <v-icon class="ml-3">mdi-check-circle-outline</v-icon>
            </v-btn>
            <v-btn color="success" :loading="loading" type="submit" v-else
              >Send Password Reset Email</v-btn
            >
          </v-form>
        </v-tab-item>
      </v-tabs-items>
    </SectionPadding>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "dashboard",
  data() {
    return {
      tab: null,
      items: ["Password Reset"],
      iconColor: "rgba(0, 200, 83)",
      firstPassword: "",
      secondPassword: "",
      loading: false,
      sent: false
    };
  },
  methods: {
    ...mapActions({
      logError: "errors/logError",
      logSuccess: "success/logSuccess"
    }),
    sendCode() {
      this.loading = true;

      this.$fireModule.auth().onAuthStateChanged(user => {
        if (user) {
          this.$fireModule
            .auth()
            .sendPasswordResetEmail(user.email)
            .then(() => {
              // Password reset email sent!
              // ..
              this.loading = false;
              this.logSuccess(
                "Please check your email for the link to reset your password."
              );
              console.log("sent to email");
              this.sent = true;
            })
            .catch(error => {
              var errorMessage = error.message;
              // ..
              this.logError(errorMessage);
              this.loading = false;
            });
        }
      });
    }
  },
  computed: {
    ...mapGetters({
      profile: "profile/profile"
    }),
    title() {
      return `${this.profile.personalDetails.displayName} | Login & security | Dashboard`;
    },
    description() {
      return `${this.profile.personalDetails.displayName} login & security`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
