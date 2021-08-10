<template>
  <v-container>
    <h1>Add Propery {{cur}}</h1>
    <SectionPadding>
    
      <v-stepper v-model="cur"  alt-labels>
        <v-stepper-header>
          <v-stepper-step :color="iconColor" step="1" complete editable>
            Name of property
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :color="iconColor" step="2" editable>
            Name of technical details
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :color="iconColor" step="3" editable>
            Name of confirm
          </v-stepper-step>
         
      
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="250px"
            ></v-card>

            <v-btn dark :color="iconColor" @click="cur = 2">
              Continue
            </v-btn>
     
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="250px"
            ></v-card>

            <v-btn dark :color="iconColor" @click="cur = 3">
              Continue
            </v-btn>

              <v-btn text @click="cur= cur- 1">
              back
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="250px"
            ></v-card>

            <v-btn dark :color="iconColor" @click="cur = 1">
              Continue
            </v-btn>
          <v-btn text @click="cur= cur- 1">
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
      iconColor: "rgba(0, 200, 83)"
    };
  }
};
</script>

<style lang="scss" scoped></style>
