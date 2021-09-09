<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Account Details</h1>

    <!--     {{ email }} <br />
    {{ firstName }} <br />
    {{ lastName }} <br />
     {{about}} <br />
    {{ phoneNumber }} <br />
    {{ whatsapp }} <br />
    {{ website }} <br />
    {{ linkedIn }} <br />
    {{ facebook }} <br />
    {{ youtube }} <br />
    {{ instagram }} <br /> -->
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
            Please enter your information.
          </p>
          <p class="text-body-2 mb-12">
            The information entered here will be accessible
            to users who are interested in your property.
          </p>
          <v-form ref="descriptionForm" @submit.prevent="validateFields">
            <v-row
              ><v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-account"
                  label="First Name*"
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
                  prepend-icon="mdi-account"
                  label="Last Name *"
                  required
                  v-model="lastName"
                  :color="iconColor"
                  :rules="nameRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-email"
                  label="Email Address *"
                  required
                  v-model="email"
                  :color="iconColor"
                  :rules="emailRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-phone"
                  label="Phone Number *"
                  required
                  v-model.number="phoneNumber"
                  :color="iconColor"
                  type="number"
                  :rules="phoneNumberRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  dense
                    v-model="about"
                  prepend-icon="mdi-text"
                  clearable
                  clear-icon="mdi-close-circle"
                  label="About Me (Optional)"
                  counter
                  maxlength="250"
                  required
                  :color="iconColor"
                ></v-textarea
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-check-decagram"
                  label="Account Verified"
                  required
                  v-model="profile.verified"
                  :color="iconColor"
                  disabled
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-card-bulleted-outline"
                  label="Real Estate Ja User ID"
                  required
                  v-model="profile.uid"
                  :color="iconColor"
                  disabled
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6" v-if="profile.verified === true">
                <v-text-field
                  outlined
                  prepend-icon="mdi-image"
                  dense
                  label="Upload Profile Picture *"
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

        <v-tab-item>
                  <p class="text-h6 ">
            Please enter your information.
          </p>
          <p class="text-body-2 mb-12">
              The information entered here will be accessible
            to users who are interested in your property.
          </p>
          <v-form ref="socialMediaForm" @submit.prevent="validateSocial">
            <v-row
              ><v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  label="Facebook Account URL (optional)"
                  required
                  prepend-icon="mdi-facebook"
                  validate-on-blur
                  v-model="facebook"
                  :color="iconColor"
                  :rules="websiteRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  prepend-icon="mdi-instagram"
                  dense
                  label="Instagram Account URL (optional)"
                  required
                  validate-on-blur
                  v-model="instagram"
                  :color="iconColor"
                  :rules="websiteRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-linkedin"
                  label="LinkedIn Account URL (optional)"
                  required
                  validate-on-blur
                  v-model="linkedIn"
                  :color="iconColor"
                  :rules="websiteRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-youtube"
                  label="Youtube Account URL (optional)"
                  required
                  validate-on-blur
                  v-model="youtube"
                  :color="iconColor"
                  :rules="websiteRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  prepend-icon="mdi-whatsapp"
                  dense
                  validate-on-blur
                  label="Whatsapp Number (optional)"
                  required
                  v-model="whatsapp"
                  :rules="whatsappNumberRules"
                  :color="iconColor"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  prepend-icon="mdi-web"
                  dense
                  validate-on-blur
                  label="Website URL (optional)"
                  v-model="website"
                  :color="iconColor"
                  :rules="websiteRules"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-btn
              color="success"
              type="submit"
              :disabled="disableUpdateSocial"
              :loading="updateSocialLoader"
              >Save</v-btn
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
  async fetch() {},

  data() {
    return {
      tab: null,
      items: ["Account Details", "Social Media"],
      disableUpdateAccount: false,
      disableUpdateSocial: false,
      iconColor: "rgba(0, 200, 83)"
    };
  },
  computed: {
    title() {
      return `${this.profile.name.displayName} | Account Info`;
    },
    description() {
      return `${this.profile.name.displayName} Account Info`;
    },
    ...mapGetters({
      profile: "profile/profile",
      nameRules: "inputRules/nameRules",
      descriptionRules: "inputRules/descriptionRules",
      emailRules: "inputRules/emailRules",
      websiteRules: "inputRules/websiteRules",
      phoneNumberRules: "inputRules/phoneNumberRules",
      whatsappNumberRules: "inputRules/whatsappNumberRules",
      updateDetailsLoader: "profile/updateDetailsLoader",
      updateSocialLoader: "profile/updateSocialLoader"
    }),
    email: {
      get() {
        return this.profile.contact.email;
      },
      set(value) {
        this.setEmail(value);
      }
    },
    firstName: {
      get() {
        return this.profile.name.firstName;
      },
      set(value) {
        this.setFirstName(value);
      }
    },
    about: {
      get() {
        return this.profile.about;
      },
      set(value) {
        this.setAbout(value);
      }
    },
    lastName: {
      get() {
        return this.profile.name.lastName;
      },
      set(value) {
        this.setLastName(value);
      }
    },
    phoneNumber: {
      get() {
        return this.profile.contact.phoneNumber;
      },
      set(value) {
        this.setPhoneNumber(value);
      }
    },
    whatsapp: {
      get() {
        return this.profile.contact.whatsappNumber;
      },
      set(value) {
        this.setwhatsappNumber(value);
      }
    },
    website: {
      get() {
        return this.profile.contact.website;
      },
      set(value) {
        this.setwebsite(value);
      }
    },
    facebook: {
      get() {
        return this.profile.socialMedia.facebook;
      },
      set(value) {
        this.setFacebook(value);
      }
    },
    instagram: {
      get() {
        return this.profile.socialMedia.instagram;
      },
      set(value) {
        this.setInstagram(value);
      }
    },
    linkedIn: {
      get() {
        return this.profile.socialMedia.linkedIn;
      },
      set(value) {
        this.setLinkedIn(value);
      }
    },

    youtube: {
      get() {
        return this.profile.socialMedia.youtube;
      },
      set(value) {
        this.setYoutube(value);
      }
    }
  },
  methods: {
    ...mapActions({
      setEmail: "profile/setEmail",
      setFirstName: "profile/setFirstName",
      setLastName: "profile/setLastName",
      setAbout: "profile/setAbout",
      setPhoneNumber: "profile/setPhoneNumber",
      setwhatsappNumber: "profile/setwhatsappNumber",
      setwebsite: "profile/setwebsite",
      setFacebook: "profile/setFacebook",
      setInstagram: "profile/setInstagram",
      setLinkedIn: "profile/setLinkedIn",
      setYoutube: "profile/setYoutube",
      updateAccountDetails: "profile/updateAccountDetails",
      updateAccountSocials: "profile/updateAccountSocials"
    }),
    validateFields() {
      if (this.$refs.descriptionForm.validate()) {
        this.updateAccountDetails();
        console.log("validate details");
        this.disableUpdateAccount = !this.disableUpdateAccount;
        setTimeout(
          () => (this.disableUpdateAccount = !this.disableUpdateAccount),
          10000
        );
      } else {
      }
    },
    validateSocial() {
      if (this.$refs.socialMediaForm.validate()) {
        this.updateAccountSocials();
        console.log("validate social");
        this.disableUpdateSocial = !this.disableUpdateSocial;
        setTimeout(
          () => (this.disableUpdateSocial = !this.disableUpdateSocial),
          10000
        );
      } else {
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
