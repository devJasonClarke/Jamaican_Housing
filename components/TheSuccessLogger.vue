<template>
  <v-snackbar v-if="successMessage" v-model="success" :timeout="10000" left>
    {{ successMessage }}

    <template v-slot:action="{ attrs }">
      <v-btn color="green" text v-bind="attrs" @click="resetSuccess">
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
      removeSuccess: "success/removeSuccess"
    }),
    resetSuccess() {
      this.success = false;
      this.removeSuccess();
    }
  },
  computed: {
    ...mapGetters({
      successMessage: "success/successMessage"
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
