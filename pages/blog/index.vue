<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-img :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary
        mainTitle="Blog Posts"
        paragraph=" Prepare a short list of features you would like in a home, such as
          location, beds & bath's required, bearing in mind affordability and
          accommodation requirements."
      />
    </SectionPadding>

    <v-divider></v-divider>

    <SectionPadding>
      <v-container>
      <v-row>
        <v-col cols="8">  <ul>
          <li v-for="article of articles" :key="article.slug">
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              :class="[theme ? 'white--text' : 'black--text', 'd-flex']"
            >
              <img
                :src="`https://source.unsplash.com/${article.image}/200x134`"
                class="mr-6"
              />
              <div>
                <h2>{{ article.title }}</h2>
                <p>by {{ article.author.name }}</p>
                <p>{{ article.description }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul></v-col>
        <v-col cols="4"></v-col>
      </v-row>
      </v-container>
    </SectionPadding>
  </div>
</template>

<script>
import img from "~/assets/images/house.jpg";
import { mapGetters } from "vuex";
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .only(["title", "description", "image", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles
    };
  },
  data() {
    return {
      img: img,
      title: "Blog | Jamaica Housing",
      description: "Blog page"
    };
  },
  computed: {
    ...mapGetters({
      theme: "colorTheme/theme"
    })
  }
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}
img {
  object-fit: cover;
}
</style>
