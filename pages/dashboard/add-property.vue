<template>
  <div>
    <h1>Add Propery</h1>
    <SectionPadding>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step step="1" editable>
            Name of property
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2" editable>
            Name of technical details
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3" editable>
            Name of confirm
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :rules="[() => false]" step="4" editable>
            Custom channels
            <small>Alert message</small>
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="250px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 2">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="250px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 3">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="250px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 1">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="250px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 1">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </SectionPadding>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      e1: 1
    };
  }
};
</script>

<style lang="scss" scoped></style>
