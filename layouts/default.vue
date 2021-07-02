<template>
  <v-app class="font">
    <TheAPICalls />
    <div>
      <nav>
        <v-toolbar flat>
          <v-app-bar-nav-icon
            class="hidden-md-and-up"
            @click.stop="drawer = !drawer"
          >
          </v-app-bar-nav-icon>
          <v-toolbar-title
            ><nuxt-link to="/">Real Estate Ja</nuxt-link></v-toolbar-title
          >

          <v-spacer></v-spacer>

          <div class="d-flex mr-0 mr-md-5 d-sm-flex">
            <v-btn
              :class="{ 'd-none': isMobile }"
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
            <v-menu offset-y :close-on-content-click="closeOnContentClick">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  depressed
                  rounded
                  v-bind="attrs"
                  v-on="on"
                  color="green accent-4"
                  ><v-icon>mdi-account</v-icon> Sign IN
                </v-btn>
              </template>

              <v-list dense nav>
                <v-list-item-group
                  v-model="signInDropDown"
                  active-class="green--text text--accent-4"
                >
                  <v-dialog
                    transition="dialog-bottom-transition"
                    max-width="400"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-list-item
                        v-for="(route, index) in signInMenu"
                        :key="'signInMenu' + index"
                        v-bind="attrs"
                        v-on="on"
                        class="text-uppercase"
                        @click="authSwitcher(route.title)"
                      >
                        <v-list-item-title>{{ route.title }}</v-list-item-title>
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
                          {{ authState }}
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
                            :rules="passwordRules"
                            v-model="password"
                            label="Password"
                            required
                            outlined
                            dense
                            class="mt-1"
                            color="green accent-4"
                          ></v-text-field>
                          <v-btn
                            color="success"
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
              <v-sheet>
                <v-select
                  :items="currencyCodeList"
                  v-model="selectedCurrency"
                  @change="setActiveCurrency(selectedCurrency)"
                  label="Currency"
                 dense
          outlined
                  class="px-2 pt-0 mt-0 mx-0 select-max-width"
                  color="green accent-4"
                  item-color="green"
                ></v-select>
              </v-sheet>
            </v-menu>
          </div>
        </v-toolbar>
        <v-divider></v-divider>
      </nav>

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
            <v-dialog transition="dialog-bottom-transition" max-width="400">
              <template v-slot:activator="{ on, attrs }">
                <v-list-item
                  v-for="(route, index) in signInMenu"
                  :key="'signInMenu' + index"
                  v-bind="attrs"
                  v-on="on"
                  class="text-uppercase"
                  @click="authSwitcher(route.title)"
                >
                  <v-list-item-icon>
                    <v-icon>{{ route.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ route.title }}</v-list-item-title>
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
                    {{ authState }}
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
                      :rules="passwordRules"
                      v-model="password"
                      label="Password"
                      required
                      outlined
                      dense
                      class="mt-1"
                      color="green accent-4"
                    ></v-text-field>
                    <v-btn color="success" depressed block>{{
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
                </v-card>
              </template>
            </v-dialog>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
    <v-main>
      <v-container fluid class="ma-0 pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedCurrency: "JMD",
      drawer: null,
      group: null,
      email: null,
      password: null,
      authState: "",
      valid: false,
      passwordRules: [
        value => !!value || "Required.",
        value => (value || "").length >= 8 || "Min 8 characters"
      ],
      emailRules: [
        value => !!value || "Required.",
        value => (value || "").length <= 100 || "Max 100 characters",
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid email.";
        }
      ],
      signInDropDown: null,
      closeOnContentClick: false,
      isMobile: false,
      signInMenu: [
        {
          title: "Sign Up",
          route: "signup",
          icon: "mdi-cellphone-link",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
        {
          title: "Login",
          route: "login",
          icon: "mdi-login-variant",
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
        /*  {
          title: "blog",
          route: "blog",
          icon: "mdi-newspaper-variant-multiple-outline",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },  */

        {
          title: "add a listing",
          route: "dashboard",
          icon: "mdi-view-dashboard",
          depressed: true,
          text: true
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
  },

  methods: {
    ...mapActions({
      getIpAddress: "api/getIPAddress",
      getIpInfo: "api/getIPInfo",
      setActiveCurrency: "api/setActiveCurrency",
      toggleTheme: "colorTheme/toggleTheme"
    }),
    numberWithCommas(x) {
      x = Math.round((x + Number.EPSILON) * 100) / 100;

      x = x.toString();
      let pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
      return x;
    },
    resize() {
      if (window.innerWidth <= 772) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },

    validate() {
      if (this.$refs.form.validate()) {
        console.log("valid");
      } else {
        console.log("not");
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
      ipAddress: "api/ipAddress",
      country: "api/country",
      currencies: "api/currencies",
      currencyCodeList: "api/currencyCodeList",
      currencyRate: "api/currencyRate",
      activeCurrency: "api/activeCurrency",
        colorTheme: "colorTheme/theme"
    })
  },
  mounted() {
    this.resize();
    window.addEventListener("resize", () => {
      this.resize();
    });
  }
};
</script>
<style scoped>
.middle-text {
  overflow: hidden;
  text-align: center;
}

.middle-text:before,
.middle-text:after {
  background-color: #e0e0e0;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

.middle-text:before {
  right: 0.5em;
  margin-left: -50%;
}

.middle-text:after {
  left: 0.5em;
  margin-right: -50%;
}
.select-max-width{
  max-width: 150px;
}
</style>
