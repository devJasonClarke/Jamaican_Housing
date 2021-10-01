<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Your Verified Users</h1>

    <TheListingRealEstatePropertiesLoader v-if="loading == true" title="sale" />
    <SectionPadding class="pt-9" v-else-if="!properties.length">
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center flex-column pa-3"
        outlined
        ><p class="text-body-1 text-sm-h6 text-center font-weight-regular">
          No Users as yet.
        </p>
      </v-sheet>
    </SectionPadding>

    <SectionPadding class="pt-9" v-else id="top">
      <TheListingVerification
        title="Your Verified Users"
        :users="properties"
      />
      <div class="d-flex justify-center align-center mt-4">
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="green accent-4"
          @click="$vuetify.goTo('#top')"
        >
          <v-icon dark>
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          :dark="paginateNext.dark"
          small
          color="green accent-4"
          @click="next"
          :disabled="paginateNext.disabled"
        >
          <v-icon dark>
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </div>
    </SectionPadding>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  //fetchOnServer: false,
  fetch() {
    // console.log("fetch");
    // console.log(this.properties);
    if (this.properties.length == 0) {
      this.getVerifiedUsers();
    } else {
      this.setLoading(false);
    }
  },
  data() {
    return {
      iconColor: "rgba(0, 200, 83, 0.5)"
    };
  },
  layout: "admin",
  computed: {
    ...mapGetters({
      user: "authentication/user",
      properties: "getVerifiedUsers/properties",
      lastVisible: "getVerifiedUsers/lastVisible",
      loading: "getVerifiedUsers/loading",
      paginateNext: "getVerifiedUsers/paginateNext",
      profile: "profile/profile"
    }),
    title() {
      return `${this.profile.personalDetails.displayName} | User Properties | Dashboard`;
    },
    description() {
      return `${this.profile.personalDetails.displayName} amazing properties.`;
    }
  },
  methods: {
    ...mapActions({
      logError: "errors/logError",
      getVerifiedUsers: "getVerifiedUsers/getVerifiedUsers",
      setLoading: "getVerifiedUsers/setLoading"
    }),
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
    next() {
      // console.log("next");
      this.getVerifiedUsers();
      // this.loading = true;
      //  this.$vuetify.goTo(this.target);
      //  setTimeout(() => (this.loading = false), 3000);
    }
  }
};
</script>

<style lang="scss" scoped></style>
