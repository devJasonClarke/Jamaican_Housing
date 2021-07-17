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
      <v-list>
        <v-list-item-group v-model="group">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app elevation="0">
      <v-app-bar-nav-icon @click.stop="miniVariant = !miniVariant" />

      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://www.countryflags.io/jm/flat/64.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="gn">Real Estate JA</v-list-item-title>
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
        <v-icon>
          mdi-bell
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
                :to="{ name: 'profile' }"
              >
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>mdi-cog</v-icon>
                  </v-list-item-icon>
                  Settings</v-list-item-title
                >
              </v-list-item>
              <v-list-item class="text-uppercase" dense >
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

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      group: true,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home Page",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/dashboard"
        },
        {
          icon: "mdi-cog",
          title: "Settings",
               to: "/dashboard/Settings"
        }
      ],
      miniVariant: false,

      title: "nope",
      messages: 8
    };
  },
  methods: {
    ...mapActions({
      toggleTheme: "colorTheme/toggleTheme"
    })
  }
};
</script>
