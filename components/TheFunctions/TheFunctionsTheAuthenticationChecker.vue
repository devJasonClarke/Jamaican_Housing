<template>
  <span v-if="false"></span>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  fetchOnServer: false,
  fetch() {
    if (this.user === null) {
      this.checkAuth();
    } else {
      // console.log("User Signed In");
    }
  },

  computed: {
    ...mapGetters({
      user: "authentication/authentication/user"
    })
  },
  methods: {
    ...mapActions({
      checkAuth: "authentication/authentication/checkAuthentication"
    })
  }
};
</script>

<style lang="scss" scoped></style>
