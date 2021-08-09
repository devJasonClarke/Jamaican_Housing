<template>
  <div class="">
    <div v-if="errorMessage">
      <v-snackbar v-model="error" :timeout="20000" left>
        {{ errorMessage }}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="resetError">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
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
    resetError() {
      this.error = false;
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
    }
  }
};
</script>

<style lang="scss" scoped></style>
