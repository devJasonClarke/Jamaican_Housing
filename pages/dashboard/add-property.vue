<template>
  <v-container id="top">
    <TheMetaTags :title="title" :description="description" />
    <h1>Add Property</h1>
    {{ `typeOf price: ${typeof property.details.price}` }}
    <!--   {{profile}} -->
    <SectionPadding v-if="profile.loading">
      <v-skeleton-loader
        type="table-row-divider,image,card-heading"
        title="sale"
      ></v-skeleton-loader>
    </SectionPadding>
    <SectionPadding
      v-else-if="!profile.contact.email || !profile.contact.phoneNumber"
    >
      <v-sheet
        height="250px"
        class="d-flex justify-center align-center flex-column pa-3"
        outlined
        ><p class="text-sm-h6 text-subtitle-1 text-center font-weight-regular">
          8 out of 10 users optimized their accounts before adding properties.
          <br />
          These accounts received 98% more property views.
        </p>
        <v-btn
          nuxt
          :to="{ name: 'dashboard-user-profile-account-info' }"
          dark
          color="green accent-4"
        >
          <v-icon left>mdi-account-outline</v-icon> Optimize your account</v-btn
        >
      </v-sheet>
    </SectionPadding>

    <section v-else>
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
                        maxlength="500"
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
                        v-model.number="property.details.size"
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
                        v-model.number="property.details.price"
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
                        v-model.number="property.details.bedrooms"
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
                        min="4"
                        v-model.number="property.details.bathrooms"
                        :color="iconColor"
                        :rules="amountRules"
                      ></v-text-field
                    ></v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        outlined
                        dense
                        v-model.number="property.details.garages"
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
                        label="Multiple Listing Service ID (optional)"
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
                      accept="image/png, image/jpeg"
                      small-chips
                      show-size
                      counter
                      multiple
                      maxlength="7"
                      prepend-icon="mdi-image-multiple"
                      v-model="files"
                      @change="resetURL"
                      label="Upload pictures of your property"
                      :color="iconColor"
                      required
                      :rules="[
                        v => (!!v && v.length > 0) || 'File is required',
                        v =>
                          !v ||
                          !v.some(file => file.size > 1048576) ||
                          'All pictures should be less than 1 MB in size!',
                        v => v.length < 8 || 'No more than 7 pictures',
                        v =>
                          v.length > 2 || 'A minimum of 3 pictures are required'
                      ]"
                    ></v-file-input>
                  </v-row>
                  <v-btn
                    :dark="urls.length == 0"
                    :color="iconColor"
                    :disabled="urls.length > 0"
                    @click="previewPictures"
                    class="mb-3"
                  >
                    Preview Pictures
                  </v-btn>
                  <v-btn dark :color="iconColor" type="submit" class="mb-3">
                    Continue
                  </v-btn>
                  <v-btn text @click="cur = cur - 1" class="mb-3">
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
                  @submit.prevent="uploadPictures"
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

                  <v-btn
                    dark
                    :color="iconColor"
                    type="submit"
                    :loading="loading"
                    :disabled='disabled'
                  >
                    Add Property
                  </v-btn>
                  <v-btn text @click="cur = cur - 1">
                    back
                  </v-btn>
                </v-form>
                <div v-if="fileBeingUploaded">
                  <p class="text-h6 mt-6">Uploading: {{ fileBeingUploaded }}</p>
                </div>
              </v-container>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </SectionPadding>
      <SectionPadding class="pt-0" id="photos">
        <div v-show="urls.length !== 0">
          <div v-for="(url, i) in urls" :key="url">
            <div>
              <p class="text-h6">Picture {{ i + 1 }}</p>
              <p class="text-subtitle-1">File name: {{ files[i].name }}</p>
              <img :src="url" :alt="files[i].name" width="100%" height="100%" />
            </div>
            <v-divider class="my-9"></v-divider>
          </div>
          <v-btn dark :color="iconColor" @click="$vuetify.goTo('#top')"
            >Go To Top</v-btn
          >
        </div>
      </SectionPadding>
    </section>
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
      urls: [],
      validDescription: false,
      validDetails: false,
      validAmenities: false,
      validPictures: false,
      validTours: false,
      loading: false,
      disabled: false,
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
        { title: "Smart Home", icon: "mdi-home-assistant" },
        { title: "24 Hour Security", icon: "mdi-cctv" },
        { title: "Family Oriented", icon: "mdi-home-heart" },
        { title: "Grilled", icon: "mdi-shield-home" },
        { title: "Water Heater", icon: "mdi-thermometer-high" },
        { title: "Swimming Pool", icon: "mdi-pool" },
        { title: "Generator", icon: "mdi-flash" },
        { title: "Water Tank", icon: "mdi-water" },
        { title: "Gym", icon: "mdi-dumbbell" },
        { title: "Tennis Court", icon: "mdi-tennis" },
        { title: "Basketball Court", icon: "mdi-basketball" },
        { title: "Park Near By", icon: "mdi-nature-people" },
        { title: "Church Near By", icon: "mdi-church" },
        { title: "Hospital Near By", icon: "mdi-hospital-building" },
        { title: "Schools Near By", icon: "mdi-school" },
        { title: "Supermarket Near By", icon: "mdi-shopping" },
        { title: "Movie Theater Near By", icon: "mdi-theater" },
        { title: "Restaurants Near By", icon: "mdi-silverware-fork-knife" }
      ],
      status: ["Rent", "Sale"],
      rentType: ["Per Night", "Per Month"],
      imageUrls: [],
      fileBeingUploaded: "",
      fileName: ""
    };
  },
  methods: {
    ...mapActions({
      logError: "errors/logError"
    }),
    addDropFile(e) {
      this.urls = [];
      this.files.push(...Array.from(e.dataTransfer.files));
    },
    resetURL() {
      this.urls = [];
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
    previewPictures() {
      for (let i = 0; i < this.files.length; i++) {
        /* console.log(this.files[i]) */
        this.urls.push(URL.createObjectURL(this.files[i]));
      }
      this.$vuetify.goTo("#photos");
    },
    uploadPictures() {
      if (
        this.$refs.descriptionForm.validate() &&
        this.$refs.detailsForm.validate() &&
        this.$refs.amenitiesForm.validate() &&
        this.$refs.picturesForm.validate() &&
        this.$refs.toursForm.validate() &&
        this.profile.personalDetails.displayName
      ) {
        this.loading = true;

        let storage = this.$fire.storage.ref();
        let date = Date.now();

        for (let i = 0; i < this.files.length; i++) {
          this.fileName = `${date.toString()}_${this.files[i].name}`;

          let ref = storage
            .child(`property_images/${this.user.uid}/${this.fileName}`)
            .put(this.files[i]);

          ref.on(
            "state_changed",
            snapshot => {},
            error => {
              console.log(error);
              this.logError("Unable to upload pictures, please check your internet and ensure that your pictures use either the JPG or PNG format.");
              this.loading = false;
            },
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              // let image = [];
              ref.snapshot.ref
                .getDownloadURL()
                .then(downloadURL => {
                  console.log("File available at", downloadURL);
                  this.fileBeingUploaded = this.files[i].name;
                  this.imageUrls.push({
                    src: downloadURL,
                    fileName: `${date.toString()}_${this.fileBeingUploaded}`
                  });
                })
                .then(() => {
                  console.log("it is ready");
                  console.log(this.imageUrls);

                  if (this.imageUrls.length === this.files.length) {
                    this.addProperty();
                  }
                });

              console.log("success");
            }
          );
        }
      } else {
        console.log("not");
        this.logError("Please complete required sections.");
      }
    },
    addProperty() {
      if (
        this.$refs.descriptionForm.validate() &&
        this.$refs.detailsForm.validate() &&
        this.$refs.amenitiesForm.validate() &&
        this.$refs.picturesForm.validate() &&
        this.$refs.toursForm.validate()
      ) {
        this.loading = true;

        this.$fire.firestore
          .collection("properties")
          .add({
            price: this.property.details.price,
            parish: this.property.details.parish,
            type: this.property.details.propertyType,
            bedrooms: this.property.details.bedrooms,
            featured: false,
            verified: false,
            propertyFor: this.property.details.propertyFor,

            description: this.property.description,
            details: this.property.details,
            amenities: this.property.amenities,
            tours: this.property.tours,
            uploader: this.user.uid,
            timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            images: this.imageUrls
          })
          .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
          })
          .then(() => {
            this.loading = false;
            this.disabled = true;
            this.fileBeingUploaded = "";
            this.snackbar = true;
            this.snackbarMessage = "Successfully Added!";
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
      user: "authentication/user",
      profile: "profile/profile"
    }),
    title() {
      return `${this.profile.personalDetails.displayName} | Add Property | Dashboard`;
    },
    description() {
      return "Add Property";
    }
  }
};
</script>

<style lang="scss" scoped></style>
