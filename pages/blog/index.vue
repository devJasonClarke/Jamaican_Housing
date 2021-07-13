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
        <v-row class="flex-wrap-reverse">
          <v-col cols="12" md="8">
            <TheBlogSearchInput />
            <ul>
              <li
                v-for="article of articles"
                :key="article.slug"
                class="blog-link"
              >
                <NuxtLink
                  :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                  :class="[
                    theme ? 'white--text' : 'black--text',
                    'd-flex flex-wrap flex-sm-nowrap'
                  ]"
                >
                  <img
                    :src="require('~/assets/images/house.jpg')"
                    class="mr-0 mr-sm-6 blog-img"
                  />
                  <!--      <img
                :src="`https://source.unsplash.com/${article.image}/200x134`"
                class="mr-0 mr-sm-6 blog-img"
              /> -->
                   <div>
                    <h2>{{ article.title }}</h2>
                    <p>by {{ article.author.name }}</p>
                  </div>
                
                </NuxtLink>
            
              </li>
            </ul></v-col
          >
          <v-col cols="12" md="4">
            <div style="position: sticky; top: 40px">
            asdfsadfsd </div></v-col>
        </v-row>
      </v-container>
    </SectionPadding>
  </div>
</template>

<script>
import img from "~/assets/images/house.jpg";
import { mapGetters } from "vuex";
export default {
  async asyncData({ $content }) {
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
.blog-link {
  margin-bottom: 53px;
}
.blog-img {
  object-fit: cover;
  width: 200px;
  height: 134px;
}

@media screen and (max-width: 1264px) {
  .blog-img {
    height: 168px;
    width: 200px;
  }
}
@media screen and (max-width: 960px) {
  .blog-img {
    width: 200px;
    height: 134px;
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
