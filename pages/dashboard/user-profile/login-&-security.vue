<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Login & security</h1>
    <SectionPadding>
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
            Feel free to reset your password if you forgot it or would like to change it.
          </p>
          <v-form ref="descriptionForm" @submit.prevent="validateFields">
            <v-row
              ><v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-lock-outline"
                  label="Enter New Password*"
                  required
                  v-model="firstName"
                  :color="iconColor"
                  :rules="nameRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-lock-outline"
                  label="Confirm Password *"
                  required
                  v-model="lastName"
                  :color="iconColor"
                  :rules="nameRules"
                ></v-text-field
              ></v-col>
     
            </v-row>
            <v-btn
              color="success"
              type="submit"
              :disabled="disableUpdateAccount"
              :loading="updateDetailsLoader"
              >Save</v-btn
            >
          </v-form>
        </v-tab-item>
      </v-tabs-items>
    </SectionPadding>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "dashboard",
  data() {
    return {
      tab: null,
      items: ["Password Reset"],
      iconColor: "rgba(0, 200, 83)"
    };
  },
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
