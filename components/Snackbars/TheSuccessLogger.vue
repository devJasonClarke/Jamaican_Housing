<template>
  <v-snackbar
    color="success"
    bottom
    v-if="successMessage"
    v-model="success"
    :timeout="300000"
  >
    <span class="white--text"> {{ successMessage }}</span>

    <template v-slot:action="{ attrs }">
      <v-btn color="white" outlined v-bind="attrs" @click="resetSuccess">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      success: true,
      close: null
    };
  },
  methods: {
    ...mapActions({
      removeSuccess: "snackbars/success/removeSuccess"
    }),
    resetSuccess() {
      this.success = false;
      this.removeSuccess();
    }
  },
  computed: {
    ...mapGetters({
      successMessage: "snackbars/success/successMessage"
    })
  },
  watch: {
    successMessage: function() {
      this.success = true;
    },
    success: function() {
      if (this.success === false) {
        // // console.log('Remove watcher')
        this.removeSuccess();
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
