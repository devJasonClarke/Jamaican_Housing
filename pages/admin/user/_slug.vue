<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-container class="mt-6 mb-9">
      <v-row>
        <v-col
          cols="12"
          md="4"
          v-if="user.personalDetails.displayName === 'loading'"
        >
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
                <SymbolVerified
                  v-if="user.verification.verified"
                  :role="user.verification.role"
                />
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
              v-if="user.verification.verified"
            ></v-divider>
            <div
              class="max-width mx-auto my-0"
              v-if="user.verification.verified"
            >
              <p class="mb-2 text-h6 font-weight-bold">
                {{ profanityFilter(user.personalDetails.firstName) }} Provided
              </p>
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

        <v-col
          cols="12"
          md="8"
          v-if="user.personalDetails.displayName === 'loading'"
        >
          <v-skeleton-loader type="paragraph,sentences"></v-skeleton-loader>
          <TheListingRealEstatePropertiesLoader title="loading properties" />
        </v-col>

        <v-col cols="12" md="8" v-else>
          <p class="text-h4 font-weight-bold" id="top">
            Hello, I'm
            {{
              profanityFilter(user.personalDetails.firstName) ||
                profanityFilter(user.personalDetails.displayName)
            }}
          </p>
          <p class="body-1" v-if="user.personalDetails.about">
            {{ profanityFilter(user.personalDetails.about) }}
          </p>
          <p class="body-1" v-else></p>

          <v-divider class="my-6"></v-divider>

          <!--   {{ request_verification }} -->
          <v-tabs
            v-model="tab"
            background-color="transparent"
            :color="iconColor"
            show-arrows
          >
            <v-tab v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>

          <v-tabs-items class="py-12 px-4" v-model="tab">
            <v-tab-item>
              <v-form ref="descriptionForm" @submit.prevent="validateFields">
                <v-row
                  ><v-col cols="12" md="6">
                    <v-text-field
                      outlined
                      dense
                      prepend-icon="mdi-account"
                      label="First Name*"
                      required
                      v-model="requestUser.firstName"
                      :color="iconColor"
                      disabled
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      outlined
                      dense
                      prepend-icon="mdi-account"
                      label="Last Name *"
                      required
                      v-model="requestUser.lastName"
                      :color="iconColor"
                      disabled
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      outlined
                      dense
                      prepend-icon="mdi-email"
                      label="Email Address *"
                      required
                      v-model="requestUser.email"
                      :color="iconColor"
                      disabled
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      outlined
                      dense
                      prepend-icon="mdi-phone"
                      label="Phone Number *"
                      required
                      v-model="requestUser.phoneNumber"
                      :color="iconColor"
                      type="number"
                      disabled
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      outlined
                      dense
                      prepend-icon="mdi-account"
                      label="Is Realtor *"
                      required
                      v-model="requestUser.isRealtor"
                      :color="iconColor"
                      disabled
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" md="6" v-if="requestUser.isRealtor">
                    <v-text-field
                      outlined
                      dense
                      prepend-icon="mdi-card-account-details-outline"
                      label="Realtor License Number *"
                      required
                      v-model="requestUser.realtorLicense"
                      :color="iconColor"
                      disabled
                    ></v-text-field
                  ></v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      outlined
                      dense
                      prepend-icon="mdi-island"
                      label="Jamaican Citizen *"
                      required
                      v-model="requestUser.jamaicanCitizen"
                      :color="iconColor"
                      disabled
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" md="6" v-if="!requestUser.jamaicanCitizen">
                    <v-text-field
                      outlined
                      dense
                      prepend-icon="mdi-earth"
                      label="Country of Origin *"
                      required
                      v-model="requestUser.userCountry"
                      :color="iconColor"
                      disabled
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      outlined
                      dense
                      v-model="user.verification.verified"
                      prepend-icon="mdi-check-decagram"
                      label="Account Verified"
                      required
                      :color="iconColor"
                      disabled
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      outlined
                      dense
                      v-model="user.verification.verificationProcess"
                      prepend-icon="mdi-check-decagram"
                      label="Verified Process"
                      required
                      :color="iconColor"
                      disabled
                    ></v-text-field
                  ></v-col>
                </v-row>
              </v-form>
            </v-tab-item>
            <v-tab-item v-if="user.verification.role === 'admin'">
              <div>
                <p class="text-h6">
                  User is an Admin
                </p>
              </div>
            </v-tab-item>
            <v-tab-item v-else>
              <div v-for="(img, index) in requestUser.images" :key="index">
                <div class="my-3">
                  <p class="text-h6">Picture {{ index + 1 }}</p>
                  <p class="text-subtitle-1">File name: {{ img.fileName }}</p>
                  <img
                    class="cursor"
                    :src="img.src"
                    :alt="img.fileName"
                    width="100%"
                    height="100%"
                    @click="showImg(index)"
                  />

                  <v-btn
                    elevation="0"
                    dark
                    color="green accent-4"
                    class="mt-3"
                    @click="showImg(index)"
                    >inspect</v-btn
                  >
                </div>
              </div>
              <v-divider class="my-6"></v-divider>
            </v-tab-item>

            <v-tab-item v-if="user.verification.role === 'admin'">
              <div>
                <p class="text-h6">
                  User is an Admin
                </p>
              </div>
            </v-tab-item>
            <v-tab-item v-else>
              <div>
                <p class="text-h6">
                  Verify Realtor License with Jamaican Government:
                </p>
                <v-btn
                  elevation="0"
                  nuxt
                  target="_blank"
                  href="https://www.reb.gov.jm/nmcms.php?snippet=membership&p=member_search"
                  color="green accent-4"
                  dark
                  >Verify License</v-btn
                >
              </div>
              <v-divider class="my-9"></v-divider>
              <div>
                <p class="text-h6">Set user verification status:</p>
                <v-row>
                  <v-col cols="12" md="6">
                    <!--     <v-select
                        outlined
                        dense
                        prepend-icon="mdi-certificate"
                        label="Are you a registered realtor? *"
                        v-model="realtor"
                        :items="options"
                        :color="iconColor"
                        item-color="green"
                        :rules="[v => !!v.toString() || 'required']"
                      ></v-select
                    > -->

                    <v-select
                      outlined
                      dense
                      v-model="user.verification.verified"
                      prepend-icon="mdi-check-decagram"
                      label="Account Verified"
                      item-color="green"
                      :items="accountVerified"
                      required
                      :color="iconColor"
                    ></v-select
                  ></v-col>
                  <v-col cols="12" md="6">
                    <!--        <v-text-field
                      outlined
                      dense
                      v-model="user.verification.verificationProcess"
                      prepend-icon="mdi-check-decagram"
                      label="Verification Process"
                      required
                      :color="iconColor"
                    ></v-text-field
                  > -->

                    <v-select
                      outlined
                      dense
                      v-model="user.verification.verificationProcess"
                      prepend-icon="mdi-check-decagram"
                      label="Account Verification"
                      item-color="green"
                      :items="verificationProcess"
                      required
                      :color="iconColor"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <!--        <v-text-field
                      outlined
                      dense
                      v-model="user.verification.verificationProcess"
                      prepend-icon="mdi-check-decagram"
                      label="Verification Process"
                      required
                      :color="iconColor"
                    ></v-text-field
                  > -->

                    <v-select
                      outlined
                      dense
                      v-model="user.verification.role"
                      prepend-icon="mdi-check-decagram"
                      label="User Role"
                      item-color="green"
                      :items="accountRole"
                      required
                      :color="iconColor"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-btn
                  class="mt-3"
                  dark
                  color="green accent-4"
                  @click="setVerificationStatus"
                  >Save</v-btn
                >
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="requestUser.images"
      :index="index"
      :loop="true"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
      middleware: ["admin"],
  layout: "dashboard",
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
        } else {
          // doc.data() will be undefined in this case
          // console.log("No such document!");
          this.logError("Red Flag! User verification information not found!");
        }
      })
      .catch(error => {
        this.logError(error.message);
        // // console.log("Error getting document:", error);
      });
    await this.loadUserProperties(this.$route.params.slug);
    /* let j = () => parishes.parishes.find(parish => parish.slug == theParam);
    this.parish = j(); */
  },
  data() {
    return {
      accountVerified: [
        { text: "True", value: true },
        { text: "False", value: false }
      ],
      verificationProcess: [
        { text: "Pending", value: "pending" },
        { text: "Verified", value: "verified" },
        { text: "Declined", value: "declined" }
      ],
      accountRole: [
        { text: "User", value: "user" },
        { text: "Realtor", value: "Realtor" },
        { text: "Housing Scheme", value: "housing scheme" },
        { text: "Real Estate Firm", value: "real estate firm" }
      ],

      visible: false,
      index: 2,
      items: ["User Details", "Identification", "Verification"],
      tab: null,
      properties: [],
      lastVisible: null,
      loading: true,
      paginateNext: {
        disabled: false,
        dark: true
      },
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
          lastName: "loading",
          displayName: "loading",
          initials: "LD",
          firstName: "loading",
          about: "loading"
        },
        contact: {
          whatsappNumber: 1111111111,
          email: "loading",
          website: "",
          phoneNumber: 23234234234
        },
        profilePicture: {
          src: "",
          fileName: ""
        },
        uid: ""
      },
      request_verification: [],
      requestUser: {
        lastName: "loading",
        jamaicanCitizen: "loading",
        realtorLicense: "loading",
        isRealtor: "",
        userCountry: "",

        phoneNumber: 2111111111,
        verified: false,
        uploader: "loading",
        images: [
          {
            src: "loading",
            fileName: "loading"
          }
        ],
        timestamp: "",
        firstName: "loading",
        email: "loading"
      }
    };
  },
  methods: {
    ...mapActions({
      logSuccess: "snackbars/success/logSuccess",
      logError: "snackbars/errors/logError"
    }),
    showImg(i) {
      // console.log(`show: ${i}`);
      this.index = i;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    ...mapActions({
      logError: "snackbars/errors/logError"
    }),
    profanityFilter(info) {
      var Filter = require("bad-words");
      let filter = new Filter();

      return filter.clean(info);
    },
    async loadUserProperties(uid) {
      const ref = await this.$fire.firestore
        .collection("request_verification")
        .doc(uid);

      ref
        .get()
        .then(doc => {
          if (doc.exists) {
            // console.log("Document data:", doc.data());
            this.request_verification.push([doc.data(), doc.id]);
            this.requestUser = doc.data();
          } else {
            // doc.data() will be undefined in this case
            // console.log("No such document!");
            this.logError("Red Flag! User verification information not found!");
          }
        })
        .catch(error => {
          // console.log("Error getting document:", error);
          this.logError(error.message);
        });
    },
    setVerificationStatus() {
      this.$fire.firestore
        .collection("users")
        .doc(this.theParam)
        .update({
          "verification.verificationProcess": this.user.verification
            .verificationProcess,
          "verification.verified": this.user.verification.verified,
          "verification.role": this.user.verification.role,
          "verification.timestamp": this.$fireModule.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
          this.logSuccess("Successfully updated user's verification status!");
        });
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
      return `Profile page for: ${this.profanityFilter(
        this.user.personalDetails.displayName
      )}`;
    },
    formattedNumber() {
      /* var phone = this.phoneNumber.toString().replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3'); */
      var phone = [
        this.user.contact.phoneNumber.toString().slice(0, 3),
        "-",
        this.user.contact.phoneNumber.toString().slice(3, 6),
        "-",
        this.user.contact.phoneNumber.toString().slice(6)
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
.cursor {
  cursor: pointer;
}
</style>
