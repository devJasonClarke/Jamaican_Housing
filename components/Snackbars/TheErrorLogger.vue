<template>
  <v-snackbar color="error" bottom v-if="errorMessage" v-model="error" :timeout='300000'>
<span class="white--text">    {{ errorMessage }}</span>

    <template v-slot:action="{ attrs }">
      <v-btn color="white" outlined v-bind="attrs" @click="resetError">
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
      error: true,
      close: null
    };
  },
  methods: {
    ...mapActions({
      removeError: "errors/removeError"
    }),
    resetError() {
      this.error = false;
      this.removeError();
    }
  },
  computed: {
    ...mapGetters({
      errorMessage: "errors/errorMessage"
    })
  },
  watch: {
    errorMessage: function() {
      this.error = true;
    },
    error: function() {
      if (this.error === false) {
        // // console.log('Remove watcher')
        this.removeError();
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
