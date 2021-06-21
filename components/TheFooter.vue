<template>
  <footer>
    <SectionPadding class="backgroundShadeDarker">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" sm="12">
            <p
              class="text-uppercase text-subtitle-1 font-weight-bold text-sm-h6"
            >
              Real Estate JA
            </p>
            <p>Discover the best offers on the Jamaican Real Estate market</p>
          </v-col>

          <v-col cols="12" md="2" sm="6">
            <p
              class="text-uppercase text-subtitle-1 font-weight-bold text-sm-h6 "
            >
              Market
            </p>
            <ul class="pa-0  ml-n4">
              <li v-for="(route, index) in routes.market" :key="index">
                <v-btn text :to="{ name: route.route }">{{
                  route.title
                }}</v-btn>
              </li>
            </ul>
          </v-col>

          <v-col cols="12" md="2" sm="6">
            <p
              class="text-uppercase text-subtitle-1 font-weight-bold text-sm-h6  "
            >
              Resources
            </p>
            <ul class="pa-0 ml-n4">
              <li v-for="(route, index) in routes.resources" :key="index">
                <v-btn text :to="{ name: route.route }">{{
                  route.title
                }}</v-btn>
              </li>
            </ul>
          </v-col>

          <v-col cols="12" md="4" sm="12">
            <p
              class="text-uppercase text-subtitle-1 font-weight-bold text-sm-h6"
            >
              Keep up with the market
            </p>
            <p>
              Enter you email address to receive the top real estate deals
              currently on the market
            </p>
            <v-text-field
              label="Your Email Address"
              :rules="rules"
              hide-details="auto"
              append-icon="mdi-email"
              outlined
              dense
              color="green accent-4"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </SectionPadding>
    <div class="footer green darken-4 white--text  text-center">
      <p class="py-7 ma-0">&copy; Real Estate JA {{ year }} | All rights reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: "",
      rules: [
        value =>
          !value ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
          "E-mail must be valid"
      ],
      routes: {
        market: [
          {
            title: "buy",
            route: "buy"
          },
          {
            title: "sell",
            route: "dashboard"
          },
          {
            title: "rent",
            route: "rent"
          },
          {
            title: "add a listing",
            route: "dashboard"
          }
        ],
        resources: [
          {
            title: "contact",
            route: "contact"
          },
          {
            title: "blog",
            route: "blog"
          }
        ]
      }
    };
  },
  methods: {
    getYear() {
      let year = new Date().getFullYear();
      this.year = year;
    }
  },
  mounted () {
      this.getYear();
  },
};
</script>

<style></style>
