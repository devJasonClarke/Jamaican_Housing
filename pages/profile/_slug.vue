<template>
  <div>
    <v-container class="mt-6 mb-9">
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="pa-6 ml-sm-3 mb-6" elevation="3">
            <v-list-item-avatar
              height="120"
              width="120"
              class="mx-auto my-0 d-flex justify-center align-center green rounded-circle"
            >
              <v-img v-if="user.photoUrl" :src="user.photoUrl"></v-img>
              <span v-else>
                <v-icon color="grey lighten-4 text-h1"
                  >mdi-account mdi-48px</v-icon
                >
              </span>
            </v-list-item-avatar>
            <div class="text-center d-flex flex-column">
              <p class="text-h5 font-weight-bold mt-4 mb-0">
                {{ user.personalDetails.displayName }}
                       <VerifiedSymbol
                  v-if="user.verified"
                  :role="user.role"
                />
        
              </p>
              <a
                :href="`mailto:${user.contact.email}`"
                class="text-subtitle-1 blue--text "
                >{{ user.contact.email }}</a
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
            <v-divider class="mt-2 mb-4" v-if="user.achievements.length > 0"></v-divider>
            <div class="max-width mx-auto my-0" v-if="user.achievements.length > 0">
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
            <v-divider class="mt-2 mb-4" v-if="user.verified && user.role == 'realtor'"></v-divider>
            <div class="max-width mx-auto my-0" v-if="user.verified && user.role == 'realtor'">
              <p class="mb-2 text-h6 font-weight-bold">Jason Provided</p>
              <ul class="body-1">
                <li class="grey--text text--darken-2">&#8226; Government ID</li>
                <li class="grey--text text--darken-2" >
                  &#8226; Realtor License
                </li>
                <li class="grey--text text--darken-2">&#8226; Email address</li>
                <li class="grey--text text--darken-2">&#8226; Phone number</li>
              </ul>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="8">
          <p class="text-h4 font-weight-bold">Hello, I'm {{user.personalDetails.firstName || user.personalDetails.displayName}}</p>
          <p class="body-1">
            {{user.personalDetails.about}}
          </p>
          <TheRealEstatePropertiesListingLoader v-if="loading" title="sale" />
          <TheRealEstatePropertiesListingProfile
            v-else
            title="Real Estate"
            :card="featuredProperties"
          />
        </v-col>
      </v-row>
    </v-container>
    <SectionPadding class="backgroundShade">
      <SectionTitles
        subTitle="FIND YOUR HOME TODAY"
        mainTitle="Featured listings around you"
        linkMessage="See all featured listings "
        route="featured"
      />

      <TheFeaturedProperties />
    </SectionPadding>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async fetch() {
    this.theParam = this.$route.params.slug;
    console.log(this.theParam);
    await this.$fire.firestore
      .collection("users")
      .doc(this.theParam)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          this.user = doc.data();
          this.getUser();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          this.$router.push({ name: "error" });
        }
      })
      .catch(error => {
        console.log("Error getting document:", error);
      });

    /* let j = () => parishes.parishes.find(parish => parish.slug == theParam);
    this.parish = j(); */
  },
  data() {
    return {
      iconColor: "rgba(0, 200, 83, 1)",
      phoneNumber: 18763147199,
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
          lastName: "",
          displayName: "",
          initials: "",
          firstName: "",
          about: ""
        },
        contact: {
          whatsappNumber: null,
          email: "asd@sdf.asdf",
          website: "",
          phoneNumber: 23234234234
        },
        photoUrl: "",
        uid: ""
      }
    };
  },
  methods: {},
  computed: {
    target() {
      const value = "#top";
      return value;
    },
    ...mapGetters({
      featuredProperties: "properties/featuredProperties"
    }),

    formattedNumber() {
      /* var phone = this.phoneNumber.toString().replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3'); */
      var phone = [
        this.phoneNumber.toString().slice(0, 4),
        "-",
        this.phoneNumber.toString().slice(4, 7),
        "-",
        this.phoneNumber.toString().slice(7)
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
