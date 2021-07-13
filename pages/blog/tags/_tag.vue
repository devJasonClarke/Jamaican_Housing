<template>
  <v-container>
    <v-container class="mt-6 mb-9">
      <v-row>
        <v-col cols="12">
          <p class="text-h4 font-weight-bold">{{ tag.name }}</p>
          <p class="body-1">
            {{ tag.description }}
          </p>
   <TheBlogSearchInput class="max-width mt-6"/>
          <v-row class="mt-6">
            <v-col
              cols="12"
              sm="6"
              v-for="article in articles"
              :key="article.slug"
            >
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                :class="[theme ? 'white--text' : 'black--text']"
              >
                <img
                  :src="`https://source.unsplash.com/${article.image}/480x250`"
                  :alt="article.alt"
                  class="blog-list-img"
                />

                <div>
                  <p class="text-h5 font-weight-bold mt-3 mb-0">
                    {{ article.title }}
                  </p>
                  <p class="my-3 body-2">{{ article.description }}</p>
                  <p class=" body-2">{{ formatDate(article.createdAt) }}</p>
                </div>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
 
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async asyncData({ $content, params }) {
    const tags = await $content("tags")
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch();
    const tag = tags.length > 0 ? tags[0] : {};
    const articles = await $content("articles", params.slug)
      .where({ tags: { $contains: tag.name } })
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
      tag
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
    computed: {
    ...mapGetters({
      theme: "colorTheme/theme"
    })
  }
};
</script>
<style lang="scss" scoped>


.max-width{
  max-width: 557px;
}


</style>