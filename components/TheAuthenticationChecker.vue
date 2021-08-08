<template>
  <div>
    <span v-if="false"></span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      checkAuth: "authentication/checkAuthentication"
    })
  },
  mounted() {
    this.checkAuth();
  }
};
</script>

<style lang="scss" scoped></style>
