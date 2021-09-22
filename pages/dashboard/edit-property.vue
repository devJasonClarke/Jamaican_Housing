<template>
  <v-container id="top">
    <TheMetaTags :title="title" :description="description" />
    <h1 class="text-capitalize">
      Edit Property: {{ property.description.name }}
      <v-tooltip color="blue " v-if="property.verified" top>
        <template v-slot:activator="{ on, attrs }">
          <v-icon color="blue" dark v-bind="attrs" v-on="on">
            mdi-check-decagram mdi-36px
          </v-icon>
        </template>
        <span>Verified</span>
      </v-tooltip>
    </h1>
    <p class="text-body-1">Property ID: {{ this.theParam }}</p>

    <!--   {{profile}} -->
    <SectionPadding class="pt-9" v-if="!property.uploader">
      <v-skeleton-loader
        type="table-row-divider,image,card-heading"
        title="sale"
      ></v-skeleton-loader>
    </SectionPadding>

    <section v-else>
      <SectionPadding class="pt-9">
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
              :complete="cur > 3 || property.amenities.length > 0"
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
              <!--      {{ `Property Type ${property.details.propertyType}` }} <br />
              {{ `Size ${property.details.size}` }} <br />
              {{ `Property For ${property.details.propertyFor}` }} <br />
              {{ `Rent Type ${property.details.rentType}` }} <br />
              {{ `Price ${property.details.price}` }} <br />

              {{ `Parish ${property.details.parish}` }} <br />
              {{ `Community ${property.details.community}` }} <br />
              {{ `Bed Rooms ${property.details.bedrooms}` }} <br />
              {{ `Bath Rooms ${property.details.bathrooms}` }} <br />
              {{ `Garages ${property.details.garages}` }} <br />
              {{ `Property Id ${property.details.propertyId}` }} <br /> -->

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
                        :rules="amountRulesMinOne"
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
                        :rules="amountRulesMinOne"
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
                        min="4"
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
                <!--     {{ property.amenities }} -->
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
                      :maxlength="7 - property.images.length"
                      prepend-icon="mdi-image-multiple"
                      v-model="files"
                      @change="resetURL"
                      label="Upload pictures of your property"
                      :color="iconColor"
                      required
                      :rules="[
                        v =>
                          !v ||
                          !v.some(file => file.size > 1048576) ||
                          'All pictures should be 1 MB or less in size!',
                        v =>
                          v.length <= 7 - property.images.length ||
                          `No more than ${7 - property.images.length} pictures`,
                        v => v.length < 7 || 'No more than 7 pictures'
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
                        prepend-icon="mdi-camera-image"
                        v-model="property.tours.matterport"
                        label="Virtual Tour URL"
                        required
                        :color="iconColor"
                          @input="getMatterportTour"
                        :rules="
                          property.tours.matterport
                            ? matterportRules
                            : [
                                value =>
                                  !/[ ]/.test(value) || 'no spaces allowed'
                              ]
                        "
                      ></v-text-field
                    ></v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        outlined
                        dense
                        prepend-icon="mdi-youtube"
                        v-model="property.tours.youtube"
                        label="Youtube Video ID"
                        :color="iconColor"
                        @input="getYoutubeVideoId"
                      :rules="
                          property.tours.youtube
                            ? youtubeRules
                            : [
                                value =>
                                  !/[ ]/.test(value) || 'no spaces allowed'
                              ]
                        "
                      ></v-text-field
                    ></v-col>
                  </v-row>

                  <v-btn
                    v-if="disabled"
                    dark
                    :color="iconColor"
                    nuxt
                    :to="{ name: 'dashboard' }"
                  >
                    Update Successful
                  </v-btn>
                  <v-btn
                    v-else
                    :dark="!disabled"
                    :color="iconColor"
                    type="submit"
                    :loading="loading"
                    :disabled="disabled"
                  >
                    Update Property
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
        <div v-show="property.images.length !== 0">
          <div v-show="urls.length !== 0">
            <div v-for="(url, i) in urls" :key="url">
              <div>
                <p class="text-h6">New Picture {{ i + 1 }}</p>
                <p class="text-subtitle-1">File name: {{ files[i].name }}</p>
                <img
                  :src="url"
                  :alt="files[i].name"
                  width="100%"
                  height="100%"
                />
                <v-btn
                  color="red"
                  class="mt-3"
                  dark
                  @click="removeImage(url, files[i].name)"
                  ><v-icon>mdi-delete</v-icon> Remove Image</v-btn
                >
              </div>
              <v-divider class="my-9"></v-divider>
            </div>
            <v-btn dark :color="iconColor" @click="$vuetify.goTo('#top')"
              >Go To Top</v-btn
            >
          </div>
        </div>
        <v-divider class="my-6"></v-divider>
        <div v-show="property.images.length !== 0">
          <div v-for="(image, i) in property.images" :key="i">
            <div>
              <p class="text-h6">Existing Picture</p>
              <p class="text-subtitle-1">File name: {{ image.fileName }}</p>
              <img
                :src="image.src"
                :alt="image.fileName"
                width="100%"
                height="100%"
              />
              <v-btn
                color="red"
                class="mt-3"
                dark
                @click="deleteImage(image.fileName, image.src)"
                ><v-icon>mdi-delete</v-icon> Delete Image</v-btn
              >
            </div>
            <v-divider class="my-9"></v-divider>
          </div>
          <v-btn dark :color="iconColor" @click="$vuetify.goTo('#top')"
            >Go To Top</v-btn
          >
        </div>
      </SectionPadding>
    </section>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "dashboard",
  async fetch() {
    this.theParam = this.$route.params.slug;
    // console.log(this.theParam);

    if (!this.$route.params.slug) {
      this.$router.push({ name: "dashboard" });
    } else {
      await this.$fire.firestore
        .collection("properties")
        .doc(this.theParam)
        .get()
        .then(doc => {
          if (doc.exists) {
            // console.log("Document data:", doc.data());
            this.property = doc.data();
          } else {
            // doc.data() will be undefined in this case
            // console.log("No such document!");
            this.$router.push({ name: "error" });
          }
        })
        .catch(error => {
          // console.log("Error getting document:", error);
          this.logError(error.message);
        });
    }
  },
  data() {
    return {
      theParam: "",
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
        type: "",
        amenities: [],
        bedrooms: null,
        featured: false,
        images: [],
        parish: "",
        verified: "",
        tours: {
          youtube: "",
          matterport: ""
        },
        uploader: "",
        details: {
          price: null,
          propertyType: "",
          rentType: "",
          size: null,
          propertyId: "",
          bedrooms: null,
          community: "",
          propertyFor: "",
          garages: null,
          parish: "",
          bathrooms: null
        },
        timestamp: {
          seconds: null,
          nanoseconds: null
        },
        price: null,
        description: {
          name: "",
          description: ""
        },
        propertyFor: ""
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
      status: ["Rent", "Sale", "Off the market"],
      rentType: ["Per Night", "Per Month"],
      imageUrls: [],
      fileBeingUploaded: "",
      fileName: "",
      youtubeVideoId: "",
      validYoutubeVideoId: "",
      validMatterportTour: "",
      matterportId: ""
    };
  },
  methods: {
    ...mapActions({
      logError: "errors/logError",
      logSuccess: "success/logSuccess",
      editUserProperty: "getUserProperties/editUserProperty"
    }),
        getYoutubeVideoId() {
      this.youtubeVideoId = "";
      let id = this.property.tours.youtube.split(
        /(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/
      );

      this.validYoutubeVideo = /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/i.test(
        id
      );

      if (this.validYoutubeVideo) {
        this.youtubeVideoId =
          undefined !== id[2] ? id[2].split(/[^0-9a-z_\-]/i)[0] : id[0];
      }
    },
    getMatterportTour() {
      this.matterportId = "";
      let id = this.property.tours.matterport.split(
        /https?:\/\/my\.matterport\.com\/show\/\??(m=(?<code>[\w\d]+))/
      );

      console.log(id);

      this.validMatterportTour = /https?:\/\/my\.matterport\.com\/show\/\??(m=(?<code>[\w\d]+))/i.test(
        this.property.tours.matterport
      );

      console.log(this.validMatterportTour);

      //      if (this.validMatterportTour) {
      this.matterportId =
        undefined !== id[2] ? id[2].split(/[^0-9a-z_\-]/i)[0] : id[0];
      // }
    },
    addDropFile(e) {
      this.urls = [];
      this.files.push(...Array.from(e.dataTransfer.files));
    },
    resetURL() {
      this.urls = [];
    },
    validateDescription() {
      if (this.$refs.descriptionForm.validate()) {
        // console.log("valid des");
        this.cur++;
      } else {
        // console.log("not");
      }
    },
    validateDetails() {
      if (this.$refs.detailsForm.validate()) {
        // console.log("valid det");
        this.cur++;
      } else {
        // console.log("not");
      }
    },
    validateAmenities() {
      if (this.$refs.amenitiesForm.validate()) {
        // console.log("valid a");
        this.cur++;
      } else {
        // console.log("not");
      }
    },
    validatePictures() {
      if (this.$refs.picturesForm.validate()) {
        // console.log("valid pic");

        this.cur++;
      } else {
        // console.log("not");
      }
    },
    previewPictures() {
      for (let i = 0; i < this.files.length; i++) {
        /* // console.log(this.files[i]) */
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

        if (this.files.length > 0) {
          for (let i = 0; i < this.files.length; i++) {
            this.fileName = `${date.toString()}_${this.files[i].name}`;

            let ref = storage
              .child(`property_images/${this.user.uid}/${this.fileName}`)
              .put(this.files[i]);

            ref.on(
              "state_changed",
              snapshot => {},
              error => {
                // console.log(error);
                this.logError(
                  "Unable to upload pictures, please check your internet and ensure that your pictures use either the JPG or PNG format."
                );
                this.loading = false;
              },
              () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                // let image = [];
                ref.snapshot.ref
                  .getDownloadURL()
                  .then(downloadURL => {
                    // console.log("File available at", downloadURL);
                    this.fileBeingUploaded = this.files[i].name;
                    this.imageUrls.push({
                      src: downloadURL,
                      fileName: `${date.toString()}_${this.fileBeingUploaded}`
                    });
                  })
                  .then(() => {
                    // console.log("it is ready");
                    // console.log(this.imageUrls);

                    if (this.imageUrls.length === this.files.length) {
                      this.addProperty();
                    }
                  });

                // console.log("success");
              }
            );
          }
        } else {
          this.addProperty();
        }
      } else {
        // console.log("not");
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
        let bedrooms;

        if (this.property.details.bedrooms >= 4) {
          bedrooms = "4 +";
          // console.log(bedrooms);
          // console.log(typeof bedrooms);
        } else {
          bedrooms = `${this.property.details.bedrooms}`;
          // console.log(bedrooms);
          // console.log(typeof bedrooms);
        }

        this.$fire.firestore
          .collection("properties")
          .doc(this.theParam)
          .update({
            price: parseFloat(this.property.details.price),
            parish: this.property.details.parish,
            type: this.property.details.propertyType,
            bedrooms: bedrooms,
            featured: this.property.featured,
            verified: this.property.verified,
            propertyFor: this.property.details.propertyFor,

            description: this.property.description,
            details: this.property.details,
            amenities: this.property.amenities,
            tours: {
              youtube: this.youtubeVideoId,
              matterport: this.matterportId
            },
            uploader: this.user.uid,
            timestamp: this.property.timestamp,
            images: this.property.images.concat(this.imageUrls)
          })
          .then(() => {
            this.editUserProperty([
              {
                price: parseFloat(this.property.details.price),
                parish: this.property.details.parish,
                type: this.property.details.propertyType,
                bedrooms: bedrooms,
                featured: this.property.featured,
                verified: this.property.verified,
                propertyFor: this.property.details.propertyFor,

                description: this.property.description,
                details: this.property.details,
                amenities: this.property.amenities,
                tours: this.property.tours,
                uploader: this.user.uid,
                images: this.property.images.concat(this.imageUrls)
              },
              this.theParam
            ]);
          })
          .then(() => {
            this.loading = false;
            this.disabled = true;
            this.fileBeingUploaded = "";
            this.logSuccess("Property Successfully Updated");
          })
          .catch(error => {
            this.loading = false;
            this.logError(error.message);
          });

        // console.log("valid tour");
      } else {
        // console.log("not");
        this.logError("Please complete required sections.");
      }
    },
    removeImage(url, fileName) {
      let index = this.urls.indexOf(url);

      let fileIndex = this.files.findIndex(file => file.name === fileName);
      this.urls.splice(index, 1);
      this.files.splice(fileIndex, 1);
      this.logSuccess("Image deleted");
    },
    deleteImage(fileName, src) {
      let storage = this.$fire.storage.ref();
      let ref = storage.child(`property_images/${this.user.uid}/${fileName}`);

      let fileIndex = this.property.images.findIndex(
        file => file.fileName === fileName
      );

      // // console.log(this.property.images)
      // console.log(fileIndex);

      // Delete the file
      ref
        .delete()
        .then(() => {
          this.$fire.firestore
            .collection("properties")
            .doc(this.theParam)
            .update({
              images: this.$fireModule.firestore.FieldValue.arrayRemove({
                fileName: fileName,
                src: src
              })
            });
        })
        .then(() => {
          this.property.images.splice(fileIndex, 1);

          this.logSuccess("Image deleted");
        })
        .catch(error => {
          // console.log("delete error");
          // console.log(error);
          this.logError(error.message);
        });
    }
  },
  computed: {
    ...mapGetters({
      nameRules: "inputRules/nameRules",
      descriptionRules: "inputRules/descriptionRules",
      amountRules: "inputRules/amountRules",
      amountRulesMinOne: "inputRules/amountRulesMinOne",
      idRules: "inputRules/idRules",
       matterportRules: "inputRules/matterportRules",
      youtubeRules: "inputRules/youtubeRules",
      
      parishes: "selectOptions/parishes",
      realEstateType: "selectOptions/realEstateType",
      user: "authentication/user",
      profile: "profile/profile"
    }),
    title() {
      return `${this.profile.personalDetails.displayName} | Edit Property | Dashboard`;
    },
    description() {
      return "Edit Property";
    }
    /*     allImages(){
      let a = [...this.property.images];
      let b = [...this.imageUrls];
      let finalArray = a.concat(b);
      return finalArray;
    } */
  }
};
</script>

<style lang="scss" scoped></style>
