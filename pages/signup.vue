<template>
  <div>
    <TheMetaTags :title="title" :description="description" />

    <v-card
      v-show="!profileSetup"
      min-width="300"
      max-width="450"
      class="py-sm-6 px-sm-9 pa-6 mx-auto"
      elevation="0"
    >
      <v-card-title class="px-0 text-h4 font-weight-bold">
        {{ authState }} {{ user }}
      </v-card-title>
      <p class="px-0 body-1 grey--text text--darken-1">
        We won't charge you a milion dollars, It's Free! Discover the best
        opportunities around you or add your own.
      </p>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="validate"
      >
        <v-text-field
          :rules="emailRules"
          v-model="credentials.email"
          label="Email address"
          required
          outlined
          dense
          class="mt-6"
          color="green accent-4"
        ></v-text-field>
        <v-text-field
          v-model="credentials.password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          :type="show1 ? 'text' : 'password'"
          class="mt-1"
          color="green accent-4"
          name="input-10-1"
          outlined
          dense
          required
          label="Password"
          hint="At least 8 characters"
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-btn large color="success" depressed block type="submit">{{
          authState
        }}</v-btn>
      </v-form>
      <p class="middle-text mt-3 grey--text">or</p>

      <v-btn block large depressed>
        <v-img
          :src="require('~/assets/images/svg/google.svg')"
          max-width="30"
          class="mr-3 "
        />
        {{ authState }} with Google
      </v-btn>

      <v-divider class="my-6"></v-divider>
      <p>
        Already have an account?
        <nuxt-link :to="{ name: 'login' }">Login</nuxt-link>
      </p>
      <v-divider class="my-6"></v-divider>

      <p class=" body-2 grey--text text--darken-1 ">
        By signing up you agree to Jamaica Housing's
        <nuxt-link :to="{ name: 'terms-of-conditions' }"
          >Terms and Conditions</nuxt-link
        >
        and
        <nuxt-link :to="{ name: 'privacy-policy' }">Privacy Policy</nuxt-link>.
      </p>
    </v-card>

    <v-stepper
      v-model="cur"
      alt-labels
      class=" mx-auto"
      v-show="profileSetup"
      max-width="450"
    >
      <v-stepper-header>
        <v-stepper-step :color="iconColor" step="1" :complete="cur > 1">
          Name
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :color="iconColor" step="2">
          Confirm Details
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1" class="pb-6">
          <v-container>
            <p class="text-h5 pb-6">Name</p>
            <v-form
              v-model="validForm"
              @submit.prevent="validateForm"
              ref="detailsForm"
            >
              <v-row>
                <v-col cols="">
                  <v-text-field
                    outlined
                    dense
                    v-model="credentials.firstName"
                    :rules="nameRules"
                    label="First Name *"
                    required
                    :color="iconColor"
                  ></v-text-field
                ></v-col>
                <v-col cols="12">
                  <v-text-field
                    outlined
                    dense
                    v-model="credentials.lastName"
                    :rules="nameRules"
                    label="Last Name *"
                    required
                    :color="iconColor"
                  ></v-text-field
                ></v-col>
                <!--      <v-col cols="12">
                  <v-text-field
                    outlined
                    dense
                    v-model="phoneNumber"
                    :rules="phoneNumberRules"
                    type="number"
                    label="Phone Number (optional)"
                    :color="iconColor"
                  ></v-text-field
                ></v-col>
                <v-col cols="12">
                  <v-text-field
                    outlined
                    dense
                    v-model="whatsappNumber"
                    :rules="phoneNumberRules"
                    type="number"
                    label="Whatsapp Number (optional)"
                    :color="iconColor"
                  ></v-text-field
                ></v-col> -->
              </v-row>
              <v-btn dark :color="iconColor" type="submit">
                Continue
              </v-btn>
            </v-form>
          </v-container>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-container>
            <p class="text-h5 pb-6">Confirm Details</p>
            <v-form
              v-model="formDetails"
              @submit.prevent="confirmFormDetails"
              ref="confirmFormDetails"
            >
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    outlined
                    dense
                    v-model="credentials.firstName"
                    :rules="nameRules"
                    label="First Name *"
                    required
                    :color="iconColor"
                  ></v-text-field
                ></v-col>
                <v-col cols="12">
                  <v-text-field
                    outlined
                    dense
                    v-model="credentials.lastName"
                    :rules="nameRules"
                    label="Last Name *"
                    required
                    :color="iconColor"
                  ></v-text-field
                ></v-col>
                <v-col cols="12">
                  <v-text-field
                    :rules="emailRules"
                    v-model="credentials.email"
                    label="Email address"
                    required
                    outlined
                    dense
                    color="green accent-4"
                  ></v-text-field
                ></v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="credentials.password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passwordRules"
                    :type="show1 ? 'text' : 'password'"
                    color="green accent-4"
                    name="input-10-1"
                    outlined
                    dense
                    required
                    label="Password"
                    hint="At least 8 characters"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
              </v-row>
              <div class="mt-3">
                <v-btn dark :loading="loading" :color="iconColor" type="submit">
                  Sign Up
                </v-btn>
                <v-btn text @click="cur = cur - 1">
                  back
                </v-btn>
              </div>
            </v-form>
          </v-container>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <div v-if="errorMessage">
      <v-snackbar v-model="error" :timeout="20000">
        {{ errorMessage }}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="error = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "signin",
  data() {
    return {
      title: "Sign Up | Jamaica Housing",
      description: "Sign Up",
      authState: "Sign Up",
      profileSetup: false,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      whatsappNumber: "",
      credentials: {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      },
      iconColor: "rgba(0, 200, 83, 1)",
      show1: false,
      valid: false,
      cur: 1,
      validForm: false,
      formDetails: false,
      errorMessage: "",
      error: ""
    };
  },
  methods: {
    ...mapActions({
      signup: "authentication/signup"
    }),
    validate() {
      if (this.$refs.form.validate()) {
        console.log("valid 1");
        this.profileSetup = true;
      } else {
        console.log("not");
      }
    },
    validateForm() {
      if (this.$refs.detailsForm.validate()) {
        console.log("valid 2");
        this.cur++;
      } else {
        console.log("not");
      }
    },
    confirmFormDetails() {
      if (this.$refs.confirmFormDetails.validate()) {
        console.log("yes! let's go");
        this.signup(this.credentials);
      } else {
        console.log("no!");
      }
    }
  },
  computed: {
    ...mapGetters({
      user: "authentication/user",
      loading: "authentication/loading",
      nameRules: "inputRules/nameRules",
      passwordRules: "inputRules/passwordRules",
      emailRules: "inputRules/emailRules"
    })
  }
};
</script>
