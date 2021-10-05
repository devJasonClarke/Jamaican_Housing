<template>
  <div class="">
    <v-card
      nuxt
      :to="{ name: 'property-slug', params: { slug: property[1] } }"
      outlined
      elevation="0"
      class="rounded-lg card"
    >
      <v-img :lazy-src='img' :src="property[0].images[0].src" height="200" class="pa-3">
        <v-chip
          class="text-uppercase mb-2 mr-1"
          color="blue"
          small
          label
          dark
          v-if="property[0].verification.verified"
        >
          Verified Property
        </v-chip>
        <v-chip
          class="text-uppercase mb-2 mr-1"
          color="orange accent-4"
          small
          label
          dark
          v-if="property[0].verification.featured"
        >
          Featured
        </v-chip>
     <v-chip
          class="text-uppercase mb-2 mr-1"
          v-if="property[0].details.propertyFor == 'Off the market'"
          color="red"
          small
          label
          dark
        >
          {{ property[0].details.propertyFor }}
        </v-chip>
        <v-chip
        v-else
          class="text-uppercase mb-2 mr-1"
          color="green accent-4"
          small
          label
          dark
        >
          For {{ property[0].details.propertyFor }}
        </v-chip>
      </v-img>
      <div>
        <v-card-title class="hyphens text-capitalize">
          <!-- {{ card.title }} -->
          {{ profanityFilter(property[0].description.name) }}
          <v-tooltip color="blue " v-if="property[0].verification.verified" top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="blue" dark v-bind="attrs" v-on="on" class="ml-2">
                mdi-check-decagram mdi-18px
              </v-icon>
            </template>
            <span>Verified</span>
          </v-tooltip>
          <v-tooltip color="orange" v-if="property[0].verification.featured" top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="orange" dark v-bind="attrs" v-on="on" class="ml-2">
                mdi-star mdi-18px
              </v-icon>
            </template>
            <span>Featured</span>
          </v-tooltip>
        </v-card-title>

        <v-card-subtitle class="pb-4 primary-green">
          <v-icon :color="iconColor">mdi-map-marker mdi-18px</v-icon>
          <!-- {{ card.parish }} -->
          {{ property[0].details.community }},
          {{ property[0].details.parish }}
        </v-card-subtitle>

        <v-card-text class=" text-uppercase section-titles-Subtitle grey--text">
          <!--   {{ card.realEstateType }} -->
          {{ property[0].details.propertyType }}
        </v-card-text>

        <div
          class="px-4 pb-2 d-flex justify-space-between primary-color flex-wrap"
        >
          <p>
            <v-icon :color="iconColor"
              >mdi-ruler-square mdi-flip-v mdi-18px</v-icon
            >
            <!--    {{ card.squareMeters }} -->
            {{ shortenNumber(property[0].details.size * 1) }}
            ft<sup>2</sup>
          </p>
          <p
            v-if="
              property[0].details.propertyType === '' ||
                property[0].details.propertyType === 'House' ||
                property[0].details.propertyType === 'Apartment' ||
                property[0].details.propertyType === 'Townhouse'
            "
          >
            <v-icon :color="iconColor">mdi-bed mdi-18px</v-icon>
            <!--  {{ card.beds }} -->
            {{ property[0].details.bedrooms }}
          </p>
          <p v-else>
            <v-icon :color="iconColor">mdi-home-city mdi-18px</v-icon>
            {{ property[0].details.propertyFor }}
          </p>
          <p
            v-if="
              property[0].details.propertyType === '' ||
                property[0].details.propertyType === 'Apartment' ||
                property[0].details.propertyType ===
                  'Commercial Building/Offices' ||
                property[0].details.propertyType === 'Factory' ||
                property[0].details.propertyType === 'House' ||
                property[0].details.propertyType === 'Townhouse' ||
                property[0].details.propertyType === 'Warehouse'
            "
          >
            <v-icon :color="iconColor">mdi-shower mdi-flip-h mdi-18px</v-icon>
            <!--   {{ card.bathroom }} -->
            {{ property[0].details.bathrooms }}
          </p>
          <p>
            <v-icon :color="iconColor">mdi-currency-usd mdi-18px</v-icon>

            {{ shortenNumber(property[0].details.price * currencyRate) }}
          </p>
        </div>
      </div>
    </v-card>
    <div class="d-flex justify-space-between pa-3">
      <v-btn
        dark
        elevation="0"
        color="blue"
        nuxt
        :to="{
          name: 'dashboard-edit-property',
          params: { slug: property[1] }
        }"
        ><v-icon>mdi-pencil</v-icon> Edit</v-btn
      >

      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-bind="attrs" v-on="on" elevation="0" color="red"
            ><v-icon>mdi-delete</v-icon> Delete</v-btn
          >
        </template>
        <v-card>
          <v-card-title class="text-h5 hyphens">
            Are you sure you want to delete this property?
          </v-card-title>
          <v-card-text
            >We recommend that you double check and ensure that this is the
            correct property. Deleting a property cannot be
            reversed.</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Go back
            </v-btn>
            <v-btn
              color="red darken-1"
              text
              :loading="loading"
              @click="deleteThisProperty"
            >
              Delete Property
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--    <v-btn icon :color="iconColor"><v-icon>mdi-id-card</v-icon></v-btn> -->
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script>
import img from "~/assets/images/houses/preview.jpg";
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    property: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      iconColor: "rgba(0, 200, 83, 0.5)",
      dialog: false,
      img: img
    };
  },
  methods: {
    ...mapActions({
      deleteProperty: "dashboard/userProperties/deleteProperty"
    }),
    deleteThisProperty() {
      this.deleteProperty({
        property: this.property[0],
        id: this.property[1]
      });
      this.dialog = false;
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
    profanityFilter(info) {
      var Filter = require("bad-words");
      let filter = new Filter();
      return filter.clean(info);
    }
  },
  computed: {
    ...mapGetters({
      country: "api/api/country",
      activeCurrency: "api/api/activeCurrency",
      currencyRate: "api/api/currencyRate",
      loading: "dashboard/userProperties/deleteLoading"
    })
  }
};
</script>

<style lang="scss" scoped>
.card {
  transition: 0.4s all ease;
  &:hover {
    transform: scale(1.04);
  }
}
</style>
