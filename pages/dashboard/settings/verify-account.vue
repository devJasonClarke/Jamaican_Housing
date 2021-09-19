<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Verify Account</h1>
    <SectionPadding v-if="profile.loading" class="pt-9">
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
              Personal Details
            </v-stepper-step>

            <v-divider></v-divider>


            <v-stepper-step
              :color="iconColor"
              step="2"
              :complete="validPictures"
              editable
            >
              Pictures
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step
              :color="iconColor"
              step="3"
              :complete="cur > 2"
              editable
            >
              Tours
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-container>
                <p class="text-h6 pb-6">
                  Please enter your personal information
                </p>
                <v-form
                  v-model="validDescription"
                  @submit.prevent="validateDescription"
                  ref="descriptionForm"
                >
                  <v-row>
                <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-account"
                  label="First Name*"
                  required
                  v-model="firstName"
                  :color="iconColor"
                  :rules="nameRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-account"
                  label="Last Name *"
                  required
                  v-model="lastName"
                  :color="iconColor"
                  :rules="nameRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-email"
                  label="Email Address *"
                  required
                  v-model="email"
                  :color="iconColor"
                  :rules="emailRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-phone"
                  label="Phone Number *"
                  required
                  v-model.number="phoneNumber"
                  :color="iconColor"
                  type="number"
                  :rules="phoneNumberRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                     <v-select
                        outlined
                        dense
                          prepend-icon="mdi-certificate"
                        label="Are you a registered realtor? *"
                        v-model="property.details.propertyType"
                        :items="['Yes', 'No']"
                                :color="iconColor"
                        item-color="green"
                        :rules="[v => !!v || 'required']"
                      ></v-select></v-col>
              <v-col cols="12" md="6">
                     <v-select
                        outlined
                        dense
                          prepend-icon="mdi-island"
                        label="Are you a Jamaican citizen? *"
                        v-model="property.details.propertyType"
                        :items="['Yes', 'No']"
                                :color="iconColor"
                        item-color="green"
                        :rules="[v => !!v || 'required']"
                      ></v-select></v-col>
                  </v-row>
                  <v-btn dark :color="iconColor" type="submit">
                    Continue
                  </v-btn>
                </v-form>
              </v-container>
            </v-stepper-content>

            <v-stepper-content step="2">
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
                          !v.some(file => file.size >= 1048576) ||
                          'All pictures should be 1 MB or less in size!',
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
            <v-stepper-content step="3">
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
                        prepend-icon="mdi-youtube"
                        v-model="property.tours.youtube"
                        label="Youtube Video ID"
                        :color="iconColor"
                        counter
                        maxlength="11"
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
                    Upload Successful
                  </v-btn>
                  <v-btn
                    v-else
                    :dark="!disabled"
                    :color="iconColor"
                    type="submit"
                    :loading="loading"
                    :disabled="disabled"
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
      </SectionPadding>
    </section>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
      logError: "errors/logError",
      logSuccess: "success/logSuccess",
      addNewUserProperty: "getUserProperties/addNewUserProperty",
       setEmail: "profile/setEmail",
      setFirstName: "profile/setFirstName",
      setLastName: "profile/setLastName",
 setPhoneNumber: "profile/setPhoneNumber",
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
    removeImage(url, fileName) {
      let index = this.urls.indexOf(url);

      let fileIndex = this.files.findIndex(file => file.name === fileName);
      this.urls.splice(index, 1);
      this.files.splice(fileIndex, 1);
      this.logSuccess("Image deleted");
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
          .add({
            price: parseFloat(this.property.details.price),
            parish: this.property.details.parish,
            type: this.property.details.propertyType,
            bedrooms: bedrooms,
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
            // console.log("Document written with ID: ", docRef.id);
            this.addNewUserProperty([
              {
                price: parseFloat(this.property.details.price),
                parish: this.property.details.parish,
                type: this.property.details.propertyType,
                bedrooms: bedrooms,
                featured: false,
                verified: false,
                propertyFor: this.property.details.propertyFor,

                description: this.property.description,
                details: this.property.details,
                amenities: this.property.amenities,
                tours: this.property.tours,
                uploader: this.user.uid,
                images: this.imageUrls
              },
              docRef.id
            ]);
          })
          .then(() => {
            this.loading = false;
            this.disabled = true;
            this.fileBeingUploaded = "";

            this.logSuccess("Property Successfully Added!");
          })
          .then(() => {
            this.$router.push({ name: "dashboard" });
          })
          .catch(error => {
            this.logError(error.message);
            this.loading = false;
          });

        // console.log("valid tour");
      } else {
        // console.log("not");
        this.logError("Please complete required sections.");
      }
    }
  },
  computed: {
    ...mapGetters({
      nameRules: "inputRules/nameRules",
      descriptionRules: "inputRules/descriptionRules",
      amountRules: "inputRules/amountRules",
      amountRulesMinOne: "inputRules/amountRulesMinOne",
      idRules: "inputRules/idRules",
      parishes: "selectOptions/parishes",
      realEstateType: "selectOptions/realEstateType",
      user: "authentication/user",
      profile: "profile/profile",
 phoneNumberRules: "inputRules/phoneNumberRules",
   emailRules: "inputRules/emailRules",
    }),
    title() {
      return `${this.profile.personalDetails.displayName} | Verify Account | Dashboard`;
    },
    description() {
      return `Verify your account ${this.profile.personalDetails.displayName}`;
    },
       email: {
      get() {
        return this.profile.contact.email;
      },
      set(value) {
        this.setEmail(value);
      }
    },
    firstName: {
      get() {
        return this.profile.personalDetails.firstName;
      },
      set(value) {
        this.setFirstName(value);
      }
    },
    lastName: {
      get() {
        return this.profile.personalDetails.lastName;
      },
      set(value) {
        this.setLastName(value);
      }
    },
    phoneNumber: {
      get() {
        return this.profile.contact.phoneNumber;
      },
      set(value) {
        this.setPhoneNumber(value);
      }
    },
  }
};
</script>

<style lang="scss" scoped></style>
