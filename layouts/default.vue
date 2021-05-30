<template>
  <v-app>
    <nav>
      <v-toolbar flat>
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
        >
        </v-app-bar-nav-icon>
        <v-toolbar-title>Real Estate Ja</v-toolbar-title>

        <v-spacer></v-spacer>

        <div :class="[isMobile ? 'd-none' : '	d-none  d-flex mr-5 d-sm-flex']">
          <v-btn
            v-for="(route, index) in routes"
            :key="index"
            :text="route.text"
            :dark="route.dark"
            :color="route.color"
            :depressed="route.depressed"
            link
            :to="{ name: route.slug }"
          >
            {{ route.title }}
          </v-btn>
        </div>
      </v-toolbar>
      <v-divider></v-divider>
    </nav>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://www.countryflags.io/jm/flat/64.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Real Estate JA</v-list-item-title>
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
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
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
        {
          title: "blog",
          slug: "blog",
          icon: "mdi-newspaper-variant-multiple-outline",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },
        {
          title: "contact",
          slug: "contact",
          icon: "mdi-email",
          depressed: false,
          text: true,
          dark: false,
          color: ""
        },

        {
          title: "add to listing",
          slug: "dashboard",
          icon: "mdi-view-dashboard",
          depressed: true,
          text: false,
          dark: true,
          color: "green accent-4"
        }
      ]
    };
  },
  methods: {
    resize() {
      if (window.innerWidth <= 772) {
        console.log(window.innerWidth);
        this.isMobile = true;
        console.log(this.isMobile);
      } else {
        this.isMobile = false;
      }
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.resize();
    });
  },
  created() {
    this.resize();
  }
};
</script>
