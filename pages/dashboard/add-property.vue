<template>
  <v-container>
    <h1>Add Your Propery</h1>
    <SectionPadding>
      <v-stepper v-model="cur">
        <v-stepper-header>
          <v-stepper-step
            :color="iconColor"
            step="1"
            :complete="validDescription"
            editable
          >
            Description
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            :color="iconColor"
            step="2"
            :complete="validDetails"
            editable
          >
            Details
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            :color="iconColor"
            step="3"
            :complete="cur > 3"
            editable
          >
            Amenities
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step
            :color="iconColor"
            step="4"
            :complete="validPictures"
            editable
          >
            Pictures
          </v-stepper-step>
          <v-divider></v-divider>

          <v-stepper-step
            :color="iconColor"
            step="5"
            :complete="validTours"
            editable
          >
            Tours
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-container>
              <p class="text-h6 pb-6">
                Please enter your property's name and a description
              </p>
              <v-form
                v-model="validDescription"
                @submit.prevent="validateDescription"
                ref="descriptionForm"
              >
                <v-row>
                  <v-col cols="">
                    <v-text-field
                      outlined
                      dense
                      label="Property Name *"
                      required
                      v-model="property.description.name"
                      :color="iconColor"
                      :rules="nameRules"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12">
                    <v-textarea
                      outlined
                      dense
                      clearable
                      clear-icon="mdi-close-circle"
                      label="Property Description *"
                      counter
                      maxlength="425"
                      required
                      :color="iconColor"
                      v-model="property.description.description"
                      :rules="descriptionRules"
                    ></v-textarea
                  ></v-col>
                </v-row>
                <v-btn dark :color="iconColor" type="submit">
                  Continue
                </v-btn>
              </v-form>
            </v-container>
          </v-stepper-content>

          <v-stepper-content step="2">
            {{ property.details.propertyId }}
            {{ property.details.propertyType }}
            {{ property.details.size }}
            {{ property.details.price }}
            {{ property.details.status }}
            {{ property.details.parishes }}
            {{ property.details.community }}
            {{ property.details.bedRooms }}
            {{ property.details.bathRooms }}
            {{ property.details.garages }}
            <v-container>
              <p class="text-h6 pb-6">
                Please enter your property details
              </p>
              <v-form
                v-model="validDetails"
                @submit.prevent="validateDetails"
                ref="detailsForm"
              >
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Property ID (optional)"
                      v-model="property.details.propertyId"
                      :color="iconColor"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      outlined
                      dense
                      label="Property Type *"
                      v-model="property.details.propertyType"
                      :items="realEstateType"
                      color="green"
                      item-color="green"
                      :rules="[v => !!v || 'Property type is required']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Size *"
                      type="number"
                      v-model="property.details.size"
                      :color="iconColor"
                      suffix="Square Feet"
                      :rules="amountRules"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Price (IN JMD)"
                      type="number"
                      prefix="$"
                      suffix="JMD"
                      v-model="property.details.price"
                      :color="iconColor"
                      :rules="amountRules"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      outlined
                      dense
                      label="Property For *"
                      v-model="property.details.status"
                      :items="status"
                      color="green"
                      item-color="green"
                      :rules="[v => !!v || 'Status is required']"
                      required
                    ></v-select
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Community"
                      required
                      v-model="property.details.community"
                      :color="iconColor"
                      :rules="nameRules"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      outlined
                      dense
                      label="Parish"
                      v-model="property.details.parishes"
                      :items="parishes"
                      color="green"
                      item-color="green"
                      :rules="[v => !!v || 'Parish is required']"
                      required
                    ></v-select
                  ></v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Number of Bed Rooms"
                      required
                      type="number"
                      v-model="property.details.bedRooms"
                      :color="iconColor"
                      :rules="amountRules"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Number of Bath Rooms"
                      required
                      type="number"
                      v-model="property.details.bathRooms"
                      :color="iconColor"
                      :rules="amountRules"
                    ></v-text-field
                  ></v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      v-model="property.details.garages"
                      label="Number of Garages"
                      type="number"
                      :color="iconColor"
                      :rules="amountRules"
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-btn dark :color="iconColor" type="submit">
                  Continue
                </v-btn>
                <v-btn text @click="cur = cur - 1">
                  back
                </v-btn>
              </v-form>
            </v-container>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-container>
              <p class="text-h6 pb-6">
                Please select the amenities for your property
              </p>
              {{ property.amenities }}
              <v-form
                v-model="validAmenities"
                @submit.prevent="validateAmenities"
                ref="amenitiesForm"
              >
                <v-row class="mb-6">
                  <v-col
                    cols="12"
                    sm="3"
                    v-for="(amenity, i) in amenities"
                    :key="i"
                  >
                    <v-checkbox
                      v-model="property.amenities"
                      :label="amenity.title"
                      :value="amenity"
                      hide-details
                      class="my-0"
                      :color="iconColor"
                    ></v-checkbox
                  ></v-col>
                </v-row>

                <v-btn dark :color="iconColor" type="submit">
                  Continue
                </v-btn>
                <v-btn text @click="cur = cur - 1">
                  back
                </v-btn>
              </v-form>
            </v-container>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-container>
              <p class="text-h6 pb-6">
                Please add pictures of your property
              </p>
              <v-form
                v-model="validPictures"
                @submit.prevent="validatePictures"
                ref="picturesForm"
              >
                <v-row
                  class="mb-6"
                  v-cloak
                  @drop.prevent="addDropFile"
                  @dragover.prevent
                >
                  <v-file-input
                    accept="image/png, image/jpeg, image/jpg"
                    small-chips
                    show-size
                    counter
                    multiple
                    maxlength="7"
                    prepend-icon="mdi-image"
                    v-model="files"
                    label="Upload pictures of your property"
                    :color="iconColor"
                    required
                    :rules="[
                      v => !!v || 'File is required',
                      v => (v && v.size > 0) || 'File is required'
                    ]"
                  ></v-file-input>
                </v-row>
                <v-btn dark :color="iconColor" type="submit">
                  Continue
                </v-btn>
                <v-btn text @click="cur = cur - 1">
                  back
                </v-btn>
              </v-form>
            </v-container>
          </v-stepper-content>
          <v-stepper-content step="5">
            <v-container>
              <p class="text-h6 pb-6">
                Please add your Virtual Tour or Youtube video ID (Optional)
              </p>
              <v-form
                v-model="validTours"
                @submit.prevent="validateTours"
                ref="toursForm"
              >
                <v-row class="mb-6">
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      v-model="property.tours.virtualTour"
                      label="Virtual Tour ID"
                      required
                      :color="iconColor"
                      :rules="idRules"
                      counter
                      maxlength="11"
                    ></v-text-field
                  ></v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      v-model="property.tours.youtube"
                      label="Youtube Video ID"
                      :color="iconColor"
                      :rules="idRules"
                      counter
                      maxlength="11"
                    ></v-text-field
                  ></v-col>
                </v-row>

                <v-btn dark :color="iconColor" type="submit">
                  Continue
                </v-btn>
                <v-btn text @click="cur = cur - 1">
                  back
                </v-btn>
              </v-form>
            </v-container>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </SectionPadding>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "dashboard",
  data() {
    return {
      cur: 1,
      iconColor: "rgba(0, 200, 83)",
      selected: [],
      files: [],
      validDescription: false,
      validDetails: false,
      validAmenities: false,
      validPictures: false,
      validTours: false,
      property: {
        description: {
          name: "",
          description: ""
        },
        details: {
          propertyId: "",
          propertyType: "",
          size: null,
          price: null,
          status: "",
          parishes: "",
          community: "",
          bedRooms: null,
          bathRooms: null,
          garages: null
        },
        amenities: [],
        tours: {
          youtube: "",
          virtualTour: ""
        }
      },
      amenities: [
        {
          title: "Wifi",
          icon: "mdi-wifi"
        },
        { title: "Air Conditioning", icon: "mdi-air-filter" },
        { title: "Cable TV ", icon: "mdi-television" },
        { title: "Gated Community", icon: "mdi-security" },
        { title: "Parking", icon: "mdi-car" },
        { title: "Furnished", icon: "mdi-sofa" },
        { title: "24 Hour Security", icon: "mdi-cctv" },
        { title: "Family Oriented", icon: "mdi-home-heart" },
        { title: "Grilled", icon: "mdi-shield-home" },
        { title: "Water Heater", icon: "mdi-thermometer-high" },
        { title: "Swimming Pool", icon: "mdi-pool" },
        { title: "Generator", icon: "mdi-flash" },
        { title: "Water Tank", icon: "mdi-water" }
      ],
      status: ["rent", "sale"]
    };
  },
  methods: {
    addDropFile(e) {
      this.files.push(...Array.from(e.dataTransfer.files));
    },
    validateDescription() {
      if (this.$refs.descriptionForm.validate()) {
        console.log("valid des");
        this.cur++;
      } else {
        console.log("not");
      }
    },
    validateDetails() {
      if (this.$refs.detailsForm.validate()) {
        console.log("valid det");
        this.cur++;
      } else {
        console.log("not");
      }
    },
    validateAmenities() {
      if (this.$refs.amenitiesForm.validate()) {
        console.log("valid a");
        this.cur++;
      } else {
        console.log("not");
      }
    },
    validatePictures() {
      if (this.$refs.picturesForm.validate()) {
        console.log("valid pic");
        this.cur++;
      } else {
        console.log("not");
      }
    },
    validateTours() {
      if (this.$refs.toursForm.validate()) {
        console.log("valid tour");
      } else {
        console.log("not");
      }
    }
  },
  computed: {
    ...mapGetters({
      nameRules: "inputRules/nameRules",
      descriptionRules: "inputRules/descriptionRules",
      amountRules: "inputRules/amountRules",
      idRules: "inputRules/idRules",
      parishes: "selectOptions/parishes",
      realEstateType: "selectOptions/realEstateType"
    })
  }
};
</script>

<style lang="scss" scoped></style>
