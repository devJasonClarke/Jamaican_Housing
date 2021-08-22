<template>
  <v-container>
    <p class="text-body mb-6">Real Estate For {{ title }}</p>

    <v-row>
      <v-col
        v-for="index in 8"
        :key="index + 'a'"
        cols="12"
        :sm="[flexSm ? 6 : 4]"
        :md="[flexMd ? 6 : 3]"
        class="mb-4"
      >
        <v-card outlined class="pa-3 rounded-lg">
          <v-skeleton-loader
            class="mx-auto "
            type="image,article"
          ></v-skeleton-loader>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      iconColor: "rgba(0, 200, 83, 0.5)",
      flexSm: false,
      flexMd: false
    };
  },
  methods: {
    resize() {
      if (window.innerWidth <= 1264) {
        this.flexMd = true;
        // console.log(this.flexMd);
      } else {
        this.flexMd = false;
        // console.log(this.flexMd);
      }

      if (window.innerWidth <= 800) {
        this.flexSm = true;
      } else {
        this.flexSm = false;
      }
    }
  },

  mounted() {
    this.resize();
    window.addEventListener("resize", () => {
      this.resize();
    });
  }
};
</script>

<style></style>
