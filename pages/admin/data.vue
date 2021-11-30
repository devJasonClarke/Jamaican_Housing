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
    "timestamp": {
      "created": this.$fireModule.firestore.FieldValue.serverTimestamp(),
      "updated": this.$fireModule.firestore.FieldValue.serverTimestamp()
    },
    "amenities": [
      {
        "title": "Air Conditioning",
        "icon": "mdi-air-filter"
      },
      {
        "title": "Cable TV ",
        "icon": "mdi-television"
      },
      {
        "title": "Gated Community",
        "icon": "mdi-security"
      },
      {
        "title": "Parking",
        "icon": "mdi-car"
      },
      {
        "title": "Furnished",
        "icon": "mdi-sofa"
      },
      {
        "title": "Smart Home",
        "icon": "mdi-home-assistant"
      },
      {
        "title": "24 Hour Security",
        "icon": "mdi-cctv"
      },
      {
        "title": "Family Oriented",
        "icon": "mdi-home-heart"
      },
      {
        "title": "Grilled",
        "icon": "mdi-shield-home"
      },
      {
        "title": "Water Heater",
        "icon": "mdi-thermometer-high"
      },
      {
        "title": "Swimming Pool",
        "icon": "mdi-pool"
      },
      {
        "title": "Generator",
        "icon": "mdi-flash"
      },
      {
        "title": "Water Tank",
        "icon": "mdi-water"
      },
      {
        "title": "Gym",
        "icon": "mdi-dumbbell"
      },
      {
        "title": "Tennis Court",
        "icon": "mdi-tennis"
      },
      {
        "title": "Basketball Court",
        "icon": "mdi-basketball"
      },
      {
        "title": "Park Near By",
        "icon": "mdi-nature-people"
      }
    ],
    "description": {
      "description": "pariatur qui deserunt pariatur exercitation magna mollit duis eiusmod sit ipsum id deserunt dolor cillum magna enim in laborum anim do ea deserunt nisi quis mollit nisi duis in incididunt laboris consectetur ipsum Lorem nulla ut ipsum non qui ut voluptate voluptate pariatur proident deserunt nisi aute laborum ad laborum pariatur nostrud dolor dolor pariatur ex culpa consectetur cillum aliqua",
      "name": "Letha Peck Property"
    },
    "details": {
      "propertyId": "",
      "parish": "Kingston",
      "propertyType": "Apartment",
      "propertyFor": "Rent",
      "size": 847,
      "bedrooms": 1,
      "numberOfBedrooms": "",
      "price": 73337,
      "community": "Holcomb Town",
      "rentType": "Per Month",
      "bathrooms": 1,
      "garages": 8
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verification": {
      "featured": false,
      "verified": true
    },
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
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
