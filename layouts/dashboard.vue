<template>
  <v-app dark>
    <TheAPICalls />
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list-item class=" d-flex justify-center">
        <v-list-item-avatar>
          <v-img src="https://www.countryflags.io/jm/flat/64.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Real Estate JA</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!--       <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Jason Clarke</v-list-item-title>

  
      </v-list-item> -->

      <!-- // ! Do the same thing with css bindings inorder to save bandwidth -->

      <v-list>
        <v-list-item class="px-2" v-if="miniVariant">
          <v-list-item-avatar height="40" width="40">
            <v-img src="https://source.unsplash.com/t7waxpkDD4g/60x60"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item
          class="d-flex justify-center align-center px-0 mx-0"
          v-else
        >
          <v-list-item-avatar height="120" width="120" class="mx-0 px-0">
            <v-img
              src="https://source.unsplash.com/t7waxpkDD4g/240x240"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item v-if="!miniVariant">
          <v-list-item-content>
            <v-list-item-title class="text-h6 px-0 text-center">
              Jason Clarke <VerifiedSymbol role="realtor" />
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

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

    <v-app-bar :clipped-left="clipped" fixed app elevation="0">
      <v-btn v-if="!flexMd" icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://www.countryflags.io/jm/flat/64.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-if="!$vuetify.breakpoint.xsOnly"
            >Real Estate JA</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-spacer />
      <v-badge
        :content="messages"
        class="mr-6"
        :value="messages"
        overlap
        color="green"
      >
        <v-icon v-if="messages">
          mdi-bell
        </v-icon>
        <v-icon v-else>
          mdi-bell-outline
        </v-icon>
      </v-badge>

      <div>
        <v-icon v-if="$vuetify.theme.dark" @click="toggleTheme" class="mr-6"
          >mdi-weather-sunny</v-icon
        >
        <v-icon v-else @click="toggleTheme" class="mr-6"
          >mdi-weather-night</v-icon
        >
      </div>

      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="green" size="36">
              <span class="white--text ">JC</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list dense nav>
            <v-list-item-group active-class="green--text text--accent-4">
              <v-list-item
                class="text-uppercase"
                dense
                :to="{ name: 'profile' }"
              >
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  Profile</v-list-item-title
                >
              </v-list-item>
              <v-list-item
                class="text-uppercase"
                dense
                :to="{ name: 'dashboard-settings' }"
              >
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>mdi-cog</v-icon>
                  </v-list-item-icon>
                  Settings</v-list-item-title
                >
              </v-list-item>
              <v-list-item class="text-uppercase" dense>
                <v-list-item-title class=" red--text">
                  <v-list-item-icon>
                    <v-icon color="red">mdi-logout</v-icon>
                  </v-list-item-icon>
                  Logout</v-list-item-title
                >
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="false" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import VerifiedSymbol from "../components/VerifiedSymbol.vue";
export default {
  components: { VerifiedSymbol },
  data() {
    return {
      group: null,
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,

      title: "nope",
      messages: 8,
      routes: [
        {
          icon: "mdi-home-outline",
          title: "Home Page",
          route: "index"
        },
        {
          icon: "mdi-apps",
          title: "Properties",
          route: "dashboard"
        },
        {
          icon: "mdi-home-import-outline",
          title: "Add A Property",
          route: "dashboard-add-property"
        },
        {
          icon: "mdi-account-circle-outline",
          title: "User Profile",
          route: "dashboard-user-profile"
        },
        {
          icon: "mdi-message-text-outline",
          title: "Messages",
          route: "dashboard-messages"
        },
        {
          icon: "mdi-heart-outline",
          title: "Favourites",
          route: "dashboard-favourites"
        },
        {
          icon: "mdi-cog-outline",
          title: "Settings",
          route: "dashboard-settings"
        }
      ],
      flexMd: false
    };
  },
  methods: {
    ...mapActions({
      toggleTheme: "colorTheme/toggleTheme"
    }),

    resize() {
      if (window.innerWidth <= 1264) {
        this.flexMd = true;
        this.miniVariant = false;
      } else {
        this.flexMd = false;
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
