<template>
  <v-container>
    <h1>Add Your Property</h1>
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
            :complete="cur > 5"
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
            {{ `Property Type ${property.details.propertyType}` }} <br />
            {{ `Size ${property.details.size}` }} <br />
            {{ `Property For ${property.details.propertyFor}` }} <br />
            {{ `Rent Type ${property.details.rentType}` }} <br />
            {{ `Price ${property.details.price}` }} <br />
            
            {{ `Parish ${property.details.parish}` }} <br />
            {{ `Community ${property.details.community}` }} <br />
            {{ `Bed Rooms ${property.details.bedrooms}` }} <br />
            {{ `Bath Rooms ${property.details.bathrooms}` }} <br />
            {{ `Garages ${property.details.garages}` }} <br />
            {{ `Property Id ${property.details.propertyId}` }} <br />

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
                    <v-select
                      outlined
                      dense
                      label="Property For *"
                      v-model="property.details.propertyFor"
                      :items="status"
                      color="green"
                      item-color="green"
                      :rules="[v => !!v || 'Status is required']"
                      required
                    ></v-select
                  ></v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    v-if="property.details.propertyFor === 'Rent'"
                  >
                    <v-select
                      outlined
                      dense
                      label="How do you rent your property *"
                      v-model="property.details.rentType"
                      :items="rentType"
                      color="green"
                      item-color="green"
                      :rules="[v => !!v || 'Rent type is required']"
                      required
                    ></v-select
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
                      label="Parish"
                      v-model="property.details.parish"
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
                      label="Community"
                      required
                      v-model="property.details.community"
                      :color="iconColor"
                      :rules="nameRules"
                    ></v-text-field
                  ></v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Number of Bed Rooms"
                      required
                      type="number"
                      v-model="property.details.bedrooms"
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
                      v-model="property.details.bathrooms"
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
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="
Multiple Listing Service ID (optional)"
                      v-model="property.details.propertyId"
                      :color="iconColor"
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
                      v => (!!v && v.length > 0) || 'File is required',
                      v =>
                        !v ||
                        !v.some(file => file.size > 1048576) ||
                        'All pictures should be less than 1 MB in size!',
                      v => v.length < 8 || 'No more than 7 pictures'
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
                @submit.prevent="addProperty"
                ref="toursForm"
              >
                <v-row class="mb-6">
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      v-model="property.tours.virtualTour"
                      label="Virtual Tour URL"
                      required
                      :color="iconColor"
                      counter
                      maxlength="80"
                    ></v-text-field
                  ></v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      v-model="property.tours.youtube"
                      label="Youtube Video ID"
                      :color="iconColor"
                      counter
                      maxlength="11"
                    ></v-text-field
                  ></v-col>
                </v-row>

                <v-btn dark :color="iconColor" type="submit" :loading="loading">
                  Add Property
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
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "dashboard",
  data() {
    return {
      cur: 1,
      snackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
      iconColor: "rgba(0, 200, 83)",
      selected: [],
      files: [],
      validDescription: false,
      validDetails: false,
      validAmenities: false,
      validPictures: false,
      validTours: false,
      loading: false,
      property: {
        description: {
          name: "",
          description: ""
        },
        details: {
          propertyType: "",
          size: null,
          price: null,
          propertyFor: "",
          parish: "",
          community: "",
          bedrooms: null,
          bathrooms: null,
          garages: null,
          rentType: "",
          propertyId: ""
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
      status: ["Rent", "Sale"],
      rentType: ["Per Night", "Per Month"]
    };
  },
  methods: {
    ...mapActions({
      logError: "errors/logError"
    }),
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
    async addProperty() {
      if (
        this.$refs.descriptionForm.validate() &&
        this.$refs.detailsForm.validate() &&
        this.$refs.amenitiesForm.validate() &&
        this.$refs.picturesForm.validate() &&
        this.$refs.toursForm.validate()
      ) {
        this.loading = true;

        await this.$fire.firestore
          .collection("properties")
          .add({
            price: this.property.details.price,
            parish: this.property.details.parish,
            type: this.property.details.propertyType,
            bedrooms: this.property.details.bedrooms,
            featured: false,
            verified: false,

            description: this.property.description,
            details: this.property.details,
            amenities: this.property.amenities,
            tours: this.property.tours,
            uploader: this.user.uid,
            timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp()
          })
          .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
          })
          .then(() => {
            this.loading = false;
            this.snackbar = true;
            this.snackbarMessage = "Successfully Added";
            this.snackbarColor = "green";
          })
          .catch(error => {
            console.error("Error adding document: ", error);
            this.loading = false;
            this.snackbar = true;
            this.snackbarMessage = error;
            this.snackbarColor = "pink";
          });

        console.log("valid tour");
      } else {
        console.log("not");
        this.logError("Please complete required sections.");
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
      realEstateType: "selectOptions/realEstateType",
      user: "authentication/user"
    })
  }
};
</script>

<style lang="scss" scoped></style>
