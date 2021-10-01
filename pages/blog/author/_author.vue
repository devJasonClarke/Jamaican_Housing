<template>
  <div>
    <TheMetaTags
      :title="`${articles[0].author.name} | Real Estate Ja | Blog Author`"
      :description="articles[0].author.bio"
    />
    <v-container class="mt-6 mb-9">
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="pa-6 ml-sm-3 mb-6" elevation="3">
            <v-img
              height="150"
              width="150"
              :src="
                `https://source.unsplash.com/${articles[0].author.image}/200x200`
              "
              class="rounded-circle mx-auto my-0"
            ></v-img>
            <div class="text-center d-flex flex-column">
              <p class="text-h5 font-weight-bold mt-4 mb-0">
                {{ articles[0].author.name }}
             <SymbolVerified role="author"/>
              </p>
              <p class="mt-3">{{ articles[0].author.bio }}</p>
            </div>
            <v-divider class="mt-3 mb-3"></v-divider>
            <div class="d-flex justify-center">
              <a
                target="_blank"
                rel="nofollow noopener"
                href="https://gen3d.netlify.app/"
              >
                <v-btn icon color="blue darken-3" x-large>
                  <v-icon>mdi-facebook </v-icon>
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                href="https://www.instagram.com/jasonclarke.dev/"
              >
                <v-btn icon color="pink darken-1" x-large>
                  <v-icon>mdi-instagram </v-icon>
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                href="https://www.linkedin.com/in/devjasonclarke/"
              >
                <v-btn icon color="blue darken-2" x-large>
                  <v-icon>mdi-linkedin </v-icon>
                </v-btn>
              </a>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="8">
          <p class="text-h4 font-weight-bold">{{ articles[0].author.name }}</p>
          <p class="body-1">
            {{ articles[0].author.bio }}
          </p>

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
                  :src="`https://source.unsplash.com/${article.image}/1000x1000`"
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
    <TheBlogCallToAction />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .where({
        "author.name": {
          $regex: [params.author, "i"]
        }
      })
      .without("body")
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles
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
