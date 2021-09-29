<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-container class="mt-6 mb-9">
      <v-row>
        <v-col cols="12" md="4" v-if="user.personalDetails.displayName === 'loading'">
          <v-card class="pa-6 ml-sm-3 mb-6" elevation="3">
            <v-skeleton-loader
              type="image"
              class=" d-block mx-auto rounded-circle"
              width="120"
              height="120"
            ></v-skeleton-loader>
            <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
            <v-divider class="my-3"></v-divider>
            <v-skeleton-loader type="table-tfoot"></v-skeleton-loader>
            <v-divider class="my-3"></v-divider>
            <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" v-else>
          <v-card class="pa-6 ml-sm-3 mb-6" elevation="3">
            <v-list-item-avatar
              height="120"
              width="120"
              class="mx-auto my-0 d-flex justify-center align-center green rounded-circle"
            >
              <v-img
                v-if="user.profilePicture.src"
                :src="user.profilePicture.src"
              ></v-img>
              <span v-else>
                <v-icon color="grey lighten-4 text-h1"
                  >mdi-account mdi-48px</v-icon
                >
              </span>
            </v-list-item-avatar>
            <div class="text-center d-flex flex-column">
              <p class="text-h5 font-weight-bold mt-4 mb-0">
                {{ profanityFilter(user.personalDetails.displayName) }}
                <VerifiedSymbol v-if="user.verified" :role="user.role" />
              </p>
              <a
                :href="`mailto:${user.contact.email}`"
                target="_blank"
                class="text-subtitle-1 blue--text "
                >{{ user.contact.email }}</a
              >
              <a
                :href="user.contact.website"
                target="_blank"
                class="text-subtitle-1 blue--text "
                >{{ user.contact.website }}</a
              >
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="`tel:${user.contact.phoneNumber}`"
                class="text-subtitle-1 blue--text "
                >{{ formattedNumber }}</a
              >
            </div>
            <v-divider
              class="my-3"
              v-if="
                user.socialMedia.facebook ||
                  user.socialMedia.instagram ||
                  user.socialMedia.linkedIn ||
                  user.socialMedia.youtube
              "
            ></v-divider>
            <div class="d-flex justify-center">
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="user.socialMedia.facebook"
                v-if="user.socialMedia.facebook"
              >
                <v-btn icon color="blue darken-3" x-large>
                  <v-icon>mdi-facebook </v-icon>
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="user.socialMedia.instagram"
                v-if="user.socialMedia.instagram"
              >
                <v-btn icon color="pink darken-1" x-large>
                  <v-icon>mdi-instagram </v-icon>
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="user.contact.website"
                v-if="user.contact.website"
              >
                <v-btn icon color="green accent-4" x-large>
                  <v-icon>mdi-earth</v-icon>
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="user.socialMedia.linkedIn"
                v-if="user.socialMedia.linkedIn"
              >
                <v-btn icon color="blue darken-2" x-large>
                  <v-icon>mdi-linkedin </v-icon>
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="user.socialMedia.youtube"
                v-if="user.socialMedia.youtube"
              >
                <v-btn icon color="red darken-1" x-large>
                  <v-icon>mdi-youtube </v-icon>
                </v-btn>
              </a>
            </div>
            <v-divider
              class="mt-2 mb-4"
              v-if="user.achievements.length > 0"
            ></v-divider>
            <div
              class="max-width mx-auto my-0"
              v-if="user.achievements.length > 0"
            >
              <div class="d-flex align-center mb-3">
                <v-avatar
                  size="46"
                  color="blue lighten-5"
                  class="rounded-circle mr-3"
                >
                  <v-icon dark color="blue">
                    mdi-star mdi-36px
                  </v-icon>
                </v-avatar>
                <p class="mb-0">Ja Housing Owner</p>
              </div>
              <div class="d-flex align-center mb-3">
                <v-avatar
                  size="46"
                  color="blue lighten-5"
                  class="rounded-circle mr-3"
                >
                  <v-icon dark color="blue">
                    mdi-star-check-outline mdi-36px
                  </v-icon>
                </v-avatar>
                <p class="mb-0">Verified Owner</p>
              </div>
              <div class="d-flex align-center mb-3">
                <v-avatar
                  size="46"
                  color="blue lighten-5"
                  class="rounded-circle mr-3"
                >
                  <v-icon dark color="blue">
                    mdi-check-decagram mdi-36px
                  </v-icon>
                </v-avatar>
                <p class="mb-0">Verified Realtor</p>
              </div>
              <div class="d-flex align-center mb-3">
                <v-avatar
                  size="46"
                  color="blue lighten-5"
                  class="rounded-circle mr-3"
                >
                  <v-icon dark color="blue">
                    mdi-seal mdi-36px
                  </v-icon>
                </v-avatar>
                <p class="mb-0">Recommended</p>
              </div>
              <div class="d-flex align-center mb-3">
                <v-avatar
                  size="46"
                  color="blue lighten-5"
                  class="rounded-circle mr-3"
                >
                  <v-icon dark color="blue">
                    mdi-home-search mdi-36px
                  </v-icon>
                </v-avatar>
                <p class="mb-0">Experienced</p>
              </div>

              <div class="d-flex align-center mb-3">
                <v-avatar
                  size="46"
                  color="blue lighten-5"
                  class="rounded-circle mr-3"
                >
                  <v-icon dark color="blue">
                    mdi-certificate mdi-36px
                  </v-icon>
                </v-avatar>
                <p class="mb-0">Top Performer</p>
              </div>
            </div>
            <v-divider
              class="mt-2 mb-4"
              v-if="user.verified"
            ></v-divider>
            <div
              class="max-width mx-auto my-0"
              v-if="user.verified"
            >
              <p class="mb-2 text-h6 font-weight-bold">{{profanityFilter(user.personalDetails.firstName)}} Provided</p>
              <ul class="body-1">
                <li class="grey--text text--darken-2">&#8226; Government ID</li>
                <li class="grey--text text--darken-2">
                  &#8226; Realtor License
                </li>
                <li class="grey--text text--darken-2">&#8226; Email address</li>
                <li class="grey--text text--darken-2">&#8226; Phone number</li>
              </ul>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="8" v-if="user.personalDetails.displayName === 'loading'">
          <v-skeleton-loader type="paragraph,sentences"></v-skeleton-loader>
          <TheRealEstatePropertiesListingLoader title="loading properties" />
        </v-col>

        <v-col cols="12" md="8" v-else>
          <p class="text-h4 font-weight-bold" id="top">
            Hello, I'm
            {{
              profanityFilter(user.personalDetails.firstName) ||
                profanityFilter(user.personalDetails.displayName)
            }}
          </p>
          <p class="body-1" v-if='user.personalDetails.about'>
            {{ profanityFilter(user.personalDetails.about) }}
          </p>
          <p class="body-1" v-else>
         
          </p>

          <v-divider class="my-6"></v-divider>

          <TheRealEstatePropertiesListingFirebaseGetUser
            :properties="properties"
          />
          <div class="d-flex justify-center align-center mt-4">
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="green accent-4"
              @click="$vuetify.goTo('#top')"
            >
              <v-icon dark>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <v-btn
              class="mx-2"
              fab
              :dark="paginateNext.dark"
              small
              color="green accent-4"
              @click="next"
              :disabled="paginateNext.disabled"
            >
              <v-icon dark>
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <SectionPadding class="backgroundShade">
      <SectionTitles
        subTitle="our Premium properties"
        mainTitle="Featured listings around you"
        linkMessage="See all featured listings "
        route="featured"
      />

      <TheFeaturedProperties />
    </SectionPadding>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  async fetch() {
    this.theParam = this.$route.params.slug;
    // console.log(this.theParam);
    await this.$fire.firestore
      .collection("users")
      .doc(this.theParam)
      .get()
      .then(doc => {
        if (doc.exists) {
          // console.log("Document data:", doc.data());
          this.user = doc.data();
          this.loadUserProperties();
        } else {
          // doc.data() will be undefined in this case
          // console.log("No such document!");
          this.$router.push({ name: "error" });
        }
      })
      .catch(error => {
        this.logError(error.message);
        // // console.log("Error getting document:", error);
      });

    /* let j = () => parishes.parishes.find(parish => parish.slug == theParam);
    this.parish = j(); */
  },
  data() {
    return {
      properties: [],
      lastVisible: null,
      loading: true,
      paginateNext: {
        disabled: false,
        dark: true
      },
      iconColor: "rgba(0, 200, 83, 1)",
      phoneNumber: 1111111111,
      loading: false,
      flex: false,
      user: {
        achievements: [],
        verified: false,
        role: "",
        lastName: "",
        socialMedia: {
          linkedIn: "",
          facebook: "",
          youtube: "",
          twitter: "",
          instagram: ""
        },
        initials: "",
        realEstateFirm: {
          uid: "",
          name: ""
        },

        personalDetails: {
          lastName: "loading",
          displayName: "loading",
          initials: "loading",
          firstName: "loading",
          about: "loading"
        },
        contact: {
          whatsappNumber: 1111111111,
          email: "loading",
          website: "",
          phoneNumber: 1111111111
        },
        profilePicture: {
          src: "",
          fileName: ""
        },
        uid: ""
      }
    };
  },
  methods: {
    ...mapActions({
      logError: "errors/logError"
    }),
    profanityFilter(info) {
      var Filter = require("bad-words");
      let filter = new Filter();

      return filter.clean(info);
    },
    async loadUserProperties() {
      const ref = await this.$fire.firestore
        .collection("properties")
        .where("uploader", "==", this.user.uid)
        .orderBy("timestamp", "desc")
        .startAfter(this.lastVisible || {})
        .limit(6);
      ref.get().then(
        querySnapshot => {
          this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
          if (querySnapshot.empty) {
            // console.log("Empty Profile");
            this.paginateNext = {
              disabled: true,
              dark: false
            };
          }
          if (querySnapshot.empty && this.properties.length) {
            this.logError("This user has have no more properties.");
          }
          querySnapshot.forEach(doc => {
            this.properties.push([doc.data(), doc.id]);
          });
          // console.log(`Fetch properties ${this.properties}`);
          this.loading = false;
          if (this.properties === []) {
            this.properties = "no properties";
            this.loading = false;
          }
        },
        error => {
          // // console.log("Firebase");
          // console.log(error);

          this.logError(error.message);
        }
      );
    },
    next() {
      this.loadUserProperties();
    }
  },
  computed: {
    ...mapGetters({
      featuredProperties: "properties/featuredProperties"
    }),
    title() {
      return `${this.profanityFilter(
        this.user.personalDetails.displayName
      )} | Profile`;
    },
    description() {
          return `Profile page for: ${this.profanityFilter(this.user.personalDetails.displayName)}`;

    },
    formattedNumber() {
      /* var phone = this.phoneNumber.toString().replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3'); */
      var phone = [
        this.phoneNumber.toString().slice(0, 3),
        "-",
        this.phoneNumber.toString().slice(3, 6),
        "-",
        this.phoneNumber.toString().slice(6)
      ].join("");
      return phone;
    }
  }
};
</script>

<style lang="scss" scoped>
.max-width {
  width: 208px;
}
.icons-max-width {
  max-width: 400px;
}
.amendities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
