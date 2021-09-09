<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-card
      min-width="300"
      max-width="410"
      class="py-sm-6 px-sm-9 pa-6 mx-auto"
      elevation="0"
    >
      <v-card-title class="px-0 text-h4 font-weight-bold">
        Reset Password
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
          v-model="email"
          label="Email address"
          required
          outlined
          dense
          class="mt-6"
          color="green accent-4"
        ></v-text-field>

        <v-btn v-if="sent" large color="success" depressed block
          >Sent <v-icon class="ml-3">mdi-check-circle-outline</v-icon>
        </v-btn>
        <v-btn v-else :loading="loading" large color="success" depressed block
          >Send Email</v-btn
        >
      </v-form>

      <p class="mt-6">
        Remember your password?
        <nuxt-link :to="{ name: 'login' }">Login</nuxt-link>
      </p>
    </v-card>
    <div class="">
      <v-snackbar v-model="error" :timeout="20000" left>
        {{ errorMessage }}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="error = !error">
            Close
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar v-model="sent" :timeout="20000" bottom>
        Password reset sent! Check your email.

        <template v-slot:action="{ attrs }">
          <v-btn color="green" text v-bind="attrs" @click="sent = !sent">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "signin",
  data() {
    return {
      title: "Reset Password | Real Estate Ja",
      description: "Reset Password ",
      authState: "Reset Password ",
      email: "",
      credentials: {
        email: "",
        password: ""
      },
      valid: false,
      loading: false,
      error: false,
      sent: false,
      errorMessage: "",
      success: false
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log("valid");
        this.sendCode(this.email);
      } else {
        console.log("not");
      }
    },
    sendCode(email) {
      this.loading = true;
      this.$fireModule
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          // Password reset email sent!
          // ..
          this.loading = false;
          console.log("sent to email");
          this.sent = true;
          this.email = "";
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
          this.error = true;
          this.errorMessage = errorMessage;
          this.loading = false;
          console.log(error);
          console.log("error to email");
        });
    }
  },
  computed: {
    ...mapGetters({
      emailRules: "inputRules/emailRules"
    })
  }
};
</script>
