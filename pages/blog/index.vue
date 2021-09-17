<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-img :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary
        mainTitle="Blog Posts"
        paragraph="We are here to make the process of acquiring a property easy. Read our blog posts written by industry experts in order to improve your knowledge of the industry."
      />
    </SectionPadding>

    <v-divider></v-divider>

    <SectionPadding>
      <v-container>
        <v-row class="flex-wrap-reverse">
          <v-col cols="12" md="8" class="pr-sm-6">
            <TheBlogSearchInput />
            <ul>
              <li v-for="article of articles" :key="article.slug" class="mb-9">
                <NuxtLink
                  :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                  :class="[
                    theme ? 'white--text' : 'black--text',
                    'd-flex flex-wrap flex-sm-nowrap'
                  ]"
                >
                  <!--    <img
                    :src="require('~/assets/images/house.jpg')"
                    class="mr-0 mr-sm-6 blog-img"
                  /> -->
                  <img
                    :src="
                      `https://source.unsplash.com/${article.image}/1000x1000`
                    "
                    class="mr-0 mr-sm-6 blog-img"
                  />
                  <div>
                    <h2>{{ article.title }}</h2>
                    <p class="my-3 body-2">{{ article.description }}</p>

                    <p class="body-2">by {{ article.author.name }}</p>
                  </div>
                </NuxtLink>
                <v-divider class="mt-3 mt-sm-0"></v-divider>
              </li></ul
          ></v-col>
          <v-col cols="12" md="4" class="border">
            <div class="sticky px-sm-3 mb-6 mb-md-0">
              <p class="text-h6 font-weight-regular ">Recommended Topics</p>

              <span v-for="(tag, i) in tags" :key="i">
                <v-chip
                  :to="{
                    name: 'blog-tags-tag',
                    params: { tag: tag.slug }
                  }"
                  color="green accent-4"
                  outlined
                  pill
                  class="mr-3 mb-3"
                >
                  <v-avatar left>
                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                  </v-avatar>
                  {{ tag.name }}</v-chip
                >
              </span>
              <v-divider class="my-6"></v-divider>
              <p class="text-h6 font-weight-regular ">Recommended Authors</p>
              <div v-for="(author, i) of authors" :key="`author: ${i}`">
                <span v-if="author.recommended">
                  <nuxt-link
                    :to="{
                      name: 'blog-author-author',
                      params: { author: author.name }
                    }"
                    :class="[
                      theme ? 'white--text' : 'black--text',
                      'd-flex align-center mt-6 details'
                    ]"
                  >
                    <img
                      :src="
                        `https://source.unsplash.com/${author.image}/200x200`
                      "
                      alt="Author Photo"
                      class="rounded-circle mr-3 author-img"
                    />
                    <!--       <img
              :src="`https://source.unsplash.com/${author.image}/60x60`"
              alt="Author Photo"
              class="rounded-circle mr-3 img"
            />
 -->
                    <div>
                      <p class="body-1 font-weight-bold">
                        {{ author.name }}
                      </p>
                    </div>
                  </nuxt-link>
                </span>
              </div>
            </div></v-col
          >
        </v-row>
      </v-container>
    </SectionPadding>
    <TheBlogCallToAction />
  </div>
</template>

<script>
import img from "~/assets/images/houses/4.jpg";
import { mapGetters } from "vuex";
export default {
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .only(["title", "description", "image", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();

    const authors = await $content("authors")
      .only(["name", "slug", "image", "recommended"])
      .sortBy("name", "asc")
      .fetch();

    const tags = await $content("tags")
      .only(["name", "slug"])
      .sortBy("name", "asc")
      .fetch();

    return {
      articles,
      authors,
      tags
    };
  },
  data() {
    return {
      img: img,
      title: "Blog | Real Estate Ja",
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
.author-img {
  width: 60px;
  height: 60px;
}
.border {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}
.theme--dark.v-application {
  .border {
    border-left: 1px solid rgba(255, 255, 255, 0.12);
  }
}
.blog-img {
  object-fit: cover;
  width: 210px;
  height: 210px;
}

.sticky {
  position: sticky;
  top: 40px;
}
@media screen and (max-width: 1264px) {
  .blog-img {
    width: 210px;
  }
}
@media screen and (max-width: 960px) {
  .border {
    border-left: none;
  }
}

@media screen and (max-width: 600px) {
  .blog-img {
    width: 100%;
    height: 250px;
    margin-bottom: 15px;
  }
}
</style>
