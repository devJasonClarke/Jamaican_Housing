<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-img :lazy-src='img' :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary
        mainTitle="Premiere Sponsors & Partners"
        paragraph=" Our Premiere Sponsors & Partners"
      />
    </SectionPadding>

    <v-divider></v-divider>

    <SectionPadding class="backgroundShade">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            v-for="(sponsor, i) in sponsors"
            class="mb-3"
            :key="i"
          >
            <a
              :href="sponsor.url"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                v-if="$vuetify.theme.dark && sponsor.darkImage"
                :src="sponsor.darkImage"
                class="images"
                :alt="sponsor.name"
                width="100%"
                height="100%"
              />
              <img
                v-else
                :src="sponsor.image"
                class="images"
                :alt="sponsor.name"
                width="100%"
                height="100%"
              />
            </a>
          </v-col>
        </v-row>
      </v-container>
    </SectionPadding>
  </div>
</template>

<script>
import sponsors from "~/static/sponsors/sponsors";
import img from "~/assets/images/houses/3.jpg";
export default {
  data() {
    return {
      title: "Sponsors | Real Estate Ja",
      description: "Sponsors",
      img: img,
      sponsors: sponsors.sponsors
    };
  }
};
</script>
<style lang="scss" scoped>
.image {
  transition: 0.35s ease;
  &:hover {
    transform: translateY(-3px);
  }
}
.image-height {
  max-width: 20vw;
}
@media screen and (max-width: 960px) {
  .image-height {
    height: 200px;
  }
}
</style>
