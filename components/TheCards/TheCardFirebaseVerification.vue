<template>
  <div class="">
    <v-card
      nuxt
      :to="{ name: 'admin-user-slug', params: { slug: user[1] } }"
      outlined
      elevation="0"
      class="rounded-lg card"
    >
      <v-list-item-avatar
        height="120"
        width="120"
        class="mx-auto mt-6 d-flex justify-center align-center green rounded-circle"
      >
        <v-img
          :lazy-src="img"
          v-if="user[0].profilePicture.src"
          :src="user[0].profilePicture.src"
        ></v-img>
        <span v-else>
          <v-icon color="grey lighten-4 text-h1">mdi-account mdi-48px</v-icon>
        </span>
      </v-list-item-avatar>
      <div>
        <v-card-title
          class="hyphens d-flex justify-center text-capitalize text-center"
        >
          <!-- {{ card.title }} -->
          {{ profanityFilter(user[0].personalDetails.displayName) }}
          <v-tooltip color="blue " v-if="user[0].verified" top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="blue" dark v-bind="attrs" v-on="on" class="ml-2">
                mdi-check-decagram mdi-18px
              </v-icon>
            </template>
            <span>Verified</span>
          </v-tooltip>
        </v-card-title>

        <v-card-subtitle class="pb-4 text-center">
          {{ user[0].uid }}
        </v-card-subtitle>

        <v-card-text class=" text-uppercase section-titles-Subtitle grey--text">
          <!--   {{ card.realEstateType }} -->

          <v-row>
            <v-col cols="12" class="py-2"
              ><v-icon class="mr-3">mdi-phone mdi-18px</v-icon
              >{{ formattedNumber }}</v-col
            >
            <v-col cols="12" class="py-2 text-capitalize"
              ><v-icon class="mr-3">mdi-gmail mdi-18px</v-icon
              ><span v-if="user[0].contact.email">{{
                user[0].contact.email
              }}</span>
              <span v-else>No Email Provided</span></v-col
            >
            <v-col cols="12" class="py-2"
              ><v-icon class="mr-3">mdi-check-decagram mdi-18px</v-icon
              >{{ user[0].verification.verified }}</v-col
            >
            <v-col cols="12" class="py-2"
              ><v-icon class="mr-3">mdi-account mdi-18px</v-icon
              >{{ user[0].verification.role }}</v-col
            >
          </v-row>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import img from "~/assets/images/houses/3.jpg";
import { mapGetters } from "vuex";
export default {
  props: {
    user: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      iconColor: "rgba(0, 200, 83, 0.5)",
      img: img
    };
  },
  methods: {
    shortenNumber(num) {
      num = Math.round((num + Number.EPSILON) * 100) / 100;

      if (num < 1000) {
        return num;
      }
      var si = [
        { v: 1e3, s: "K" },
        { v: 1e6, s: "M" },
        { v: 1e9, s: "B" },
        { v: 1e12, s: "T" },
        { v: 1e15, s: "P" },
        { v: 1e18, s: "E" }
      ];
      var i;
      for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].v) {
          break;
        }
      }
      return (
        (num / si[i].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
        si[i].s
      );
    },

    profanityFilter(info) {
      var Filter = require("bad-words");
      let filter = new Filter();
      return filter.clean(info);
    }
  },
  computed: {
    ...mapGetters({
      country: "api/api/country",
      activeCurrency: "api/api/activeCurrency",
      currencyRate: "api/api/currencyRate"
    }),
    formattedNumber() {
      /* var phone = this.phoneNumber.toString().replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3'); */

      var phone = [
        this.user[0].contact.phoneNumber.toString().slice(0, 3),
        "-",
        this.user[0].contact.phoneNumber.toString().slice(3, 6),
        "-",
        this.user[0].contact.phoneNumber.toString().slice(6)
      ].join("");
      return phone;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  transition: 0.4s all ease;
  &:hover {
    transform: scale(1.04);
  }
}
</style>
