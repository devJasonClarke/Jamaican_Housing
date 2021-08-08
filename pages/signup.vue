<template>
  <div>
    <TheMetaTags :title="title" :description="description" />

    <v-card
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
      <v-form ref="form" v-model="valid" lazy-validation>
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

        <v-btn
          large
          color="success"
          :loading="loading"
          depressed
          block
          @click="validate"
          >{{ authState }}</v-btn
        >
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
      credentials: {
        email: "",
        password: ""
      },

      loading: false,
      show1: false,
      valid: false,
      errorMessage: "",
      error: "",

      passwordRules: [
        value => !!value || "Required.",
        value => (value || "").length >= 8 || "Min 8 characters"
      ],
      emailRules: [
        value => !!value || "Required.",
        value => (value || "").length <= 100 || "Max 100 characters",
        value =>
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            value
          ) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    ...mapActions({
      signup: "authentication/signup"
    }),
    validate() {
      if (this.$refs.form.validate()) {
        console.log("valid");
        this.signup(this.credentials);
      } else {
        console.log("not");
      }
    }
  },
  computed: {
    ...mapGetters({
      user: "authentication/user"
    })
  }
};
</script>
