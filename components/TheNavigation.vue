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
          <v-btn :class="{'d-none':isMobile }"
            v-for="(route, index) in routes"
            :key="index"
            :text="route.text"
            :dark="route.dark"
            :color="route.color"
            :outlined="route.outline"
            :depressed="route.depressed"
            link
            :to="{ name: route.slug }"
          >
            {{ route.title }}
          </v-btn>
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark depressed rounded v-bind="attrs" v-on="on" color="green accent-4"
                >Sign IN <v-icon>mdi-account</v-icon></v-btn
              >
            </template>
           <v-card>
             da
           </v-card>
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
            :key="index"
            link
            class="text-capitalize"
            :to="{ name: route.slug }"
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
      isMobile: false,
      routes: [
        {
          title: "buy",
          slug: "buy",
          icon: "mdi-bank",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
        {
          title: "rent",
          slug: "rent",
          icon: "mdi-currency-usd-circle-outline",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
        {
          title: "sell",
          slug: "sell",
          icon: "mdi-currency-usd",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
        /*  {
          title: "blog",
          slug: "blog",
          icon: "mdi-newspaper-variant-multiple-outline",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },  */

        {
          title: "add a listing",
          slug: "dashboard",
          icon: "mdi-view-dashboard",
          depressed: true,
          text: true
        },
        {
          title: "contact",
          slug: "contact",
          icon: "mdi-email",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        }
        /*  {
          title: "Log In",
          slug: "login",
          icon: "mdi-login-variant",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
        {
          title: "Sign Up",
          slug: "signup",
          icon: "mdi-cellphone-link",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        }, */
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
    }
  },
  mounted() {
    this.resize();
    window.addEventListener("resize", () => {
      this.resize();
    });
  }
};
</script>
