<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-card
      min-width="300"
      max-width="410"
      class="py-sm-6 px-sm-9 pa-6 mx-auto"
      elevation="0"
    >
      <v-card-title
        class="px-0 text-h4 font-weight-bold d-flex justify-space-between align-center"
      >
        <span>{{ authState }}</span>
        <v-btn
          elevation="0"
          fab
          dark
          small
          color="success"
          nuxt
          :to="{ name: 'index' }"
          ><v-icon color="white">mdi-home</v-icon>
        </v-btn>
      </v-card-title>
      <p class="px-0 body-1 grey--text text--darken-1">
        Welcome back! Great to see that you're onboard.
      </p>
      <v-form
        ref="form"
        v-model="valid"
        @submit.prevent="validate"
        lazy-validation
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
        <p>
          <nuxt-link :to="{ name: 'reset-password' }">Reset Password</nuxt-link>
        </p>

        <v-btn
          :loading="loading"
          large
          color="success"
          depressed
          block
          type="submit"
          
          >{{ authState }}</v-btn
        >
      </v-form>
      <p class="middle-text mt-3 grey--text">or</p>

      <v-btn block large depressed @click="googleLogin">
        <img
          :src="require('~/assets/images/svg/google.svg')"
          width="30px"
          height="30px"
          class="mr-3 "
        />
        {{ authState }} with Google
      </v-btn>

      <p class="mt-6">
        Don't have an account?
        <nuxt-link :to="{ name: 'signup' }">Sign Up</nuxt-link>
      </p>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "signin",
  data() {
    return {
      title: "Login | Real Estate Ja",
      description: "Login",
      authState: "Login",

      show1: false,
      credentials: {
        email: "test@test.com",
        password: "12345678"
      },
      valid: false
    };
  },
  methods: {
    ...mapActions({
      login: "authentication/authentication/login",
      googleLogin: "authentication/authentication/googleLogin"
    }),
    validate() {
      if (this.$refs.form.validate()) {
        // console.log("valid");
        this.login(this.credentials);
      } else {
        // console.log("not");
      }
    }
  },
  computed: {
    ...mapGetters({
      passwordRules: "inputRules/inputRules/passwordRules",
      emailRules: "inputRules/inputRules/emailRules",
      loading: "authentication/authentication/loading"
    })
  }
};
</script>
