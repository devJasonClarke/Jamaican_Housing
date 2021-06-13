<template>
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
          <v-menu
            open-on-hover
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
                ><v-icon>mdi-account</v-icon> Sign IN
              </v-btn>
            </template>

            <v-list dense nav>
              <v-list-item-group
                v-model="signInDropDown"
                active-class="green--text text--accent-4"
              >
                <v-list-item
                  v-for="(route, index) in signInMenu"
                  :key="'signInMenu' + index"
                  link
                  class="text-uppercase"
                  :to="{ name: route.route }"
                >
                  <v-list-item-title>{{ route.title }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-sheet>
              <v-switch
                @click="toggleDarkTheme"
                v-model="darkTheme"
                class="px-2 pt-0 mt-0"
                inset
                label="Dark Mode"
                color="green accent-4"
              ></v-switch
            ></v-sheet>
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
          <v-list-item
            v-for="(route, index) in signInMenu"
            :key="'secondaryNavigationDrawer' + index"
            link
            class="text-capitalize"
            :to="{ name: route.route }"
          >
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      group: null,
      signInDropDown: null,
      closeOnContentClick: false,
      darkTheme: false,
      isMobile: false,
      signInMenu: [
        {
          title: "Log In",
          route: "login",
          icon: "mdi-login-variant",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
        {
          title: "Sign Up",
          route: "signup",
          icon: "mdi-cellphone-link",
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
    resize() {
      if (window.innerWidth <= 772) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    toggleDarkTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("darkTheme", this.$vuetify.theme.dark.toString());
    },
    checkDarkTheme() {
      const theme = localStorage.getItem("darkTheme");
      if (theme) {
        if (theme === "true") {
          this.$vuetify.theme.dark = true;
          this.darkTheme = true;
        } else {
          this.$vuetify.theme.dark = false;
          this.darkTheme = false;
        }
      }
    }
  },
  mounted() {
    this.resize();
    window.addEventListener("resize", () => {
      this.resize();
    });
    this.checkDarkTheme();
  }
};
</script>
