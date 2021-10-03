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
      data:[
  {
    "parish": "St. James",
     timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "icon": "mdi-car",
        "title": "Parking"
      },
      {
        "icon": "mdi-shield-home",
        "title": "Grilled"
      },
      {
        "title": "Water Tank",
        "icon": "mdi-water"
      },
      {
        "title": "Water Heater",
        "icon": "mdi-thermometer-high"
      },
      {
        "icon": "mdi-pool",
        "title": "Swimming Pool"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "aliqua est ea commodo voluptate minim sunt esse elit eu Lorem veniam cillum irure enim ea Lorem officia officia laborum mollit laboris",
      "name": "Blair Wong Property"
    },
    "price": 1170874125,
    "featured": false,
    "details": {
      "propertyId": "",
      "parish": "St. Elizabeth",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 8630,
      "bedrooms": 7,
      "price": 1884135114,
      "community": "test test",
      "rentType": "",
      "bathrooms": 12,
      "garages": 12
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1633293204535_5.jpg?alt=media&token=ee9a7780-aafb-4e82-b7ba-3cb119e204fa"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1633293204535_5.jpg?alt=media&token=ee9a7780-aafb-4e82-b7ba-3cb119e204fa"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1633293204535_5.jpg?alt=media&token=ee9a7780-aafb-4e82-b7ba-3cb119e204fa"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1633293204535_5.jpg?alt=media&token=ee9a7780-aafb-4e82-b7ba-3cb119e204fa"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1633293204535_5.jpg?alt=media&token=ee9a7780-aafb-4e82-b7ba-3cb119e204fa"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1633293204535_5.jpg?alt=media&token=ee9a7780-aafb-4e82-b7ba-3cb119e204fa"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1633293204535_5.jpg?alt=media&token=ee9a7780-aafb-4e82-b7ba-3cb119e204fa"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "House"
  }
]
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
      for (const element of this.data) {
          console.log(element)
        this.$fire.firestore
          .collection("properties")
          .add(element).then(docRef => {
            console.log(docRef);
            this.logSuccess("Success");
          })
          .catch(error => {
              console.log(error)
            this.logError(error.message);
            this.loading = false;
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
