<template>
  <div class="">
    <TheMetaTags
      :title="`${article.title} | Jamaica Housing`"
      :description="article.description"
    />
    <v-parallax
      :src="`https://source.unsplash.com/${article.image}`"
      width="100%"
      height="500"
    ></v-parallax>
    <SectionPadding>
      <v-container class="max-width">
        <article>
          <h1>{{ article.title }}</h1>
          <div class="d-flex align-center mt-6">
            <img
              :src="`https://source.unsplash.com/${article.author.image}/60x60`"
              alt="Author Photo"
              class="rounded-circle mr-3"
            />

            <div>
              <p class="body-1 font-weight-bold">{{ article.author.name }}</p>
              <p class="body-2">
                {{ formatDate(article.updatedAt) }} ·
                {{ article.read_time }} min read
              </p>
            </div>
          </div>
          <img
            :src="`https://source.unsplash.com/${article.image}/776x450`"
            alt="Jamaica Housing Image"
            width="100%"
            height="450"
            class="mt-11 mb-10"
          />

          <nuxt-content :document="article" />
        </article>
      </v-container>
    </SectionPadding>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>

<style lang="scss" scoped>
.max-width {
  max-width: 800px;
}

img {
  object-fit: cover;
}

h1 {
  font-size: 34.8px;
}

p {
  margin-bottom: 4px;
}
</style>
