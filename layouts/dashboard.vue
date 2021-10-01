<template>
  <v-app dark>
    <TheFunctionsTheAuthenticationChecker />
    <TheFunctionsTheAPICalls />
    <SnackbarsTheErrorLogger />
    <SnackbarsTheSuccessLogger />
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list-item class=" d-flex justify-center">
        <v-list-item-avatar>
          <img
            :src="require('~/assets/images/jamaican-flag.png')"
            alt="Jamaican flag"
            width="40px"
            height="40px"
          />
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
            :height="miniVariant ? 40 : 120"
            :width="miniVariant ? 40 : 120"
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
            :height="miniVariant ? 40 : 120"
            :width="miniVariant ? 40 : 120"
            class="d-block mx-0 rounded-circle"
            type="image"
          ></v-skeleton-loader>

          <v-list-item-avatar
            v-else
            :height="miniVariant ? 40 : 120"
            :width="miniVariant ? 40 : 120"
            class="mx-0 d-flex justify-center align-center green"
          >
            <v-img
              v-if="profile.profilePicture.src"
              :src="profile.profilePicture.src"
            ></v-img>
            <span
              v-else-if="profile.personalDetails.initials"
              :class="[
                miniVariant ? 'text-h6 font-weight-regular' : 'text-h4',
                'white--text'
              ]"
              >{{ profile.personalDetails.initials }}</span
            >
            <span v-else>
              <v-icon v-if="miniVariant" color="grey lighten-3"
                >mdi-account mdi-24px</v-icon
              >
              <v-icon v-else color="grey lighten-4"
                >mdi-account mdi-48px</v-icon
              >
            </span>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item v-if="!miniVariant">
          <v-list-item-content>
            <v-skeleton-loader
              v-if="!userAthenticated"
              type="text"
            ></v-skeleton-loader>

            <v-list-item-title
              v-else
              class="text-h6 px-0 text-center text-capitalize"
            >
              <span>{{ profile.personalDetails.displayName }}</span>
              <SymbolVerified :role="profile.role" v-if="profile.verified" />
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
            link
            class="text-capitalize"
            :to="{ name: 'admin' }"
            exact
            v-if="profile.verified && profile.role === 'admin'"
          >
            <v-list-item-icon>
              <v-icon>mdi-shield-check-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Admin</v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            class="text-capitalize"
            :to="{ name: 'profile-slug', params: { slug: profile.uid } }"
            exact
            v-if="profile.verified"
          >
            <v-list-item-icon>
              <v-icon>mdi-account-check-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
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
          <img
            :src="require('~/assets/images/jamaican-flag.png')"
            alt="Jamaican flag"
            width="40px"
            height="40px"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-if="!$vuetify.breakpoint.xsOnly"
            >Real Estate JA</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-spacer />
      <v-badge
        :content="oldMessages"
        class="mr-6"
        :value="oldMessages"
        overlap
        color="green"
      >
        <nuxt-link :to="{ name: 'dashboard-messages' }"
          ><v-icon v-if="oldMessages">
            mdi-bell
          </v-icon>
          <v-icon v-else>
            mdi-bell-outline
          </v-icon>
        </nuxt-link>
      </v-badge>

      <div class="mr-3">
        <v-icon v-if="$vuetify.theme.dark" @click="toggleTheme"
          >mdi-weather-sunny</v-icon
        >
        <v-icon v-else @click="toggleTheme">mdi-weather-night</v-icon>
      </div>

      <v-menu
        bottom
        max-width="150px"
        rounded
        offset-y
        :close-on-content-click="closeOnContentClick"
      >
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
                <v-img
                  v-if="profile.profilePicture.src"
                  :src="profile.profilePicture.src"
                ></v-img>
                <span
                  class="white--text  "
                  v-else-if="profile.personalDetails.initials"
                  >{{ profile.personalDetails.initials }}</span
                >
                <v-icon v-else color="grey lighten-3"
                  >mdi-account mdi-24px</v-icon
                >
              </v-avatar>
            </span>
          </v-btn>
        </template>

        <v-list dense nav>
          <v-list-item-group active-class="green--text text--accent-4">
            <v-list-item class="text-uppercase" exact :to="{ name: 'index' }">
              <v-list-item-title>Home Page</v-list-item-title>
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
          <v-list-item-group active-class="green--text text--accent-4">
            <v-list-item class="text-uppercase" @click="logout">
              <v-list-item-title class="red--text d-flex align-center">
                Logout</v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="false" app>
      <span class="text-body-2"
        >&copy; Real Estate JA {{ new Date().getFullYear() }} | All rights
        reserved
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SymbolVerified from "../components/Symbol/SymbolVerified.vue";
export default {
  middleware: ["authenticated"],
  name: "dashboard",
  fetch() {
    if (this.newMessages.length == 0) {
      this.getNewMessages();
    }
  },
  data() {
    return {
      closeOnContentClick: false,
      group: null,
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      uid: "",
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
          title: "Add Property",
          route: "dashboard-add-property"
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
          icon: "mdi-credit-card-outline",
          title: "Payments",
          route: "dashboard-settings-payments"
        },
        {
          icon: "mdi-account-circle-outline",
          title: "Settings",
          route: "dashboard-settings"
        }
      ],
      flexMd: false
    };
  },
  methods: {
    ...mapActions({
      toggleTheme: "colorTheme/colorTheme/toggleTheme",
      logout: "authentication/authentication/logout",
      getNewMessages: "dashboard/messages/getNewMessages"
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
      newMessages: "dashboard/messages/newMessages",
      oldMessages: "dashboard/messages/oldMessages",
      profile: "dashboard/profile/profile",
      userAthenticated: "dashboard/profile/userAthenticated",
      colorTheme: "colorTheme/colorTheme/theme"
    })
  }
};
</script>
