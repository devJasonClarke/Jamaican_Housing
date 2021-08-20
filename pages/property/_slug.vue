<template>
  <div>
    <ThePropertySwiper />

    <v-container class="mt-6 mb-9">
      <v-row>
        <v-col cols="12" md="8" v-if="property.details.size === ''">
          <v-skeleton-loader
            max-width="50%"
            type="paragraph,sentences"
          ></v-skeleton-loader>
          <v-divider class="my-4"></v-divider>
          <v-skeleton-loader type="paragraph,sentences"></v-skeleton-loader>
          <v-divider class="my-4"></v-divider>
          <v-skeleton-loader
            type="list-item-avatar-two-line,list-item-avatar-two-line,list-item-avatar-two-line"
          ></v-skeleton-loader>
          <v-divider class="my-4"></v-divider>
          <v-skeleton-loader type="image"></v-skeleton-loader>
          <v-divider class="my-4"></v-divider>
          <v-skeleton-loader type="image"></v-skeleton-loader>
        </v-col>
        <v-col cols="12" md="8" v-else>
          <p class="green--text text--accent-4 text-capitalize">
            <v-icon :color="iconColor">mdi-map-marker mdi-24px</v-icon>
            {{ property.details[7].value }},
            {{ property.details[6].value }}
          </p>
          <h1 class="d-flex justify-space-between text-capitalize">
            <span>
              {{ property.description.name }}

              <v-tooltip color="blue" bottom>
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
              {{ property.details[2].value }} m<sup>2</sup>
            </p>
            <p>
              <v-icon :color="iconColor">mdi-bed mdi-18px</v-icon>
              {{ property.details[8].value }} Bedroom<span
                v-if="property.details[8].value > 1"
                >s</span
              >
            </p>
            <p>
              <v-icon :color="iconColor">mdi-shower-head mdi-18px</v-icon>
              {{ property.details[9].value }} Bathroom
            </p>

            <p>
              <v-icon :color="iconColor">mdi-cash-multiple mdi-18px</v-icon>
              <span v-for="(detail, i) in details" :key="`icon ${i}`">
                <span v-if="detail.price" :class="{ 'd-none': !detail.price }">
                  {{ shortenMoney(property.details[3].value * currencyRate) }}
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
                    `https://wa.me/?text=Look at this offer https://jamaican-housing.pages.dev/property/${this.$route.params.slug}`
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
          <v-divider class="mt-2 mb-4"></v-divider>

          <div :class="{ 'mb-5': $vuetify.theme.dark }">
            <p class="text-h6">Details</p>
            <v-list dense flat :class="{ 'py-4': $vuetify.theme.dark }">
              <v-list-item-group
                no-action="true"
                :color="iconColor"
                class="amendities-grid"
              >
                <v-list-item v-for="(detail, i) in property.details" :key="i">
                  <v-list-item-content class="mb-3"  v-if="detail.value">

                    <v-list-item-title
                      class="text-body-1 text-capitalize  font-weight-medium"
                      v-text="`${detail.title}`"
                     
                    ></v-list-item-title>

                    <v-list-item-title
                      class="text-body-1 mt-1 font-weight-regular"
                      v-if="detail.title === 'Price'"
                    >
                      <!-- {{ country.currencySymbol }}  -->
                      $ {{ numberWithCommas(detail.value * currencyRate) }}
                      {{ activeCurrency }}
                    </v-list-item-title>
                    <v-list-item-title
                      class="text-body-1 mt-1 font-weight-regular"
                      v-else
                    >
                      {{ detail.value }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
          <v-divider class="mt-2 mb-4"></v-divider>
          <div :class="{ 'mb-5': $vuetify.theme.dark }">
            <p class="text-h6">Amenities</p>

            <v-list dense flat :class="{ 'py-4': $vuetify.theme.dark }">
              <v-list-item-group :color="iconColor" class="amendities-grid">
                <v-list-item v-for="(item, i) in property.amenities" :key="i">
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
          <v-divider class="mt-2 mb-4"></v-divider>

          <div>
            <p class="text-h6">Virtual Tour</p>
            <iframe
              width="100%"
              height="480"
              src="https://my.matterport.com/show/?m=a8wno1TmcYb"
              frameborder="0"
              allowfullscreen
              allow="xr-spatial-tracking"
            ></iframe>
          </div>
          <v-divider class="mt-2 mb-4"></v-divider>
          <div>
            <p class="text-h6 ">Video</p>
            <iframe
              height="480"
              width="100%"
              src="https://www.youtube.com/embed/oiM0o1gop2Y"
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
                {{ owner["display name"] }}
                <VerifiedSymbol role="realtor" />
              </nuxt-link>
              <a :href="`mailto:${owner['email']}`" class="text-subtitle-1">{{
                owner["email"]
              }}</a>
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="`tel:${phoneNumber}`"
                class="text-subtitle-1"
                >{{ formattedNumber }}</a
              >
            </div>
            <v-divider class="mt-2 mb-4"></v-divider>
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
            <v-divider class="mt-2 mb-4"></v-divider>
            <v-form class="mt-6" @submit.prevent="">
              <v-text-field
                outlined
                dense
                label="Full Name *"
                required
                :color="iconColor"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                label="Phone Number *"
                type="number"
                required
                :color="iconColor"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                label="Email Address *"
                type="email"
                required
                :color="iconColor"
              ></v-text-field>
              <v-textarea
                outlined
                name="input-7-4"
                label="Message *"
                value="Hi Jason, I am interested in this property."
                :color="iconColor"
              ></v-textarea>
              <v-btn
                class="mb-6"
                x-large
                type="submit"
                :color="iconColor"
                block
                dark
                depressed
              >
                Send Message
                <v-icon right>
                  mdi-send mdi-rotate-315
                </v-icon>
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async fetch() {
    let theParam = String(this.$route.params.slug);
    console.log(theParam);
    this.$fire.firestore
      .collection("properties")
      .doc(`${theParam}`)
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
      iconColor: "rgba(0, 200, 83, 1)",
      phoneNumber: 18763147199,
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
        owner: "sss"
      },
      owner: {},
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
        .doc(this.property.owner)
        .get()
        .then(doc => {
          if (doc.exists) {
            console.log("Document data exits:", doc.data());
            this.owner = doc.data();
            console.log(doc.data());
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
    shortenMoney(num) {
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
    }
  },
  computed: {
    ...mapGetters({
      country: "api/country",
      activeCurrency: "api/activeCurrency",
      currencyRate: "api/currencyRate"
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
  max-width: 450px;
}
.amendities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
