<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Account Settings</h1>
    <SectionPadding>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          class="pb-4 pr-4"
          :key="i"
          cols="12"
          sm="6"
        >
          <v-sheet outlined color="rgba(0, 200, 83, 0.2)" rounded>
            <v-card flat elevation="0" :to="{ name: item.route }">
              <v-card-text>
                <v-avatar
                  size="56"
                  color="rgba(0, 200, 83, 0.1)"
                  class="rounded-circle"
                >
                  <v-icon dark :color="iconColor">
                    {{ item.icon }} mdi-36px
                  </v-icon>
                </v-avatar></v-card-text
              >
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>{{ item.text }}</v-card-text>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </SectionPadding>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "dashboard",
  data() {
    return {
      items: [
        {
          title: "Account Info",
          text: "Manage your personal data and optimize your account here",
          icon: "mdi-account-outline",
          route: "dashboard-settings-account-info"
        },
        {
          title: "Login Security",
          text: "Manage your login & security and settings here",
          icon: "mdi-login-variant",
          route: "dashboard-settings-login-security"
        },
        {
          title: "Verify Account",
          text: "Verify your account to reap additional benefits",
          icon: "mdi-check-decagram-outline",
          route: "dashboard-settings-verify-account"
        },
        {
          title: "Payments",
          text: "Review payments",
          icon: "mdi-credit-card-outline",
          route: "dashboard-settings-payments"
        }
      ],
      iconColor: "rgba(0, 200, 83)"
    };
  },
  computed: {
    ...mapGetters({
      user: "authentication/user",
      profile: "profile/profile"
    }),
    title() {
      return `${this.profile.personalDetails.displayName} | User Profile | Settings`;
    },
    description() {
      return `The user profile for ${this.profile.personalDetails.displayName}`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
