<template>
  <div>
    <v-btn color="success" @click="addData">Generate Data</v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      data:[]
      //  timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    };
  },
  methods: {
    ...mapActions({
      logError: "snackbars/errors/logError",
      logSuccess: "snackbars/success/logSuccess",
      addNewUserProperty: "dashboard/userProperties/addNewUserProperty"
    }),
    addData() {
      for (let element of this.data) {
        if (
          element.details.propertyType === "Commercial Building/Offices" ||
          element.details.propertyType === "Development Land (Commercial)" ||
          element.details.propertyType === "Development Land (Residential)" ||
          element.details.propertyType === "Factory" ||
          element.details.propertyType === "Farm/Agriculture"
        ) {
          element.details.numberOfBedrooms = "0";
          element.details.bedrooms = 0;
        } else if (element.details.bedrooms >= 4) {
          element.details.numberOfBedrooms = "4 +";
          // console.log(bedrooms);
          // console.log(typeof bedrooms);
        } else {
          element.details.numberOfBedrooms = `${element.details.bedrooms}`;
          // console.log(bedrooms);
          // console.log(typeof bedrooms);
        }

        if (element.details.propertyFor == "Sale") {
          element.details.rentType = "";
        }

        console.log(element);
        this.$fire.firestore
          .collection("properties")
          .add(element)
          .then(docRef => {
            console.log(docRef);
            this.logSuccess(`Successfully added ${docRef.id} `);
          })
          .catch(error => {
            console.log(error);
            this.logError(error.message);
            this.loading = false;
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
