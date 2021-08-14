<template>
  <v-app dark>
    <TheAuthenticationChecker />
    <TheAPICalls />
    <TheErrorLogger />
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
      <v-list v-if="!userAthenticated">
        <v-list-item class="d-flex justify-center align-center px-0 mx-0">
          <v-skeleton-loader
            :height="[miniVariant ? 40 : 120]"
            :width="[miniVariant ? 40 : 120]"
            class="d-block mx-0 rounded-circle"
            type="image"
          ></v-skeleton-loader>
        </v-list-item>

        <v-list-item v-if="!miniVariant">
          <v-list-item-content>
            <v-skeleton-loader type="text"></v-skeleton-loader>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list v-else>
        <v-list-item class="d-flex justify-center align-center px-0 mx-0">
          <v-skeleton-loader
            v-if="!userAthenticated"
            :height="[miniVariant ? 40 : 120]"
            :width="[miniVariant ? 40 : 120]"
            class="d-block mx-0 rounded-circle"
            type="image"
          ></v-skeleton-loader>

          <v-list-item-avatar
            v-else
            :height="[miniVariant ? 40 : 120]"
            :width="[miniVariant ? 40 : 120]"
            class="mx-0 px-0 green"
          >
            <!--   <span :class="[miniVariant ? 'text-h6':'text-h4', 'white--text' ]">{{profile["initials"]}}</span> -->

            <v-img
              src="https://source.unsplash.com/t7waxpkDD4g/240x240"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item v-if="!miniVariant">
          <v-list-item-content>
            <v-skeleton-loader
              v-if="!userAthenticated"
              type="text"
            ></v-skeleton-loader>

            <v-list-item-title v-else class="text-h6 px-0 text-center">
              <span>{{ profile["display name"] }}</span>
              <VerifiedSymbol role="realtor" />
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
        :content="unReadMessages.length"
        class="mr-6"
        :value="unReadMessages.length"
        overlap
        color="green"
      >
        <nuxt-link
          :to="{ name: 'dashboard-messages' }"
          v-if="unReadMessages.length"
          ><v-icon>
            mdi-bell
          </v-icon></nuxt-link
        >
        <v-icon v-else>
          mdi-bell-outline
        </v-icon>
      </v-badge>

      <div class="mr-3">
        <v-icon v-if="$vuetify.theme.dark" @click="toggleTheme" 
          >mdi-weather-sunny</v-icon
        >
        <v-icon v-else @click="toggleTheme" 
          >mdi-weather-night</v-icon
        >
      </div>

      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on" class="mr-1">
            <v-skeleton-loader
              v-if="!userAthenticated"
              width="36"
              height="36"
              class="d-block mx-0 rounded-circle"
              type="image"
            ></v-skeleton-loader>
            <span v-else>
              <v-avatar color="green" size="36">
                <span class="white--text " v-if="profile['initials']">{{
                  profile["initials"]
                }}</span>
                <v-icon v-else color="grey lighten-3"
                  >mdi-account mdi-24px</v-icon
                >
              </v-avatar>
            </span>
          </v-btn>
        </template>
        <v-card>
          <v-list dense nav>
            <v-list-item-group active-class="green--text text--accent-4">
              <v-list-item
                class="text-uppercase"
                dense
                :to="{ name: 'dashboard-user-profile' }"
              >
                <v-list-item-title class="d-flex align-center">
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
                <v-list-item-title class="d-flex align-center">
                  <v-list-item-icon>
                    <v-icon>mdi-cog</v-icon>
                  </v-list-item-icon>
                  Settings</v-list-item-title
                >
              </v-list-item>
              <v-list-item class="text-uppercase" dense @click="logout">
                <v-list-item-title class=" red--text d-flex align-center">
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
import { mapGetters, mapActions } from "vuex";
import VerifiedSymbol from "../components/VerifiedSymbol.vue";
export default {
  middleware: ["authenticated"],
  components: { VerifiedSymbol },
  /*  fetch() {
    this.$fireModule.auth().onAuthStateChanged(user => {
      if (user) {
        this.userID = user.uid;
        console.log(`From fetch ${this.userID}`);
     
      }
    });
  }, */
  data() {
    return {
      group: null,
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      userID: "",
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
      toggleTheme: "colorTheme/toggleTheme",
      logout: "authentication/logout"
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
  },
  computed: {
    ...mapGetters({
      unReadMessages: "messages/unReadMessages",
      profile: "authentication/profile",
      userAthenticated: "authentication/userAthenticated"
    })
  }
};
</script>
