<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Favourites</h1>
    <SectionPadding v-if="profile.loading === true">
      <v-skeleton-loader type="list-item@8"></v-skeleton-loader>
    </SectionPadding>
    <SectionPadding v-else-if="favourites.length > 0" id="top">
      <v-list dense>
        <v-list-item-group v-model="selectedItem" color="green accent-4">
          <div v-for="favourite in favourites" :key="favourite">
            <v-row>
              <v-col cols="12" md="11">
                <v-list-item
                  nuxt
                  :to="{ name: 'property-slug', params: { slug: favourite } }"
                >
                  <v-list-item-icon>
                    <v-icon>mdi-home mdi-24px</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{
                      `https://jamaican-housing.pages.dev/property/${favourite}`
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col
                cols="12"
                md="1"
                class="d-flex justify-center align-center pr-3 pr-md-9 pb-6 pb-md-3"
              >
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      small
                      v-bind="attrs"
                      v-on="on"
                      fab
                      color="red"
                      class="ml-3 ml-md-0"
                      dark
                      ><v-icon>mdi-delete mdi-18px</v-icon></v-btn
                    >
                  </template>
                  <v-card>
                    <v-card-title class="text-h5 hyphens">
                      Are you sure you want to remove property from favourites?
                    </v-card-title>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                      >
                        Go back
                      </v-btn>
                      <v-btn
                        color="red darken-1"
                        text
                        @click="removeFromFavourites(favourite)"
                      >
                        Remove Property
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
            <v-divider class="my-3"></v-divider>
          </div>
        </v-list-item-group>
      </v-list>
      <!--  <v-btn
          class="mx-2"
          fab
          dark
          small
          color="green accent-4"
          @click="previous"
        >
          <v-icon dark>
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small color="green accent-4" @click="next">
          <v-icon dark>
            mdi-chevron-right
          </v-icon>
        </v-btn> -->
    </SectionPadding>
    <SectionPadding v-else>
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center flex-column"
        outlined
        ><p class="text-h6 text-center font-weight-regular">
          No favourites as yet.
          <br />Find a property you like today!
        </p>
        <v-btn nuxt :to="{ name: 'buy' }" dark color="green accent-4">
          <v-icon left>mdi-magnify</v-icon>Search</v-btn
        >
      </v-sheet>
    </SectionPadding>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "dashboard",
  data() {
    return {
      selectedItem: [],
      dialog: false
    };
  },
  computed: {
    target() {
      const value = "#top";
      return value;
    },
    ...mapGetters({
      profile: "profile/profile",
      favourites: "favourites/favourites"
    }),
    title() {
      return `${this.profile.name.displayName} | Favourite Properties`;
    },
    description() {
      return `The favourite properties of ${this.profile.name.displayName}`;
    }
  },
  methods: {
    ...mapActions({
      removeFavourites: "favourites/removeFavourites"
    }),
    removeFromFavourites(theProperty) {
      this.removeFavourites(theProperty);
      this.dialog = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
