<template>
  <!--   <div class="d-flex">
    <img :src="`https://source.unsplash.com/${author.image}/240x240`" />
    <div>
      <h4>Author</h4>
      <p>{{ author.name }}</p>
      <p>{{ author.bio }}</p>
    </div>
  </div> -->
  <v-card class="pa-3 mb-12">
    <div
      class="d-flex flex-wrap flex-sm-no-wrap flex-sm-row-reverse justify-center justify-sm-space-between"
    >
      <v-avatar class="ma-3 mr-sm-4" size="125">
        <v-img
          :src="`https://source.unsplash.com/${author.image}/125x125`"
        ></v-img>
      </v-avatar>
      <div>
        <v-card-title class="text-h5 pt-0 mt-3 text-center text-sm-left"
          >Author: {{ author.name }}</v-card-title
        >

        <v-card-subtitle class="text-center text-sm-left"
          >Bio: {{ author.bio }}</v-card-subtitle
        >

        <v-card-actions>
          <v-btn
            class="ml-2 mt-0 mt-sm-3 mb-1"
            :to="{
              name: 'blog-author-author',
              params: { author: author.name }
            }"
            depressed
            block
          >
            See blog posts
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
};
</script>
