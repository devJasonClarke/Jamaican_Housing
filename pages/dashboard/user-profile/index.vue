<template>
  <v-container>
    <h1>User Profile</h1>
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
            <v-card flat elevation="0"  :to="{ name: item.route }">
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
export default {
  layout: "dashboard",
  data() {
    return {
      items: [
        {
          title: "Personal Info",
          text: "Manage your Personal info and settings here.",
          icon: "mdi-account-outline",
          route: "dashboard-user-profile-personal-info"
        },
        {
          title: "Login & Security",
          text: "Manage your Login & security and settings here.",
          icon: "mdi-login-variant",
          route: "dashboard-user-profile-login-&-security"
        },
        {
          title: "Verify Account",
          text: "Control what you share and what users sees it",
          icon: "mdi-check-decagram-outline",
          route: "dashboard-user-profile-verify-account"
        },
        {
          title: "Payments",
          text: "Review payments",
          icon: "mdi-credit-card-outline",
          route: "dashboard-user-profile-payments"
        }
      ],
      iconColor: "rgba(0, 200, 83)"
    };
  }
};
</script>

<style lang="scss" scoped></style>
