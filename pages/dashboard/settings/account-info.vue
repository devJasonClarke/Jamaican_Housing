<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Account Details</h1>

    <!--     {{ email }} <br />
    {{ firstName }} <br />
    {{ lastName }} <br />
     {{about}} <br />
    {{ phoneNumber }} <br />
    {{ whatsapp }} <br />
    {{ website }} <br />
    {{ linkedIn }} <br />
    {{ facebook }} <br />
    {{ youtube }} <br />
    {{ instagram }} <br /> -->
    <SectionPadding class="pt-9">
      <v-tabs
        v-model="tab"
        background-color="transparent"
        :color="iconColor"
        show-arrows
      >
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="py-12 px-6">
        <v-tab-item>
          <p class="text-h6 ">
            Please enter your information.
          </p>
          <p class="text-body-2 mb-12">
            The information entered here will be accessible to users who are
            interested in your property.
          </p>
          <v-form ref="descriptionForm" @submit.prevent="validateFields">
            <v-row
              ><v-col cols="12" md="6">
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
              <v-col cols="12">
                <v-textarea
                  outlined
                  dense
                  v-model="about"
                  prepend-icon="mdi-text"
                  clearable
                  clear-icon="mdi-close-circle"
                  label="About Me (Optional)"
                  counter
                  maxlength="250"
                  required
                  :color="iconColor"
                ></v-textarea
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-check-decagram"
                  label="Account Verified"
                  required
                  v-model="profile.verified"
                  :color="iconColor"
                  disabled
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-card-bulleted-outline"
                  label="Real Estate Ja User ID"
                  required
                  v-model="profile.uid"
                  :color="iconColor"
                  disabled
                ></v-text-field
              ></v-col>
            </v-row>
            <v-btn
              color="success"
              type="submit"
              :disabled="disableUpdateAccount"
              :loading="updateDetailsLoader"
              >Save</v-btn
            >
          </v-form>
        </v-tab-item>

        <v-tab-item v-if='!profile.verified'>
          <p class="text-h6 ">
            Please enter your information.
          </p>
          <p class="text-body-2 mb-12">
            The information entered here will be accessible to users who are
            interested in your property.
          </p>
          <v-form ref="socialMediaForm" @submit.prevent="validateSocial">
            <v-row
              ><v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  label="Facebook Account URL (optional)"
                  required
                  prepend-icon="mdi-facebook"
                  validate-on-blur
                  v-model="facebook"
                  :color="iconColor"
                  :rules="websiteRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  prepend-icon="mdi-instagram"
                  dense
                  label="Instagram Account URL (optional)"
                  required
                  validate-on-blur
                  v-model="instagram"
                  :color="iconColor"
                  :rules="websiteRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-linkedin"
                  label="LinkedIn Account URL (optional)"
                  required
                  validate-on-blur
                  v-model="linkedIn"
                  :color="iconColor"
                  :rules="websiteRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  dense
                  prepend-icon="mdi-youtube"
                  label="Youtube Account URL (optional)"
                  required
                  validate-on-blur
                  v-model="youtube"
                  :color="iconColor"
                  :rules="websiteRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  prepend-icon="mdi-whatsapp"
                  dense
                  validate-on-blur
                  label="Whatsapp Number (optional)"
                  required
                  v-model="whatsapp"
                  :rules="whatsappNumberRules"
                  :color="iconColor"
                  type="number"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  prepend-icon="mdi-web"
                  dense
                  validate-on-blur
                  label="Website URL (optional)"
                  v-model="website"
                  :color="iconColor"
                  :rules="websiteRules"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-btn
              color="success"
              type="submit"
              :disabled="disableUpdateSocial"
              :loading="updateSocialLoader"
              >Save</v-btn
            >
          </v-form>
        </v-tab-item>
          <v-tab-item v-else>
          <v-sheet
            height="200px"
            class="d-flex justify-center align-center flex-column pa-3"
            outlined
            ><p class="text-body-1 text-sm-h6 text-center font-weight-regular">
              Verify your account to connect your social media.
            </p>

           <div class="d-flex">
              <v-icon>mdi-facebook mdi-36px</v-icon>
            <v-icon class="mx-6">mdi-linkedin mdi-36px</v-icon>
            <v-icon>mdi-whatsapp mdi-36px</v-icon>
           </div>
            
          </v-sheet>
        </v-tab-item> 
        <v-tab-item>
          <p class="text-h6 " id="top">
            Please upload your profile picture.
          </p>
          <p class="text-body-2">
            Profile pictures should have a resolution of 400px x 400px and be 200 KB or less.<br>
            Please use this website to compress your image:
                  <a
                    href="https://tinypng.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="blue--text"
                  >Compress Image
                </a>
          </p>

          <v-col cols="12" md="6" class="mt-9">
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
                  v-if="profile.profilePicture.src"
                  accept="image/png, image/jpeg"
                  small-chips
                  show-size
                  counter
                  multiple
                  maxlength="0"
                  prepend-icon="mdi-image"
                  v-model="files"
                  @change="resetURL"
                  label="Only one profile picture at a time"
                  :color="iconColor"
                  required
                  :rules="[
                    v =>
                      !v ||
                      !v.some(file => file.size >= 209716) ||
                      'All pictures should be 200 KB or less in size!',
                    v => v.length < 1 || 'Only one profile picture at a time'
                  ]"
                ></v-file-input>
                <v-file-input
                  v-else
                  accept="image/png, image/jpeg"
                  small-chips
                  show-size
                  counter
                  multiple
                  maxlength="1"
                  prepend-icon="mdi-image"
                  v-model="files"
                  @change="resetURL"
                  label="Upload your profile picture"
                  :color="iconColor"
                  required
                  :rules="[
                    v =>
                      !v ||
                      !v.some(file => file.size >= 209716) ||
                      'All pictures should be 200 KB or less in size!',
                    v => v.length < 2 || 'No more than 1 profile picture'
                  ]"
                ></v-file-input>
              </v-row>
              <v-btn
                :dark="urls.length == 0"
                :color="iconColor"
                :disabled="urls.length > 0"
                @click="previewPictures"
                class="mb-3 mr-3"
              >
                Preview Picture
              </v-btn>
              <v-btn
                dark
                :color="iconColor"
                :disabled="disableUpdatePicture"
                :loading="updatePictureLoader"
                type="submit"
                class="mb-3"
              >
                Upload Picture
              </v-btn>

              <div v-if="fileBeingUploaded">
                <p class="text-h6 mt-6">Uploading: {{ fileBeingUploaded }}</p>
              </div>
            </v-form>

            <SectionPadding class="pt-0" id="photos">
              <div v-show="urls.length !== 0">
                <div v-for="(url, i) in urls" :key="url">
                  <div>
                    <p class="text-h6">Picture {{ i + 1 }}</p>
                    <p class="text-subtitle-1">
                      File name: {{ files[i].name }}
                    </p>
                    <div>
                      <v-img
                        :src="url"
                        :alt="files[i].name"
                        width="120px"
                        height="120px"
                        class="rounded-circle"
                      ></v-img>
                    </div>
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
              <v-divider class="my-6"></v-divider>
              <div v-show="this.profile.profilePicture.fileName">
                <div>
                  <p class="text-h6">Existing Picture</p>
                  <p class="text-subtitle-1">
                    File name: {{ this.profile.profilePicture.fileName }}
                  </p>
                  <div>
                    <v-img
                      :src="this.profile.profilePicture.src"
                      :alt="this.profile.profilePicture.fileName"
                      width="120px"
                      height="120px"
                      class="rounded-circle img"
                    ></v-img>
                  </div>
                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="red"
                        v-bind="attrs"
                        v-on="on"
                        class="mt-3"
                        dark
                        ><v-icon>mdi-delete</v-icon> Delete Image</v-btn
                      >
                    </template>
                    <v-card>
                      <v-card-title class="text-h5 hyphens">
                        Are you sure you want to delete this image?
                      </v-card-title>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="green darken-1"
                          text
                          @click="dialog = false"
                        >
                          Go back
                        </v-btn>
                        <v-btn color="red darken-1" text @click="deleteImage">
                          Delete image
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
                <v-divider class="my-9"></v-divider>
                <v-btn dark :color="iconColor" @click="$vuetify.goTo('#top')"
                  >Go To Top</v-btn
                >
              </div>
            </SectionPadding>
          </v-col>
        </v-tab-item>
       <!--  <v-tab-item v-else>
          <v-sheet
            height="200px"
            class="d-flex justify-center align-center flex-column pa-3"
            outlined
            ><p class="text-body-1 text-sm-h6 text-center font-weight-regular">
              Verify account to change profile picture.
            </p>

            <v-icon>mdi-check-decagram mdi-36px</v-icon>
          </v-sheet>
        </v-tab-item> -->
      </v-tabs-items>
    </SectionPadding>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "dashboard",
  async fetch() {},

  data() {
    return {
      dialog: false,
      files: [],
      urls: [],
      validPictures: false,
      tab: null,
      items: ["Account Details", "Social Media", "Profile Picture"],
      disableUpdateAccount: false,
      disableUpdateSocial: false,
      disableUpdatePicture: false,
      updatePictureLoader: false,
      iconColor: "rgba(0, 200, 83)",
      imageUrls: [],
      fileBeingUploaded: "",
      fileName: ""
    };
  },
  computed: {
    title() {
      return `${this.profile.personalDetails.displayName} | Account Info | Dashboard`;
    },
    description() {
      return `${this.profile.personalDetails.displayName} Account Info`;
    },
    ...mapGetters({
      profile: "profile/profile",
      nameRules: "inputRules/nameRules",
      descriptionRules: "inputRules/descriptionRules",
      emailRules: "inputRules/emailRules",
      websiteRules: "inputRules/websiteRules",
      phoneNumberRules: "inputRules/phoneNumberRules",
      whatsappNumberRules: "inputRules/whatsappNumberRules",
      updateDetailsLoader: "profile/updateDetailsLoader",
      updateSocialLoader: "profile/updateSocialLoader",
      user: "authentication/user"
    }),
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
    about: {
      get() {
        return this.profile.personalDetails.about;
      },
      set(value) {
        this.setAbout(value);
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
    whatsapp: {
      get() {
        return this.profile.contact.whatsappNumber;
      },
      set(value) {
        this.setwhatsappNumber(value);
      }
    },
    website: {
      get() {
        return this.profile.contact.website;
      },
      set(value) {
        this.setwebsite(value);
      }
    },
    facebook: {
      get() {
        return this.profile.socialMedia.facebook;
      },
      set(value) {
        this.setFacebook(value);
      }
    },
    instagram: {
      get() {
        return this.profile.socialMedia.instagram;
      },
      set(value) {
        this.setInstagram(value);
      }
    },
    linkedIn: {
      get() {
        return this.profile.socialMedia.linkedIn;
      },
      set(value) {
        this.setLinkedIn(value);
      }
    },

    youtube: {
      get() {
        return this.profile.socialMedia.youtube;
      },
      set(value) {
        this.setYoutube(value);
      }
    }
  },
  methods: {
    ...mapActions({
      setEmail: "profile/setEmail",
      setFirstName: "profile/setFirstName",
      setLastName: "profile/setLastName",
      setAbout: "profile/setAbout",
      setPhoneNumber: "profile/setPhoneNumber",
      setwhatsappNumber: "profile/setwhatsappNumber",
      setwebsite: "profile/setwebsite",
      setFacebook: "profile/setFacebook",
      setInstagram: "profile/setInstagram",
      setLinkedIn: "profile/setLinkedIn",
      setYoutube: "profile/setYoutube",
      updateAccountDetails: "profile/updateAccountDetails",
      updateAccountSocials: "profile/updateAccountSocials",
      removeProfilePicture: "profile/removeProfilePicture",
      setProfilePicture: "profile/setProfilePicture",
      logSuccess: "success/logSuccess",
      logError: "errors/logError"
    }),
    validateFields() {
      if (this.$refs.descriptionForm.validate()) {
        this.updateAccountDetails();
        // console.log("validate details");
        this.disableUpdateAccount = !this.disableUpdateAccount;
        setTimeout(
          () => (this.disableUpdateAccount = !this.disableUpdateAccount),
          10000
        );
      } else {
      }
    },
    validatePictures() {
      if (this.$refs.picturesForm.validate() && this.files.length > 0) {
        // console.log("valid pic");

        let storage = this.$fire.storage.ref();
        let date = Date.now();

        this.updatePictureLoader = true;

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
              this.updatePictureLoader = false;
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
                    // console.log("Image Url");
                    // console.log(this.imageUrls[0]);
                    this.addPictureProperty();
                  }
                });

              // console.log("success");
            }
          );
        }
      } else {
        this.logError("Please ensure that picture is valid.");
      }
    },
    addPictureProperty() {
      this.$fireModule.auth().onAuthStateChanged(user => {
        if (user) {
          this.$fire.firestore
            .collection("users")
            .doc(user.uid)
            .update({
              profilePicture: this.imageUrls[0]
            })
            .then(() => {
              this.updatePictureLoader = false;
              this.setProfilePicture(this.imageUrls[0]);
              this.files = [];
              this.urls = [];
              this.imageUrls = [];
              this.fileName = "";
              this.fileBeingUploaded = "";
              this.logSuccess("Successfully updated profile picture!");
              // console.log("Successfully updated!");
            })
            .catch(error => {
              this.logError(error.message);
              // console.log(error);
              //   commit("errors/LOG_ERROR", error.message, { root: true });
            });

          // console.log(user);
        } else {
          // User is signed out
        }
      });
    },
    validateSocial() {
      if (this.$refs.socialMediaForm.validate()) {
        this.updateAccountSocials();
        // console.log("validate social");
        this.disableUpdateSocial = !this.disableUpdateSocial;
        setTimeout(
          () => (this.disableUpdateSocial = !this.disableUpdateSocial),
          10000
        );
      } else {
      }
    },
    removeImage(url, fileName) {
      let index = this.urls.indexOf(url);

      let fileIndex = this.files.findIndex(file => file.name === fileName);
      this.urls.splice(index, 1);
      this.files.splice(fileIndex, 1);
      this.logSuccess("Image deleted");
    },
    deleteImage() {
      let fileName = this.profile.profilePicture.fileName;
      let storage = this.$fire.storage.ref();
      let ref = storage.child(`property_images/${this.user.uid}/${fileName}`);

      // // console.log(this.property.images)

      // Delete the file
      ref
        .delete()
        .then(() => {
          this.$fire.firestore
            .collection("users")
            .doc(this.user.uid)
            .update({
              profilePicture: {
                fileName: "",
                src: ""
              }
            });
        })
        .then(() => {
          this.removeProfilePicture();
          this.logSuccess("Image deleted");
          this.dialog = false;
        })
        .catch(error => {
          // console.log("delete error");
          // console.log(error);
          this.logError(error.message);
            this.dialog = false;
        });
    },
    addDropFile(e) {
      this.urls = [];
      this.files.push(...Array.from(e.dataTransfer.files));
    },
    resetURL() {
      this.urls = [];
    },
    previewPictures() {
      for (let i = 0; i < this.files.length; i++) {
        /* // console.log(this.files[i]) */
        this.urls.push(URL.createObjectURL(this.files[i]));
      }
      this.$vuetify.goTo("#photos");
    }
  }
};
</script>

<style lang="scss" scoped></style>
