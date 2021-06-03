<template>
  <v-row>
    <v-col cols="11" class=" pb-0">
      <p class="ma-0 text-subtitle-1 font-weight-bold text-uppercase">
       {{subTitle}}
      </p>
    </v-col>
    <v-col
      cols="12"
      class="d-flex justify-space-between flex-column flex-sm-row pt-0"
    >
      <p class="text-h4 font-weight-bold ">
       {{mainTitle}}
      </p>
      <v-spacer></v-spacer>
      <p>{{linkMessage}} <v-icon>mdi-chevron-double-right mdi-18px</v-icon></p></v-col
    >
  </v-row>
</template>

<script>
export default {
props:{
    subTitle:{
        type: String,
        required: true
    },
    mainTitle:{
        type:String,
        required: true
    },
    linkMessage:{
        type:String,
        required: true
    },
}

};
</script>

<style lang="scss" scoped></style>
