<template>
  <v-app class="wrapper">
    <TheFunctionsTheAPICalls />
    <SnackbarsTheErrorLogger />
    <SnackbarsTheSuccessLogger />
    <TheFunctionsTheAuthenticationChecker />
    <v-toolbar flat>
      <v-app-bar-nav-icon
        class="hidden-lg-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <v-toolbar-title
        ><nuxt-link to="/" class="blue--text"
          >Real Estate Ja</nuxt-link
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <div class="d-flex mr-0 mr-md-5 d-sm-flex">
        <v-btn
          :class="{ 'd-none': $vuetify.breakpoint.mdAndDown }"
          v-for="(route, index) in routes"
          :key="'mainNavigation' + index"
          :text="route.text"
          :dark="route.dark"
          :color="route.color"
          :outlined="route.outline"
          :depressed="route.depressed"
          link
          :to="{ name: route.route }"
        >
          {{ route.title }}
        </v-btn>

        <v-menu
          v-if="!userAthenticated"
          offset-y
          :close-on-content-click="closeOnContentClick"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              depressed
              rounded
              v-bind="attrs"
              v-on="on"
              color="green accent-4"
              @click="
                login({
                  email: 'test@test.com',
                  password: '12345678'
                })
              "
              ><v-icon>mdi-account</v-icon> Dashboard
            </v-btn>
          </template>

          <v-list dense nav>
            <v-list-item-group
              v-model="signInDropDown"
              active-class="green--text text--accent-4"
            >
              <v-list-item class="text-uppercase" :to="{ name: 'signup' }">
                <v-list-item-title>Sign Up</v-list-item-title>
              </v-list-item>

              <v-dialog transition="dialog-bottom-transition" max-width="400">
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item v-bind="attrs" v-on="on" class="text-uppercase">
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
                        <nuxt-link :to="{ name: 'reset-password' }"
                          >Reset Password</nuxt-link
                        >
                      </p>

                      <v-btn
                        :loading="loading"
                        color="success"
                        depressed
                        block
                        type="submit"
                        >Login</v-btn
                      >
                    </v-form>
                    <p class="middle-text mt-3 grey--text">or</p>

                    <v-btn block large depressed @click="googleLogin">
                      <img
                        :src="require('~/assets/images/svg/google.svg')"
                        width="30"
                        height="30"
                        class="mr-3 "
                      />
                      Login with Google
                    </v-btn>
                  </v-card>
                </template>
              </v-dialog>
            </v-list-item-group>
          </v-list>

          <v-sheet>
            <v-switch
              @click="toggleTheme"
              :input-value="colorTheme"
              class="px-2 pt-0 mt-0"
              inset
              label="Dark Mode"
              color="green accent-4"
            ></v-switch
          ></v-sheet>
          <TheCurrencySelector class="pb-3" />
        </v-menu>
        <v-menu
          v-else
          max-width="150px"
          offset-y
          :close-on-content-click="closeOnContentClick"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              depressed
              rounded
              v-bind="attrs"
              v-on="on"
              color="green accent-4"
              ><v-icon class="mr-1">mdi-account</v-icon>
              <span v-if="profile.personalDetails.firstName">{{
                profile.personalDetails.firstName
              }}</span>
              <span v-else>{{ profile.personalDetails.displayName }}</span>
            </v-btn>
          </template>

          <v-list dense nav>
            <v-list-item-group
              v-model="signInDropDown"
              active-class="green--text text--accent-4"
            >
              <v-list-item class="text-uppercase" :to="{ name: 'dashboard' }">
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item>
              <!--     <v-list-item
                class="text-uppercase"
                :to="{ name: 'dashboard-settings' }"
              >
                <v-list-item-title>Profile</v-list-item-title>
              </v-list-item> -->
            </v-list-item-group>
          </v-list>

          <v-sheet>
            <v-switch
              @click="toggleTheme"
              :input-value="colorTheme"
              class="px-2 pt-0 mt-0"
              inset
              label="Dark Mode"
              color="green accent-4"
            ></v-switch
          ></v-sheet>
          <TheCurrencySelector class="mb-0" />
          <v-list class="mt-0" dense nav>
            <v-list-item-group
              v-model="signInDropDown"
              active-class="green--text text--accent-4"
            >
              <v-list-item class="text-uppercase" @click="logout">
                <v-list-item-title class="red--text d-flex align-center">
                  Logout</v-list-item-title
                >
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
    <v-divider></v-divider>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item>
        <v-list-item-avatar>
          <img
            :src="require('~/assets/images/jamaican-flag.png')"
            alt="Jamaican flag"
            width="40px"
            height="40px"
          />
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
          v-if="!userAthenticated"
        >
          <v-list-item
            v-for="(route, index) in routes"
            :key="'navigationDrawer' + index"
            link
            class="text-capitalize"
            :to="{ name: route.route }"
            exact
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
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                  <p>
                    <nuxt-link :to="{ name: 'reset-password' }"
                      >Reset Password</nuxt-link
                    >
                  </p>
                  <v-btn color="success" depressed block type="submit"
                    >Login</v-btn
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
                  Login with Google
                </v-btn>
              </v-card>
            </template>
          </v-dialog>
        </v-list-item-group>

        <v-list-item-group
          v-model="group"
          active-class="green--text text--accent-4"
          v-else
        >
          <v-list-item
            v-for="(route, index) in mobileRoutes"
            :key="'navigationDrawer' + index"
            link
            class="text-capitalize"
            :to="{ name: route.route }"
            exact
          >
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="ma-0 pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "default",
  data() {
    return {
      drawer: null,
      group: null,
      show1: false,
      valid: false,
      credentials: {
        email: "",
        password: ""
      },
      signInDropDown: null,
      closeOnContentClick: false,
      mobileRoutes: [
        {
          title: "dashboard",
          route: "dashboard",
          icon: "mdi-apps",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
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
          icon: "mdi-key-chain-variant ",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
        {
          title: "sell",
          route: "dashboard-add-property",
          icon: "mdi-account-key-outline",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },

        {
          title: "add property",
          route: "dashboard-add-property",
          icon: "mdi-home-import-outline",
          depressed: true,
          text: true
        },
        {
          title: "Parishes",
          route: "parish",
          icon: "mdi-home-variant-outline",
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
          title: "featured",
          route: "featured",
          icon: "mdi-star-outline",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
        {
          title: "contact",
          route: "contact",
          icon: "mdi-email-outline",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        }
      ],
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
          icon: "mdi-key-chain-variant ",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
        {
          title: "sell",
          route: "dashboard-add-property",
          icon: "mdi-account-key-outline",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },

        {
          title: "add property",
          route: "dashboard-add-property",
          icon: "mdi-home-import-outline",
          depressed: true,
          text: true
        },
        {
          title: "Parishes",
          route: "parish",
          icon: "mdi-home-variant-outline",
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
          icon: "mdi-email-outline",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        }
      ]
    };
  },

  methods: {
    ...mapActions({
      getIpAddress: "api/api/getIPAddress",
      getIpInfo: "api/api/getIPInfo",
      toggleTheme: "colorTheme/colorTheme/toggleTheme",
      login: "authentication/authentication/login",
      logout: "authentication/authentication/logout",
      googleLogin: "authentication/authentication/googleLogin"
    }),
    numberWithCommas(x) {
      x = Math.round((x + Number.EPSILON) * 100) / 100;

      x = x.toString();
      let pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
      return x;
    },

    validate() {
      if (this.$refs.form.validate()) {
        // console.log("valid");
        this.login(this.credentials);
      } else {
        // console.log("not");
      }
    },
    authSwitcher(x) {
      if (x === "Login") {
        this.authState = x;
      } else {
        this.authState = x;
      }
    }
  },
  computed: {
    ...mapGetters({
      ipAddress: "api/api/ipAddress",
      country: "api/api/country",
      currencies: "api/api/currencies",
      currencyRate: "api/api/currencyRate",
      colorTheme: "colorTheme/colorTheme/theme",
      profile: "dashboard/profile/profile",
      userAthenticated: "dashboard/profile/userAthenticated",
      passwordRules: "inputRules/inputRules/passwordRules",
      emailRules: "inputRules/inputRules/emailRules",
      loading: "authentication/authentication/loading"
    })
  }
};
</script>
