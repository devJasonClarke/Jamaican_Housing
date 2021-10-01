<template>
  <div class="mb-12">
    <v-text-field
      outlined
      dense
      v-model="searchQuery"
      hide-details="true"
      label="Search Articles"
      type="search"
      color="green accent-4"
      class="mb-0"
      append-icon="mdi-magnify"
    ></v-text-field>

    <v-card class="absolute" elevation="3" tile>
      <v-list class="max-width" v-if="articles.length">
        <v-list-item-group>
          <v-list-item
            v-for="article of articles"
            :key="article.slug"
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          >
            <v-list-item-content>
              <v-list-item-title>{{ article.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      articles: []
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("articles")
        .limit(6)
        .search(searchQuery)
        .fetch();
    }
  }
};
</script>
<style lang="scss" scoped>
.absolute {
  position: absolute;
}
.max-width {
  min-width: 100%;
  max-width: 92vw;
}
</style>
