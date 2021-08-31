<template>
  <div>
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
                  :loading="likeLoading"
                  class="mt-1"
                  icon
                  color="red"
                  @click="likeProperty"
                >
                  <v-icon color="red" v-if="liked"> mdi-heart</v-icon>
                  <v-icon color="red" v-else>mdi-heart-outline</v-icon>
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
                      >Price :</v-list-item-title
                    >
                    $
                    {{
                      numberWithCommas(property.details.price * currencyRate)
                    }}
                    {{ activeCurrency }}
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
                      >Size :</v-list-item-title
                    >
                    {{ property.details.size }} sq. ft.
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

                <v-list-item class="mb-3" v-if="property.featured">
                  <v-list-item-content class="  text-capitalize">
                    <v-list-item-title class="text-body-1   font-weight-medium"
                      >Featured :</v-list-item-title
                    >
                    {{ `${property.featured}` }}
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
                <v-list-item class="mb-3" v-if="property.timestamp">
                  <v-list-item-content class="  text-capitalize ">
                    <v-list-item-title class="text-body-1 font-weight-medium"
                      >Date Added :</v-list-item-title
                    >
                    {{ property.timestamp.toDate().toLocaleDateString() }}
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
          </div>
          <v-divider
            v-if="property.tours.youtube"
            class="mt-6 mb-6"
          ></v-divider>
          <div v-if="property.tours.youtube">
            <p class="text-h6 ">Video</p>
            <iframe
              height="430"
              width="100%"
              :src="`https://www.youtube.com/embed/${property.tours.youtube}`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
        <v-col cols="12" md="4" else>
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
              <nuxt-link :to="{ name: 'profile' }" class="text-h6  mt-4 mb-0">
                {{ uploader["displayName"] }}
                <VerifiedSymbol
                  v-if="uploader['verified']"
                  :role="uploader['role']"
                />
              </nuxt-link>
              <a
                :href="`mailto:${uploader['email']}`"
                class="text-subtitle-1"
                >{{ uploader["email"] }}</a
              >
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="`tel:${phoneNumber}`"
                class="text-subtitle-1"
                >{{ formattedNumber }}</a
              >
            </div>
            <v-divider class="my-3"></v-divider>
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
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="`https://wa.me/${phoneNumber}`"
              >
                <v-btn icon color="green" x-large>
                  <v-icon>mdi-whatsapp </v-icon>
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
              <a :href="`tel:${phoneNumber}`" class="text-subtitle-1">
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
              <a :href="`https://wa.me/${phoneNumber}`">
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
import { mapGetters } from "vuex";
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
      uploader: {},
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
      ],
      liked: false,
      likeLoading: false
    };
  },
  methods: {
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
              doc.data().displayName}, I am interested in this property.`;
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
    likeProperty() {
      this.liked = !this.liked;
      this.likeLoading = !this.likeLoading;
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
      messageRules: "inputRules/messageRules"
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

<style>
.icons-max-width {
  max-width: 470px;
}
.amendities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
