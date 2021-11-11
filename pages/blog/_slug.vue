<template>
  <div class="">
    <TheMetaTags
      :title="`${article.title} | Real Estate Ja | Blog Article`"
      :description="article.description"
    />
   <v-img v-if="$vuetify.breakpoint.xsOnly " :src="require('~/assets/images/house.jpg')" min-height="300" max-height="400"></v-img>
    <v-parallax
    v-else
      :src="require('~/assets/images/house.jpg')"
      width="100%"
      height="500"
    ></v-parallax>
    
    <!--     <v-parallax
      :src="`https://source.unsplash.com/${article.image}`"
      width="100%"
      height="500"
    ></v-parallax> -->
    <SectionPadding>
      <v-container class="max-width">
        <article>
          <h1 class="article-title">{{ article.title }}</h1>
          <nuxt-link
            :to="{
              name: 'blog-author-author',
              params: { author: article.author.name }
            }"
            :class="[
              theme ? 'white--text' : 'black--text',
              'd-flex align-center mt-6 article-details'
            ]"
          >
            <img
              :src="
                `https://source.unsplash.com/${article.author.image}/200x200`
              "
              alt="Author Photo"
              class="rounded-circle mr-3 author-img"
            />
            <!--       <img
              :src="`https://source.unsplash.com/${article.author.image}/60x60`"
              alt="Author Photo"
              class="rounded-circle mr-3 img"
            />
 -->
            <div>
              <p class="body-1 font-weight-bold">{{ article.author.name }}</p>
              <p class="body-2">
                {{ formatDate(article.createdAt) }} ·
                {{ article.read_time }} min read
              </p>
            </div>
          </nuxt-link>
          <img
            :src="`https://source.unsplash.com/${article.image}/776x450`"
            alt="Real Estate Ja Image"
            width="100%"
            height="450"
            class="mt-11 mb-10 img"
          />
          <!--       <img
            :src="`https://source.unsplash.com/${article.image}/776x450`"
            alt="Real Estate Ja Image"
            width="100%"
            height="450"
            class="mt-11 mb-10 img"
          /> -->

          <nuxt-content :document="article" />
        </article>
        <TheBlogAuthor :author="article.author" class="mt-12" />
        <TheBlogPagination :prev="prev" :next="next" />
      </v-container>
    </SectionPadding>
    <SectionPadding class="backgroundShade padding-top-and-bottom-alt">
      <v-container class="max-width">
        <p class="text-h5 mb-6">Article Tags:</p>
        <span v-for="(tag, i) in article.tags" :key="i">
          <v-chip
            :to="{
              name: 'blog-tags-tag',
              params: { tag: tags[tag].slug }
            }"
            color="green accent-4"
            outlined
            pill
            class="mr-3"
          >
            <v-avatar left>
              <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-avatar>
            {{ tags[tag].name }}</v-chip
          >
        </span>
      </v-container>
    </SectionPadding>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    const [prev, next] = await $content("articles")
      .only(["title", "author", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    const tagsList = await $content("tags")
      .only(["name", "slug"])
      .where({ name: { $containsAny: article.tags } })
      .fetch();
    const tags = Object.assign({}, ...tagsList.map(s => ({ [s.name]: s })));

    return {
      article,
      tags,
      prev,
      next
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
      theme: "colorTheme/colorTheme/theme"
    })
  }
};
</script>

<style lang="scss" scoped>
.author-img {
  width: 60px;
  height: 60px;
}
.max-width {
  max-width: 800px;
}

.article-title {
  font-size: 34.8px;
}

.article-details {
  p {
    margin-bottom: 4px;
  }
}
@media screen and (max-width: 600px) {
  .article-title {
    font-size: 26.8px !important;
  }
}
</style>
