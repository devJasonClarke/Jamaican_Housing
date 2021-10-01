<template>
  <v-container>
    <p class="text-body mb-6">{{ title }}</p>

    <v-row>
      <v-col
        v-for="(property, index) in card"
        :key="index"
        cols="12"
        :sm="flexSm ? 6 : 4"
        :md="flexMd ? 4 : 3"
        class="mb-4"
      >
        <TheCard :card="property" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    card: {
      type: Array,
      required: true
    },
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
        // // console.log(this.flexMd);
      } else {
        this.flexMd = false;
        // // console.log(this.flexMd);
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

<style lang="scss" scoped>
.card {
  transition: 0.4s all ease;
  &:hover {
    transform: scale(1.04);
  }
}
</style>
