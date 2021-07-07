<template>

    <v-card
      min-width="300"
      max-width="410"
      class="py-sm-6 px-sm-9 pa-6 mx-auto"
      elevation="0"
    >

      <v-card-title class="px-0 text-h4 font-weight-bold">
        {{ authState }}
      </v-card-title>
      <p class="px-0 body-1 grey--text text--darken-1">
       Welcome back! Great to see that you're onboard.
      </p>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          :rules="emailRules"
          v-model="email"
          label="Email address"
          required
          outlined
          dense
          class="mt-6"
          color="green accent-4"
        ></v-text-field>
        <v-text-field
          v-model="password"
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
        <p>Reset Password</p>
        <v-btn large color="success" depressed block @click="validate">{{
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

     
      <p class="mt-6">Don't have an account? <nuxt-link :to="{name: 'signup'}">Sign Up</nuxt-link></p>

    </v-card>

</template>

<script>
export default {
  layout: "signin",
  data() {
    return {

      authState: "Login",
      email: "",
      password: "",
      show1: false,

      valid: false,

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
    validate() {
      if (this.$refs.form.validate()) {
        console.log("valid");
      } else {
        console.log("not");
      }
    }
  }
};
</script>

