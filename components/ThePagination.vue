<template>
  <div class="d-flex justify-center align-center mt-4">
    <v-btn class="mx-2" fab dark small color="green accent-4" @click="previous">
      <v-icon dark>
        mdi-chevron-left
      </v-icon>
    </v-btn>
    <v-btn class="mx-2" fab dark small color="green accent-4" @click="next">
      <v-icon dark>
        mdi-chevron-right
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    previous() {
      console.log("previous");
      this.loading = true;
      setTimeout(() => (this.loading = false), 3000);
    },
    next() {
      console.log("next");
      this.loading = true;
      setTimeout(() => (this.loading = false), 3000);
    }
  }
};
</script>

<style></style>
