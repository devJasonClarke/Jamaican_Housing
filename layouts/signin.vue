<template>
  <v-app>
    <TheAuthenticationChecker />
    <TheErrorLogger />
    <TheSuccessLogger />
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://www.countryflags.io/jm/flat/64.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="gn">Real Estate JA</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item-group
          v-model="group"
          active-class="green--text text--accent-4"
        >
          <v-list-item
            v-for="(route, index) in routes"
            :key="'navigationDrawer' + index"
            link
            class="text-capitalize"
            :to="{ name: route.route }"
          >
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item>
          <v-list-item class="text-uppercase" :to="{ name: 'signup' }">
            <v-list-item-title>
              <v-list-item-icon>
                <v-icon>mdi-cellphone-link</v-icon>
              </v-list-item-icon>
              Sign Up</v-list-item-title
            >
          </v-list-item>

          <v-dialog transition="dialog-bottom-transition" max-width="400">
            <template v-slot:activator="{ on, attrs }">
              <v-list-item v-bind="attrs" v-on="on" class="text-uppercase">
                <v-list-item-icon>
                  <v-icon>mdi-login-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Login</v-list-item-title>
              </v-list-item>
            </template>
            <template v-slot:default="dialog">
              <v-card max-width="400" class="pa-6">
                <div class="d-flex justify-end">
                  <v-btn fab text small @click="dialog.value = false"
                    ><v-icon>mdi-close</v-icon></v-btn
                  >
                </div>
                <v-card-title class="px-0 text-h4">
                  Login
                </v-card-title>
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
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                  <v-btn color="success" depressed block>Login</v-btn>
                </v-form>
                <p class="middle-text mt-3 grey--text">or</p>
                <v-btn block large depressed>
                  <v-img
                    :src="require('~/assets/images/svg/google.svg')"
                    max-width="30"
                    class="mr-3 "
                  />
                  Login with Google
                </v-btn>
              </v-card>
            </template>
          </v-dialog>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main
      class="d-flex justify-center align-center pa-sm-3 py-6 px-3 full-height"
    >
      <v-container fluid class="ma-0 pa-0">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: ["signup"],
  data() {
    return {
      drawer: null,
      group: null,
      email: null,
      password: null,
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
      ],
      signInDropDown: null,
      closeOnContentClick: false,

      routes: [
        {
          title: "buy",
          route: "buy",
          icon: "mdi-bank",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
        {
          title: "rent",
          route: "rent",
          icon: "mdi-currency-usd-circle-outline",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
        {
          title: "sell",
          route: "dashboard",
          icon: "mdi-currency-usd",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },

        {
          title: "add a property",
          route: "dashboard",
          icon: "mdi-view-dashboard",
          depressed: true,
          text: true
        },
        {
          title: "blog",
          route: "blog",
          icon: "mdi-newspaper-variant-multiple-outline",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
        {
          title: "contact",
          route: "contact",
          icon: "mdi-email",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.full-height {
  min-height: 100vh;
  background-image: url("~/assets/images/house.jpg");
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
