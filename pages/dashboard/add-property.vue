<template>
  <v-container>
    <h1>Add Your Propery</h1>
    <SectionPadding>
      <v-stepper v-model="cur">
        <v-stepper-header>
          <v-stepper-step :color="iconColor" step="1" complete editable>
            Description
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :color="iconColor" step="2" editable>
            Details
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :color="iconColor" step="3" editable>
            Amenities
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :color="iconColor" step="4" editable>
            Pictures
          </v-stepper-step>
          <v-divider></v-divider>

          <v-stepper-step :color="iconColor" step="5" editable>
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
                v-model="validForm"
                @submit.prevent="validateForm"
                ref="detailsForm"
              >
                <v-row>
                  <v-col cols="">
                    <v-text-field
                      outlined
                      dense
                      label="Property Name *"
                      required
                      :color="iconColor"
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
            <v-container>
              <p class="text-h6 pb-6">
                Please enter your property details
              </p>
              <v-form
                v-model="validForm"
                @submit.prevent="validateForm"
                ref="detailsForm"
              >
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Property ID"
                      :color="iconColor"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Type*"
                      required
                      :color="iconColor"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Size"
                      type="number"
                      :color="iconColor"
                      suffix="Square Feet"
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
                      :color="iconColor"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Status"
                      :color="iconColor"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Community"
                      :color="iconColor"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Parish"
                      :color="iconColor"
                    ></v-text-field
                  ></v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Number of Bed Rooms"
                      required
                      :color="iconColor"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Number of Bath Rooms"
                      required
                      :color="iconColor"
                    ></v-text-field
                  ></v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Number of Garages"
                      :color="iconColor"
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-btn dark :color="iconColor" type="submit">
                  Continue
                </v-btn>
              </v-form>
            </v-container>
            <v-btn dark :color="iconColor" @click="cur = 3">
              Continue
            </v-btn>

            <v-btn text @click="cur = cur - 1">
              back
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-container>
              <p class="text-h6 pb-6">
                Please select the amenities for your property
              </p>
              <v-form
                v-model="validForm"
                @submit.prevent="validateForm"
                ref="detailsForm"
              >
                <v-row class="mb-6">
                  <v-col
                    cols="12"
                    sm="3"
                    v-for="(amenity, i) in amenities"
                    :key="i"
                  >
                    <v-checkbox
                      v-model="selected"
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
              </v-form>
            </v-container>

            <v-btn dark :color="iconColor" @click="cur = 1">
              Continue
            </v-btn>
            <v-btn text @click="cur = cur - 1">
              back
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-container>
              <p class="text-h6 pb-6">
                Please add pictures of your property
              </p>
              <v-form
                v-model="validForm"
                @submit.prevent="validateForm"
                ref="detailsForm"
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
                  ></v-file-input>
                </v-row>

                <v-btn dark :color="iconColor" type="submit">
                  Continue
                </v-btn>
              </v-form>
            </v-container>
            <v-btn dark :color="iconColor" @click="cur = 1">
              Continue
            </v-btn>
            <v-btn text @click="cur = cur - 1">
              back
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="5">
            <v-container>
              <p class="text-h6 pb-6">
                Please add your Virtual Tour or Youtube video ID (Optional)
              </p>
              <v-form
                v-model="validForm"
                @submit.prevent="validateForm"
                ref="detailsForm"
              >
                <v-row class="mb-6">
                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Virtual Tour ID"
                      required
                      :color="iconColor"
                    ></v-text-field
                  ></v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Youtube Video ID"
                      :color="iconColor"
                    ></v-text-field
                  ></v-col>
                </v-row>

                <v-btn dark :color="iconColor" type="submit">
                  Continue
                </v-btn>
              </v-form>
            </v-container>

            <v-btn dark :color="iconColor" @click="cur = 1">
              Continue
            </v-btn>
            <v-btn text @click="cur = cur - 1">
              back
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </SectionPadding>
  </v-container>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      cur: 1,
      iconColor: "rgba(0, 200, 83)",
      selected: [],
      files: [],
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
      ]
    };
  },
  methods: {
    addDropFile(e) {
      this.files.push(...Array.from(e.dataTransfer.files));
    }
  }
};
</script>

<style lang="scss" scoped></style>
