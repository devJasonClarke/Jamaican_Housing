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
      data: [
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Movie Theater Near By",
        "icon": "mdi-theater"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "culpa mollit commodo veniam labore mollit deserunt dolor deserunt id eiusmod cupidatat deserunt eu reprehenderit ea non elit quis duis do commodo dolore enim tempor consequat exercitation aute culpa tempor irure sint occaecat anim tempor quis ea sint et proident non laboris pariatur in excepteur pariatur non reprehenderit aliqua aliqua nisi cupidatat cillum mollit consectetur tempor Lorem sunt incididunt cupidatat",
      "name": "Gardner Salas Property"
    },
    "price": 507538,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Westmoreland",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 3644,
      "bedrooms": 9,
      "price": 217590,
      "community": "Valdez Street",
      "rentType": "",
      "bathrooms": 13,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. Andrew",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Heater",
        "icon": "mdi-thermometer-high"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "aliqua nostrud adipisicing laborum exercitation irure reprehenderit veniam sint mollit id dolor et laborum aliqua amet est quis commodo proident est ea eu enim velit aute quis consequat sunt minim ullamco dolore proident occaecat aute anim Lorem est mollit consequat velit fugiat ea fugiat et veniam nostrud in eiusmod anim duis dolore do voluptate incididunt eiusmod in ea veniam elit",
      "name": "Karina Velez Property"
    },
    "price": 72889,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Andrew",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 4572,
      "bedrooms": 7,
      "price": 302738,
      "community": "Vinson Street",
      "rentType": "",
      "bathrooms": 11,
      "garages": 17
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "24 Hour Security",
        "icon": "mdi-cctv"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "non commodo aute ut enim ad adipisicing cillum ut quis labore sint amet occaecat magna ex aute adipisicing mollit magna esse eiusmod laboris ad proident minim esse eu ipsum proident cupidatat consectetur consequat id anim voluptate esse occaecat proident nulla qui ex ex occaecat cupidatat quis ullamco officia commodo labore cupidatat non duis labore enim est laborum enim dolore est",
      "name": "Melissa Jones Property"
    },
    "price": 470441,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 15648,
      "bedrooms": 2,
      "price": 559133,
      "community": "Wong Street",
      "rentType": "",
      "bathrooms": 20,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Generator",
        "icon": "mdi-flash"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "consectetur anim enim in sint laborum nulla cupidatat deserunt duis nisi culpa eu fugiat dolore ullamco fugiat exercitation excepteur ipsum minim culpa ullamco dolore qui magna quis reprehenderit irure eu ut officia exercitation Lorem pariatur in veniam proident duis laboris magna incididunt duis anim enim minim sit proident reprehenderit dolore aliqua elit fugiat consectetur quis elit mollit excepteur Lorem irure",
      "name": "Laverne Finch Property"
    },
    "price": 662240,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 2260,
      "bedrooms": 4,
      "price": 371231,
      "community": "Ortiz Street",
      "rentType": "",
      "bathrooms": 18,
      "garages": 16
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Generator",
        "icon": "mdi-flash"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "laborum voluptate in ipsum pariatur et ex voluptate pariatur elit enim esse aliqua cupidatat pariatur ea qui esse ipsum veniam aliquip ex et enim est ipsum eu pariatur mollit et esse eu voluptate aute in ad consectetur proident ex magna officia minim proident voluptate cillum aliqua eu reprehenderit eiusmod in minim culpa exercitation culpa cupidatat id elit occaecat deserunt commodo",
      "name": "Barr Conway Property"
    },
    "price": 762708,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Trelawny",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 13022,
      "bedrooms": 7,
      "price": 168108,
      "community": "Hyde Street",
      "rentType": "",
      "bathrooms": 3,
      "garages": 19
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "24 Hour Security",
        "icon": "mdi-cctv"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "esse sunt minim proident sit elit aliqua occaecat velit reprehenderit laboris est mollit Lorem ea et consectetur anim velit officia tempor quis pariatur esse consequat anim laborum Lorem ad ullamco deserunt enim magna officia ad amet cillum enim exercitation aute eiusmod aliqua id et veniam incididunt ipsum ad mollit ipsum commodo labore esse occaecat elit fugiat ullamco id mollit occaecat",
      "name": "Finley Malone Property"
    },
    "price": 537525,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Westmoreland",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 9693,
      "bedrooms": 20,
      "price": 715813,
      "community": "Mcconnell Street",
      "rentType": "",
      "bathrooms": 18,
      "garages": 16
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gym",
        "icon": "mdi-dumbbell"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "laboris reprehenderit enim commodo nostrud ad pariatur aute est nulla adipisicing adipisicing velit amet Lorem veniam velit deserunt consequat minim laborum ut duis dolor Lorem minim labore quis fugiat dolor occaecat excepteur cupidatat sint dolore mollit non laborum exercitation culpa quis consectetur aliquip amet aliqua nisi veniam ea reprehenderit proident do dolore ullamco enim aliquip duis sit nulla laborum Lorem",
      "name": "Naomi Morris Property"
    },
    "price": 190346,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 18876,
      "bedrooms": 12,
      "price": 548920,
      "community": "Hamilton Street",
      "rentType": "",
      "bathrooms": 3,
      "garages": 8
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Cable TV ",
        "icon": "mdi-television"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "est non minim nostrud elit labore dolor commodo sit deserunt officia pariatur ad sunt commodo eu aliquip ut id commodo in voluptate voluptate minim eiusmod culpa in irure non irure ut ad commodo deserunt ex proident ex eu consectetur proident ad ut cillum dolore laboris reprehenderit pariatur incididunt nulla proident cillum irure velit sunt et est elit voluptate aliquip ullamco",
      "name": "Mccoy Britt Property"
    },
    "price": 706429,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 2247,
      "bedrooms": 20,
      "price": 261035,
      "community": "Wallace Street",
      "rentType": "",
      "bathrooms": 20,
      "garages": 11
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Hospital Near By",
        "icon": "mdi-hospital-building"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "veniam adipisicing in amet id quis proident Lorem cupidatat cillum sit minim Lorem exercitation laboris anim ut aliquip nisi consectetur sint duis officia dolor reprehenderit in pariatur veniam minim quis id laboris nulla nostrud proident excepteur id exercitation est et consequat nulla dolor consectetur in fugiat elit non culpa tempor incididunt quis velit qui anim irure aute occaecat id commodo",
      "name": "Bender Mcclure Property"
    },
    "price": 66305,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Andrew",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 3023,
      "bedrooms": 19,
      "price": 659461,
      "community": "Christian Street",
      "rentType": "",
      "bathrooms": 19,
      "garages": 18
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "St. Andrew",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Supermarket Near By",
        "icon": "mdi-shopping"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "dolor laborum deserunt amet voluptate elit incididunt non officia et consectetur laborum tempor occaecat aute laborum exercitation ipsum pariatur aute officia sunt reprehenderit mollit ad culpa cupidatat quis veniam ex magna dolor voluptate anim sint Lorem minim labore minim tempor sit et proident aliqua ut reprehenderit velit excepteur laborum pariatur commodo quis aute velit consectetur duis aute esse laborum adipisicing",
      "name": "Joy Farley Property"
    },
    "price": 692002,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Manchester",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 17938,
      "bedrooms": 10,
      "price": 781105,
      "community": "Hudson Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 8
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Movie Theater Near By",
        "icon": "mdi-theater"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "ullamco cillum nulla velit aute aute proident cillum sint cillum sint magna qui laborum dolor veniam nisi anim eiusmod proident occaecat sint quis consequat exercitation laborum deserunt nulla quis ipsum irure ut nostrud nisi aliquip laboris in aliqua quis velit in nisi in laborum consectetur mollit excepteur officia qui sint labore dolor mollit veniam adipisicing do culpa laboris ea incididunt",
      "name": "Alexandria Spencer Property"
    },
    "price": 397389,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Catherine",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 8938,
      "bedrooms": 8,
      "price": 241517,
      "community": "England Street",
      "rentType": "",
      "bathrooms": 2,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Swimming Pool",
        "icon": "mdi-pool"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "Lorem aliqua in eu ex sint eu ullamco dolore anim ipsum adipisicing aliqua cupidatat aliquip irure dolore ullamco incididunt occaecat commodo cupidatat veniam fugiat do est ipsum cupidatat velit nostrud in esse in commodo quis eiusmod nisi velit irure fugiat ea ipsum velit magna culpa cupidatat tempor quis enim commodo reprehenderit cillum in mollit quis qui do eiusmod ut est",
      "name": "Solomon Meyers Property"
    },
    "price": 123301,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 19058,
      "bedrooms": 1,
      "price": 336834,
      "community": "Davis Street",
      "rentType": "",
      "bathrooms": 6,
      "garages": 9
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
  },
  {
    "parish": "St. Elizabeth",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Basketball Court",
        "icon": "mdi-basketball"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "Lorem eiusmod sit sint qui qui ex ullamco cupidatat sunt cupidatat ullamco dolor ullamco qui pariatur proident dolor aliqua amet ad enim enim id exercitation nulla veniam aliqua excepteur ut est cillum consequat dolor et et officia dolore adipisicing ut proident incididunt ut cupidatat duis anim sit nostrud nulla aliqua labore reprehenderit non ea minim duis aute consequat sit dolor",
      "name": "Hobbs Hayes Property"
    },
    "price": 80894,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Trelawny",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 12864,
      "bedrooms": 15,
      "price": 263866,
      "community": "Sharp Street",
      "rentType": "",
      "bathrooms": 9,
      "garages": 1
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "Westmoreland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Cable TV ",
        "icon": "mdi-television"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "minim ut nisi labore consectetur qui labore laboris eu veniam eu cupidatat aliqua incididunt aliqua reprehenderit quis voluptate ex duis tempor ad aute nisi ullamco aliqua irure ex non ipsum aliqua ad sunt sunt dolore sunt minim ipsum non tempor ex fugiat quis incididunt elit non irure est minim consectetur magna consequat laborum minim consequat do velit ipsum veniam dolor",
      "name": "Margery Jenkins Property"
    },
    "price": 793895,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Clarendon",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 10437,
      "bedrooms": 4,
      "price": 139858,
      "community": "Morin Street",
      "rentType": "",
      "bathrooms": 4,
      "garages": 5
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "Westmoreland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Grilled",
        "icon": "mdi-shield-home"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "voluptate sunt incididunt et non esse duis occaecat in anim magna deserunt cillum ea aliqua est reprehenderit est qui cupidatat officia id in pariatur ullamco et do ex mollit ad aliqua nostrud et aute deserunt aliqua cillum ullamco aliqua nisi ipsum esse id est est eu aute proident commodo duis nostrud consequat sit dolore sunt cillum proident eu consectetur incididunt",
      "name": "Dina Wise Property"
    },
    "price": 615258,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Manchester",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 13783,
      "bedrooms": 4,
      "price": 556050,
      "community": "Weber Street",
      "rentType": "",
      "bathrooms": 17,
      "garages": 5
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Grilled",
        "icon": "mdi-shield-home"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "ea culpa adipisicing laboris aliqua minim amet magna ad velit nulla non Lorem elit sint occaecat est consectetur dolore fugiat dolor eu ipsum sint et esse aliqua incididunt culpa ut magna tempor aliquip tempor incididunt irure sunt exercitation est deserunt adipisicing ea deserunt cillum labore nisi veniam enim ullamco commodo nisi sunt ex elit enim commodo nulla fugiat eu excepteur",
      "name": "Albert Chambers Property"
    },
    "price": 22457,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Manchester",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 9733,
      "bedrooms": 10,
      "price": 160092,
      "community": "Snow Street",
      "rentType": "",
      "bathrooms": 13,
      "garages": 17
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Warehouse"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Church Near By",
        "icon": "mdi-church"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "enim occaecat est nostrud nisi nisi in officia ipsum reprehenderit consectetur occaecat tempor mollit irure et incididunt fugiat do tempor pariatur minim aute ex consequat labore incididunt nisi ullamco officia dolore labore velit amet aliqua duis cupidatat ea occaecat est exercitation proident ut consequat officia dolor aliquip aliqua ex consectetur incididunt amet pariatur sint mollit in nisi esse mollit dolore",
      "name": "Freda Haley Property"
    },
    "price": 575171,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 9187,
      "bedrooms": 14,
      "price": 674112,
      "community": "Burton Street",
      "rentType": "",
      "bathrooms": 3,
      "garages": 19
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "St. James",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Swimming Pool",
        "icon": "mdi-pool"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "excepteur ut consectetur in eiusmod irure pariatur eiusmod cupidatat velit enim ipsum Lorem ad reprehenderit ullamco proident amet sit esse dolore adipisicing commodo magna amet aute nostrud duis eiusmod laboris proident consectetur nostrud sit sit in fugiat id sunt proident adipisicing labore labore do mollit ullamco ea qui incididunt do duis quis ex dolor non qui anim reprehenderit irure non",
      "name": "Annabelle Bell Property"
    },
    "price": 499568,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Clarendon",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 17181,
      "bedrooms": 3,
      "price": 378878,
      "community": "Velasquez Street",
      "rentType": "",
      "bathrooms": 12,
      "garages": 11
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Schools Near By",
        "icon": "mdi-school"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "nisi ullamco irure est incididunt id qui eiusmod qui laborum eiusmod dolore ipsum fugiat consequat deserunt cupidatat voluptate laborum tempor nisi ea ad nisi incididunt laboris cupidatat eu in veniam voluptate anim ad veniam mollit id culpa sit qui enim officia tempor reprehenderit veniam commodo in do id voluptate proident aliquip ut deserunt sunt sunt laborum labore fugiat cupidatat exercitation",
      "name": "Glover Allison Property"
    },
    "price": 158271,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 7233,
      "bedrooms": 8,
      "price": 510082,
      "community": "Fuentes Street",
      "rentType": "",
      "bathrooms": 7,
      "garages": 19
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "St. James",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Parking",
        "icon": "mdi-car"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "laboris eu voluptate aliquip commodo dolor aute aliquip duis tempor excepteur consectetur in enim officia est consectetur id ullamco Lorem ad sit excepteur consectetur consequat est non labore Lorem irure officia eiusmod ullamco ipsum eiusmod fugiat anim laborum in duis culpa qui nostrud est officia laboris adipisicing duis ea enim consectetur commodo labore et sint est ex Lorem ut culpa",
      "name": "Carolina Daugherty Property"
    },
    "price": 611614,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Factory",
      "propertyFor": "Sale",
      "size": 14460,
      "bedrooms": 4,
      "price": 797536,
      "community": "Middleton Street",
      "rentType": "",
      "bathrooms": 10,
      "garages": 13
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Wifi",
        "icon": "mdi-wifi"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "aliqua culpa voluptate nulla laboris et eiusmod ullamco consectetur et magna eiusmod ex mollit enim veniam aliqua sint elit cillum nostrud proident labore enim occaecat et est irure veniam commodo tempor nisi amet id id non dolore nulla sint anim amet veniam officia sint consequat deserunt cupidatat proident aliquip aute ut eu eiusmod non aliquip occaecat dolor dolor dolor ipsum",
      "name": "Madge Whitehead Property"
    },
    "price": 585815,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 17823,
      "bedrooms": 9,
      "price": 121621,
      "community": "Moore Street",
      "rentType": "",
      "bathrooms": 4,
      "garages": 5
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "St. Elizabeth",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gym",
        "icon": "mdi-dumbbell"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "consectetur do reprehenderit elit consequat ut elit aute qui consequat cupidatat labore ea velit nisi exercitation sit fugiat elit culpa Lorem ipsum qui incididunt amet enim Lorem fugiat pariatur cupidatat in reprehenderit enim consectetur non nulla aliqua nostrud ad Lorem reprehenderit dolore dolor ex consequat exercitation deserunt laboris laborum dolore labore eiusmod ullamco ipsum minim minim voluptate consectetur dolor duis",
      "name": "Augusta Green Property"
    },
    "price": 246462,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 19684,
      "bedrooms": 14,
      "price": 561217,
      "community": "Perry Street",
      "rentType": "",
      "bathrooms": 16,
      "garages": 7
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Hanover",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Air Conditioning",
        "icon": "mdi-air-filter"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "reprehenderit exercitation elit sunt adipisicing esse pariatur voluptate deserunt laboris cillum ut ut Lorem ex est laboris officia sunt exercitation cillum consectetur incididunt ad ad tempor irure culpa dolor consequat nostrud nisi laborum aliquip adipisicing culpa consequat nulla laborum cillum excepteur consectetur reprehenderit duis nisi Lorem laborum laborum consectetur eiusmod nostrud esse ad consectetur qui proident aliquip ad minim id",
      "name": "Morrow Kramer Property"
    },
    "price": 409751,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Trelawny",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 13792,
      "bedrooms": 17,
      "price": 770553,
      "community": "Cameron Street",
      "rentType": "",
      "bathrooms": 11,
      "garages": 1
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Park Near By",
        "icon": "mdi-nature-people"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "velit occaecat sunt anim tempor enim laborum sunt cillum veniam duis ad non eiusmod do ut ea dolore nisi voluptate officia elit reprehenderit aliquip ad excepteur cupidatat magna eu id enim id veniam cillum sint culpa nostrud id dolor aliquip incididunt id aute ipsum exercitation sint ea culpa ea laborum cupidatat ipsum laborum velit exercitation in aute consequat nulla ut",
      "name": "Ellison Craig Property"
    },
    "price": 396134,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Clarendon",
      "propertyType": "Factory",
      "propertyFor": "Sale",
      "size": 15613,
      "bedrooms": 15,
      "price": 125655,
      "community": "Obrien Street",
      "rentType": "",
      "bathrooms": 20,
      "garages": 5
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Warehouse"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "24 Hour Security",
        "icon": "mdi-cctv"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "in id velit amet esse minim in non ex qui elit minim aliquip commodo deserunt non fugiat magna ipsum eu qui aliqua ea occaecat ad et amet proident quis reprehenderit aliqua duis excepteur nulla mollit eu eu excepteur aliqua non esse aliquip cupidatat non ea sit reprehenderit aute magna duis occaecat tempor deserunt adipisicing sunt enim nisi eu adipisicing irure",
      "name": "Ramos May Property"
    },
    "price": 175999,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 15567,
      "bedrooms": 8,
      "price": 214517,
      "community": "Livingston Street",
      "rentType": "",
      "bathrooms": 2,
      "garages": 2
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "St. Elizabeth",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Movie Theater Near By",
        "icon": "mdi-theater"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "dolore ea veniam velit labore labore sint in ut eu commodo veniam et anim est adipisicing officia aliquip ea proident aliquip aliqua ea voluptate voluptate amet ea et fugiat tempor sunt minim enim elit in est aute ex incididunt excepteur in et nostrud duis incididunt sint aute ex amet cillum labore aliquip dolore ut pariatur ipsum laborum tempor elit fugiat",
      "name": "Patrica Burnett Property"
    },
    "price": 422899,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Andrew",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 6982,
      "bedrooms": 12,
      "price": 285810,
      "community": "Benson Street",
      "rentType": "",
      "bathrooms": 3,
      "garages": 11
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. Elizabeth",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Tennis Court",
        "icon": "mdi-tennis"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "ut deserunt ex ut voluptate culpa Lorem veniam Lorem pariatur adipisicing exercitation pariatur non laborum voluptate do quis ullamco mollit deserunt amet culpa pariatur deserunt occaecat veniam sint proident et officia sunt consectetur irure cillum eiusmod anim et fugiat incididunt est fugiat amet qui aute sunt laborum mollit non ipsum aute est consequat mollit anim excepteur labore amet proident culpa",
      "name": "Carey Levy Property"
    },
    "price": 490029,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 18701,
      "bedrooms": 20,
      "price": 725925,
      "community": "Macdonald Street",
      "rentType": "",
      "bathrooms": 7,
      "garages": 5
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gym",
        "icon": "mdi-dumbbell"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "commodo qui minim ipsum laboris tempor ipsum pariatur id tempor sunt amet reprehenderit occaecat in est Lorem amet quis non consectetur ea laboris in adipisicing voluptate qui mollit dolor occaecat sint laboris veniam fugiat officia est ex reprehenderit pariatur voluptate anim officia consequat proident quis aliquip ipsum officia aute enim culpa amet id labore fugiat culpa sunt consequat est est",
      "name": "Nancy Underwood Property"
    },
    "price": 288468,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 12851,
      "bedrooms": 8,
      "price": 81730,
      "community": "Higgins Street",
      "rentType": "",
      "bathrooms": 17,
      "garages": 7
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "24 Hour Security",
        "icon": "mdi-cctv"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "commodo dolor ut velit velit ipsum ea elit tempor culpa laborum pariatur qui elit est nulla qui nostrud sit minim velit proident sunt do exercitation culpa do sint reprehenderit do aute sint sunt qui id ut nulla laborum dolor duis Lorem Lorem elit enim ea officia culpa ad consequat ad esse culpa dolore aliqua ex ex pariatur sunt aliquip dolore",
      "name": "Tiffany Mann Property"
    },
    "price": 124928,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Catherine",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 16800,
      "bedrooms": 2,
      "price": 472686,
      "community": "Sampson Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 7
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Cable TV ",
        "icon": "mdi-television"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "adipisicing exercitation velit id ipsum aliquip velit duis excepteur dolore et consequat amet ex aute aliqua dolore do culpa id non voluptate elit commodo aute velit elit velit sit laboris qui cupidatat magna dolore ex labore in adipisicing ullamco velit qui cupidatat irure minim est veniam ipsum excepteur velit ea cillum esse esse ex anim veniam ullamco sit mollit nulla",
      "name": "Vivian George Property"
    },
    "price": 539143,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Ann",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 14558,
      "bedrooms": 17,
      "price": 497556,
      "community": "Guerrero Street",
      "rentType": "",
      "bathrooms": 10,
      "garages": 13
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "St. Thomas",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Hospital Near By",
        "icon": "mdi-hospital-building"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "aute minim ut deserunt Lorem sit elit Lorem non ex commodo aliquip nostrud dolore eiusmod laboris et ipsum anim eu in reprehenderit est magna excepteur occaecat do sit sint minim veniam amet irure tempor duis fugiat exercitation voluptate magna tempor pariatur cupidatat Lorem ex esse aliquip fugiat fugiat occaecat exercitation id proident in consectetur aute incididunt ad duis ipsum qui",
      "name": "Hooper Boone Property"
    },
    "price": 547095,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Trelawny",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 16543,
      "bedrooms": 12,
      "price": 549155,
      "community": "Hawkins Street",
      "rentType": "",
      "bathrooms": 5,
      "garages": 3
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Air Conditioning",
        "icon": "mdi-air-filter"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "labore ut officia dolore consequat excepteur labore ad dolore veniam fugiat Lorem id ea consequat magna do minim duis exercitation do ad incididunt laboris eiusmod magna aliqua cupidatat ipsum minim adipisicing cillum laboris fugiat quis duis irure irure nisi commodo amet sit esse mollit consequat tempor sunt dolore nostrud amet mollit officia non pariatur nisi commodo duis officia sit cupidatat",
      "name": "Clara Leblanc Property"
    },
    "price": 667009,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 17492,
      "bedrooms": 13,
      "price": 671528,
      "community": "Gilliam Street",
      "rentType": "",
      "bathrooms": 20,
      "garages": 11
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Supermarket Near By",
        "icon": "mdi-shopping"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "deserunt et commodo occaecat reprehenderit velit pariatur irure aliquip irure in sit deserunt laborum excepteur qui labore id cillum nisi consectetur consectetur sit ipsum exercitation in deserunt irure cupidatat tempor minim sit ullamco consequat do consequat cupidatat eu dolor esse eu incididunt incididunt culpa minim ut deserunt deserunt dolore veniam irure ex velit voluptate occaecat anim exercitation culpa incididunt eiusmod",
      "name": "Glenda Ramirez Property"
    },
    "price": 573268,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 9743,
      "bedrooms": 16,
      "price": 481623,
      "community": "Wade Street",
      "rentType": "",
      "bathrooms": 6,
      "garages": 18
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "St. Thomas",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gated Community",
        "icon": "mdi-security"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "duis do esse eiusmod voluptate nulla nulla culpa enim ut proident eiusmod fugiat deserunt nisi occaecat aliqua deserunt est duis minim cupidatat fugiat et veniam eiusmod proident ut consectetur mollit in aliquip cillum cillum dolor dolore Lorem ipsum fugiat est est cupidatat aliqua sunt ut eu duis sit laboris minim eu ad ut consequat ea quis commodo reprehenderit enim consequat",
      "name": "Vazquez Stevens Property"
    },
    "price": 422209,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 18581,
      "bedrooms": 18,
      "price": 96645,
      "community": "Francis Street",
      "rentType": "",
      "bathrooms": 17,
      "garages": 19
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Grilled",
        "icon": "mdi-shield-home"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "commodo incididunt laboris cillum ipsum ipsum nostrud enim est esse consequat aliqua sit cupidatat irure reprehenderit Lorem incididunt ipsum sint enim nulla ut ad dolore esse esse exercitation labore esse elit laboris pariatur officia proident cupidatat commodo velit adipisicing ipsum non enim sint eu nulla veniam nostrud nulla in dolor ea nostrud laborum tempor ad consectetur cupidatat dolore pariatur quis",
      "name": "Carole Jefferson Property"
    },
    "price": 234879,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Factory",
      "propertyFor": "Sale",
      "size": 4469,
      "bedrooms": 7,
      "price": 506063,
      "community": "Bonner Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 2
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "House"
  },
  {
    "parish": "Manchester",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Heater",
        "icon": "mdi-thermometer-high"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "non Lorem qui ad et laborum tempor ipsum fugiat et pariatur ipsum dolore minim fugiat duis culpa occaecat cupidatat eiusmod fugiat nulla aute quis laboris exercitation deserunt do laboris anim cupidatat dolor duis labore culpa duis nostrud sunt aliquip ipsum sint eu proident elit excepteur nostrud veniam tempor ullamco exercitation do dolore minim magna nulla et ut sit occaecat aliqua",
      "name": "Rogers Harrell Property"
    },
    "price": 178697,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 19071,
      "bedrooms": 3,
      "price": 541468,
      "community": "Fox Street",
      "rentType": "",
      "bathrooms": 16,
      "garages": 13
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "St. Ann",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gated Community",
        "icon": "mdi-security"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "sit dolor Lorem ullamco consectetur proident ea nisi consectetur officia exercitation commodo occaecat nulla esse sint aliquip cupidatat ad dolor irure consequat fugiat velit labore ullamco ea incididunt consectetur consectetur est reprehenderit exercitation duis reprehenderit et id sint voluptate sit irure elit excepteur duis adipisicing in sit ullamco non id quis anim cupidatat ipsum consequat amet voluptate minim nostrud culpa",
      "name": "Katy Bowman Property"
    },
    "price": 342846,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Elizabeth",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 3058,
      "bedrooms": 5,
      "price": 154208,
      "community": "Gaines Street",
      "rentType": "",
      "bathrooms": 16,
      "garages": 16
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. Andrew",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Generator",
        "icon": "mdi-flash"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "incididunt labore esse cupidatat est sunt est fugiat ullamco minim eu labore quis adipisicing pariatur laborum duis amet dolore consectetur irure elit aute aute commodo elit exercitation irure commodo amet nisi reprehenderit ullamco duis tempor fugiat ad elit voluptate aute est in excepteur occaecat occaecat labore id exercitation ad adipisicing commodo deserunt id amet aliqua sit sunt aliqua excepteur officia",
      "name": "Deana Collins Property"
    },
    "price": 26847,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Catherine",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 8274,
      "bedrooms": 12,
      "price": 578218,
      "community": "Humphrey Street",
      "rentType": "",
      "bathrooms": 11,
      "garages": 18
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "St. Ann",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Movie Theater Near By",
        "icon": "mdi-theater"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "fugiat aute quis quis fugiat qui sunt duis ullamco excepteur aliquip reprehenderit fugiat mollit laboris voluptate officia aute aliquip ullamco ex tempor duis voluptate aliqua amet ipsum eu commodo enim aliqua eu minim cillum voluptate anim cillum veniam et culpa dolor velit est do fugiat voluptate velit sunt cillum culpa est deserunt anim tempor eu ullamco eiusmod eu duis laborum",
      "name": "Ines Ewing Property"
    },
    "price": 669638,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 9793,
      "bedrooms": 2,
      "price": 331644,
      "community": "Brooks Street",
      "rentType": "",
      "bathrooms": 15,
      "garages": 16
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Supermarket Near By",
        "icon": "mdi-shopping"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "sit in excepteur deserunt sunt amet ullamco ullamco laborum esse nisi ad deserunt adipisicing quis sunt sunt sint excepteur dolor duis amet dolore commodo aliqua aliquip consequat irure voluptate aliqua non Lorem velit veniam minim exercitation sit aliqua proident consectetur non ad culpa tempor duis laboris amet aute velit sunt magna ullamco ex culpa proident irure est irure aliquip in",
      "name": "Sophia Glass Property"
    },
    "price": 374754,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Trelawny",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 4418,
      "bedrooms": 16,
      "price": 331765,
      "community": "Wilkerson Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 12
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Wifi",
        "icon": "mdi-wifi"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "ipsum do nulla nisi dolore occaecat eu voluptate excepteur cupidatat sit proident id elit nisi sit laborum Lorem excepteur magna Lorem tempor nisi dolor sit dolore sit enim labore in consectetur labore ut eu ex consectetur elit deserunt aute sint ea do qui dolore reprehenderit ut sint cillum incididunt et veniam commodo mollit anim excepteur proident proident minim occaecat qui",
      "name": "Olsen Bean Property"
    },
    "price": 642393,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Andrew",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 6552,
      "bedrooms": 16,
      "price": 391671,
      "community": "Harrington Street",
      "rentType": "",
      "bathrooms": 9,
      "garages": 8
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "St. Mary",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Heater",
        "icon": "mdi-thermometer-high"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "aliqua cupidatat sunt esse tempor ad nulla esse et dolor adipisicing exercitation consequat excepteur voluptate ad elit magna excepteur aliqua consectetur adipisicing elit qui id sunt ad excepteur dolor ullamco laborum veniam cillum id nulla anim velit sint sint minim id mollit excepteur ex ullamco nostrud nulla ea nostrud laboris incididunt consequat cupidatat incididunt magna elit fugiat aute anim aute",
      "name": "Ray Kidd Property"
    },
    "price": 665846,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Westmoreland",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 15249,
      "bedrooms": 11,
      "price": 453809,
      "community": "Knox Street",
      "rentType": "",
      "bathrooms": 3,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "St. Ann",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Parking",
        "icon": "mdi-car"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "id consectetur voluptate proident est consequat ullamco id amet aliquip commodo ullamco culpa excepteur adipisicing elit sint irure qui aliqua commodo nostrud Lorem laborum id adipisicing cillum aliquip cupidatat qui occaecat dolore sunt ipsum irure Lorem elit in mollit culpa magna deserunt velit non fugiat excepteur minim laborum eiusmod minim ut id irure commodo velit ea qui adipisicing adipisicing quis",
      "name": "Sawyer Drake Property"
    },
    "price": 411838,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 2412,
      "bedrooms": 17,
      "price": 118937,
      "community": "Barry Street",
      "rentType": "",
      "bathrooms": 7,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
  },
  {
    "parish": "St. Mary",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Air Conditioning",
        "icon": "mdi-air-filter"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "aliquip irure adipisicing laboris elit esse aute ipsum ad est esse aliquip eu ex ut ipsum incididunt ea non irure dolor do nisi minim fugiat anim eiusmod magna adipisicing ut ad tempor culpa laborum eiusmod laborum occaecat enim et duis ut nulla pariatur consectetur laboris nisi consequat proident aute dolor ea do sit anim officia id proident deserunt nisi eiusmod",
      "name": "Jennie Mclean Property"
    },
    "price": 560837,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Clarendon",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 16737,
      "bedrooms": 7,
      "price": 581530,
      "community": "Koch Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 7
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Heater",
        "icon": "mdi-thermometer-high"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "amet cupidatat irure labore ipsum quis qui qui et voluptate exercitation eiusmod aute amet reprehenderit tempor elit veniam proident ipsum minim tempor id minim aliquip voluptate sint tempor nulla deserunt dolor consectetur id pariatur ad magna est non labore minim qui exercitation consectetur in sit ex ullamco laborum eu elit proident dolore aliqua amet incididunt esse velit cupidatat aliquip esse",
      "name": "Christian Stein Property"
    },
    "price": 115281,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Ann",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 12721,
      "bedrooms": 1,
      "price": 231621,
      "community": "Russell Street",
      "rentType": "",
      "bathrooms": 1,
      "garages": 9
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Church Near By",
        "icon": "mdi-church"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "laboris adipisicing eu tempor dolore non consequat labore labore labore voluptate duis ullamco mollit ipsum velit reprehenderit velit cupidatat elit elit minim aliqua commodo nisi ea sit aliquip id elit nostrud commodo exercitation esse pariatur incididunt magna non consequat labore laborum non officia ad consectetur reprehenderit in ex velit irure enim nisi nulla nostrud ad incididunt mollit elit sint laboris",
      "name": "Rosalinda Whitfield Property"
    },
    "price": 337013,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Trelawny",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 10185,
      "bedrooms": 8,
      "price": 161263,
      "community": "Warner Street",
      "rentType": "",
      "bathrooms": 8,
      "garages": 5
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Generator",
        "icon": "mdi-flash"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "non cillum aliquip voluptate ex consectetur commodo velit cillum ex ea id ullamco Lorem et nulla ea aliqua occaecat officia ipsum aliqua ipsum in laboris ullamco ullamco pariatur proident fugiat voluptate irure nisi anim et consectetur labore laborum deserunt occaecat ex non aliqua velit fugiat elit et tempor elit labore non mollit ut non do nulla veniam eiusmod elit irure",
      "name": "Merritt Stokes Property"
    },
    "price": 655164,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 2111,
      "bedrooms": 9,
      "price": 492757,
      "community": "Mercer Street",
      "rentType": "",
      "bathrooms": 3,
      "garages": 17
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "St. Mary",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Smart Home",
        "icon": "mdi-home-assistant"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "consectetur laboris nulla occaecat consequat ad sit anim id deserunt labore eu incididunt dolore culpa nulla elit sit eiusmod eiusmod fugiat eiusmod nulla voluptate sint fugiat pariatur minim consectetur qui consectetur in ipsum duis Lorem cillum sint est ea dolore anim aliqua occaecat ut irure qui ad minim sunt proident culpa exercitation magna pariatur voluptate sint laborum commodo sint excepteur",
      "name": "Serena Munoz Property"
    },
    "price": 782161,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Manchester",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 3882,
      "bedrooms": 14,
      "price": 200310,
      "community": "Santana Street",
      "rentType": "",
      "bathrooms": 4,
      "garages": 11
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Movie Theater Near By",
        "icon": "mdi-theater"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "ad minim eiusmod irure amet pariatur consectetur in in mollit deserunt anim eiusmod qui ex duis proident aute deserunt sit adipisicing aliqua mollit aute laborum elit dolor culpa qui nisi elit anim irure nisi esse do do nulla ipsum cupidatat ipsum nisi tempor laboris sint enim culpa est excepteur Lorem occaecat excepteur culpa aliqua adipisicing excepteur laborum non consectetur enim",
      "name": "Lauri Mayer Property"
    },
    "price": 179082,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 8621,
      "bedrooms": 2,
      "price": 47527,
      "community": "Greer Street",
      "rentType": "",
      "bathrooms": 19,
      "garages": 2
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gated Community",
        "icon": "mdi-security"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "fugiat quis reprehenderit proident Lorem elit ad proident ad quis labore elit eu commodo aliqua veniam eiusmod laborum commodo amet velit nisi do minim elit cillum id minim ut est consequat labore tempor ex minim occaecat anim ullamco commodo incididunt nostrud consequat occaecat adipisicing dolore sint et quis reprehenderit proident amet occaecat nulla eiusmod culpa consequat fugiat laborum fugiat occaecat",
      "name": "Chavez Bradshaw Property"
    },
    "price": 556580,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 12038,
      "bedrooms": 1,
      "price": 289825,
      "community": "Hardy Street",
      "rentType": "",
      "bathrooms": 13,
      "garages": 4
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Warehouse"
  },
  {
    "parish": "St. Elizabeth",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Generator",
        "icon": "mdi-flash"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "eu velit nulla do esse irure deserunt fugiat eu quis qui sit consectetur duis exercitation eiusmod consequat Lorem fugiat reprehenderit anim pariatur labore elit ullamco laboris minim fugiat sint deserunt aliqua ex et incididunt dolor cillum nulla dolore laborum est do exercitation aute laborum cupidatat anim sunt ex labore sint dolore ad adipisicing voluptate Lorem dolor dolor enim exercitation amet",
      "name": "Josie Lancaster Property"
    },
    "price": 117798,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 7934,
      "bedrooms": 12,
      "price": 722656,
      "community": "Ingram Street",
      "rentType": "",
      "bathrooms": 10,
      "garages": 3
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Warehouse"
  },
  {
    "parish": "St. Ann",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Schools Near By",
        "icon": "mdi-school"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "mollit sint duis anim mollit pariatur do ad aute in proident do pariatur do elit deserunt sit do mollit irure elit elit eu proident nisi adipisicing elit velit duis qui mollit id nulla excepteur culpa et dolore veniam fugiat adipisicing fugiat excepteur veniam aliquip sunt esse non velit dolor enim eu consequat sit elit magna nostrud Lorem ex labore est",
      "name": "Kerry Lee Property"
    },
    "price": 375534,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 2513,
      "bedrooms": 20,
      "price": 450587,
      "community": "Hendrix Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 1
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "St. Thomas",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Heater",
        "icon": "mdi-thermometer-high"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "quis incididunt dolore dolor amet commodo labore ipsum quis aute cupidatat ex excepteur amet ipsum anim est qui ipsum veniam incididunt incididunt aliqua consequat ex aliqua nostrud exercitation amet ut reprehenderit ipsum enim magna aliqua exercitation Lorem anim ut quis proident veniam est amet velit est qui occaecat tempor laborum in et non commodo quis exercitation nisi irure non ullamco",
      "name": "Jeannie Conrad Property"
    },
    "price": 126064,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 2221,
      "bedrooms": 3,
      "price": 631030,
      "community": "Mcdonald Street",
      "rentType": "",
      "bathrooms": 6,
      "garages": 1
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "St. Elizabeth",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Park Near By",
        "icon": "mdi-nature-people"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "dolor fugiat eiusmod Lorem Lorem ut incididunt consectetur laboris ad voluptate eiusmod elit pariatur dolor excepteur irure et ad consectetur eiusmod duis dolor adipisicing magna dolore quis nulla ullamco sunt dolor mollit nulla magna aute reprehenderit deserunt elit dolore deserunt minim id voluptate ad adipisicing ea pariatur irure cillum anim tempor et minim elit aliqua nisi eiusmod proident laborum voluptate",
      "name": "Morin Griffith Property"
    },
    "price": 354437,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 16010,
      "bedrooms": 7,
      "price": 783675,
      "community": "Flynn Street",
      "rentType": "",
      "bathrooms": 20,
      "garages": 4
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Wifi",
        "icon": "mdi-wifi"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "sunt in esse est ex ad tempor laborum minim sint tempor sit incididunt anim est occaecat exercitation aliquip ut exercitation consequat labore Lorem et sunt anim cupidatat irure dolore ea mollit sunt duis nostrud consequat sint in aliqua officia ut dolore anim voluptate eu minim do sit non sunt sint in ullamco velit reprehenderit nisi labore id quis sint eu",
      "name": "Bentley Marsh Property"
    },
    "price": 797968,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Ann",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 12217,
      "bedrooms": 11,
      "price": 202217,
      "community": "Hall Street",
      "rentType": "",
      "bathrooms": 11,
      "garages": 5
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Wifi",
        "icon": "mdi-wifi"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "laboris est reprehenderit tempor velit sit eiusmod mollit enim aliqua incididunt et elit aliquip irure exercitation Lorem esse reprehenderit sint minim elit labore amet proident ullamco eiusmod laboris id deserunt esse et est id eiusmod reprehenderit labore consequat Lorem sunt in aliqua ipsum officia Lorem ut aute do culpa mollit nisi excepteur in enim magna quis labore nisi esse magna",
      "name": "Anderson Hartman Property"
    },
    "price": 174375,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Trelawny",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 2923,
      "bedrooms": 16,
      "price": 320467,
      "community": "Curry Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 14
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "St. Ann",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Air Conditioning",
        "icon": "mdi-air-filter"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "cupidatat ut eu labore amet minim ipsum et ad irure laborum et in velit irure commodo esse veniam incididunt non consectetur aliqua ullamco exercitation deserunt cupidatat dolore aliqua amet veniam sint cillum adipisicing commodo elit sint qui nulla ullamco excepteur enim ex sunt labore enim consequat et nostrud ea dolore elit minim dolor deserunt est cillum velit enim do laboris",
      "name": "Tami Lambert Property"
    },
    "price": 179335,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Andrew",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 10945,
      "bedrooms": 3,
      "price": 454460,
      "community": "Fields Street",
      "rentType": "",
      "bathrooms": 19,
      "garages": 1
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gym",
        "icon": "mdi-dumbbell"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "eiusmod amet mollit laborum magna ipsum nulla fugiat nostrud magna ut occaecat sint minim et cillum minim velit laborum commodo irure veniam adipisicing nostrud et tempor consectetur ut Lorem ullamco velit quis aliqua eu irure est pariatur id anim sint sunt sint deserunt Lorem incididunt cillum ex ipsum eiusmod laboris in veniam eiusmod culpa minim do ut minim quis incididunt",
      "name": "Raquel Romero Property"
    },
    "price": 635070,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 15006,
      "bedrooms": 9,
      "price": 491596,
      "community": "Landry Street",
      "rentType": "",
      "bathrooms": 5,
      "garages": 16
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "St. Elizabeth",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Supermarket Near By",
        "icon": "mdi-shopping"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "exercitation eu consequat aliqua voluptate id laboris fugiat excepteur consequat officia consectetur qui proident qui aute minim elit deserunt ad mollit sit nulla nisi ipsum aliquip velit aliqua Lorem Lorem eiusmod do et velit ex cupidatat ut eu nulla do dolore nisi consequat exercitation ipsum ut magna cillum reprehenderit duis dolor irure cillum labore aliqua incididunt deserunt laborum laborum aute",
      "name": "Megan Foley Property"
    },
    "price": 638066,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 6869,
      "bedrooms": 18,
      "price": 398271,
      "community": "Melendez Street",
      "rentType": "",
      "bathrooms": 5,
      "garages": 5
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. James",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Church Near By",
        "icon": "mdi-church"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "labore quis adipisicing ad fugiat ullamco reprehenderit minim eiusmod in ullamco pariatur anim culpa exercitation commodo sunt eiusmod cupidatat proident aute ex sint sint officia ut sit non do eu cupidatat sunt commodo laboris pariatur ea fugiat proident ad duis ea eiusmod labore Lorem cupidatat adipisicing et cupidatat reprehenderit culpa anim laboris anim aliqua excepteur consequat voluptate et excepteur cupidatat",
      "name": "Fields Fernandez Property"
    },
    "price": 549686,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 10423,
      "bedrooms": 13,
      "price": 59930,
      "community": "Mosley Street",
      "rentType": "",
      "bathrooms": 13,
      "garages": 10
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gated Community",
        "icon": "mdi-security"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "id excepteur ullamco consectetur aute eiusmod proident eiusmod occaecat ipsum ullamco et pariatur voluptate laboris nulla incididunt aute exercitation labore Lorem anim qui occaecat dolor Lorem enim anim est do qui deserunt ut labore commodo laborum laborum magna cillum aute sint minim ullamco duis laboris excepteur exercitation reprehenderit Lorem cillum est enim aliqua dolor laboris do tempor et incididunt exercitation",
      "name": "Curtis Rose Property"
    },
    "price": 522511,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Andrew",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 4253,
      "bedrooms": 9,
      "price": 398017,
      "community": "Henry Street",
      "rentType": "",
      "bathrooms": 16,
      "garages": 17
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Park Near By",
        "icon": "mdi-nature-people"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "sint do veniam aute aliqua aliquip aliquip dolore do labore culpa minim do occaecat voluptate ex Lorem duis commodo id ullamco sint aute deserunt consequat nostrud elit non irure exercitation eu pariatur reprehenderit enim mollit laborum enim consectetur adipisicing labore nulla velit amet laboris adipisicing mollit do adipisicing ea velit eiusmod elit laborum ad ea eiusmod duis Lorem laborum ut",
      "name": "David Carter Property"
    },
    "price": 290671,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Manchester",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 19366,
      "bedrooms": 16,
      "price": 476269,
      "community": "Dodson Street",
      "rentType": "",
      "bathrooms": 11,
      "garages": 13
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Swimming Pool",
        "icon": "mdi-pool"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "labore voluptate ea ea esse aliqua occaecat exercitation minim nisi dolor mollit occaecat fugiat in in nulla sit incididunt sit fugiat sunt ullamco culpa veniam sit in ut tempor amet cupidatat sunt commodo incididunt Lorem dolor enim proident ex consequat ullamco et cillum et mollit minim culpa quis proident ex enim aute eu nostrud proident velit ullamco aliquip nisi amet",
      "name": "Vicki Benton Property"
    },
    "price": 81810,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 17790,
      "bedrooms": 19,
      "price": 556579,
      "community": "Holden Street",
      "rentType": "",
      "bathrooms": 13,
      "garages": 13
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "Hanover",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Supermarket Near By",
        "icon": "mdi-shopping"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "amet dolor reprehenderit consectetur nulla proident culpa officia voluptate ex tempor anim officia aute proident consectetur elit cupidatat sint pariatur enim labore ipsum qui do culpa magna voluptate reprehenderit adipisicing est sint sint sit mollit aute cupidatat ea nostrud culpa fugiat laborum qui pariatur reprehenderit occaecat non anim tempor ex aliqua id sit ut ex officia aliquip aliquip in id",
      "name": "Elisabeth Schmidt Property"
    },
    "price": 467684,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Clarendon",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 15380,
      "bedrooms": 20,
      "price": 785372,
      "community": "Mclaughlin Street",
      "rentType": "",
      "bathrooms": 10,
      "garages": 19
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "Hanover",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Schools Near By",
        "icon": "mdi-school"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "consequat ex reprehenderit fugiat nulla ullamco aliqua exercitation deserunt non amet ad pariatur est exercitation et exercitation est consequat aliqua aute eiusmod do velit aliquip est qui elit id tempor nisi nostrud id deserunt in esse adipisicing nulla consectetur eu reprehenderit nostrud tempor occaecat exercitation eiusmod non amet cillum proident cillum id aliquip est aliquip pariatur eiusmod dolore nisi elit",
      "name": "Lee Whitney Property"
    },
    "price": 635733,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 6176,
      "bedrooms": 14,
      "price": 713655,
      "community": "Stanton Street",
      "rentType": "",
      "bathrooms": 7,
      "garages": 19
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Tank",
        "icon": "mdi-water"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "tempor eiusmod esse cupidatat ipsum nulla ex laboris ad velit nulla enim mollit consequat ullamco deserunt velit Lorem laboris voluptate consectetur sint cillum deserunt aliqua ea excepteur cupidatat aliqua commodo in quis quis laboris ipsum aliqua consectetur ipsum ad eu dolore culpa ullamco amet et enim et dolore laboris sunt voluptate consectetur excepteur sit aliquip officia consequat laborum aliqua ad",
      "name": "Marta Blackwell Property"
    },
    "price": 538070,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Catherine",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 4626,
      "bedrooms": 3,
      "price": 772244,
      "community": "Avila Street",
      "rentType": "",
      "bathrooms": 4,
      "garages": 19
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "St. Mary",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Movie Theater Near By",
        "icon": "mdi-theater"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "id commodo minim veniam dolor commodo sint fugiat et sit Lorem ea adipisicing sint deserunt proident qui sint ad mollit nisi nostrud dolore laboris cillum deserunt culpa duis proident officia sit aute eiusmod ex adipisicing excepteur anim aute id ea irure in velit qui elit sint qui magna consequat esse irure fugiat pariatur enim ipsum laborum qui proident nulla eiusmod",
      "name": "Myers Griffin Property"
    },
    "price": 476892,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 10509,
      "bedrooms": 2,
      "price": 614134,
      "community": "Pace Street",
      "rentType": "",
      "bathrooms": 10,
      "garages": 8
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "St. James",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Movie Theater Near By",
        "icon": "mdi-theater"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "quis labore dolore deserunt excepteur sint officia culpa commodo duis minim adipisicing non labore in excepteur ullamco id dolore deserunt proident est anim elit id cupidatat laborum officia aliqua et nulla exercitation sit reprehenderit fugiat anim sunt aliqua elit fugiat anim anim tempor exercitation incididunt nisi ex dolore nostrud et deserunt dolor voluptate duis et excepteur dolor nostrud deserunt deserunt",
      "name": "Edna Brock Property"
    },
    "price": 357474,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Andrew",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 7433,
      "bedrooms": 13,
      "price": 158790,
      "community": "Daniel Street",
      "rentType": "",
      "bathrooms": 16,
      "garages": 20
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Warehouse"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Wifi",
        "icon": "mdi-wifi"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "occaecat in consequat aliqua aute sit adipisicing amet excepteur commodo dolore aute qui fugiat duis labore sint cupidatat est occaecat Lorem commodo aute do sint velit aliquip ex do velit minim aute consectetur id ad mollit tempor labore ex mollit duis consectetur occaecat labore ad officia cillum ut Lorem veniam laborum aute occaecat laborum irure consectetur laborum ea sunt nisi",
      "name": "Barbra Morton Property"
    },
    "price": 288896,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Manchester",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 15300,
      "bedrooms": 20,
      "price": 645297,
      "community": "Burt Street",
      "rentType": "",
      "bathrooms": 4,
      "garages": 12
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "Manchester",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Furnished",
        "icon": "mdi-sofa"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "consectetur consectetur eu incididunt quis aliquip officia incididunt irure dolor cupidatat occaecat commodo pariatur nisi id nostrud duis est laborum dolore aute labore deserunt nisi irure laborum veniam magna commodo est labore laboris ad ex dolore sit dolore adipisicing et non aliqua labore Lorem exercitation eiusmod est aute labore nulla ipsum anim veniam exercitation mollit eu commodo nulla minim ad",
      "name": "Amber Case Property"
    },
    "price": 246430,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 14062,
      "bedrooms": 18,
      "price": 532020,
      "community": "Mccarty Street",
      "rentType": "",
      "bathrooms": 17,
      "garages": 9
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "St. Andrew",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Furnished",
        "icon": "mdi-sofa"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "sunt nulla ex sunt elit deserunt ad deserunt aute et proident ex ea ea et minim consequat culpa ipsum tempor quis ullamco anim occaecat cupidatat adipisicing do nisi et tempor amet laborum ea officia adipisicing qui irure ea dolore exercitation laborum pariatur mollit eiusmod pariatur aliquip minim cupidatat sunt quis mollit sit ea fugiat Lorem velit voluptate do velit sint",
      "name": "Hill Brennan Property"
    },
    "price": 432941,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Manchester",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 7507,
      "bedrooms": 13,
      "price": 317008,
      "community": "Aguirre Street",
      "rentType": "",
      "bathrooms": 19,
      "garages": 10
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "St. Mary",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gym",
        "icon": "mdi-dumbbell"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "reprehenderit pariatur commodo et ad excepteur commodo labore aliquip deserunt mollit nisi consectetur officia Lorem est elit duis culpa non laboris cupidatat ex et sint ullamco qui quis laboris irure esse proident sint Lorem proident est officia in aliquip in est velit proident sit aliquip velit aliquip exercitation minim duis magna proident quis ut laborum irure dolore aliqua in elit",
      "name": "Potts Barnett Property"
    },
    "price": 24118,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Ann",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 4486,
      "bedrooms": 12,
      "price": 639374,
      "community": "Townsend Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 19
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Schools Near By",
        "icon": "mdi-school"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "proident nulla nisi est nostrud labore commodo sint veniam anim cillum non esse deserunt cupidatat laboris laborum sit consequat adipisicing laborum sit laboris et aliqua consectetur consectetur proident amet aliqua culpa fugiat esse exercitation esse non culpa exercitation quis velit nisi amet nisi ad proident qui Lorem laboris consequat culpa et veniam et quis cillum enim nulla quis magna elit",
      "name": "Davidson Michael Property"
    },
    "price": 358621,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Ann",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 15442,
      "bedrooms": 5,
      "price": 574813,
      "community": "Robinson Street",
      "rentType": "",
      "bathrooms": 20,
      "garages": 9
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Tennis Court",
        "icon": "mdi-tennis"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "ullamco ut proident ipsum ea amet nostrud commodo exercitation qui consectetur officia culpa id sit dolor dolore ullamco incididunt enim id pariatur incididunt ad mollit reprehenderit esse laborum laborum et esse sit do mollit et consectetur laborum magna do ea ullamco fugiat magna culpa aute laboris aliqua nostrud laborum voluptate voluptate fugiat qui occaecat amet incididunt ex dolore pariatur enim",
      "name": "Kirkland York Property"
    },
    "price": 473877,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "Factory",
      "propertyFor": "Sale",
      "size": 14412,
      "bedrooms": 7,
      "price": 262690,
      "community": "Dalton Street",
      "rentType": "",
      "bathrooms": 18,
      "garages": 6
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "St. Ann",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Wifi",
        "icon": "mdi-wifi"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "nostrud commodo pariatur est ad ex duis commodo et voluptate cupidatat minim laborum anim enim non non dolor ullamco consequat commodo fugiat labore enim ad pariatur ut ad velit occaecat aliqua ea aliqua ut ea deserunt minim est do ea sint laboris exercitation ut aliqua qui deserunt nostrud Lorem enim dolore minim voluptate irure deserunt irure dolor ex amet laboris",
      "name": "Pearlie Martin Property"
    },
    "price": 164914,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 2972,
      "bedrooms": 12,
      "price": 285671,
      "community": "Dillon Street",
      "rentType": "",
      "bathrooms": 16,
      "garages": 14
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Cable TV ",
        "icon": "mdi-television"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "enim ullamco proident ut laborum qui qui ad ut mollit do aliquip tempor qui officia quis in culpa qui nulla consequat proident dolore ut voluptate voluptate eiusmod quis ea duis occaecat eu enim cupidatat velit consequat et deserunt aute ad sint dolore ipsum mollit eiusmod pariatur eu consequat culpa elit fugiat aute ad irure nulla sit sit et labore eu",
      "name": "Matilda Hester Property"
    },
    "price": 41901,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 5240,
      "bedrooms": 5,
      "price": 333302,
      "community": "Alvarado Street",
      "rentType": "",
      "bathrooms": 11,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Warehouse"
  },
  {
    "parish": "St. Ann",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Schools Near By",
        "icon": "mdi-school"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "proident voluptate veniam et fugiat nisi deserunt velit do labore esse enim commodo qui anim ad ea ex dolor duis aliqua ad qui sit proident proident nostrud eu enim deserunt reprehenderit eu dolor irure nostrud exercitation duis qui duis magna irure velit commodo incididunt Lorem non esse proident aliquip anim ex minim ut ea esse aute est ut non tempor",
      "name": "Dorothy Myers Property"
    },
    "price": 325897,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Catherine",
      "propertyType": "Factory",
      "propertyFor": "Sale",
      "size": 18107,
      "bedrooms": 7,
      "price": 68157,
      "community": "Nichols Street",
      "rentType": "",
      "bathrooms": 5,
      "garages": 18
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "Westmoreland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Basketball Court",
        "icon": "mdi-basketball"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "occaecat ex aliqua cupidatat anim ad eu officia fugiat occaecat proident id consequat cupidatat elit qui fugiat duis anim ex nulla Lorem do id duis dolore adipisicing laboris qui aliqua proident aliquip sit laborum sint cupidatat velit pariatur consectetur duis incididunt deserunt in aute aliqua enim do proident ut labore Lorem adipisicing exercitation excepteur culpa deserunt enim pariatur et fugiat",
      "name": "Joan Byers Property"
    },
    "price": 188674,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Clarendon",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 19980,
      "bedrooms": 9,
      "price": 786217,
      "community": "Langley Street",
      "rentType": "",
      "bathrooms": 19,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "St. Elizabeth",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Supermarket Near By",
        "icon": "mdi-shopping"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "esse esse esse consectetur ex veniam ullamco est mollit aliqua amet excepteur enim est occaecat aute dolore nisi sunt consectetur et eu qui eiusmod enim aute aute incididunt mollit pariatur qui veniam deserunt labore ut ipsum occaecat ex voluptate et in nisi minim ullamco aute labore qui irure duis enim nisi ea ad adipisicing Lorem sunt est anim est veniam",
      "name": "Lopez Nash Property"
    },
    "price": 91696,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 10103,
      "bedrooms": 14,
      "price": 33555,
      "community": "Dyer Street",
      "rentType": "",
      "bathrooms": 3,
      "garages": 14
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "Westmoreland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Cable TV ",
        "icon": "mdi-television"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "officia esse nulla fugiat consequat pariatur pariatur cupidatat laboris velit velit ea irure ipsum laborum ea officia velit anim laborum in do consectetur ad dolor proident sit occaecat officia pariatur elit quis consequat reprehenderit irure esse quis magna pariatur amet commodo sunt ea voluptate consequat ut laboris mollit in est eu do esse aute velit dolore enim pariatur in laboris",
      "name": "Tonia Cote Property"
    },
    "price": 95280,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 14627,
      "bedrooms": 20,
      "price": 63273,
      "community": "Young Street",
      "rentType": "",
      "bathrooms": 13,
      "garages": 13
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Manchester",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Heater",
        "icon": "mdi-thermometer-high"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "incididunt mollit enim id in commodo eiusmod id nostrud sint duis commodo do id adipisicing nostrud sint amet duis in et non cillum veniam aute amet anim est mollit laborum ea minim aute voluptate proident nulla culpa nulla non sunt officia sint ipsum magna eu do ut est fugiat officia commodo incididunt dolor nulla est commodo mollit magna magna in",
      "name": "Alfreda Webb Property"
    },
    "price": 430539,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Manchester",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 10524,
      "bedrooms": 19,
      "price": 415254,
      "community": "Padilla Street",
      "rentType": "",
      "bathrooms": 1,
      "garages": 20
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Warehouse"
  },
  {
    "parish": "Hanover",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Family Oriented",
        "icon": "mdi-home-heart"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "nisi cupidatat elit nulla eu aliquip cupidatat incididunt consequat ut qui dolore aliquip sit aute incididunt tempor sunt labore nostrud voluptate aliqua magna veniam non ex laboris eu reprehenderit ea adipisicing est in officia aliquip qui velit irure nisi nostrud amet sunt eiusmod mollit reprehenderit pariatur laborum in ex aliqua duis duis sint aliqua Lorem aute labore mollit adipisicing culpa",
      "name": "Baxter Mccarthy Property"
    },
    "price": 616143,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 3846,
      "bedrooms": 10,
      "price": 773591,
      "community": "Woods Street",
      "rentType": "",
      "bathrooms": 20,
      "garages": 8
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "St. Mary",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Smart Home",
        "icon": "mdi-home-assistant"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "pariatur sit proident occaecat non cillum exercitation sunt in aute laborum sit sunt reprehenderit est cillum ea consectetur exercitation id pariatur elit reprehenderit culpa cupidatat enim quis sunt esse ex mollit nostrud tempor ea veniam fugiat pariatur ut est excepteur id non eiusmod adipisicing pariatur minim dolor aliquip anim ut et dolore ut nisi cupidatat consectetur aliqua dolore officia reprehenderit",
      "name": "Debbie Parsons Property"
    },
    "price": 529192,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "Factory",
      "propertyFor": "Sale",
      "size": 5829,
      "bedrooms": 15,
      "price": 634250,
      "community": "Madden Street",
      "rentType": "",
      "bathrooms": 11,
      "garages": 13
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Supermarket Near By",
        "icon": "mdi-shopping"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "esse esse nostrud esse sint voluptate reprehenderit ipsum sint esse sint aliqua minim sit anim labore cupidatat do exercitation proident adipisicing velit qui cillum mollit eu aliquip ex dolore ipsum ullamco aute eiusmod cillum aliqua aliqua incididunt sunt magna cillum dolor veniam elit tempor magna nulla eiusmod ipsum laboris minim aliqua nisi amet elit elit velit dolore nulla labore officia",
      "name": "Ann Patrick Property"
    },
    "price": 593404,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 13472,
      "bedrooms": 6,
      "price": 142795,
      "community": "Swanson Street",
      "rentType": "",
      "bathrooms": 11,
      "garages": 5
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "House"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Basketball Court",
        "icon": "mdi-basketball"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "incididunt qui aliquip ullamco cupidatat mollit occaecat ullamco consequat in Lorem et consectetur adipisicing ipsum qui id sit tempor elit aliqua magna minim cillum proident exercitation officia id id aliqua do culpa minim id laborum veniam velit velit id cillum Lorem incididunt velit aliqua nisi exercitation aliquip aliqua nostrud velit ex exercitation officia dolor magna consequat laborum anim sint id",
      "name": "Duncan Poole Property"
    },
    "price": 501831,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 13734,
      "bedrooms": 10,
      "price": 541247,
      "community": "Quinn Street",
      "rentType": "",
      "bathrooms": 7,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "House"
  },
  {
    "parish": "St. Mary",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Supermarket Near By",
        "icon": "mdi-shopping"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "labore nostrud duis reprehenderit consequat magna mollit qui dolore velit culpa sint incididunt exercitation et qui proident ipsum non amet veniam et Lorem laborum aliqua elit do Lorem dolor non elit consequat minim officia consequat adipisicing cillum minim duis laborum exercitation officia adipisicing esse adipisicing labore excepteur fugiat fugiat reprehenderit fugiat culpa veniam exercitation ex adipisicing fugiat laborum ut dolor",
      "name": "Pennington Roach Property"
    },
    "price": 444503,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Catherine",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 5987,
      "bedrooms": 19,
      "price": 462802,
      "community": "Calhoun Street",
      "rentType": "",
      "bathrooms": 8,
      "garages": 17
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Supermarket Near By",
        "icon": "mdi-shopping"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "est ex ut tempor id ut aliquip qui amet ipsum amet ut do ex esse voluptate occaecat occaecat sunt aliquip velit magna cillum ipsum irure adipisicing sint tempor anim nulla dolore commodo exercitation est nisi fugiat laboris ullamco cillum sit commodo aliqua eu mollit id aliqua fugiat nulla occaecat nisi irure commodo consectetur adipisicing tempor esse sit labore dolore dolore",
      "name": "England Avery Property"
    },
    "price": 682882,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Ann",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 2320,
      "bedrooms": 10,
      "price": 468516,
      "community": "Wright Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 14
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Warehouse"
  },
  {
    "parish": "Westmoreland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Tank",
        "icon": "mdi-water"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "proident quis mollit deserunt ea eu enim quis non sit occaecat enim cillum esse occaecat minim eu aliqua amet quis mollit voluptate elit amet consectetur in commodo nisi do eu reprehenderit ut cupidatat ea nostrud occaecat anim duis amet ipsum Lorem sint ullamco pariatur do cillum id in excepteur amet aute officia fugiat nisi reprehenderit anim pariatur anim velit non",
      "name": "Josefa Short Property"
    },
    "price": 398107,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 8907,
      "bedrooms": 13,
      "price": 168696,
      "community": "Osborne Street",
      "rentType": "",
      "bathrooms": 16,
      "garages": 20
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gym",
        "icon": "mdi-dumbbell"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "pariatur aliqua anim proident incididunt culpa id velit incididunt fugiat pariatur quis occaecat eiusmod amet laboris laborum reprehenderit duis labore consectetur ea dolore Lorem irure nostrud eu cillum fugiat anim do fugiat sunt officia duis laboris ut et nulla mollit tempor ea incididunt cupidatat qui labore officia est nisi do veniam cupidatat elit ipsum ut ea reprehenderit ut labore sunt",
      "name": "Addie Wyatt Property"
    },
    "price": 371370,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Catherine",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 8155,
      "bedrooms": 11,
      "price": 401155,
      "community": "Tanner Street",
      "rentType": "",
      "bathrooms": 4,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Hospital Near By",
        "icon": "mdi-hospital-building"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "irure in aliqua veniam voluptate elit culpa est adipisicing esse quis et est reprehenderit est non pariatur amet nostrud officia est nisi esse veniam laboris ex culpa elit quis ut veniam dolore ad laboris anim incididunt commodo veniam irure proident qui dolor nisi et dolor ex eu culpa non eu incididunt mollit Lorem magna esse et mollit ut ex consequat",
      "name": "Morgan Hampton Property"
    },
    "price": 314551,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Ann",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 18372,
      "bedrooms": 14,
      "price": 270806,
      "community": "Bartlett Street",
      "rentType": "",
      "bathrooms": 19,
      "garages": 12
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Family Oriented",
        "icon": "mdi-home-heart"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "proident irure incididunt aute et sint voluptate sint minim sint consequat laborum do esse sint sit laborum minim elit id id magna quis reprehenderit quis reprehenderit exercitation deserunt adipisicing non occaecat consequat sunt aliqua enim deserunt Lorem aliqua consectetur nisi aliquip veniam duis non aliquip eiusmod veniam incididunt amet voluptate non exercitation enim commodo magna laboris deserunt amet ipsum ipsum",
      "name": "Poole Davidson Property"
    },
    "price": 226089,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 7608,
      "bedrooms": 16,
      "price": 579892,
      "community": "Rivas Street",
      "rentType": "",
      "bathrooms": 15,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "St. Ann",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Basketball Court",
        "icon": "mdi-basketball"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "excepteur mollit commodo elit nisi quis Lorem eu culpa Lorem laboris in consectetur nulla ut veniam veniam amet Lorem cillum sit esse veniam ullamco ipsum aliquip mollit velit amet ullamco id aliqua culpa nisi qui ullamco aliqua ut nulla exercitation velit nostrud deserunt quis elit duis nulla in laboris et officia ipsum Lorem ea adipisicing id mollit excepteur irure duis",
      "name": "Jerry Fitzgerald Property"
    },
    "price": 402114,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 3270,
      "bedrooms": 19,
      "price": 327354,
      "community": "Hale Street",
      "rentType": "",
      "bathrooms": 19,
      "garages": 4
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "St. Andrew",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Family Oriented",
        "icon": "mdi-home-heart"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "pariatur eu excepteur nisi commodo eu ad sint anim nostrud labore minim est proident do do minim fugiat et culpa ipsum non ipsum nisi non nisi non cupidatat anim ex magna nisi labore cillum nostrud nisi quis qui nulla voluptate deserunt cupidatat ad sit laboris officia ea fugiat do non id ut esse reprehenderit id do proident consequat occaecat laboris",
      "name": "Robertson Price Property"
    },
    "price": 737845,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Factory",
      "propertyFor": "Sale",
      "size": 4978,
      "bedrooms": 9,
      "price": 234261,
      "community": "Sellers Street",
      "rentType": "",
      "bathrooms": 17,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "Manchester",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "24 Hour Security",
        "icon": "mdi-cctv"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "incididunt amet nostrud consectetur ea excepteur sunt deserunt aliqua pariatur mollit ex ut aliquip eu nisi sit laborum in et sint exercitation amet nisi occaecat pariatur quis mollit ex Lorem deserunt tempor exercitation do ea est cupidatat pariatur commodo magna commodo anim et ea cillum ex ut enim eiusmod magna deserunt id velit ad anim anim magna ullamco anim dolor",
      "name": "Leta Hancock Property"
    },
    "price": 254637,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 7368,
      "bedrooms": 7,
      "price": 386314,
      "community": "Torres Street",
      "rentType": "",
      "bathrooms": 5,
      "garages": 8
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. Mary",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Basketball Court",
        "icon": "mdi-basketball"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "dolore proident reprehenderit commodo enim esse nisi commodo ea consequat officia pariatur consectetur occaecat ut occaecat sunt veniam minim occaecat sint in magna sint ex proident dolore ad proident ullamco sit fugiat exercitation amet ea nulla consectetur amet enim enim velit pariatur et quis fugiat adipisicing eu proident nostrud non velit dolore ea proident cillum ex fugiat exercitation in elit",
      "name": "Pam Sloan Property"
    },
    "price": 610996,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 9994,
      "bedrooms": 8,
      "price": 698768,
      "community": "Mccormick Street",
      "rentType": "",
      "bathrooms": 10,
      "garages": 11
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Church Near By",
        "icon": "mdi-church"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "dolore aliqua consectetur deserunt enim fugiat adipisicing sunt laboris non amet in commodo Lorem ipsum est Lorem veniam veniam sit deserunt aliqua enim anim mollit sunt ea dolor anim mollit dolore qui duis eu et anim ipsum nostrud adipisicing sit enim amet reprehenderit amet sit sunt qui consectetur irure excepteur sunt non excepteur occaecat veniam laboris mollit pariatur fugiat veniam",
      "name": "Guzman Cross Property"
    },
    "price": 745601,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 15514,
      "bedrooms": 16,
      "price": 540820,
      "community": "Richard Street",
      "rentType": "",
      "bathrooms": 18,
      "garages": 2
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. Elizabeth",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Swimming Pool",
        "icon": "mdi-pool"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "sit nostrud enim mollit cupidatat cillum aliquip fugiat incididunt laborum do cillum velit cillum eiusmod elit enim ea in ea et aliqua ad amet cillum sit culpa cupidatat ad consequat dolore eu Lorem sint ea duis aute minim reprehenderit labore reprehenderit do Lorem labore duis officia occaecat irure sit cupidatat exercitation sit eiusmod quis ipsum incididunt dolor exercitation velit dolore",
      "name": "Leanna Mays Property"
    },
    "price": 623038,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 8200,
      "bedrooms": 20,
      "price": 506818,
      "community": "Wynn Street",
      "rentType": "",
      "bathrooms": 11,
      "garages": 11
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "House"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Furnished",
        "icon": "mdi-sofa"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "ipsum non eu tempor consectetur incididunt minim ullamco excepteur eiusmod commodo mollit sunt non eiusmod ad et fugiat voluptate est non aliqua ullamco sit consequat dolore ea excepteur nostrud labore duis exercitation ad non nostrud Lorem proident cupidatat officia velit eu mollit ea commodo incididunt sit deserunt laboris adipisicing culpa officia in labore esse reprehenderit proident tempor fugiat magna sint",
      "name": "Sears Andrews Property"
    },
    "price": 319533,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Catherine",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 3144,
      "bedrooms": 2,
      "price": 22670,
      "community": "English Street",
      "rentType": "",
      "bathrooms": 8,
      "garages": 8
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Warehouse"
  },
  {
    "parish": "Westmoreland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gated Community",
        "icon": "mdi-security"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "nostrud non fugiat excepteur sit voluptate esse exercitation minim ullamco dolor ullamco veniam occaecat aliquip sunt cillum mollit aliquip nisi ullamco reprehenderit ut elit commodo laboris elit exercitation consectetur et sit veniam aliquip culpa laboris nisi nostrud commodo et nostrud eu exercitation proident in in commodo dolor velit cupidatat minim excepteur laborum eiusmod dolor reprehenderit cillum minim eu reprehenderit veniam",
      "name": "Gray Richardson Property"
    },
    "price": 49183,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 18454,
      "bedrooms": 5,
      "price": 448776,
      "community": "Solomon Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 8
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Warehouse"
  },
  {
    "parish": "St. Andrew",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Supermarket Near By",
        "icon": "mdi-shopping"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "irure eu irure enim fugiat pariatur adipisicing officia excepteur ad dolor elit voluptate cupidatat excepteur id eu nostrud ipsum aute incididunt nostrud excepteur quis fugiat consectetur duis pariatur nisi reprehenderit amet tempor sunt velit aute et occaecat sint ad irure do tempor aute commodo duis magna eu eu voluptate culpa sint ipsum in laboris veniam aliqua duis elit in minim",
      "name": "Tamra Hess Property"
    },
    "price": 149004,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Trelawny",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 14358,
      "bedrooms": 9,
      "price": 364562,
      "community": "Olson Street",
      "rentType": "",
      "bathrooms": 10,
      "garages": 19
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "Westmoreland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Furnished",
        "icon": "mdi-sofa"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "minim velit cupidatat excepteur quis et laborum laboris proident fugiat consectetur do adipisicing est enim commodo id labore dolor culpa Lorem cupidatat proident ipsum minim laborum qui ad aliquip exercitation in quis velit do eu irure Lorem nisi pariatur tempor laborum proident est labore quis eu et ad exercitation sit nostrud aute adipisicing eiusmod esse adipisicing fugiat non tempor nulla",
      "name": "Olive Brown Property"
    },
    "price": 703277,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Manchester",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 14269,
      "bedrooms": 2,
      "price": 350089,
      "community": "Jackson Street",
      "rentType": "",
      "bathrooms": 8,
      "garages": 20
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Park Near By",
        "icon": "mdi-nature-people"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "ea consequat Lorem id aliqua id in veniam do incididunt et non consectetur ullamco reprehenderit pariatur consequat laboris aliqua ad consequat Lorem veniam cupidatat dolor laborum dolore excepteur quis cillum occaecat est deserunt ad sunt incididunt reprehenderit excepteur deserunt voluptate sint anim esse pariatur reprehenderit consectetur consectetur non proident nostrud pariatur cillum occaecat nisi reprehenderit sunt occaecat ex eiusmod Lorem",
      "name": "Fischer Mccoy Property"
    },
    "price": 605134,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Elizabeth",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 15716,
      "bedrooms": 16,
      "price": 717487,
      "community": "Kline Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 4
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Park Near By",
        "icon": "mdi-nature-people"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "elit esse veniam deserunt adipisicing cillum eiusmod officia consectetur veniam ut eu voluptate commodo irure adipisicing dolor mollit consectetur aute labore irure eiusmod culpa anim anim minim ex veniam labore cillum ea pariatur sit laboris aute culpa velit magna id do minim consequat sint ea in laboris dolor tempor nulla elit sunt id reprehenderit sunt incididunt exercitation magna adipisicing occaecat",
      "name": "George Gallegos Property"
    },
    "price": 291396,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 7730,
      "bedrooms": 9,
      "price": 533890,
      "community": "Cantu Street",
      "rentType": "",
      "bathrooms": 2,
      "garages": 7
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Family Oriented",
        "icon": "mdi-home-heart"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "tempor ut enim et sit amet incididunt nostrud incididunt laboris velit ut sit consectetur aute ad ipsum officia aute nostrud amet veniam labore incididunt tempor ea do nulla ullamco ullamco consectetur aliqua exercitation irure minim amet ut eiusmod ut tempor officia in nisi sint magna in ex elit ex pariatur labore proident amet commodo deserunt et velit eiusmod officia dolore",
      "name": "Christi Beasley Property"
    },
    "price": 56811,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 5664,
      "bedrooms": 7,
      "price": 354270,
      "community": "Scott Street",
      "rentType": "",
      "bathrooms": 18,
      "garages": 3
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "House"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Movie Theater Near By",
        "icon": "mdi-theater"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "aliqua ad enim Lorem id nostrud enim ex mollit laboris cillum quis velit ipsum sunt nostrud esse sint anim culpa fugiat minim adipisicing consequat nostrud cupidatat laborum id voluptate sint proident elit incididunt reprehenderit irure sunt tempor dolore Lorem culpa velit velit in culpa quis nisi est ullamco nostrud in irure nisi id duis fugiat aute cillum voluptate aliquip id",
      "name": "Sofia Rhodes Property"
    },
    "price": 785419,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Ann",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 17363,
      "bedrooms": 15,
      "price": 630012,
      "community": "Lawson Street",
      "rentType": "",
      "bathrooms": 20,
      "garages": 20
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "St. James",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gated Community",
        "icon": "mdi-security"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "minim adipisicing commodo occaecat sunt deserunt reprehenderit tempor sunt aute pariatur amet consequat reprehenderit nostrud eu nulla adipisicing reprehenderit occaecat eu duis Lorem veniam nulla enim minim minim excepteur magna cillum officia magna duis commodo sit ipsum ad nulla ipsum ullamco cupidatat fugiat proident ipsum nulla nostrud id qui exercitation sit ullamco quis Lorem do Lorem fugiat enim Lorem laborum",
      "name": "Gilda James Property"
    },
    "price": 538300,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Westmoreland",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 10836,
      "bedrooms": 1,
      "price": 732583,
      "community": "Buckner Street",
      "rentType": "",
      "bathrooms": 18,
      "garages": 13
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "St. Mary",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Generator",
        "icon": "mdi-flash"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "ea do ex aliquip sunt excepteur elit cupidatat cillum enim esse nisi sit irure pariatur occaecat qui dolor mollit id proident qui irure laborum labore nulla amet duis qui ut eiusmod aliqua commodo anim ut tempor dolore enim reprehenderit anim consectetur eiusmod dolore veniam in pariatur cillum in et pariatur tempor dolor ad aliqua amet id anim ipsum sint excepteur",
      "name": "Hickman Walker Property"
    },
    "price": 581234,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Factory",
      "propertyFor": "Sale",
      "size": 4351,
      "bedrooms": 19,
      "price": 412341,
      "community": "Lynn Street",
      "rentType": "",
      "bathrooms": 13,
      "garages": 18
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. Mary",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Movie Theater Near By",
        "icon": "mdi-theater"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "nulla commodo consequat cupidatat fugiat veniam irure aliquip nisi eu ipsum irure reprehenderit veniam dolore ea commodo aliquip veniam eiusmod ut sint Lorem sunt in exercitation ea magna deserunt magna elit proident aliqua fugiat irure commodo sit eu tempor officia excepteur duis duis magna ad amet minim veniam et Lorem id sint magna magna tempor quis culpa mollit labore consequat",
      "name": "Maricela Graves Property"
    },
    "price": 501190,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "Factory",
      "propertyFor": "Sale",
      "size": 16643,
      "bedrooms": 20,
      "price": 203213,
      "community": "Wilkins Street",
      "rentType": "",
      "bathrooms": 2,
      "garages": 3
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Swimming Pool",
        "icon": "mdi-pool"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "ex velit laborum non est incididunt cupidatat sint elit Lorem ea amet enim exercitation ipsum cillum culpa Lorem velit pariatur ea cillum aliquip irure exercitation consectetur et consectetur irure cillum aliquip aute dolore labore excepteur incididunt Lorem commodo laborum laboris fugiat sint sint culpa deserunt dolor laboris ex officia ea ipsum ullamco elit aliquip anim aliquip sunt ea enim ea",
      "name": "Ruiz Merrill Property"
    },
    "price": 222787,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 7589,
      "bedrooms": 10,
      "price": 64230,
      "community": "Webster Street",
      "rentType": "",
      "bathrooms": 19,
      "garages": 19
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Warehouse"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Basketball Court",
        "icon": "mdi-basketball"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "dolor do labore enim nisi excepteur nisi anim anim id voluptate qui labore reprehenderit do deserunt officia aliqua qui aute in amet nisi eu laboris eiusmod fugiat aliqua reprehenderit Lorem non id culpa ea duis ex labore ea sint ad cupidatat quis cillum qui consequat consectetur laborum aliqua magna quis qui eiusmod ex amet ex amet occaecat non reprehenderit incididunt",
      "name": "Marisol Schneider Property"
    },
    "price": 735782,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 4594,
      "bedrooms": 11,
      "price": 269232,
      "community": "Keith Street",
      "rentType": "",
      "bathrooms": 9,
      "garages": 17
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "St. Elizabeth",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Movie Theater Near By",
        "icon": "mdi-theater"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "ex veniam do dolore deserunt pariatur non sunt aute eiusmod occaecat dolor ad minim eu fugiat aute cillum consectetur irure ipsum eiusmod ad dolore voluptate proident do sint nulla dolore exercitation reprehenderit ullamco eiusmod sunt mollit quis aliqua ut elit veniam ad irure culpa nostrud Lorem in Lorem ex ut voluptate veniam excepteur ex amet sunt aliquip veniam labore esse",
      "name": "Holden Carrillo Property"
    },
    "price": 511785,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Clarendon",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 8809,
      "bedrooms": 15,
      "price": 738387,
      "community": "Larson Street",
      "rentType": "",
      "bathrooms": 17,
      "garages": 6
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "St. Andrew",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Supermarket Near By",
        "icon": "mdi-shopping"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "do duis sit excepteur qui ut labore occaecat ipsum qui dolor aliquip mollit ex commodo laboris dolor Lorem deserunt consequat nostrud sint ipsum eiusmod labore qui nostrud voluptate in sit eu cupidatat irure tempor amet aute duis ut fugiat ea consequat cupidatat id incididunt aliquip excepteur id ut sint laboris id sit sint ut non amet enim officia ut in",
      "name": "Mona Kane Property"
    },
    "price": 251261,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Trelawny",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 6758,
      "bedrooms": 1,
      "price": 431338,
      "community": "Doyle Street",
      "rentType": "",
      "bathrooms": 9,
      "garages": 14
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "Westmoreland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Tennis Court",
        "icon": "mdi-tennis"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "do consequat cillum ut ea eiusmod qui ullamco cillum nostrud quis quis deserunt deserunt ad fugiat non amet commodo cupidatat nulla cillum culpa minim aliquip sit aute veniam ullamco et exercitation esse pariatur culpa anim enim cupidatat Lorem ex amet duis anim reprehenderit irure dolor est proident eu voluptate aliqua veniam qui dolore laboris do et mollit quis enim laboris",
      "name": "Gould Barrera Property"
    },
    "price": 697309,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 6287,
      "bedrooms": 17,
      "price": 730904,
      "community": "Berry Street",
      "rentType": "",
      "bathrooms": 1,
      "garages": 19
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "St. Thomas",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Tank",
        "icon": "mdi-water"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "pariatur eu esse id aute voluptate mollit commodo id aliquip et fugiat ea proident duis reprehenderit irure officia qui nulla nisi aliqua voluptate do ea quis do quis ipsum adipisicing incididunt ea aliqua cupidatat in tempor in irure esse anim ipsum qui tempor pariatur sint elit laborum excepteur mollit ipsum commodo dolore irure cillum adipisicing quis amet aute cillum aliqua",
      "name": "Colon Mullins Property"
    },
    "price": 121652,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Ann",
      "propertyType": "Factory",
      "propertyFor": "Sale",
      "size": 5970,
      "bedrooms": 3,
      "price": 424398,
      "community": "Lane Street",
      "rentType": "",
      "bathrooms": 16,
      "garages": 2
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Smart Home",
        "icon": "mdi-home-assistant"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "sit laborum ad nisi eiusmod dolore officia sunt quis cillum sint adipisicing eu sunt exercitation amet deserunt ut reprehenderit ut occaecat aliquip deserunt proident est laboris ex aute anim culpa ex elit aliquip tempor excepteur duis labore occaecat culpa eu ipsum laboris qui magna incididunt velit mollit duis non ad enim dolore incididunt excepteur pariatur tempor anim consectetur do do",
      "name": "Powell Maldonado Property"
    },
    "price": 626941,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 11045,
      "bedrooms": 16,
      "price": 646306,
      "community": "Crosby Street",
      "rentType": "",
      "bathrooms": 4,
      "garages": 18
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Basketball Court",
        "icon": "mdi-basketball"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "irure excepteur velit cillum est labore tempor excepteur sunt aute tempor sit cupidatat esse ipsum reprehenderit occaecat aute minim irure Lorem culpa eu amet eiusmod id eiusmod excepteur ea exercitation cillum et do ex sint culpa incididunt irure incididunt enim ullamco aute pariatur ex aute irure veniam amet voluptate incididunt reprehenderit id deserunt consequat commodo deserunt et laboris do enim",
      "name": "Shannon Mcpherson Property"
    },
    "price": 275989,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 15204,
      "bedrooms": 12,
      "price": 446707,
      "community": "Black Street",
      "rentType": "",
      "bathrooms": 8,
      "garages": 9
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. Andrew",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Wifi",
        "icon": "mdi-wifi"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "ex anim exercitation commodo eu ea enim ipsum non magna aute laboris aliqua eu eiusmod adipisicing incididunt magna sunt aute duis ad cillum minim est consequat cillum veniam aliquip minim velit laboris sint veniam in elit dolore cillum sint dolor in id nisi esse commodo ut nostrud quis qui nisi veniam mollit pariatur labore nisi aliquip incididunt nulla do cillum",
      "name": "Natalie Mcgee Property"
    },
    "price": 289514,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 16741,
      "bedrooms": 18,
      "price": 681313,
      "community": "Branch Street",
      "rentType": "",
      "bathrooms": 16,
      "garages": 3
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "Manchester",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Movie Theater Near By",
        "icon": "mdi-theater"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "aliqua amet occaecat ullamco officia est eu elit sit in Lorem fugiat tempor occaecat non nulla Lorem dolor incididunt ut sunt labore consectetur dolor cillum occaecat eu excepteur aliquip laboris nisi proident anim cillum quis do id ipsum aliqua exercitation irure eiusmod aliquip nisi occaecat dolore irure anim esse est commodo aliqua aliquip aute magna aliquip mollit occaecat qui pariatur",
      "name": "Annmarie Medina Property"
    },
    "price": 392710,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 16540,
      "bedrooms": 8,
      "price": 225603,
      "community": "Grant Street",
      "rentType": "",
      "bathrooms": 6,
      "garages": 7
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Grilled",
        "icon": "mdi-shield-home"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "consectetur fugiat officia consequat excepteur culpa sint non occaecat labore nostrud sunt voluptate ipsum mollit commodo esse et Lorem sit eu id quis laborum exercitation exercitation in id duis officia id ut ad excepteur culpa enim nostrud aliqua eiusmod dolor qui aliqua aute consectetur cupidatat consequat deserunt magna adipisicing deserunt sunt sint nulla nostrud proident commodo deserunt Lorem fugiat dolor",
      "name": "Winters Justice Property"
    },
    "price": 453215,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 17199,
      "bedrooms": 16,
      "price": 458098,
      "community": "Pollard Street",
      "rentType": "",
      "bathrooms": 20,
      "garages": 10
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Grilled",
        "icon": "mdi-shield-home"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "quis magna eu exercitation sit nisi sunt cillum ad adipisicing occaecat reprehenderit elit ipsum dolore do eu consectetur ullamco aute Lorem magna cillum qui ut aliqua velit commodo officia culpa esse mollit culpa tempor anim ad labore cillum Lorem irure pariatur est adipisicing fugiat nostrud consectetur dolore proident ex commodo dolor aute nulla ad et reprehenderit irure reprehenderit minim anim",
      "name": "Tamera Goodwin Property"
    },
    "price": 578349,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 18447,
      "bedrooms": 17,
      "price": 224322,
      "community": "Fuller Street",
      "rentType": "",
      "bathrooms": 10,
      "garages": 3
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Parking",
        "icon": "mdi-car"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "pariatur magna sunt id consequat proident nulla commodo amet sit velit proident consequat ex officia sunt amet proident est veniam ut exercitation sint sit excepteur consectetur aliquip nostrud Lorem sint eu laboris incididunt aliqua ut enim ut consequat consequat occaecat do nulla adipisicing elit incididunt ea voluptate enim laborum do adipisicing laborum mollit eu minim esse adipisicing cillum fugiat magna",
      "name": "Cochran Holt Property"
    },
    "price": 302802,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Andrew",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 18506,
      "bedrooms": 8,
      "price": 708832,
      "community": "Guthrie Street",
      "rentType": "",
      "bathrooms": 3,
      "garages": 7
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Heater",
        "icon": "mdi-thermometer-high"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "cillum magna sunt id sint nisi adipisicing sunt cillum dolor sint exercitation mollit non pariatur est velit id fugiat culpa enim est labore excepteur duis sit consectetur veniam ut fugiat amet cupidatat anim tempor velit ad sint exercitation reprehenderit consectetur ipsum ex sint sunt et cillum do proident magna excepteur exercitation eu est in proident ipsum enim qui ullamco nostrud",
      "name": "Madeline Garrison Property"
    },
    "price": 270484,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 12507,
      "bedrooms": 3,
      "price": 671025,
      "community": "Rivera Street",
      "rentType": "",
      "bathrooms": 6,
      "garages": 20
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. Andrew",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gated Community",
        "icon": "mdi-security"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "et dolore est occaecat occaecat eu sint exercitation velit laboris eu veniam nostrud consectetur occaecat reprehenderit duis ullamco velit sint labore mollit magna reprehenderit nulla ullamco culpa dolor amet consectetur dolore cillum sint aute aliquip eiusmod cupidatat non pariatur officia proident laboris anim dolore esse veniam consectetur do commodo reprehenderit aliqua aliquip duis aute labore Lorem est culpa culpa do",
      "name": "Savage Garner Property"
    },
    "price": 362530,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 4733,
      "bedrooms": 15,
      "price": 84659,
      "community": "Campos Street",
      "rentType": "",
      "bathrooms": 11,
      "garages": 1
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "St. Elizabeth",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Furnished",
        "icon": "mdi-sofa"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "culpa et consectetur aliquip eu dolore velit reprehenderit nostrud do minim et qui aliquip amet ut est laboris culpa veniam commodo velit irure veniam do magna ea incididunt ea pariatur dolore duis voluptate amet voluptate cupidatat laboris do laborum tempor aute non Lorem reprehenderit tempor eu mollit quis ex anim excepteur duis fugiat nulla duis do incididunt ipsum incididunt magna",
      "name": "Vega Ochoa Property"
    },
    "price": 423502,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Andrew",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 3780,
      "bedrooms": 11,
      "price": 180090,
      "community": "Salazar Street",
      "rentType": "",
      "bathrooms": 8,
      "garages": 17
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Hanover",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Parking",
        "icon": "mdi-car"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "reprehenderit magna elit excepteur mollit deserunt minim ut quis labore incididunt reprehenderit fugiat occaecat aute fugiat aute ad velit labore excepteur pariatur sunt incididunt ex dolor id voluptate consequat duis tempor et ipsum aliquip nostrud est laborum pariatur cupidatat veniam qui fugiat labore nisi consectetur consectetur et eiusmod cupidatat amet laboris incididunt non eu pariatur veniam in cupidatat proident labore",
      "name": "Misty Burns Property"
    },
    "price": 322592,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 18433,
      "bedrooms": 3,
      "price": 380151,
      "community": "Johns Street",
      "rentType": "",
      "bathrooms": 17,
      "garages": 3
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Hospital Near By",
        "icon": "mdi-hospital-building"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "ut exercitation sunt ut deserunt proident ex sunt ex officia laborum velit ipsum ad officia velit veniam dolore qui cillum dolore adipisicing commodo aliquip elit aliqua dolor esse culpa eiusmod reprehenderit culpa cupidatat magna amet do nisi laborum reprehenderit ut cillum dolor enim fugiat ipsum magna adipisicing officia aute id sit fugiat ad eu aute ut pariatur pariatur est reprehenderit",
      "name": "Ashlee Weeks Property"
    },
    "price": 439866,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 5777,
      "bedrooms": 17,
      "price": 674933,
      "community": "Porter Street",
      "rentType": "",
      "bathrooms": 19,
      "garages": 12
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Air Conditioning",
        "icon": "mdi-air-filter"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "sint aliqua tempor excepteur dolore consequat labore aliquip ea est exercitation pariatur quis consequat do officia eiusmod excepteur qui ut in eu sit non ipsum anim exercitation eu quis non non sunt et labore occaecat nulla consequat dolor ea pariatur ut dolore aliqua exercitation quis consequat ipsum magna eiusmod labore magna sint proident non eiusmod officia est do voluptate ex",
      "name": "Gabrielle Knight Property"
    },
    "price": 424123,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Clarendon",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 13108,
      "bedrooms": 9,
      "price": 389766,
      "community": "Jacobson Street",
      "rentType": "",
      "bathrooms": 5,
      "garages": 1
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
  },
  {
    "parish": "Westmoreland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Swimming Pool",
        "icon": "mdi-pool"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "incididunt ad duis do minim fugiat pariatur quis occaecat aliqua tempor aliqua voluptate do do culpa pariatur mollit voluptate occaecat nisi cillum adipisicing esse in adipisicing nisi quis nulla duis sunt ea proident qui eiusmod in ullamco ad tempor qui dolore sint Lorem est occaecat consequat mollit pariatur do consectetur mollit enim commodo velit dolore exercitation do eu duis et",
      "name": "Rosa Mckay Property"
    },
    "price": 249190,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 17077,
      "bedrooms": 18,
      "price": 103143,
      "community": "Sosa Street",
      "rentType": "",
      "bathrooms": 1,
      "garages": 20
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Warehouse"
  },
  {
    "parish": "St. Elizabeth",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Parking",
        "icon": "mdi-car"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "cupidatat amet ad elit dolore nisi proident magna ut dolor excepteur aliquip ex amet aute id deserunt minim Lorem pariatur qui do aute adipisicing consectetur id irure magna tempor tempor fugiat voluptate aliqua ipsum ipsum sunt et ex culpa ipsum minim amet sunt ad commodo qui laboris sit occaecat proident cupidatat eu veniam fugiat eu aliquip eu laboris cillum qui",
      "name": "Cheryl Gilmore Property"
    },
    "price": 368754,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 12414,
      "bedrooms": 14,
      "price": 696122,
      "community": "Rodgers Street",
      "rentType": "",
      "bathrooms": 6,
      "garages": 13
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Westmoreland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Church Near By",
        "icon": "mdi-church"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "dolore non adipisicing anim consequat eu excepteur et proident pariatur ea culpa in eu dolor et culpa sint consequat adipisicing reprehenderit ut duis eiusmod proident officia cillum dolor ad est commodo ea magna ut incididunt duis pariatur eiusmod duis aute ex aliqua amet voluptate duis commodo adipisicing dolor excepteur pariatur qui non esse duis excepteur veniam ullamco elit Lorem excepteur",
      "name": "Pearl Peters Property"
    },
    "price": 268218,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Westmoreland",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 6369,
      "bedrooms": 9,
      "price": 60201,
      "community": "Sullivan Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 6
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
  },
  {
    "parish": "St. Mary",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Parking",
        "icon": "mdi-car"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "consequat ut anim mollit officia ipsum veniam esse in in esse nulla dolore laboris ullamco ut dolore minim laborum dolor quis eiusmod sunt laboris laborum velit occaecat quis laborum dolore aliquip pariatur consequat reprehenderit ex aute do velit mollit duis id dolor labore occaecat nulla aliqua in excepteur eu in sit esse fugiat commodo Lorem enim commodo adipisicing ut non",
      "name": "Hall Becker Property"
    },
    "price": 714553,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 7735,
      "bedrooms": 19,
      "price": 100495,
      "community": "Hill Street",
      "rentType": "",
      "bathrooms": 9,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gated Community",
        "icon": "mdi-security"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "cupidatat elit veniam laboris esse anim id cupidatat mollit amet in dolore non ut veniam amet ex laborum non nisi quis laboris laboris ut et pariatur dolore culpa cupidatat incididunt mollit est do nulla ex eiusmod excepteur officia aute magna officia et officia adipisicing cillum adipisicing velit Lorem non ullamco eiusmod incididunt id minim ullamco culpa ut sint culpa qui",
      "name": "Sims Todd Property"
    },
    "price": 719802,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 19724,
      "bedrooms": 3,
      "price": 500124,
      "community": "Mathis Street",
      "rentType": "",
      "bathrooms": 5,
      "garages": 20
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "St. Mary",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gated Community",
        "icon": "mdi-security"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "consequat minim cillum quis Lorem nulla nulla reprehenderit labore reprehenderit consequat adipisicing sunt nulla consequat laborum aliqua esse minim labore dolor ea officia commodo irure nulla officia ad proident velit irure minim exercitation eiusmod occaecat fugiat anim enim ad anim adipisicing ullamco cillum proident nisi magna ullamco reprehenderit minim ipsum magna eiusmod qui cupidatat deserunt veniam eiusmod enim minim irure",
      "name": "Clements Franco Property"
    },
    "price": 630585,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 13425,
      "bedrooms": 20,
      "price": 260698,
      "community": "Grimes Street",
      "rentType": "",
      "bathrooms": 18,
      "garages": 9
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Wifi",
        "icon": "mdi-wifi"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "in duis occaecat minim nulla est nulla in duis elit Lorem esse quis nisi esse eu reprehenderit veniam non culpa consectetur ut laborum enim ad quis do nisi proident veniam duis aute ad occaecat consectetur qui consequat duis Lorem labore eiusmod ipsum consequat nulla non cillum anim id dolore do cupidatat ex eiusmod tempor et culpa id quis pariatur excepteur",
      "name": "Maude Delgado Property"
    },
    "price": 327090,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Westmoreland",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 10975,
      "bedrooms": 6,
      "price": 383212,
      "community": "Cline Street",
      "rentType": "",
      "bathrooms": 13,
      "garages": 6
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "House"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Schools Near By",
        "icon": "mdi-school"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "ullamco laborum amet duis quis commodo anim magna id est dolor aute veniam est officia quis sunt nostrud deserunt pariatur velit deserunt excepteur anim incididunt elit aliquip nulla aute Lorem eu proident esse labore id occaecat anim ex labore id Lorem reprehenderit incididunt irure aliquip fugiat ipsum commodo magna non non et voluptate pariatur officia dolore nisi culpa commodo sint",
      "name": "Craft Ruiz Property"
    },
    "price": 488473,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Elizabeth",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 3454,
      "bedrooms": 4,
      "price": 262624,
      "community": "Pitts Street",
      "rentType": "",
      "bathrooms": 10,
      "garages": 8
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Hanover",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Parking",
        "icon": "mdi-car"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "cupidatat proident ad ut adipisicing proident consequat dolore consectetur ex ea ullamco laboris sint nostrud culpa excepteur aute nisi ullamco anim dolor consectetur proident elit ut irure excepteur duis adipisicing sint sit mollit veniam occaecat elit consectetur incididunt amet incididunt culpa laborum commodo est minim commodo anim deserunt incididunt veniam excepteur quis ad Lorem adipisicing eiusmod labore est irure esse",
      "name": "Krista Leach Property"
    },
    "price": 41513,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 2755,
      "bedrooms": 14,
      "price": 244791,
      "community": "Golden Street",
      "rentType": "",
      "bathrooms": 19,
      "garages": 6
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Schools Near By",
        "icon": "mdi-school"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "minim ea cupidatat cillum esse non excepteur in irure commodo minim sit ea eiusmod laborum proident eu do culpa exercitation laborum fugiat ut occaecat deserunt commodo eu sunt minim excepteur aute consequat incididunt esse consectetur eiusmod id esse dolor ex est laboris amet id nulla mollit deserunt veniam mollit voluptate ad ex excepteur dolor pariatur amet consectetur deserunt veniam voluptate",
      "name": "Juliana Hebert Property"
    },
    "price": 640241,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Manchester",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 12990,
      "bedrooms": 14,
      "price": 565357,
      "community": "Vargas Street",
      "rentType": "",
      "bathrooms": 10,
      "garages": 13
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. James",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Movie Theater Near By",
        "icon": "mdi-theater"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "aliquip voluptate id irure elit cupidatat mollit exercitation ex pariatur ipsum Lorem laboris eu est mollit non laborum voluptate non dolor in cupidatat sit veniam incididunt enim magna minim pariatur elit quis irure officia aute cupidatat cupidatat duis id minim elit commodo dolor laborum pariatur laborum non non pariatur occaecat consectetur veniam eu quis veniam dolor ipsum nisi ea officia",
      "name": "Tommie Carney Property"
    },
    "price": 715652,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Andrew",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 14120,
      "bedrooms": 6,
      "price": 341198,
      "community": "Clarke Street",
      "rentType": "",
      "bathrooms": 3,
      "garages": 3
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "St. Ann",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Air Conditioning",
        "icon": "mdi-air-filter"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "anim consequat anim pariatur voluptate amet reprehenderit voluptate voluptate in pariatur esse est nostrud voluptate adipisicing et incididunt culpa excepteur tempor laboris sint occaecat irure aute nisi laborum enim laborum veniam nisi mollit cupidatat reprehenderit enim qui esse anim sit esse ullamco esse veniam anim dolor proident est nulla deserunt sunt irure duis mollit sint dolor in anim sunt magna",
      "name": "Aline Horn Property"
    },
    "price": 526057,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Manchester",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 16900,
      "bedrooms": 14,
      "price": 105193,
      "community": "Carson Street",
      "rentType": "",
      "bathrooms": 9,
      "garages": 20
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "Manchester",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gated Community",
        "icon": "mdi-security"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "id Lorem labore cillum id commodo labore consequat sit dolore incididunt commodo voluptate in aliquip in laboris ea pariatur laboris do ut ut sit in nulla sunt nostrud quis cillum id duis reprehenderit nisi ipsum ipsum non consequat incididunt aliquip mollit in commodo incididunt commodo ea exercitation veniam et do magna est tempor aliquip et veniam cupidatat consectetur deserunt ipsum",
      "name": "Ginger Blanchard Property"
    },
    "price": 511650,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Westmoreland",
      "propertyType": "Factory",
      "propertyFor": "Sale",
      "size": 2811,
      "bedrooms": 20,
      "price": 205047,
      "community": "Freeman Street",
      "rentType": "",
      "bathrooms": 6,
      "garages": 12
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "Westmoreland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Grilled",
        "icon": "mdi-shield-home"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "eiusmod culpa anim do exercitation pariatur sunt laboris exercitation ad ad id adipisicing et veniam aliqua ullamco dolor velit incididunt laborum deserunt et pariatur nisi ut officia sit ullamco excepteur commodo dolor reprehenderit velit enim ea laboris in enim laborum ex eu ex adipisicing aliqua velit aute veniam cillum ullamco cupidatat dolore in veniam reprehenderit magna occaecat aliqua ad id",
      "name": "Judith Sexton Property"
    },
    "price": 626157,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "Farm/Agriculture",
      "propertyFor": "Sale",
      "size": 12573,
      "bedrooms": 5,
      "price": 345361,
      "community": "Phelps Street",
      "rentType": "",
      "bathrooms": 2,
      "garages": 14
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Parking",
        "icon": "mdi-car"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "aliqua cupidatat anim nisi irure non nulla do culpa aliquip occaecat elit Lorem tempor ad id nostrud quis consequat aliquip id commodo fugiat irure nostrud enim mollit consectetur eiusmod enim eiusmod qui do esse dolor irure elit eiusmod ea aliquip velit exercitation tempor eiusmod pariatur laborum minim sunt non laborum cillum anim culpa dolore consequat fugiat excepteur in duis nulla",
      "name": "Holland Cabrera Property"
    },
    "price": 86321,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Elizabeth",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 11216,
      "bedrooms": 3,
      "price": 416641,
      "community": "Hahn Street",
      "rentType": "",
      "bathrooms": 9,
      "garages": 3
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Manchester",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Swimming Pool",
        "icon": "mdi-pool"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "fugiat occaecat eiusmod irure sunt ea irure consectetur veniam officia exercitation mollit sint do irure esse minim ad officia enim eu magna mollit proident in eiusmod duis do esse ea Lorem duis ut magna qui tempor consequat laboris elit deserunt ullamco nulla aliquip et esse esse commodo quis veniam consectetur aute sint elit tempor exercitation sit ad dolor occaecat fugiat",
      "name": "Macdonald Crawford Property"
    },
    "price": 706472,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 8129,
      "bedrooms": 14,
      "price": 254739,
      "community": "Wiggins Street",
      "rentType": "",
      "bathrooms": 12,
      "garages": 8
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "House"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gated Community",
        "icon": "mdi-security"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "Lorem minim anim culpa proident laborum proident dolore anim id officia occaecat est reprehenderit reprehenderit reprehenderit et occaecat ipsum anim reprehenderit qui ipsum do laboris nulla in adipisicing proident proident ullamco ad dolor nostrud cillum ut consequat aliquip nisi voluptate proident do nulla ut aute et magna sunt ullamco non non veniam officia nisi dolor eiusmod do voluptate in nulla",
      "name": "Lowery Bates Property"
    },
    "price": 249502,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Westmoreland",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 6186,
      "bedrooms": 3,
      "price": 145608,
      "community": "Hopper Street",
      "rentType": "",
      "bathrooms": 13,
      "garages": 20
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Warehouse"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Hospital Near By",
        "icon": "mdi-hospital-building"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "mollit ut aliquip incididunt id elit fugiat minim aliqua cupidatat elit cillum voluptate officia consequat qui aliqua excepteur pariatur minim cupidatat adipisicing anim in aliqua tempor aliqua nisi sunt proident non consectetur esse ullamco culpa pariatur Lorem reprehenderit enim aliquip voluptate officia quis consectetur in incididunt culpa fugiat cupidatat dolor et nisi magna irure laborum in duis id culpa anim",
      "name": "Keith Strong Property"
    },
    "price": 439205,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Trelawny",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 6044,
      "bedrooms": 16,
      "price": 219247,
      "community": "Clements Street",
      "rentType": "",
      "bathrooms": 4,
      "garages": 19
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Westmoreland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Hospital Near By",
        "icon": "mdi-hospital-building"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "duis aute cillum do consectetur amet consectetur do commodo laborum excepteur cupidatat velit officia enim quis sit deserunt duis deserunt laborum mollit veniam dolore non commodo nulla veniam minim anim laborum fugiat nulla ut exercitation officia nulla consequat sunt sunt culpa proident cupidatat laboris nulla culpa veniam in reprehenderit quis in occaecat aliqua cillum qui mollit irure sint aliqua ipsum",
      "name": "Jean Castaneda Property"
    },
    "price": 543867,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Clarendon",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 19736,
      "bedrooms": 9,
      "price": 476837,
      "community": "Good Street",
      "rentType": "",
      "bathrooms": 7,
      "garages": 20
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "Westmoreland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Park Near By",
        "icon": "mdi-nature-people"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "velit amet ea commodo exercitation pariatur minim ut dolor dolor sunt velit cupidatat enim do sunt sunt commodo pariatur cupidatat ex culpa nisi mollit mollit magna sint quis mollit laboris id eiusmod non ipsum eu amet reprehenderit elit est veniam culpa cupidatat laborum exercitation ullamco proident aute est est occaecat culpa laborum ipsum commodo amet proident commodo eiusmod nulla esse",
      "name": "Erika Boyle Property"
    },
    "price": 754555,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Elizabeth",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 18196,
      "bedrooms": 2,
      "price": 340882,
      "community": "Cunningham Street",
      "rentType": "",
      "bathrooms": 18,
      "garages": 10
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. James",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Family Oriented",
        "icon": "mdi-home-heart"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "laboris irure ad aliqua Lorem ullamco nisi in dolore nisi anim elit fugiat adipisicing magna adipisicing nostrud ipsum deserunt aliquip eu quis aliquip sint cillum anim ex veniam enim occaecat reprehenderit non do id laboris consectetur eu adipisicing ex excepteur proident sint ullamco excepteur exercitation consectetur eiusmod est ullamco in cillum pariatur dolor nulla laboris amet dolor aute sint commodo",
      "name": "Gallagher Bryant Property"
    },
    "price": 437164,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Trelawny",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 12772,
      "bedrooms": 3,
      "price": 671489,
      "community": "Estrada Street",
      "rentType": "",
      "bathrooms": 19,
      "garages": 5
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "St. James",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Movie Theater Near By",
        "icon": "mdi-theater"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "magna incididunt esse sunt reprehenderit eu ut aliqua voluptate magna exercitation consequat dolore minim consectetur quis consectetur velit cupidatat duis do esse pariatur et eu cillum dolor deserunt minim dolore elit amet do exercitation quis irure consequat enim minim laborum eiusmod laborum aute culpa nisi in consectetur quis officia duis aute reprehenderit consectetur culpa consectetur irure commodo esse nulla minim",
      "name": "Lucile Hutchinson Property"
    },
    "price": 178524,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 18002,
      "bedrooms": 13,
      "price": 668796,
      "community": "Woodward Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 8
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "St. Andrew",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Hospital Near By",
        "icon": "mdi-hospital-building"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "anim laboris voluptate est ex nulla incididunt mollit aliqua ad velit cillum consectetur exercitation nostrud esse dolore aliquip quis ipsum ipsum est laborum elit irure laboris quis consectetur ipsum eu occaecat nostrud eu sunt nulla exercitation voluptate consequat labore eiusmod tempor fugiat non sint nostrud pariatur sint ipsum sunt consectetur ad amet quis fugiat proident eu fugiat sit magna veniam",
      "name": "Teresa Lucas Property"
    },
    "price": 787275,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Ann",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 7941,
      "bedrooms": 5,
      "price": 285827,
      "community": "Mcguire Street",
      "rentType": "",
      "bathrooms": 17,
      "garages": 14
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "St. Ann",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Schools Near By",
        "icon": "mdi-school"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "incididunt magna officia ut aliqua sit sint amet duis laborum aliqua dolor deserunt ea aliquip dolore reprehenderit occaecat voluptate deserunt tempor Lorem ipsum esse et duis ullamco tempor dolore sit officia eiusmod est labore qui ipsum velit incididunt fugiat est ipsum id proident aute duis reprehenderit eu eiusmod anim proident ut consectetur enim elit et id ipsum et labore non",
      "name": "Martin Robbins Property"
    },
    "price": 601050,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 4404,
      "bedrooms": 6,
      "price": 70376,
      "community": "Gray Street",
      "rentType": "",
      "bathrooms": 11,
      "garages": 17
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Grilled",
        "icon": "mdi-shield-home"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "eu dolore anim ex exercitation fugiat elit sint nostrud velit dolor ut incididunt eiusmod excepteur ullamco fugiat aute exercitation ullamco esse esse amet ea nostrud amet ad magna pariatur irure cupidatat id ut sint sit eu veniam qui nulla quis est dolore aliquip pariatur nisi occaecat ut nulla incididunt deserunt pariatur laborum Lorem eiusmod cillum do pariatur enim officia aliqua",
      "name": "Langley Fischer Property"
    },
    "price": 633241,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 4975,
      "bedrooms": 5,
      "price": 353728,
      "community": "Gibbs Street",
      "rentType": "",
      "bathrooms": 2,
      "garages": 8
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Hanover",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Tank",
        "icon": "mdi-water"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "incididunt Lorem voluptate mollit aute enim sunt ut ad est consequat laborum cillum est non non amet qui amet mollit laboris magna sunt qui minim excepteur nostrud veniam nisi cillum irure laborum do nisi officia nostrud in proident aliquip proident amet enim irure tempor ipsum minim excepteur elit ut minim ullamco mollit nulla labore non id reprehenderit sunt anim eu",
      "name": "Calderon Beard Property"
    },
    "price": 698298,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Elizabeth",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 10844,
      "bedrooms": 4,
      "price": 314282,
      "community": "Butler Street",
      "rentType": "",
      "bathrooms": 18,
      "garages": 1
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "St. Ann",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Church Near By",
        "icon": "mdi-church"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "occaecat duis duis aliqua nisi exercitation eu cupidatat amet do proident ad fugiat ipsum veniam laboris tempor dolore aute commodo et cupidatat quis sunt eu officia culpa veniam anim ea ex occaecat exercitation quis ea ad duis eiusmod eu ad ea sit laborum dolore minim proident reprehenderit culpa dolore commodo quis nisi enim ut labore magna dolor consequat et sint",
      "name": "Buckner Nolan Property"
    },
    "price": 267947,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 18320,
      "bedrooms": 15,
      "price": 698212,
      "community": "Hayden Street",
      "rentType": "",
      "bathrooms": 5,
      "garages": 10
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "St. James",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Air Conditioning",
        "icon": "mdi-air-filter"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "esse aliqua ipsum est eu veniam veniam tempor consequat sit in dolore nisi exercitation mollit est cupidatat officia sit nisi anim qui fugiat dolore magna sint reprehenderit elit nulla do ullamco ad reprehenderit commodo ad qui fugiat exercitation in dolor dolor sit proident adipisicing minim do eiusmod laboris cupidatat amet eu irure qui elit cupidatat in et nisi eiusmod sit",
      "name": "Nelson Bolton Property"
    },
    "price": 305196,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 18665,
      "bedrooms": 12,
      "price": 534601,
      "community": "Casey Street",
      "rentType": "",
      "bathrooms": 6,
      "garages": 7
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "St. James",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Basketball Court",
        "icon": "mdi-basketball"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "eiusmod magna elit minim labore nostrud deserunt anim sunt dolore irure nostrud voluptate magna enim reprehenderit aliqua incididunt dolor deserunt sit reprehenderit elit est ipsum veniam eu labore irure elit cillum fugiat proident adipisicing incididunt non consequat enim duis duis nulla aute minim ut ad Lorem quis proident ut irure proident officia cillum veniam dolore nisi amet nostrud consectetur consectetur",
      "name": "Rowena Walls Property"
    },
    "price": 335257,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 19533,
      "bedrooms": 17,
      "price": 443089,
      "community": "Travis Street",
      "rentType": "",
      "bathrooms": 15,
      "garages": 13
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. Ann",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Smart Home",
        "icon": "mdi-home-assistant"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "do nostrud et commodo voluptate cillum et ipsum mollit labore dolor dolore quis non nisi magna reprehenderit proident ex dolor in enim nulla commodo ea magna culpa pariatur est ea ipsum anim reprehenderit aute proident fugiat occaecat consectetur adipisicing veniam laboris qui proident incididunt fugiat proident consequat non nisi labore elit pariatur eu consectetur in duis ut aute aliquip in",
      "name": "Mercado Talley Property"
    },
    "price": 581415,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 15897,
      "bedrooms": 4,
      "price": 535711,
      "community": "Booth Street",
      "rentType": "",
      "bathrooms": 13,
      "garages": 12
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Wifi",
        "icon": "mdi-wifi"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "est consequat Lorem id nisi et laboris proident culpa amet officia amet fugiat eu id officia ad exercitation anim ad sint et irure proident labore mollit id mollit laboris voluptate culpa et et proident mollit aliquip velit sunt et adipisicing ad culpa pariatur enim consectetur in cillum ad dolor cupidatat laborum ex ea sint et velit esse ipsum aliqua et",
      "name": "Schultz Keller Property"
    },
    "price": 253415,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 7155,
      "bedrooms": 19,
      "price": 655262,
      "community": "Hensley Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 13
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "Hanover",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Tank",
        "icon": "mdi-water"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "minim excepteur ea laborum in excepteur ad est adipisicing elit velit aliqua veniam esse do pariatur ipsum cillum sint ad do nostrud dolor nulla adipisicing excepteur nostrud reprehenderit laborum pariatur ullamco sunt excepteur tempor pariatur amet tempor est irure labore duis tempor dolor mollit sunt cupidatat Lorem elit Lorem cillum incididunt mollit dolor occaecat reprehenderit deserunt eiusmod fugiat tempor Lorem",
      "name": "Cantu Odom Property"
    },
    "price": 747577,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 10717,
      "bedrooms": 17,
      "price": 357273,
      "community": "Kim Street",
      "rentType": "",
      "bathrooms": 12,
      "garages": 1
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Hanover",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Furnished",
        "icon": "mdi-sofa"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "duis aliqua consectetur enim sunt amet Lorem officia nostrud est eu nulla et ad ipsum amet commodo magna ea veniam enim proident sint mollit amet elit non ad enim aute in cillum culpa est labore fugiat magna duis do exercitation sunt aliqua culpa ut in do voluptate voluptate aliqua labore pariatur nisi sunt adipisicing nulla duis incididunt officia reprehenderit excepteur",
      "name": "Mabel Pratt Property"
    },
    "price": 641390,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Catherine",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 18777,
      "bedrooms": 15,
      "price": 408492,
      "community": "Rollins Street",
      "rentType": "",
      "bathrooms": 3,
      "garages": 14
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "House"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "24 Hour Security",
        "icon": "mdi-cctv"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "do sint nostrud officia velit deserunt velit consectetur laboris minim labore culpa fugiat dolor ad qui sit elit qui excepteur ad quis magna eiusmod aliqua consequat sunt reprehenderit magna voluptate dolore occaecat magna tempor exercitation voluptate occaecat aliqua eiusmod labore laboris elit quis occaecat deserunt proident magna ex commodo aliquip duis et esse incididunt est et esse labore anim velit",
      "name": "Perez Glenn Property"
    },
    "price": 420648,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Catherine",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 2478,
      "bedrooms": 3,
      "price": 119217,
      "community": "Emerson Street",
      "rentType": "",
      "bathrooms": 2,
      "garages": 17
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Residential)"
  },
  {
    "parish": "Manchester",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Hospital Near By",
        "icon": "mdi-hospital-building"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "dolore occaecat aliquip ex est dolor laborum do fugiat excepteur mollit officia amet ex ex veniam veniam labore id dolor sunt laborum qui commodo est incididunt enim deserunt duis Lorem cupidatat aliqua enim irure pariatur commodo ea incididunt id fugiat cupidatat et esse elit esse dolor excepteur non elit do excepteur aute aliqua laboris ex fugiat quis nulla magna culpa",
      "name": "Roth Mooney Property"
    },
    "price": 365392,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Westmoreland",
      "propertyType": "Development Land (Commercial)",
      "propertyFor": "Sale",
      "size": 13115,
      "bedrooms": 20,
      "price": 456098,
      "community": "Contreras Street",
      "rentType": "",
      "bathrooms": 5,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gated Community",
        "icon": "mdi-security"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "deserunt voluptate non fugiat magna velit incididunt reprehenderit dolor consequat deserunt anim elit aliqua aliqua esse nulla laboris velit laboris anim officia sit et duis occaecat laboris aliqua esse nostrud deserunt ex consectetur irure mollit mollit non aute non duis qui sint incididunt aliquip excepteur deserunt aliquip dolor labore sint sint id est laborum dolore sint Lorem proident magna elit",
      "name": "Carissa Hammond Property"
    },
    "price": 556103,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Westmoreland",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 16755,
      "bedrooms": 15,
      "price": 440972,
      "community": "Vang Street",
      "rentType": "",
      "bathrooms": 17,
      "garages": 16
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. Thomas",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Parking",
        "icon": "mdi-car"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "cupidatat occaecat laboris duis quis sint qui esse commodo nostrud duis velit cillum qui eu ea ex adipisicing reprehenderit laborum adipisicing in minim ad laborum esse non fugiat aliqua aliqua ad nostrud amet ex consequat magna exercitation consectetur excepteur duis duis consequat incididunt enim sint cupidatat cillum non et in aute consectetur adipisicing occaecat minim sit deserunt aliqua reprehenderit amet",
      "name": "Wilkins Caldwell Property"
    },
    "price": 723333,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 4293,
      "bedrooms": 19,
      "price": 292025,
      "community": "Taylor Street",
      "rentType": "",
      "bathrooms": 13,
      "garages": 3
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
  },
  {
    "parish": "St. James",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Parking",
        "icon": "mdi-car"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "fugiat officia do voluptate deserunt ipsum dolore aliqua tempor voluptate aliqua adipisicing culpa exercitation aliqua est excepteur enim sunt Lorem velit anim ullamco in velit consequat id qui et ex magna mollit Lorem pariatur consectetur velit adipisicing consequat Lorem mollit cillum ad aliquip irure eu sit anim eu duis pariatur adipisicing consectetur deserunt ut aute officia ea ex deserunt quis",
      "name": "Kennedy Franklin Property"
    },
    "price": 147399,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Clarendon",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 10517,
      "bedrooms": 9,
      "price": 713625,
      "community": "Matthews Street",
      "rentType": "",
      "bathrooms": 3,
      "garages": 1
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Development Land (Commercial)"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Heater",
        "icon": "mdi-thermometer-high"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "velit excepteur consectetur sunt nisi commodo minim commodo qui amet fugiat ut nostrud aute magna cupidatat dolor excepteur amet proident labore qui adipisicing occaecat deserunt commodo sunt ipsum Lorem adipisicing quis ipsum tempor magna laboris amet quis mollit veniam nisi deserunt aliqua enim reprehenderit aliqua laboris ut nulla amet sit quis occaecat mollit qui est nulla duis veniam ut officia",
      "name": "Angelia Callahan Property"
    },
    "price": 527890,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Andrew",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 7443,
      "bedrooms": 14,
      "price": 543961,
      "community": "Curtis Street",
      "rentType": "",
      "bathrooms": 13,
      "garages": 12
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "Kingston",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Generator",
        "icon": "mdi-flash"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "commodo irure ex occaecat Lorem reprehenderit est ex reprehenderit minim magna ullamco ut eu incididunt deserunt officia ullamco ea ea commodo laborum irure excepteur quis eu sit deserunt anim cillum Lorem magna ullamco tempor proident labore incididunt qui consectetur dolor laborum cillum minim quis pariatur aliquip culpa exercitation esse incididunt officia pariatur non fugiat exercitation excepteur esse do amet non",
      "name": "Wong Espinoza Property"
    },
    "price": 548701,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Manchester",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 14049,
      "bedrooms": 7,
      "price": 548918,
      "community": "Gay Street",
      "rentType": "",
      "bathrooms": 18,
      "garages": 14
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Tank",
        "icon": "mdi-water"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "eu consequat fugiat cillum eu ipsum cupidatat Lorem dolore consectetur dolor aute mollit consequat elit ut consectetur occaecat nulla ad adipisicing esse Lorem voluptate consectetur voluptate dolor consequat tempor aliqua dolore consequat deserunt culpa consequat do laboris aliqua excepteur esse et ut ex irure aliquip consequat anim velit enim minim sunt et nostrud anim ad sint consequat est in eu",
      "name": "Jeannette Chan Property"
    },
    "price": 732257,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 7653,
      "bedrooms": 5,
      "price": 77920,
      "community": "Rowland Street",
      "rentType": "",
      "bathrooms": 3,
      "garages": 11
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "St. Andrew",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Schools Near By",
        "icon": "mdi-school"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "cupidatat commodo consectetur ullamco est esse proident ex amet cillum laborum irure mollit et proident consequat mollit sit laboris occaecat exercitation dolore est enim duis voluptate do aliquip ullamco ad ex quis duis ut anim exercitation laboris pariatur nisi pariatur deserunt nostrud voluptate nisi labore cupidatat fugiat est anim do Lorem ad cupidatat ut sint qui adipisicing officia exercitation minim",
      "name": "Imogene Gillespie Property"
    },
    "price": 697409,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Portland",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 13600,
      "bedrooms": 17,
      "price": 122457,
      "community": "Soto Street",
      "rentType": "",
      "bathrooms": 14,
      "garages": 20
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "St. Mary",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Wifi",
        "icon": "mdi-wifi"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "aute pariatur eu ea nisi ad eu proident minim veniam aliquip ipsum anim exercitation mollit exercitation voluptate irure enim ea eiusmod sit exercitation exercitation voluptate elit dolor ex velit et consectetur enim laboris amet fugiat magna ex duis est elit consectetur exercitation commodo quis incididunt Lorem consectetur cupidatat amet aute eiusmod occaecat dolor irure qui ad anim adipisicing veniam pariatur",
      "name": "Alisa Collier Property"
    },
    "price": 739022,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Clarendon",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 9719,
      "bedrooms": 19,
      "price": 683536,
      "community": "Kent Street",
      "rentType": "",
      "bathrooms": 1,
      "garages": 13
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Generator",
        "icon": "mdi-flash"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "qui consectetur consequat dolore occaecat quis ut laboris dolor cillum ullamco ex ipsum culpa enim quis incididunt cillum esse eiusmod minim consequat voluptate labore irure non laboris ea magna excepteur commodo anim consequat aliqua ipsum mollit proident ut esse labore mollit cupidatat Lorem tempor laborum et consectetur reprehenderit eiusmod irure anim sit excepteur sit nostrud quis incididunt officia ea elit",
      "name": "Carpenter Kaufman Property"
    },
    "price": 618444,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Mary",
      "propertyType": "Development Land (Residential)",
      "propertyFor": "Sale",
      "size": 10093,
      "bedrooms": 9,
      "price": 775079,
      "community": "Barr Street",
      "rentType": "",
      "bathrooms": 3,
      "garages": 11
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "Manchester",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Gym",
        "icon": "mdi-dumbbell"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "occaecat eu dolore nostrud occaecat laborum laborum quis dolor irure do ullamco proident incididunt adipisicing esse labore deserunt deserunt laborum voluptate adipisicing aliquip quis laborum qui commodo exercitation laboris tempor occaecat cupidatat ullamco pariatur consequat consequat dolore culpa excepteur esse officia aliqua ea nisi eiusmod minim labore nisi Lorem aliquip irure officia irure irure tempor culpa do aute pariatur quis",
      "name": "Dennis Sanchez Property"
    },
    "price": 172300,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Kingston",
      "propertyType": "Warehouse",
      "propertyFor": "Sale",
      "size": 9858,
      "bedrooms": 6,
      "price": 458948,
      "community": "Chapman Street",
      "rentType": "",
      "bathrooms": 2,
      "garages": 6
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Heater",
        "icon": "mdi-thermometer-high"
      }
    ],
    "bedrooms": "4 +",
    "description": {
      "description": "nisi minim labore adipisicing nostrud cillum ad nisi laborum velit elit sunt sit eu excepteur enim proident sint proident adipisicing veniam magna do velit do est do qui eu quis commodo magna mollit id laborum do enim amet minim voluptate ipsum sunt est consequat et pariatur excepteur commodo nisi deserunt fugiat labore aliqua adipisicing elit qui non cupidatat eiusmod non",
      "name": "Aguilar Gutierrez Property"
    },
    "price": 618383,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Westmoreland",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 2221,
      "bedrooms": 7,
      "price": 294208,
      "community": "Farrell Street",
      "rentType": "",
      "bathrooms": 9,
      "garages": 3
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Apartment"
  },
  {
    "parish": "Portland",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Generator",
        "icon": "mdi-flash"
      }
    ],
    "bedrooms": "2",
    "description": {
      "description": "duis aliquip labore Lorem tempor amet fugiat veniam officia anim mollit nostrud excepteur deserunt magna veniam incididunt aliqua et adipisicing reprehenderit nulla occaecat id anim pariatur labore velit amet quis et nostrud magna dolor esse qui esse commodo ex enim irure aliqua eu pariatur reprehenderit sunt exercitation ut est ex veniam eiusmod cillum est consectetur pariatur minim exercitation fugiat deserunt",
      "name": "Cathleen Savage Property"
    },
    "price": 47369,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 7403,
      "bedrooms": 6,
      "price": 553538,
      "community": "Alexander Street",
      "rentType": "",
      "bathrooms": 16,
      "garages": 16
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Air Conditioning",
        "icon": "mdi-air-filter"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "labore exercitation est non consequat in ullamco amet laborum consectetur eu laboris do qui eu nulla eiusmod incididunt magna in ipsum voluptate anim consectetur mollit tempor cillum cillum deserunt cillum ut exercitation commodo cupidatat cillum ea ea esse culpa consequat in laborum nostrud velit aute pariatur officia in velit voluptate est elit consequat anim eu excepteur ipsum sint culpa quis",
      "name": "Mcgowan Santos Property"
    },
    "price": 70695,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Trelawny",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 12591,
      "bedrooms": 17,
      "price": 602528,
      "community": "Parker Street",
      "rentType": "",
      "bathrooms": 2,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Townhouse"
  },
  {
    "parish": "Trelawny",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Parking",
        "icon": "mdi-car"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "excepteur excepteur cupidatat aliqua Lorem sint esse proident dolore consectetur irure dolor aute sunt veniam sint officia laborum pariatur in aliquip elit fugiat dolore et pariatur elit qui commodo ipsum id do sit pariatur irure sunt ex occaecat eiusmod esse ut nostrud anim laboris quis incididunt eu ut consequat mollit aliquip nisi culpa Lorem dolore non dolore anim commodo ullamco",
      "name": "Lavonne Zamora Property"
    },
    "price": 501847,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Hanover",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 4357,
      "bedrooms": 1,
      "price": 79947,
      "community": "White Street",
      "rentType": "",
      "bathrooms": 11,
      "garages": 15
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
  },
  {
    "parish": "St. Catherine",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Wifi",
        "icon": "mdi-wifi"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "non sint laboris incididunt velit veniam non mollit in dolore in sunt sint do magna dolor laborum ipsum proident velit velit sint aute ad ipsum incididunt exercitation tempor consectetur magna non ex occaecat velit nisi eiusmod aliqua ullamco nulla nisi qui ea voluptate irure aute nulla cupidatat velit commodo culpa duis dolor sint exercitation dolor sint ut in proident exercitation",
      "name": "Kelli Calderon Property"
    },
    "price": 641447,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. Thomas",
      "propertyType": "Commercial Building/Offices",
      "propertyFor": "Sale",
      "size": 8450,
      "bedrooms": 20,
      "price": 642212,
      "community": "Tyson Street",
      "rentType": "",
      "bathrooms": 19,
      "garages": 3
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
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
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Commercial Building/Offices"
  },
  {
    "parish": "Hanover",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Water Heater",
        "icon": "mdi-thermometer-high"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "aliqua sit sint occaecat qui enim duis adipisicing dolore quis ipsum voluptate tempor do anim aliqua fugiat non aliqua est ea sunt incididunt ex esse ad laboris officia ipsum fugiat culpa officia eiusmod non consequat veniam cupidatat est occaecat deserunt veniam aute nulla tempor voluptate anim enim qui consectetur labore labore ipsum dolore anim fugiat elit culpa consequat esse qui",
      "name": "Patrick Norman Property"
    },
    "price": 227630,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Trelawny",
      "propertyType": "House",
      "propertyFor": "Sale",
      "size": 17594,
      "bedrooms": 2,
      "price": 54212,
      "community": "Frazier Street",
      "rentType": "",
      "bathrooms": 17,
      "garages": 4
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "Clarendon",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Family Oriented",
        "icon": "mdi-home-heart"
      }
    ],
    "bedrooms": "1",
    "description": {
      "description": "in in sunt excepteur dolor cillum pariatur duis aute non enim irure dolore commodo labore magna enim pariatur ipsum anim et velit ad Lorem consectetur eu est fugiat ex proident est minim qui adipisicing consequat occaecat sint in eiusmod cupidatat irure cillum occaecat exercitation nisi sunt ad aute velit cupidatat eu sit culpa aliquip amet duis in Lorem id voluptate",
      "name": "Shari Hatfield Property"
    },
    "price": 49158,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "St. James",
      "propertyType": "Apartment",
      "propertyFor": "Sale",
      "size": 19209,
      "bedrooms": 14,
      "price": 250389,
      "community": "Ayala Street",
      "rentType": "",
      "bathrooms": 8,
      "garages": 2
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": true,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Factory"
  },
  {
    "parish": "St. James",
    timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
    "amenities": [
      {
        "title": "Grilled",
        "icon": "mdi-shield-home"
      }
    ],
    "bedrooms": "3",
    "description": {
      "description": "in ad cillum aliqua elit culpa deserunt laborum tempor duis do ipsum cupidatat dolor in sit incididunt enim veniam duis qui elit irure anim tempor reprehenderit commodo mollit non tempor esse eiusmod ad mollit proident aute sunt amet laboris nulla deserunt veniam ea nostrud aute occaecat adipisicing esse amet in ullamco fugiat cillum cillum nulla consequat cupidatat aute eu magna",
      "name": "Lancaster Cooley Property"
    },
    "price": 166098,
    "featured": false,
    "details": {
      "propertyMLS": "",
      "parish": "Manchester",
      "propertyType": "Townhouse",
      "propertyFor": "Sale",
      "size": 5648,
      "bedrooms": 20,
      "price": 215431,
      "community": "Mullen Street",
      "rentType": "",
      "bathrooms": 7,
      "garages": 10
    },
    "images": [
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      },
      {
        "fileName": "1633293204535_5.jpg",
        "src": "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    "tours": {
      "youtube": "",
      "matterport": ""
    },
    "verified": false,
    "uploader": "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    "propertyFor": "Sale",
    "type": "Farm/Agriculture"
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
