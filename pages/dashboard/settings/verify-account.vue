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
    <SectionPadding v-else-if="profile.verified === true" class="pt-9">
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center flex-column pa-3"
        outlined
        ><p class="text-body-1 text-sm-h6 text-center font-weight-regular">
          Account Verified
        </p>
        <v-icon color="blue">mdi-check-decagram mdi-36px</v-icon>
      </v-sheet>
    </SectionPadding>
    <SectionPadding
      v-else-if="profile.verificationProcess === 'pending'"
      class="pt-9"
    >
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center flex-column pa-3"
        outlined
        ><p class="text-body-1 text-sm-h6 text-center font-weight-regular">
          Request is being processed
        </p>
        <v-icon color="orange">mdi-check-decagram mdi-36px</v-icon>
      </v-sheet>
    </SectionPadding>
    <SectionPadding
      v-else-if="profile.verificationProcess === 'denied'"
      class="pt-9"
    >
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center flex-column pa-3"
        outlined
        ><p class="text-body-1 text-sm-h6 text-center font-weight-regular">
          Verification Denied
        </p>
        <v-icon>mdi-check-decagram mdi-36px</v-icon>
      </v-sheet>
    </SectionPadding>
    <section v-else id="top">
      <SectionPadding class="pt-9">
        <v-stepper v-model="cur">
          <v-stepper-header>
            <v-stepper-step
              :color="iconColor"
              step="1"
              :complete="validPersonalDetails"
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
              Valid ID
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step
              :color="iconColor"
              step="3"
              :complete="cur > 2"
              editable
            >
              Request Verfication
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-container>
                <p class="text-h6 pb-6">
                  Please enter your personal information
                </p>
                <v-form
                  v-model="validPersonalDetails"
                  @submit.prevent="validateDescription"
                  ref="personalDetails"
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
                        v-model="realtor"
                        :items="['Yes', 'No']"
                        :color="iconColor"
                        item-color="green"
                        :rules="[v => !!v || 'required']"
                      ></v-select
                    ></v-col>
                    <v-col cols="12" md="6">
                      <v-select
                        outlined
                        dense
                        prepend-icon="mdi-island"
                        label="Are you a Jamaican citizen? *"
                        v-model="citizen"
                        :items="['Yes', 'No']"
                        :color="iconColor"
                        item-color="green"
                        :rules="[v => !!v || 'required']"
                      ></v-select
                    ></v-col>
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
                  Please upload a picture of a valid ID along with your
                  realtor's license.
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
                      maxlength="2"
                      prepend-icon="mdi-image-multiple"
                      v-model="files"
                      @change="resetURL"
                      label="Upload pictures of your valid ID"
                      :color="iconColor"
                      required
                      :rules="[
                        v => (!!v && v.length > 0) || 'File is required',
                        v =>
                          !v ||
                          !v.some(file => file.size >= 1048576) ||
                          'All pictures should be 1 MB or less in size!',
                        v => v.length < 3 || 'No more than 3 pictures',
                        v =>
                          v.length > 0 || 'A minimum of 1 picture is required'
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
                  Request Verfication
                </p>
                <v-form @submit.prevent="uploadPictures" ref="entireForm">
                  <v-btn
                    v-if="disabled"
                    dark
                    :color="iconColor"
                    nuxt
                    :to="{ name: 'dashboard' }"
                  >
                    Request Successfully Sent
                  </v-btn>
                  <v-btn
                    v-else
                    :dark="!disabled"
                    :color="iconColor"
                    type="submit"
                    :loading="loading"
                    :disabled="disabled"
                  >
                    Request Verification
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
      validPersonalDetails: false,
      validPictures: false,
      loading: false,
      disabled: false,
      realtor: "",
      citizen: "",
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
      setVerificationProcess: "profile/setVerificationProcess"
    }),
    addDropFile(e) {
      this.urls = [];
      this.files.push(...Array.from(e.dataTransfer.files));
    },
    resetURL() {
      this.urls = [];
    },
    validateDescription() {
      if (this.$refs.personalDetails.validate()) {
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
        this.$refs.personalDetails.validate() &&
        this.$refs.picturesForm.validate() &&
        this.$refs.entireForm.validate() &&
        this.profile.personalDetails.displayName
      ) {
        this.loading = true;

        let storage = this.$fire.storage.ref();
        let date = Date.now();

        for (let i = 0; i < this.files.length; i++) {
          this.fileName = `verification_${date.toString()}_${
            this.files[i].name
          }`;

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
                    fileName: `verification_${date.toString()}_${
                      this.fileBeingUploaded
                    }`
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
        this.$refs.personalDetails.validate() &&
        this.$refs.picturesForm.validate() &&
        this.$refs.entireForm.validate() &&
        this.profile.personalDetails.displayName
      ) {
        this.loading = true;

        this.$fire.firestore
          .collection("request_verification")
          .doc(this.user.uid)
          .set({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNumber: this.phoneNumber,
            realtorLicense: this.realtor,
            jamaicanCitizen: this.citizen,

            verified: this.profile.verified,
            uploader: this.user.uid,
            timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            images: this.imageUrls
          })
          .then(() => {
            this.$fire.firestore
              .collection("users")
              .doc(this.user.uid)
              .update({
                verificationProcess: "pending"
              });
            this.setVerificationProcess();
          })
          .then(() => {
            this.loading = false;
            this.disabled = true;
            this.fileBeingUploaded = "";

            this.logSuccess("Verification Successfully Requested!");
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
      emailRules: "inputRules/emailRules"
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
    }
  }
};
</script>

<style lang="scss" scoped></style>
