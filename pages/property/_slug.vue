<template>
  <div>
    <TheMetaTags :title="title" :description="description" />

    <ThePropertySwiperFirebase :images="property.images" />

    <v-container class="mt-6 mb-9">
      <v-row>
        <v-col cols="12" md="8" v-if="property.details.size === ''">
          <v-skeleton-loader
            max-width="50%"
            type="paragraph,sentences"
          ></v-skeleton-loader>
          <v-divider class="my-6"></v-divider>
          <v-skeleton-loader type="paragraph,sentences"></v-skeleton-loader>
          <v-divider class="my-6"></v-divider>
          <v-skeleton-loader
            type="list-item-avatar-two-line,list-item-avatar-two-line,list-item-avatar-two-line"
          ></v-skeleton-loader>
          <v-divider class="my-6"></v-divider>
          <v-skeleton-loader type="image"></v-skeleton-loader>
          <v-divider class="my-6"></v-divider>
          <v-skeleton-loader type="image"></v-skeleton-loader>
        </v-col>
        <v-col cols="12" md="8" v-else>
          <p class="green--text text--accent-4 text-capitalize">
            <v-icon :color="iconColor">mdi-map-marker mdi-24px</v-icon>
            {{ property.details.community }},
            {{ property.details.parish }}
          </p>
          <h1 class="d-flex justify-space-between text-capitalize">
            <span>
              {{ property.description.name }}

              <v-tooltip color="blue" top v-if="property.verified">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="blue" dark v-bind="attrs" v-on="on">
                    mdi-check-decagram mdi-36px
                  </v-icon>
                </template>
                <span>Verified</span>
              </v-tooltip>
            </span>
            <v-tooltip color="red" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="mt-1"
                  icon
                  color="red"
                  @click="removeFromFavourites"
                  :loading="likeLoading"
                  v-if="liked"
                >
                  <v-icon color="red" v-if="liked"> mdi-heart</v-icon>
                </v-btn>
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="mt-1"
                  icon
                  color="red"
                  @click="addToFavourites"
                  :loading="likeLoading"
                  v-else
                >
                  <v-icon color="red">mdi-heart-outline</v-icon>
                </v-btn>
              </template>
              <span>Favourites</span>
            </v-tooltip>
          </h1>

          <div
            class="mt-6 pa-0  pb-2 d-flex justify-space-between flex-wrap icons-max-width"
          >
            <p>
              <v-icon :color="iconColor"
                >mdi-ruler-square mdi-flip-v mdi-18px</v-icon
              >
              {{ shortenNumber(property.details.size * 1) }} Sq. Ft
            </p>
            <p>
              <v-icon :color="iconColor">mdi-bed mdi-18px</v-icon>
              {{ property.details.bedrooms }} Bedroom<span
                v-if="
                  property.details.bedrooms > 1 ||
                    property.details.bedrooms == 0
                "
                >s</span
              >
            </p>
            <p>
              <v-icon :color="iconColor">mdi-shower-head mdi-18px</v-icon>
              {{ property.details.bathrooms }} Bathroom<span
                v-if="
                  property.details.bathrooms > 1 ||
                    property.details.bathrooms == 0
                "
                >s</span
              >
            </p>

            <p>
              <v-icon :color="iconColor">mdi-currency-usd mdi-18px</v-icon>
              <span v-for="(detail, i) in details" :key="`icon ${i}`">
                <span v-if="detail.price" :class="{ 'd-none': !detail.price }">
                  {{ shortenNumber(property.details.price * currencyRate) }}
                  {{ activeCurrency }}
                </span>
              </span>
            </p>
          </div>

          <div class="">
            <p class="text-h6">Description</p>
            <p>
              {{ property.description.description }}
            </p>
            <v-row class="mb-3">
              <v-col cols="12" sm="6"
                >Share:
                <a
                  target="_blank"
                  rel="nofollow noopener"
                  :href="
                    `https://twitter.com/share?url=https://jamaican-housing.pages.dev/property/${this.$route.params.slug}&text=Have a look at this property:`
                  "
                >
                  <v-btn class="d-inline" small icon fab color="white">
                    <v-icon color="blue">mdi-twitter</v-icon>
                  </v-btn>
                </a>
                <a
                  target="_blank"
                  rel="nofollow noopener"
                  :href="
                    `https://www.facebook.com/sharer.php?=https://jamaican-housing.pages.dev/property/${this.$route.params.slug}`
                  "
                >
                  <v-btn class="d-inline" small icon fab color="white">
                    <v-icon color="blue darken-3">mdi-facebook</v-icon>
                  </v-btn>
                </a>

                <a
                  target="_blank"
                  rel="nofollow noopener"
                  :href="
                    ` https://t.me/share/url?url=https://jamaican-housing.pages.dev/property/${this.$route.params.slug}&text=Have a look at this property:`
                  "
                >
                  <v-btn class="d-inline" small icon fab color="white">
                    <v-icon color="blue darken-2">mdi-telegram</v-icon>
                  </v-btn>
                </a>
                <a
                  target="_blank"
                  rel="nofollow noopener"
                  :href="
                    `https://wa.me/?text=Have a look at this property: https://jamaican-housing.pages.dev/property/${this.$route.params.slug}`
                  "
                >
                  <v-btn class="d-inline" small icon fab color="white">
                    <v-icon color="green">mdi-whatsapp</v-icon>
                  </v-btn>
                </a>
              </v-col>
              <v-col cols="12" sm="6"
                >Print:

                <v-btn class="d-inline" small icon fab @click="print">
                  <v-icon>mdi-printer</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
          <v-divider class="mt-1 mb-6"></v-divider>

          <div :class="{ 'mb-5': $vuetify.theme.dark }">
            <p class="text-h6">Details</p>
            <v-list dense flat :class="{ 'py-4': $vuetify.theme.dark }">
              <v-list-item-group
                no-action="true"
                :color="iconColor"
                class="amendities-grid"
              >
                <v-list-item class="mb-3">
                  <v-list-item-content class="  text-capitalize">
                    <v-list-item-title class="text-body-1   font-weight-medium"
                      >Property Type :</v-list-item-title
                    >
                    {{ property.details.propertyType }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="mb-3">
                  <v-list-item-content class="  text-capitalize">
                    <v-list-item-title class="text-body-1   font-weight-medium"
                      >Parish :</v-list-item-title
                    >
                    {{ property.details.parish }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item class="mb-3">
                  <v-list-item-content class="  text-capitalize">
                    <v-list-item-title class="text-body-1   font-weight-medium"
                      >Community :</v-list-item-title
                    >
                    {{ property.details.community }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item class="mb-3">
                  <v-list-item-content class="  text-capitalize">
                    <v-list-item-title class="text-body-1   font-weight-medium"
                      >Bedroom<span
                        v-if="
                          property.details.bedrooms > 1 ||
                            property.details.bedrooms == 0
                        "
                        >s</span
                      >
                      :</v-list-item-title
                    >
                    {{ property.details.bedrooms }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="mb-3">
                  <v-list-item-content class="  text-capitalize">
                    <v-list-item-title class="text-body-1   font-weight-medium"
                      >Bathroom<span
                        v-if="
                          property.details.bathrooms > 1 ||
                            property.details.bathrooms == 0
                        "
                        >s</span
                      >
                      :</v-list-item-title
                    >
                    {{ property.details.bathrooms }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item class="mb-3">
                  <v-list-item-content class="  text-capitalize">
                    <v-list-item-title class="text-body-1   font-weight-medium"
                      >Garage<span
                        v-if="
                          property.details.garages > 1 ||
                            property.details.garages == 0
                        "
                        >s</span
                      >
                      :</v-list-item-title
                    >
                    {{ property.details.garages }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="mb-3">
                  <v-list-item-content class="  text-capitalize">
                    <v-list-item-title class="text-body-1   font-weight-medium"
                      >Size :</v-list-item-title
                    >
                    {{ property.details.size }} sq. ft.
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="mb-3">
                  <v-list-item-content class="  text-capitalize">
                    <v-list-item-title class="text-body-1   font-weight-medium"
                      >Property Status :</v-list-item-title
                    >
                    For {{ property.details.propertyFor }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="property.details.rentType" class="mb-3">
                  <v-list-item-content class="  text-capitalize">
                    <v-list-item-title class="text-body-1   font-weight-medium"
                      >Rent Type :</v-list-item-title
                    >
                    {{ property.details.rentType }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="mb-3">
                  <v-list-item-content class="  text-capitalize">
                    <v-list-item-title class="text-body-1   font-weight-medium"
                      >Price :</v-list-item-title
                    >
                    $
                    {{
                      numberWithCommas(property.details.price * currencyRate)
                    }}
                    {{ activeCurrency }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item class="mb-3" v-if="property.timestamp">
                  <v-list-item-content class="  text-capitalize ">
                    <v-list-item-title class="text-body-1 font-weight-medium"
                      >Date Added :</v-list-item-title
                    >
                    {{ property.timestamp.toDate().toLocaleDateString() }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="mb-3" v-if="property.verified">
                  <v-list-item-content class="  text-capitalize ">
                    <v-list-item-title class="text-body-1 font-weight-medium"
                      >Verified :</v-list-item-title
                    >
                    {{ property.verified }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="mb-3" v-if="property.featured">
                  <v-list-item-content class="  text-capitalize">
                    <v-list-item-title class="text-body-1   font-weight-medium"
                      >Featured :</v-list-item-title
                    >
                    {{ `${property.featured}` }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item v-if="property.details.propertyId" class="mb-3">
                  <v-list-item-content class="  text-capitalize">
                    <v-list-item-title class="text-body-1   font-weight-medium">
                      MLS ID :</v-list-item-title
                    >
                    {{ property.details.propertyId }}
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
          <v-divider class="mt-1 mb-6"></v-divider>
          <div :class="{ 'mb-5': $vuetify.theme.dark }">
            <p class="text-h6">Amenities</p>

            <v-list dense flat :class="{ 'py-4': $vuetify.theme.dark }">
              <v-list-item-group :color="iconColor" class="amendities-grid">
                <v-list-item
                  v-for="(item, i) in property.amenities"
                  :key="i"
                  class="mb-3"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon" :color="iconColor"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title
                      class="text-body-1 font-weight-regular"
                      v-text="item.title"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
          <v-divider class="mt-1 mb-6"></v-divider>

          <div v-if="property.tours.virtualTour">
            <p class="text-h6">Virtual Tour</p>
            <iframe
              width="100%"
              height="430"
              :src="property.tours.virtualTour"
              frameborder="0"
              allowfullscreen
              allow="xr-spatial-tracking"
            ></iframe>
            <v-divider class="mt-1 mb-6"></v-divider>
          </div>

          <div v-if="property.tours.youtube">
            <p class="text-h6 ">Video</p>
            <iframe
              height="430"
              width="100%"
              class="mb-3"
              :src="`https://www.youtube.com/embed/${property.tours.youtube}`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <a
              :href="
                `https://www.youtube.com/watch?v=${property.tours.youtube}`
              "
              target="_blank"
              rel="noopener noreferrer"
              class="blue--text"
              >Source:
              {{
                `https://www.youtube.com/watch?v=${property.tours.youtube}`
              }}</a
            >
          </div>
        </v-col>
        <v-col cols="12" md="4" v-if="property.details.size === ''">
          <v-card class="pa-6 ml-sm-3 mb-6" outlined>
            <v-skeleton-loader
              type="image, list-item-three-line"
            ></v-skeleton-loader>
            <v-divider class="my-2"></v-divider>
            <v-skeleton-loader type="table-tfoot"></v-skeleton-loader>
            <v-divider class="my-2"></v-divider>
            <v-skeleton-loader
              type="list-item-three-line,list-item-three-line,list-item-three-line,card-heading, card-heading,card-heading"
            ></v-skeleton-loader>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" v-else>
          <v-card class="pa-6 ml-sm-3 mb-6 " outlined>
            <nuxt-link :to="{ name: 'profile' }">
              <v-img
                height="150"
                width="150"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                class="rounded-circle mx-auto my-0"
              ></v-img>
            </nuxt-link>

            <div class="text-center d-flex flex-column">
              <nuxt-link
                :to="{ name: 'profile' }"
                class="text-h6 blue--text mt-4 mb-0"
              >
                {{ uploader.name.displayName }}
                <VerifiedSymbol
                  v-if="uploader.verified"
                  :role="uploader.role"
                />
              </nuxt-link>
              <a
                :href="`mailto:${uploader.contact.email}`"
                class="text-subtitle-1 blue--text "
                >{{ uploader.contact.email }}</a
              >
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="`tel:${uploader.contact.phoneNumber}`"
                class="text-subtitle-1 blue--text "
                >{{ formattedNumber }}</a
              >
            </div>
            <v-divider
              class="my-3"
              v-if="
                uploader.socialMedia.facebook ||
                  uploader.socialMedia.instagram ||
                  uploader.socialMedia.linkedIn ||
                  uploader.socialMedia.youtube
              "
            ></v-divider>
            <div class="d-flex justify-center">
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="uploader.socialMedia.facebook"
                v-if="uploader.socialMedia.facebook"
              >
                <v-btn icon color="blue darken-3" x-large>
                  <v-icon>mdi-facebook </v-icon>
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="uploader.socialMedia.instagram"
                v-if="uploader.socialMedia.instagram"
              >
                <v-btn icon color="pink darken-1" x-large>
                  <v-icon>mdi-instagram </v-icon>
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="uploader.contact.website"
                v-if="uploader.contact.website"
              >
                <v-btn icon color="green accent-4" x-large>
                  <v-icon>mdi-earth</v-icon>
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="uploader.socialMedia.linkedIn"
                v-if="uploader.socialMedia.linkedIn"
              >
                <v-btn icon color="blue darken-2" x-large>
                  <v-icon>mdi-linkedin </v-icon>
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="uploader.socialMedia.youtube"
                v-if="uploader.socialMedia.youtube"
              >
                <v-btn icon color="red darken-1" x-large>
                  <v-icon>mdi-youtube </v-icon>
                </v-btn>
              </a>
            </div>
            <v-divider class="my-3"></v-divider>

            <v-form
              class="mt-6"
              @submit.prevent="validateMessage"
              ref="messageForm"
            >
              <v-text-field
                outlined
                dense
                label="Full Name *"
                required
                :color="iconColor"
                :rules="nameRules"
                v-model="fullName"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                label="Phone Number *"
                type="number"
                required
                :rules="phoneNumberRules"
                :color="iconColor"
                v-model="phoneNumber"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                label="Email Address *"
                type="email"
                required
                :rules="emailRules"
                :color="iconColor"
                v-model="email"
              ></v-text-field>
              <v-textarea
                outlined
                name="input-7-4"
                label="Message *"
                :rules="messageRules"
                :color="iconColor"
                v-model="message"
              ></v-textarea>
              <v-btn
                class="mb-6"
                x-large
                type="submit"
                :color="iconColor"
                block
                :dark="!sent"
                depressed
                :loading="loading"
                :disabled="sent"
              >
                <span v-if="sent">
                  <v-icon left>mdi-check-circle-outline mdi-24px </v-icon>
                  Message Sent
                </span>
                <span v-else>
                  Send Message<v-icon right>mdi-send </v-icon></span
                >
              </v-btn>
              <a
                :href="`tel:${uploader.contact.phoneNumber}`"
                class="text-subtitle-1"
              >
                <v-btn
                  class="mb-6"
                  x-large
                  outlined
                  :color="iconColor"
                  block
                  dark
                >
                  <v-icon left>
                    mdi-phone-outline
                  </v-icon>
                  Call
                </v-btn>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="`https://wa.me/${uploader.contact.whatsappNumber}`"
                v-if="uploader.contact.whatsappNumber"
              >
                <v-btn
                  class="mb-6"
                  x-large
                  outlined
                  :color="iconColor"
                  block
                  dark
                >
                  <v-icon left color="green" dark>
                    mdi-whatsapp
                  </v-icon>
                  Whatsapp
                </v-btn>
              </a>
            </v-form>
          </v-card>
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
    <v-snackbar v-model="snackbar" :timeout="20000" left>
      {{ snackbarMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn
          :color="snackbarColor"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  async fetch() {
    this.theParam = this.$route.params.slug;
    console.log(this.theParam);
    await this.$fire.firestore
      .collection("properties")
      .doc(this.theParam)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          this.property = doc.data();
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
      fullName: "",
      email: "",
      phoneNumber: "",
      iconColor: "rgba(0, 200, 83, 1)",
      snackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
      theParam: "",
      message: "",
      sent: false,
      loading: false,
      likeLoading: false,
      property: {
        timestamp: "",
        details: {
          bathRooms: "",
          community: "",
          propertyType: "",
          price: "",
          parish: "",
          status: "",
          size: "",
          garages: "",
          bedRooms: ""
        },
        parish: "",
        tours: { virtualTour: "", youtube: "" },
        type: "",
        amenities: [],
        description: {
          name: "",
          description: ""
        },
        uploader: "sss"
      },
      uploader: {
        verified: true,
        role: "user",
        lastName: "",
        socialMedia: {
          linkedIn: "",
          facebook: "",
          youtube: "",
          twitter: "",
          instagram: ""
        },
        initials: "JC",
        realEstateFirm: {
          uid: "",
          name: ""
        },
        displayName: "Jason Clarke",
        favourites: ["ytnkT0sDxquL6TjjsA2U"],
        email: "jettison100@gmail.com",
        firstName: "",
        name: {
          lastName: "Clarke",
          displayName: "Jason Clarke",
          initials: "JC",
          firstName: "J dawg"
        },
        contact: {
          whatsappNumber: null,
          email: "asd@sdf.asdf",
          website: "",
          phoneNumber: 23234234234
        },
        photoUrl: "https://avatars.githubusercontent.com/u/53666196?v=4",
        uid: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
      },
      card: {
        title: "Sunny Private Studio Apartment",
        parish: "St. James",
        realEstateType: "Apartment",
        squareMeters: 80,
        beds: 3,
        bathroom: 2,
        price: 70
      },
      items: [
        {
          text: "Wifi",
          icon: "mdi-wifi"
        },
        { text: "Air Conditioning", icon: "mdi-air-filter" },
        { text: "Cable TV ", icon: "mdi-television" },
        { text: "Gated Community", icon: "mdi-security" },
        { text: "Parking", icon: "mdi-car" },
        { text: "Furnished", icon: "mdi-sofa" },
        { text: "24 Hour Security", icon: "mdi-cctv" },
        { text: "Family Oriented", icon: "mdi-home-heart" },
        { text: "Grilled", icon: "mdi-shield-home" },
        { text: "Water Heater", icon: "mdi-thermometer-high" },
        { text: "Swimming Pool", icon: "mdi-pool" },
        { text: "Generator", icon: "mdi-flash" },
        { text: "Water Tank", icon: "mdi-water" }
      ],
      details: [
        {
          detail: "Property ID",
          value: "MLS-99999"
        },
        {
          detail: "Property Type",
          value: "Apartment"
        },
        {
          detail: "Bed Rooms",
          value: "1"
        },
        {
          detail: "Bathrooms",
          value: "1"
        },
        {
          detail: "Size",
          value: "12 square metre"
        },
        {
          detail: "Garages",
          value: "1"
        },
        {
          detail: "Price",
          value: "$55000 JMD / month",
          price: 85000
        },
        {
          detail: "Property Status",
          value: "For Rent"
        },
        {
          detail: "Community",
          value: "Catherine Hall"
        },
        {
          detail: "Parish",
          value: "St. James"
        }
      ]
    };
  },
  methods: {
    ...mapActions({
      removeFavourites: "favourites/removeFavourites",
      addFavourites: "favourites/addFavourites",
      logError: "errors/logError"
    }),
    async getUser() {
      await this.$fire.firestore
        .collection("users")
        .doc(this.property.uploader)
        .get()
        .then(doc => {
          if (doc.exists) {
            console.log("Document data exits:", doc.data());
            this.uploader = doc.data();

            let message = `Hi ${doc.data().firstName ||
              doc.data().name.displayName}, I am interested in this property.`;
            this.message = message;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    print() {
      window.print();
    },
    addToFavourites() {
      this.likeLoading = !this.likeLoading;
      this.addFavourites(this.theParam);
      setTimeout(() => (this.likeLoading = !this.likeLoading), 1000);
    },
    removeFromFavourites() {
      this.likeLoading = !this.likeLoading;
      this.removeFavourites(this.theParam);
      setTimeout(() => (this.likeLoading = !this.likeLoading), 1000);
    },
    shortenNumber(num) {
      num = Math.round((num + Number.EPSILON) * 100) / 100;

      if (num < 1000) {
        return num;
      }
      var si = [
        { v: 1e3, s: "K" },
        { v: 1e6, s: "M" },
        { v: 1e9, s: "B" },
        { v: 1e12, s: "T" },
        { v: 1e15, s: "P" },
        { v: 1e18, s: "E" }
      ];
      var i;
      for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].v) {
          break;
        }
      }
      return (
        (num / si[i].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
        si[i].s
      );
    },

    numberWithCommas(x) {
      x = Math.round((x + Number.EPSILON) * 100) / 100;

      x = x.toString();
      let pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
      return x;
    },
    validateMessage() {
      if (this.$refs.messageForm.validate()) {
        this.sendMessage();
      }
    },
    sendMessage() {
      this.loading = true;

      this.$fire.firestore
        .collection("messages")
        .add({
          sender: this.fullName,
          recipient: this.uploader.uid,
          email: this.email,
          phoneNumber: this.phoneNumber,
          timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
          message: this.message,
          property: `https://jamaican-housing.pages.dev/property/${this.theParam}`,
          read: false
        })
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
        })
        .then(() => {
          this.sent = true;
          this.loading = false;
          this.snackbar = true;
          this.snackbarMessage = "Message Successfully Sent";
          this.fullName = "";
          this.email = "";
          this.phoneNumber = "";
          this.message = "";
          this.snackbarColor = "green";
        })
        .catch(error => {
          console.error("Error adding document: ", error);
          this.loading = false;
          this.snackbar = true;
          this.snackbarMessage = error;
          this.snackbarColor = "pink";
        });
    }
  },
  computed: {
    ...mapGetters({
      country: "api/country",
      activeCurrency: "api/activeCurrency",
      currencyRate: "api/currencyRate",
      nameRules: "inputRules/nameRules",
      phoneNumberRules: "inputRules/phoneNumberRules",
      emailRules: "inputRules/emailRules",
      messageRules: "inputRules/messageRules",
      favourites: "favourites/favourites"
    }),

    liked() {
      if (this.favourites.includes(this.theParam)) {
        return true;
      } else {
        return false;
      }
    },
    title() {
      return `${this.property.description.name} | Real Estate Jamaica | Property`;
    },
    description() {
      return `${this.property.description.description}`;
    },
    formattedNumber() {
      /* var phone = this.phoneNumber.toString().replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3'); */

      var phone = [
        this.uploader.contact.phoneNumber.toString().slice(0, 4),
        "-",
        this.uploader.contact.phoneNumber.toString().slice(4, 7),
        "-",
        this.uploader.contact.phoneNumber.toString().slice(7)
      ].join("");
      return phone;
    }
  }
};
</script>

<style>
.icons-max-width {
  max-width: 470px;
}
.amendities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
