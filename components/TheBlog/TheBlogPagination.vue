<template>
  <v-row class="d-flex justify-space-between">
    <v-col v-if="prev" cols="12" sm="6">
      <v-card
        outlined
        class="pa-3"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      >
        <div :class="[theme ? 'white--text' : 'black--text']">
          <p class="text-h6 mb-3">Previous Article:</p>
          <p class="body-1 mb-2">
            <v-icon>mdi-format-quote-open</v-icon>{{ prev.title }}
          </p>
          <p class="body-2">by: {{ prev.author.name }}</p>
        </div>
      </v-card>
    </v-col>

    <v-col v-if="next" cols="12" sm="6">
      <v-card
        outlined
        class="pa-3"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      >
        <div :class="[theme ? 'white--text' : 'black--text']">
          <p class="text-h6 mb-3">Next Article:</p>
          <p class="body-1 mb-2">
            <v-icon>mdi-format-quote-open</v-icon>{{ next.title }}
          </p>
          <p class="body-2 text--lighten-4">by: {{ next.author.name }}</p>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    ...mapGetters({
      theme: "colorTheme/theme"
    })
  }
};
</script>
<style lang="scss" scoped></style>
