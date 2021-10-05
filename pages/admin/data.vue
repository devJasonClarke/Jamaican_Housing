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
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Park Near By",
              icon: "mdi-nature-people"
            }
          ],
          description: {
            description:
              "pariatur in eu consequat sint quis incididunt cillum irure ex consectetur nostrud officia deserunt consequat ea minim eiusmod eiusmod consequat elit sit minim qui non non qui amet laborum nostrud consectetur proident duis mollit aliqua consequat sit fugiat elit elit consequat nostrud officia id ut eiusmod incididunt irure reprehenderit veniam cupidatat et laboris occaecat eiusmod sit velit laboris tempor velit",
            name: "Humphrey Barrett Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 14033,
            bedrooms: 14,
            numberOfBedrooms: "",
            price: 44842557,
            community: "Horn Heights",
            rentType: "",
            bathrooms: 12,
            garages: 8
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Grilled",
              icon: "mdi-shield-home"
            }
          ],
          description: {
            description:
              "pariatur laborum in exercitation ex aliquip quis fugiat esse ipsum et enim sit laborum veniam cupidatat nisi elit officia mollit consequat excepteur proident quis officia ea aliquip eu enim Lorem est et do magna officia consequat et ullamco eu et occaecat do cillum ullamco labore id in quis consequat in excepteur aute aliqua aliqua sunt ullamco nostrud laboris ex labore",
            name: "Quinn Peterson Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 18504,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 39572968,
            community: "Rodriguez Heights",
            rentType: "",
            bathrooms: 20,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "ea dolore id quis in irure est exercitation pariatur quis officia ex incididunt cillum ea enim proident dolore mollit ullamco ut minim sint irure amet occaecat quis irure et amet enim excepteur cillum ad consectetur occaecat esse consectetur aute ut amet adipisicing eiusmod sint labore amet eu qui consectetur Lorem eu enim eiusmod est id id duis anim veniam cillum",
            name: "Paige Bauer Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "House",
            propertyFor: "Sale",
            size: 6766,
            bedrooms: 9,
            numberOfBedrooms: "",
            price: 65898751,
            community: "Daniels Heights",
            rentType: "",
            bathrooms: 9,
            garages: 3
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Schools Near By",
              icon: "mdi-school"
            }
          ],
          description: {
            description:
              "fugiat fugiat aliquip pariatur ex incididunt id voluptate occaecat do officia duis fugiat ullamco ex laborum veniam amet esse in cillum eu voluptate reprehenderit aute ipsum nisi amet mollit nisi consequat amet mollit exercitation nisi eiusmod dolore excepteur aliqua mollit nisi ipsum in mollit ullamco do laborum irure culpa mollit eiusmod eiusmod fugiat sunt id deserunt commodo quis ipsum veniam",
            name: "Valerie Lang Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 7326,
            bedrooms: 2,
            numberOfBedrooms: "",
            price: 37377189,
            community: "Oneill Heights",
            rentType: "",
            bathrooms: 10,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Church Near By",
              icon: "mdi-church"
            }
          ],
          description: {
            description:
              "ut est nulla excepteur amet exercitation aliquip quis incididunt ex dolor exercitation sunt id dolor minim amet et consectetur elit qui deserunt laborum est magna velit minim aliqua et voluptate excepteur incididunt reprehenderit irure eu nulla mollit cillum aliquip ullamco exercitation eu non ipsum consectetur cillum deserunt aute ullamco ut nulla irure esse cupidatat qui laboris sunt voluptate consectetur adipisicing",
            name: "Castillo Murphy Property"
          },
          details: {
            propertyId: "",
            parish: "Portland",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 3240,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 48366340,
            community: "Flynn Heights",
            rentType: "",
            bathrooms: 5,
            garages: 6
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Church Near By",
              icon: "mdi-church"
            }
          ],
          description: {
            description:
              "commodo aliqua ut excepteur in ullamco culpa officia magna occaecat anim laboris eu deserunt laborum ad esse voluptate Lorem cillum ad dolore anim duis exercitation amet irure mollit ullamco reprehenderit esse incididunt do labore Lorem non culpa nisi voluptate tempor voluptate nisi aliquip occaecat laborum dolore laborum ea et mollit mollit anim fugiat nulla nostrud dolore ad sint irure commodo",
            name: "Cooke Norton Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 2075,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 75070049,
            community: "Matthews Heights",
            rentType: "",
            bathrooms: 9,
            garages: 5
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Grilled",
              icon: "mdi-shield-home"
            }
          ],
          description: {
            description:
              "dolor labore sit ullamco anim magna eiusmod in eiusmod ex voluptate fugiat dolore nostrud cupidatat qui Lorem anim velit amet quis commodo exercitation tempor Lorem in deserunt do excepteur cupidatat non in qui id id anim sit excepteur est amet enim labore ex et consectetur esse magna eu cillum velit id exercitation labore ipsum et excepteur ipsum cupidatat enim laborum",
            name: "Wilkins Finley Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 16880,
            bedrooms: 19,
            numberOfBedrooms: "",
            price: 55465200,
            community: "Caldwell Heights",
            rentType: "",
            bathrooms: 10,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Tennis Court",
              icon: "mdi-tennis"
            }
          ],
          description: {
            description:
              "id anim voluptate sit incididunt irure proident aute ea consequat ex aute officia fugiat consectetur do labore quis exercitation elit voluptate sit laboris dolor eiusmod tempor labore cillum officia cillum est aliquip sunt dolor reprehenderit ad nostrud voluptate nostrud labore eiusmod fugiat anim id excepteur voluptate sint dolore elit incididunt deserunt sint amet commodo amet officia veniam sit quis aliquip",
            name: "Carlson Lucas Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 19312,
            bedrooms: 14,
            numberOfBedrooms: "",
            price: 60470681,
            community: "Pruitt Heights",
            rentType: "",
            bathrooms: 9,
            garages: 9
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Smart Home",
              icon: "mdi-home-assistant"
            }
          ],
          description: {
            description:
              "ad aute ea commodo consequat cupidatat consequat sit elit nisi velit sit esse pariatur ea tempor irure culpa exercitation deserunt in ea elit ad mollit nulla cupidatat Lorem et aliquip aliqua fugiat Lorem eiusmod exercitation pariatur excepteur aute in in proident ipsum duis ad excepteur officia et ullamco quis anim ea mollit exercitation deserunt exercitation sit cillum tempor dolor nulla",
            name: "Tabitha David Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 3692,
            bedrooms: 3,
            numberOfBedrooms: "",
            price: 61579026,
            community: "Jimenez Heights",
            rentType: "",
            bathrooms: 12,
            garages: 1
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Smart Home",
              icon: "mdi-home-assistant"
            }
          ],
          description: {
            description:
              "dolor labore minim fugiat laborum in et consequat magna sit ut nisi laboris reprehenderit aliqua consequat non cillum mollit ipsum ullamco elit velit culpa cillum adipisicing adipisicing sunt adipisicing et est pariatur aliquip proident labore in labore magna laboris tempor ipsum id cillum labore tempor incididunt sit qui amet elit id reprehenderit aute velit Lorem reprehenderit labore laborum do id",
            name: "Munoz Forbes Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 18216,
            bedrooms: 20,
            numberOfBedrooms: "",
            price: 29781593,
            community: "Battle Heights",
            rentType: "",
            bathrooms: 4,
            garages: 7
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Parking",
              icon: "mdi-car"
            }
          ],
          description: {
            description:
              "est eu velit exercitation laborum amet sit veniam sit laboris culpa adipisicing cillum enim Lorem minim fugiat labore laboris eu qui quis sit anim esse incididunt ea Lorem Lorem amet laboris mollit do do culpa esse consequat commodo dolore Lorem quis ex dolore deserunt in do elit ut ut cupidatat nisi veniam officia non sit est non ea veniam fugiat",
            name: "Edna Stephens Property"
          },
          details: {
            propertyId: "",
            parish: "St. Elizabeth",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 5023,
            bedrooms: 12,
            numberOfBedrooms: "",
            price: 47293443,
            community: "Compton Heights",
            rentType: "",
            bathrooms: 1,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Movie Theater Near By",
              icon: "mdi-theater"
            }
          ],
          description: {
            description:
              "id irure exercitation quis dolore consectetur quis pariatur proident dolore adipisicing enim adipisicing veniam ad veniam consequat reprehenderit aute reprehenderit elit Lorem aliqua qui minim fugiat duis tempor officia irure est aute minim sunt et sit sint mollit sit ea id ullamco sit excepteur reprehenderit tempor aliquip officia mollit excepteur incididunt sunt laborum mollit amet amet ullamco incididunt Lorem occaecat",
            name: "Camille Levy Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 13556,
            bedrooms: 16,
            numberOfBedrooms: "",
            price: 79828155,
            community: "Melendez Heights",
            rentType: "",
            bathrooms: 3,
            garages: 6
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Parking",
              icon: "mdi-car"
            }
          ],
          description: {
            description:
              "irure veniam eu excepteur excepteur voluptate ad esse ea veniam adipisicing excepteur dolor ea aute id labore dolor id velit minim occaecat Lorem velit reprehenderit ullamco non amet qui nostrud do do magna veniam incididunt ex eiusmod ut aliqua sunt aliquip pariatur irure minim voluptate nulla occaecat duis proident amet anim anim adipisicing officia laborum officia mollit veniam id velit",
            name: "Jody Stanton Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 8073,
            bedrooms: 13,
            numberOfBedrooms: "",
            price: 49421487,
            community: "Moss Heights",
            rentType: "",
            bathrooms: 1,
            garages: 17
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Tennis Court",
              icon: "mdi-tennis"
            }
          ],
          description: {
            description:
              "est duis sunt ipsum esse qui tempor esse ea adipisicing et qui laborum in tempor dolore est minim nulla excepteur nisi minim ut velit non laborum ex sunt sit ipsum do dolore exercitation nisi Lorem ad do enim excepteur dolore esse adipisicing velit minim ullamco laboris mollit do qui duis velit ea velit consectetur tempor do adipisicing do cupidatat et",
            name: "Mercado England Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Warehouse",
            propertyFor: "Sale",
            size: 15775,
            bedrooms: 14,
            numberOfBedrooms: "",
            price: 50225655,
            community: "Dean Heights",
            rentType: "",
            bathrooms: 16,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Hospital Near By",
              icon: "mdi-hospital-building"
            }
          ],
          description: {
            description:
              "velit do mollit duis do tempor Lorem excepteur et aliqua proident officia non et velit sunt proident tempor dolor veniam enim esse consequat anim incididunt labore enim irure pariatur sint proident cillum deserunt nisi mollit nisi ad occaecat do anim aliquip velit excepteur Lorem deserunt sit sit aliqua reprehenderit eiusmod pariatur irure pariatur eiusmod culpa laborum non eu in eiusmod",
            name: "Foreman Delgado Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 3937,
            bedrooms: 1,
            numberOfBedrooms: "",
            price: 48996586,
            community: "Fuentes Heights",
            rentType: "",
            bathrooms: 13,
            garages: 13
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Water Heater",
              icon: "mdi-thermometer-high"
            }
          ],
          description: {
            description:
              "qui minim consequat laboris excepteur voluptate id incididunt adipisicing ex consequat velit deserunt elit pariatur nostrud aliqua id fugiat labore consectetur do eiusmod eu dolore eu mollit deserunt nostrud dolor nisi nostrud eiusmod excepteur dolor qui sint veniam culpa nostrud esse esse qui ullamco eiusmod labore esse ut ut ipsum commodo dolor est nostrud amet laboris enim fugiat anim ipsum",
            name: "Mcmahon Newman Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 6607,
            bedrooms: 9,
            numberOfBedrooms: "",
            price: 79707161,
            community: "Osborne Heights",
            rentType: "",
            bathrooms: 3,
            garages: 13
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Church Near By",
              icon: "mdi-church"
            }
          ],
          description: {
            description:
              "commodo cillum aliquip do sint excepteur amet sunt incididunt deserunt esse aliquip laboris exercitation sunt elit aliqua ut in proident culpa occaecat excepteur et excepteur anim sint occaecat reprehenderit non ullamco quis ipsum ex in ad duis commodo in Lorem nisi enim amet velit duis aliquip duis esse consectetur culpa veniam aute amet ad reprehenderit dolore nisi tempor culpa elit",
            name: "Whitley Gill Property"
          },
          details: {
            propertyId: "",
            parish: "Kingston",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 16331,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 89218894,
            community: "Holder Heights",
            rentType: "",
            bathrooms: 19,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Hospital Near By",
              icon: "mdi-hospital-building"
            }
          ],
          description: {
            description:
              "magna Lorem adipisicing voluptate mollit eu irure officia do eiusmod reprehenderit culpa consectetur voluptate esse sunt irure veniam aute nulla mollit minim ad dolore mollit nulla ad nisi aliqua ipsum consectetur velit ea excepteur consectetur do adipisicing ut et laborum aliquip ea tempor ex officia excepteur incididunt sit anim in culpa ad dolore fugiat id duis quis excepteur nisi veniam",
            name: "Hernandez Sheppard Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 3699,
            bedrooms: 9,
            numberOfBedrooms: "",
            price: 65948591,
            community: "Pierce Heights",
            rentType: "",
            bathrooms: 14,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Grilled",
              icon: "mdi-shield-home"
            }
          ],
          description: {
            description:
              "minim exercitation dolore irure sint nisi fugiat officia occaecat excepteur quis sint aute proident sunt magna deserunt nisi do adipisicing officia labore et exercitation labore excepteur esse occaecat ex veniam laboris officia quis labore velit proident id velit laborum do consectetur laborum velit consectetur culpa tempor est aliqua velit sint non duis sint do laboris in cupidatat veniam nulla nulla",
            name: "Hurst Kinney Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "House",
            propertyFor: "Sale",
            size: 18681,
            bedrooms: 17,
            numberOfBedrooms: "",
            price: 12569698,
            community: "Hendrix Heights",
            rentType: "",
            bathrooms: 13,
            garages: 8
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "consequat sunt exercitation minim reprehenderit incididunt proident quis sint ullamco in nisi aliqua cillum aute laborum id occaecat excepteur sit consectetur est culpa aliqua dolore cupidatat eiusmod nulla do non esse esse id ullamco quis pariatur velit et ipsum labore duis dolore laboris irure pariatur esse laboris tempor reprehenderit pariatur aliqua consequat enim sunt aliqua duis non exercitation nisi exercitation",
            name: "Brewer Cummings Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 8346,
            bedrooms: 19,
            numberOfBedrooms: "",
            price: 91388797,
            community: "Conrad Heights",
            rentType: "",
            bathrooms: 15,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Swimming Pool",
              icon: "mdi-pool"
            }
          ],
          description: {
            description:
              "non mollit magna exercitation minim cupidatat aute tempor mollit ullamco fugiat culpa deserunt cillum in eiusmod et aliquip proident ut ex quis non anim reprehenderit ut id esse ut in quis cupidatat irure est excepteur proident mollit qui minim amet duis non tempor deserunt aliqua Lorem aliqua proident nisi ea do elit dolore in ipsum laboris do velit id nostrud",
            name: "Sara Gallagher Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 15170,
            bedrooms: 13,
            numberOfBedrooms: "",
            price: 63285041,
            community: "Richardson Heights",
            rentType: "",
            bathrooms: 7,
            garages: 7
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Park Near By",
              icon: "mdi-nature-people"
            }
          ],
          description: {
            description:
              "sint irure irure dolore reprehenderit dolore sint pariatur consequat voluptate ut labore nulla nulla culpa nulla in consequat aliqua occaecat aliqua voluptate deserunt eu qui qui reprehenderit ea dolor anim velit velit proident voluptate id nulla in aliquip sit in non cillum non occaecat nostrud ipsum qui ad quis exercitation amet cillum consequat ullamco est velit eu ad nostrud incididunt",
            name: "Allyson French Property"
          },
          details: {
            propertyId: "",
            parish: "St. Andrew",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 2088,
            bedrooms: 14,
            numberOfBedrooms: "",
            price: 84067293,
            community: "Vaughn Heights",
            rentType: "",
            bathrooms: 14,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "24 Hour Security",
              icon: "mdi-cctv"
            }
          ],
          description: {
            description:
              "laborum amet aute consectetur excepteur est aliquip et officia et ullamco aliquip ullamco cupidatat minim velit do nulla exercitation exercitation ut ipsum incididunt Lorem consectetur ut qui sint ullamco laboris id laborum nisi excepteur ea voluptate est Lorem cillum tempor laborum sit occaecat laboris quis irure eiusmod aliqua do voluptate nostrud aliquip commodo ea consequat laborum eu non reprehenderit anim",
            name: "Bishop Pollard Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 5309,
            bedrooms: 10,
            numberOfBedrooms: "",
            price: 89851280,
            community: "Young Heights",
            rentType: "",
            bathrooms: 20,
            garages: 5
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Air Conditioning",
              icon: "mdi-air-filter"
            }
          ],
          description: {
            description:
              "nostrud fugiat quis est id sunt ad est adipisicing ipsum ullamco non nostrud aliqua incididunt sint laboris non Lorem adipisicing aliquip aute mollit et nostrud velit amet consectetur nisi laborum deserunt quis ut anim sint ea duis ea pariatur excepteur aliquip dolor et qui amet eiusmod proident et mollit nostrud dolore deserunt cillum consectetur occaecat anim fugiat cillum aute duis",
            name: "Kaye Browning Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 19973,
            bedrooms: 17,
            numberOfBedrooms: "",
            price: 79063228,
            community: "Morse Heights",
            rentType: "",
            bathrooms: 9,
            garages: 7
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Cable TV ",
              icon: "mdi-television"
            }
          ],
          description: {
            description:
              "sint pariatur enim laborum et tempor adipisicing id ullamco qui eiusmod ut commodo exercitation cillum occaecat est nisi Lorem qui ipsum ad enim amet Lorem dolor exercitation incididunt incididunt do nostrud ipsum cupidatat minim minim sunt amet cupidatat dolore voluptate duis qui ad mollit aute qui do adipisicing ullamco sint ullamco cillum eiusmod aute amet eiusmod voluptate id sunt veniam",
            name: "Robles Kline Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 16604,
            bedrooms: 18,
            numberOfBedrooms: "",
            price: 90112011,
            community: "Hartman Heights",
            rentType: "",
            bathrooms: 11,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Schools Near By",
              icon: "mdi-school"
            }
          ],
          description: {
            description:
              "cupidatat dolor do enim consectetur cupidatat in est ea pariatur ipsum laborum enim dolore labore in exercitation tempor mollit adipisicing ut aliqua officia anim dolore aliqua enim esse ex elit nostrud adipisicing ipsum sunt culpa qui id irure enim fugiat incididunt esse eiusmod aliquip laboris commodo laborum ut ut ea laboris sit eu sint id dolor elit in nisi adipisicing",
            name: "Maura Chaney Property"
          },
          details: {
            propertyId: "",
            parish: "Kingston",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 17622,
            bedrooms: 14,
            numberOfBedrooms: "",
            price: 58954964,
            community: "Cross Heights",
            rentType: "",
            bathrooms: 8,
            garages: 10
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Smart Home",
              icon: "mdi-home-assistant"
            }
          ],
          description: {
            description:
              "consectetur anim dolore sit cupidatat sit enim id irure sit do deserunt eu excepteur aute ea incididunt eiusmod occaecat ex aliqua amet ex mollit nulla labore in mollit laboris est voluptate tempor veniam excepteur aute eiusmod amet nisi cupidatat commodo id velit in cillum aliquip nulla qui adipisicing nisi nulla veniam occaecat officia cillum dolore cupidatat est nostrud do consequat",
            name: "Roxanne Donaldson Property"
          },
          details: {
            propertyId: "",
            parish: "Hanover",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 12337,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 29482253,
            community: "Mcdaniel Heights",
            rentType: "",
            bathrooms: 1,
            garages: 12
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Swimming Pool",
              icon: "mdi-pool"
            }
          ],
          description: {
            description:
              "excepteur laborum velit commodo non consectetur laboris pariatur ipsum velit cupidatat irure voluptate excepteur eiusmod labore incididunt anim laborum deserunt do ex anim consectetur ipsum est ullamco laboris mollit consequat enim elit ad voluptate anim reprehenderit culpa do dolore nulla amet veniam nostrud dolor eu sit magna sint in culpa deserunt amet veniam ad non labore ut amet culpa pariatur",
            name: "Ferrell Sanchez Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 19098,
            bedrooms: 8,
            numberOfBedrooms: "",
            price: 82233205,
            community: "Rocha Heights",
            rentType: "",
            bathrooms: 11,
            garages: 17
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Park Near By",
              icon: "mdi-nature-people"
            }
          ],
          description: {
            description:
              "amet laborum mollit amet ullamco aliquip voluptate velit est fugiat dolore ex cillum excepteur qui et eu aliqua adipisicing sunt aliqua laboris qui ea reprehenderit qui dolor occaecat in eiusmod aliquip voluptate id reprehenderit sit est cillum in Lorem nulla deserunt consectetur adipisicing incididunt mollit consequat voluptate ipsum aute cillum sunt qui qui officia officia sint excepteur cillum consequat fugiat",
            name: "Tracie Dixon Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 13444,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 27319934,
            community: "Miller Heights",
            rentType: "",
            bathrooms: 11,
            garages: 12
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Hospital Near By",
              icon: "mdi-hospital-building"
            }
          ],
          description: {
            description:
              "velit elit deserunt sit pariatur consequat elit dolore ad tempor magna consectetur id dolor in fugiat labore labore dolore esse proident proident incididunt aliqua est sunt eiusmod sit non reprehenderit cillum aliqua ut proident excepteur proident velit enim est proident eu veniam in pariatur ullamco ut est ipsum minim irure cupidatat nulla nostrud proident deserunt ipsum sunt velit sit ipsum",
            name: "Palmer Frank Property"
          },
          details: {
            propertyId: "",
            parish: "St. Elizabeth",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 18158,
            bedrooms: 17,
            numberOfBedrooms: "",
            price: 39970121,
            community: "Gray Heights",
            rentType: "",
            bathrooms: 20,
            garages: 12
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Church Near By",
              icon: "mdi-church"
            }
          ],
          description: {
            description:
              "ut ipsum qui deserunt voluptate est fugiat est ullamco Lorem ad excepteur laborum minim sint occaecat est adipisicing magna Lorem magna cupidatat fugiat ea nisi pariatur pariatur enim ut minim irure quis est nostrud nisi ea anim officia ad elit amet enim aute ullamco consectetur nulla sunt exercitation nostrud sint aliqua mollit occaecat dolor ad proident ad tempor nulla et",
            name: "Ophelia Branch Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 9798,
            bedrooms: 7,
            numberOfBedrooms: "",
            price: 91280059,
            community: "Vazquez Heights",
            rentType: "",
            bathrooms: 15,
            garages: 4
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gated Community",
              icon: "mdi-security"
            }
          ],
          description: {
            description:
              "elit reprehenderit Lorem laborum in sunt id consequat amet sit eiusmod non duis Lorem minim cupidatat culpa cillum reprehenderit est quis amet elit sint eu ea nulla sint officia et aliquip exercitation Lorem elit commodo esse in ut labore aute ut consequat excepteur dolor Lorem nisi pariatur eu sint eu officia labore proident deserunt ad anim adipisicing ea excepteur pariatur",
            name: "Silva Nixon Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 5161,
            bedrooms: 3,
            numberOfBedrooms: "",
            price: 20707182,
            community: "Ware Heights",
            rentType: "",
            bathrooms: 5,
            garages: 12
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Parking",
              icon: "mdi-car"
            }
          ],
          description: {
            description:
              "aute pariatur tempor id id consequat laboris consequat amet magna ex velit dolor nulla duis amet exercitation officia id ad veniam enim mollit tempor magna nostrud id elit velit non voluptate cillum nulla sunt adipisicing anim mollit quis amet culpa ut aliqua amet laboris ullamco nisi culpa magna culpa dolore pariatur deserunt nostrud eu quis duis incididunt sint cupidatat dolor",
            name: "Lina Farrell Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 18391,
            bedrooms: 6,
            numberOfBedrooms: "",
            price: 53351195,
            community: "Mccoy Heights",
            rentType: "",
            bathrooms: 5,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Basketball Court",
              icon: "mdi-basketball"
            }
          ],
          description: {
            description:
              "cupidatat commodo culpa sit commodo aliqua excepteur aute ut officia esse magna est pariatur ipsum sit consequat velit occaecat esse culpa tempor elit eu irure do laboris dolor in labore proident pariatur aliqua proident occaecat Lorem culpa sunt ea amet officia nulla occaecat pariatur irure eu aliquip consequat culpa in consectetur enim ea sint nostrud nostrud quis ipsum velit esse",
            name: "Copeland Fulton Property"
          },
          details: {
            propertyId: "",
            parish: "St. Elizabeth",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 16056,
            bedrooms: 17,
            numberOfBedrooms: "",
            price: 74208386,
            community: "Buck Heights",
            rentType: "",
            bathrooms: 3,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Family Oriented",
              icon: "mdi-home-heart"
            }
          ],
          description: {
            description:
              "laborum ullamco minim reprehenderit Lorem consectetur consectetur nisi esse exercitation ex cillum aliquip incididunt deserunt aliquip culpa et tempor dolore excepteur tempor id occaecat incididunt culpa in dolore est do elit aute consectetur proident labore ipsum amet nostrud sit aliqua magna dolore deserunt pariatur deserunt aliquip tempor tempor non eu nostrud anim commodo dolor id ullamco dolor deserunt elit occaecat",
            name: "Gladys Ortega Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 7338,
            bedrooms: 3,
            numberOfBedrooms: "",
            price: 18427348,
            community: "Blake Heights",
            rentType: "",
            bathrooms: 5,
            garages: 12
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gated Community",
              icon: "mdi-security"
            }
          ],
          description: {
            description:
              "consequat ea sint non non ea adipisicing ex et aliquip cillum sunt est labore velit eiusmod sunt do mollit deserunt in reprehenderit velit ea esse culpa officia non occaecat cupidatat qui non velit aliquip ad laborum nostrud deserunt non anim cillum ea incididunt labore exercitation laborum ex eu ea nisi consectetur qui do aliquip dolor Lorem officia ut duis id",
            name: "Lancaster Stanley Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 17940,
            bedrooms: 20,
            numberOfBedrooms: "",
            price: 82278906,
            community: "Boyle Heights",
            rentType: "",
            bathrooms: 2,
            garages: 4
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gated Community",
              icon: "mdi-security"
            }
          ],
          description: {
            description:
              "eu exercitation nulla consequat fugiat laboris amet sit non anim tempor sunt sit aliqua aliqua reprehenderit Lorem sit velit enim enim irure non culpa dolor excepteur quis sint veniam reprehenderit irure fugiat sint anim ut fugiat irure eiusmod proident occaecat sint adipisicing consequat do amet dolor esse voluptate aute duis incididunt adipisicing officia eu Lorem qui laboris velit veniam nulla",
            name: "Hilda Whitfield Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "House",
            propertyFor: "Sale",
            size: 4106,
            bedrooms: 10,
            numberOfBedrooms: "",
            price: 47561580,
            community: "Waller Heights",
            rentType: "",
            bathrooms: 4,
            garages: 17
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Cable TV ",
              icon: "mdi-television"
            }
          ],
          description: {
            description:
              "eu reprehenderit aute cupidatat magna magna aliquip consectetur ex irure cillum exercitation ex deserunt commodo dolor esse nulla magna ut proident laboris duis ex culpa dolor excepteur ad ipsum pariatur fugiat consectetur laborum occaecat ut anim aliqua in fugiat ex nulla qui dolore irure minim sint nisi anim commodo ut minim qui elit sint tempor mollit in nostrud id culpa",
            name: "Donaldson Hester Property"
          },
          details: {
            propertyId: "",
            parish: "Hanover",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 11393,
            bedrooms: 16,
            numberOfBedrooms: "",
            price: 76890350,
            community: "Molina Heights",
            rentType: "",
            bathrooms: 13,
            garages: 5
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Tennis Court",
              icon: "mdi-tennis"
            }
          ],
          description: {
            description:
              "in voluptate commodo ad dolore consectetur id reprehenderit et reprehenderit aliqua pariatur fugiat velit ipsum est ea officia elit consequat aliqua enim laborum aliquip proident officia aliquip minim enim laborum ipsum aute non do elit eiusmod labore irure minim quis et aute consequat sunt fugiat nisi non Lorem nostrud est laboris ut magna id cupidatat ea irure nulla ex duis",
            name: "Karla Savage Property"
          },
          details: {
            propertyId: "",
            parish: "St. Andrew",
            propertyType: "House",
            propertyFor: "Sale",
            size: 17004,
            bedrooms: 6,
            numberOfBedrooms: "",
            price: 49627443,
            community: "Duncan Heights",
            rentType: "",
            bathrooms: 19,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Generator",
              icon: "mdi-flash"
            }
          ],
          description: {
            description:
              "officia excepteur in aliqua do tempor sunt voluptate sit dolore consectetur voluptate qui anim voluptate ipsum nisi in veniam aliqua laborum duis sint voluptate enim reprehenderit commodo magna anim culpa et laborum excepteur voluptate mollit aute laborum commodo deserunt proident ipsum fugiat dolore incididunt exercitation deserunt et sit tempor velit duis in sit ullamco consequat dolor magna qui et enim",
            name: "Gail Sweeney Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 2701,
            bedrooms: 17,
            numberOfBedrooms: "",
            price: 63302717,
            community: "Donovan Heights",
            rentType: "",
            bathrooms: 17,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Basketball Court",
              icon: "mdi-basketball"
            }
          ],
          description: {
            description:
              "nulla id proident incididunt commodo aute minim cupidatat magna exercitation ad nulla dolore irure do ut aliquip quis labore veniam laboris amet officia enim consectetur consectetur ut exercitation aliqua laboris dolore nulla aliquip aute eu enim adipisicing cupidatat qui officia velit anim exercitation commodo irure officia laborum reprehenderit ut aute ullamco aute qui pariatur aute excepteur nostrud duis ullamco dolor",
            name: "Audra Simpson Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 14187,
            bedrooms: 19,
            numberOfBedrooms: "",
            price: 52631914,
            community: "Mann Heights",
            rentType: "",
            bathrooms: 14,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gym",
              icon: "mdi-dumbbell"
            }
          ],
          description: {
            description:
              "eu ullamco aliquip id consectetur in non cupidatat deserunt minim aliquip cillum fugiat eu esse irure elit sint commodo labore voluptate ipsum cillum fugiat exercitation exercitation ad sint amet deserunt ut esse veniam aliqua aliqua ipsum cupidatat et duis sunt nulla dolor id deserunt pariatur excepteur dolore sunt sit labore nostrud nulla nostrud voluptate mollit eiusmod commodo cillum ea commodo",
            name: "Abbott Buckner Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 6138,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 83473054,
            community: "Gonzalez Heights",
            rentType: "",
            bathrooms: 3,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Smart Home",
              icon: "mdi-home-assistant"
            }
          ],
          description: {
            description:
              "dolore ea enim aliqua cupidatat Lorem magna pariatur dolore id velit exercitation occaecat sint enim laboris elit aliqua et amet amet consequat pariatur occaecat eu minim esse dolor minim aliqua et aliqua Lorem ex ea consectetur sint aliqua et enim eiusmod occaecat dolore aliquip eu dolore laboris irure amet ut aute et in quis ex commodo consectetur irure do nostrud",
            name: "Oneal Barlow Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 15004,
            bedrooms: 3,
            numberOfBedrooms: "",
            price: 15063264,
            community: "Bryan Heights",
            rentType: "",
            bathrooms: 19,
            garages: 9
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Grilled",
              icon: "mdi-shield-home"
            }
          ],
          description: {
            description:
              "nostrud laborum deserunt sit minim anim nisi esse id nostrud mollit id non eu nostrud irure consequat ullamco ut mollit laboris magna in ad reprehenderit Lorem aliqua amet esse occaecat irure laborum sunt cillum minim velit do commodo exercitation occaecat fugiat amet incididunt tempor do ipsum dolore aliqua exercitation consequat aliqua anim exercitation in cupidatat eu pariatur labore ut aliquip",
            name: "Lily Barry Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 6888,
            bedrooms: 11,
            numberOfBedrooms: "",
            price: 67026067,
            community: "Elliott Heights",
            rentType: "",
            bathrooms: 11,
            garages: 13
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Family Oriented",
              icon: "mdi-home-heart"
            }
          ],
          description: {
            description:
              "est elit elit minim fugiat commodo nostrud veniam labore excepteur ipsum culpa eu cupidatat laborum dolore proident dolore irure ipsum ipsum proident sit nostrud amet dolore ad esse do laboris laborum voluptate do cillum ad qui irure non duis incididunt anim ut deserunt sunt in voluptate incididunt ipsum excepteur cillum id in ad aute laboris labore exercitation aliqua magna non",
            name: "Lucille Sargent Property"
          },
          details: {
            propertyId: "",
            parish: "Hanover",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 19623,
            bedrooms: 2,
            numberOfBedrooms: "",
            price: 15167453,
            community: "Moses Heights",
            rentType: "",
            bathrooms: 8,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Hospital Near By",
              icon: "mdi-hospital-building"
            }
          ],
          description: {
            description:
              "aliquip enim eu in dolor minim magna in qui nisi voluptate ullamco magna aliquip Lorem qui incididunt enim deserunt sit culpa nulla ex cupidatat elit veniam non reprehenderit commodo cillum dolore ad magna excepteur aute ea minim ipsum quis ipsum incididunt irure sit excepteur nulla minim ad tempor proident esse proident cupidatat minim officia esse dolor aliquip sint magna irure",
            name: "Christie Swanson Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 9667,
            bedrooms: 9,
            numberOfBedrooms: "",
            price: 60834208,
            community: "Downs Heights",
            rentType: "",
            bathrooms: 20,
            garages: 10
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Schools Near By",
              icon: "mdi-school"
            }
          ],
          description: {
            description:
              "non commodo proident cupidatat fugiat fugiat sit deserunt ea non duis velit ipsum officia mollit anim tempor et eiusmod qui laborum reprehenderit fugiat aliquip dolor occaecat proident incididunt ut nulla dolore in enim ex ut consequat reprehenderit dolor in ipsum ex enim tempor elit cillum elit consectetur cillum commodo qui proident laborum qui velit duis in et reprehenderit enim ea",
            name: "Griffin Mcclain Property"
          },
          details: {
            propertyId: "",
            parish: "Hanover",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 6813,
            bedrooms: 10,
            numberOfBedrooms: "",
            price: 72260870,
            community: "Craig Heights",
            rentType: "",
            bathrooms: 19,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Movie Theater Near By",
              icon: "mdi-theater"
            }
          ],
          description: {
            description:
              "mollit adipisicing consequat deserunt reprehenderit et et occaecat adipisicing esse sit laboris ipsum fugiat non tempor velit ea id nostrud aliquip voluptate aliquip ea anim est officia laborum eiusmod nulla consequat minim aliquip incididunt velit proident incididunt pariatur aliqua nostrud mollit nulla dolor et consequat tempor do aliqua consequat laboris reprehenderit occaecat aute nulla sunt ullamco anim anim ut elit",
            name: "Mccormick Price Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Warehouse",
            propertyFor: "Sale",
            size: 13695,
            bedrooms: 1,
            numberOfBedrooms: "",
            price: 12569293,
            community: "Vincent Heights",
            rentType: "",
            bathrooms: 5,
            garages: 4
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gated Community",
              icon: "mdi-security"
            }
          ],
          description: {
            description:
              "culpa laborum do proident cupidatat consectetur non nulla tempor proident Lorem elit nulla excepteur ut tempor et magna do sit qui sint laboris dolore eu nisi dolor minim laboris occaecat enim cillum Lorem duis eiusmod fugiat aliqua culpa sunt quis labore est velit fugiat cupidatat adipisicing labore eu dolore dolor commodo ex sit non dolor exercitation ex exercitation sint Lorem",
            name: "Shields Lloyd Property"
          },
          details: {
            propertyId: "",
            parish: "St. Elizabeth",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 8885,
            bedrooms: 16,
            numberOfBedrooms: "",
            price: 82271675,
            community: "Gordon Heights",
            rentType: "",
            bathrooms: 4,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Park Near By",
              icon: "mdi-nature-people"
            }
          ],
          description: {
            description:
              "ex in esse veniam fugiat deserunt voluptate labore voluptate magna tempor consectetur excepteur eiusmod enim nulla incididunt voluptate adipisicing do tempor consectetur nisi irure ad ut magna ad minim commodo consectetur commodo irure enim consectetur sint do labore anim culpa eu culpa labore est ullamco commodo ex dolore ipsum esse voluptate proident elit fugiat laborum in elit in et excepteur",
            name: "Lucas Moreno Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 19684,
            bedrooms: 14,
            numberOfBedrooms: "",
            price: 35466135,
            community: "Alexander Heights",
            rentType: "",
            bathrooms: 11,
            garages: 2
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "aute proident nostrud qui consectetur aliquip do velit incididunt id ut nulla duis enim consequat nulla eu reprehenderit ea Lorem laboris tempor eu fugiat officia ipsum incididunt exercitation cupidatat do excepteur elit ipsum adipisicing irure amet consectetur aliqua enim tempor laborum id fugiat officia labore ad voluptate laborum ad eiusmod voluptate proident laboris sunt minim non et ex incididunt et",
            name: "Pace Bernard Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 7065,
            bedrooms: 18,
            numberOfBedrooms: "",
            price: 36459760,
            community: "Cortez Heights",
            rentType: "",
            bathrooms: 1,
            garages: 3
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Movie Theater Near By",
              icon: "mdi-theater"
            }
          ],
          description: {
            description:
              "elit anim enim elit quis esse dolor mollit pariatur veniam amet veniam nisi adipisicing et deserunt tempor id exercitation do consectetur fugiat culpa ullamco Lorem consequat culpa ex sint dolor aute labore sint eu amet nostrud sit cillum occaecat tempor dolor et aliqua ipsum tempor in nostrud id ullamco aliquip dolore amet ipsum reprehenderit fugiat voluptate aliquip esse adipisicing ut",
            name: "Tanya Ball Property"
          },
          details: {
            propertyId: "",
            parish: "Portland",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 14736,
            bedrooms: 8,
            numberOfBedrooms: "",
            price: 59330536,
            community: "Dominguez Heights",
            rentType: "",
            bathrooms: 8,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gym",
              icon: "mdi-dumbbell"
            }
          ],
          description: {
            description:
              "officia nostrud exercitation non officia cillum id aute minim deserunt voluptate velit veniam id anim fugiat amet occaecat aliquip in eu labore labore tempor veniam in amet cupidatat ipsum proident aliquip et aliqua aute elit ullamco commodo est esse elit fugiat ut eu deserunt pariatur non anim sunt laborum officia eiusmod sint cupidatat consequat veniam culpa ullamco voluptate officia occaecat",
            name: "Beasley Gutierrez Property"
          },
          details: {
            propertyId: "",
            parish: "Portland",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 15762,
            bedrooms: 3,
            numberOfBedrooms: "",
            price: 9512280,
            community: "Lowery Heights",
            rentType: "",
            bathrooms: 6,
            garages: 10
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Family Oriented",
              icon: "mdi-home-heart"
            }
          ],
          description: {
            description:
              "ex cillum cupidatat cillum cupidatat commodo laboris mollit duis occaecat aliqua aute qui amet velit fugiat duis tempor non ullamco velit magna fugiat dolor laborum culpa voluptate consequat nisi magna aute qui qui ut officia magna do ea irure mollit sunt laborum qui cillum mollit exercitation laboris commodo qui est consequat irure non laborum laboris officia elit anim consectetur ea",
            name: "Pratt Oliver Property"
          },
          details: {
            propertyId: "",
            parish: "St. Elizabeth",
            propertyType: "House",
            propertyFor: "Sale",
            size: 15086,
            bedrooms: 13,
            numberOfBedrooms: "",
            price: 99009004,
            community: "Kelley Heights",
            rentType: "",
            bathrooms: 7,
            garages: 6
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Water Tank",
              icon: "mdi-water"
            }
          ],
          description: {
            description:
              "eu minim Lorem ipsum veniam cupidatat aliquip quis reprehenderit reprehenderit aliqua et voluptate velit et non ex magna fugiat esse eiusmod deserunt occaecat sunt exercitation in ex proident irure ullamco sint adipisicing aute tempor deserunt eu qui adipisicing ullamco aliqua aliqua veniam sunt sint aliquip sit ea minim reprehenderit id laboris tempor eiusmod non enim sit est duis labore sunt",
            name: "Sharon Pena Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 2424,
            bedrooms: 8,
            numberOfBedrooms: "",
            price: 19436266,
            community: "Brown Heights",
            rentType: "",
            bathrooms: 10,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Smart Home",
              icon: "mdi-home-assistant"
            }
          ],
          description: {
            description:
              "exercitation tempor eu nostrud anim cupidatat commodo aliqua officia tempor ex enim ipsum proident exercitation deserunt sint culpa cillum fugiat nisi ad nulla ullamco adipisicing id culpa laborum id aliquip culpa tempor magna irure consectetur laborum non cupidatat id officia do voluptate excepteur aliquip labore proident incididunt do eu Lorem sint consectetur fugiat esse exercitation sunt officia aliquip eu voluptate",
            name: "Brooke Walton Property"
          },
          details: {
            propertyId: "",
            parish: "Westmoreland",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 2714,
            bedrooms: 3,
            numberOfBedrooms: "",
            price: 56968081,
            community: "Rhodes Heights",
            rentType: "",
            bathrooms: 5,
            garages: 17
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Supermarket Near By",
              icon: "mdi-shopping"
            }
          ],
          description: {
            description:
              "labore esse id excepteur dolore qui nostrud minim non culpa quis eiusmod dolore sit dolor laboris mollit aute labore velit velit proident nostrud aute culpa in quis exercitation commodo aute sit consectetur proident nulla exercitation ad dolore eu consectetur eu et anim dolor exercitation labore elit aliqua aute ea quis dolore labore aliquip dolore deserunt consequat nostrud id dolore enim",
            name: "Lindsey Kim Property"
          },
          details: {
            propertyId: "",
            parish: "St. Andrew",
            propertyType: "Warehouse",
            propertyFor: "Sale",
            size: 11389,
            bedrooms: 18,
            numberOfBedrooms: "",
            price: 93029758,
            community: "Atkinson Heights",
            rentType: "",
            bathrooms: 9,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Basketball Court",
              icon: "mdi-basketball"
            }
          ],
          description: {
            description:
              "fugiat magna ullamco aliqua occaecat proident excepteur ut dolore esse pariatur minim adipisicing do nulla enim voluptate aute ex voluptate ea anim ut nisi cillum deserunt nisi esse sit aute ipsum sit irure ea ullamco aliqua nulla culpa consequat excepteur in do laborum tempor commodo veniam cillum irure adipisicing Lorem cillum ex commodo ullamco consectetur aute aute mollit do cillum",
            name: "Clements Stevenson Property"
          },
          details: {
            propertyId: "",
            parish: "Hanover",
            propertyType: "House",
            propertyFor: "Sale",
            size: 8320,
            bedrooms: 3,
            numberOfBedrooms: "",
            price: 96709137,
            community: "Gamble Heights",
            rentType: "",
            bathrooms: 2,
            garages: 7
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "24 Hour Security",
              icon: "mdi-cctv"
            }
          ],
          description: {
            description:
              "irure proident amet ipsum ipsum do non magna non amet consectetur exercitation laboris commodo cupidatat ex non commodo sint adipisicing velit est irure pariatur eiusmod commodo nulla qui elit et in anim mollit ex irure incididunt tempor eu deserunt elit ullamco in dolore incididunt amet sit quis voluptate cillum sint commodo minim consectetur sunt labore reprehenderit velit sit nisi aliqua",
            name: "Matthews Lynch Property"
          },
          details: {
            propertyId: "",
            parish: "Portland",
            propertyType: "House",
            propertyFor: "Sale",
            size: 10312,
            bedrooms: 16,
            numberOfBedrooms: "",
            price: 80723176,
            community: "Casey Heights",
            rentType: "",
            bathrooms: 13,
            garages: 1
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Air Conditioning",
              icon: "mdi-air-filter"
            }
          ],
          description: {
            description:
              "quis excepteur ea sunt deserunt voluptate non laboris fugiat irure nulla dolore in voluptate incididunt officia non proident cillum eu est adipisicing laborum irure laboris labore est ipsum cupidatat elit voluptate adipisicing anim tempor ea occaecat mollit culpa proident Lorem nulla amet ea Lorem sint nostrud commodo voluptate magna sint et nisi sit nulla labore id nulla aliquip mollit reprehenderit",
            name: "Gilliam Terry Property"
          },
          details: {
            propertyId: "",
            parish: "St. Elizabeth",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 12519,
            bedrooms: 20,
            numberOfBedrooms: "",
            price: 69137567,
            community: "Reeves Heights",
            rentType: "",
            bathrooms: 5,
            garages: 14
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Schools Near By",
              icon: "mdi-school"
            }
          ],
          description: {
            description:
              "ea dolor amet cupidatat minim velit in aute aliqua qui ut commodo voluptate incididunt mollit minim consequat elit aliquip nostrud ex incididunt ea ex veniam pariatur nulla nostrud pariatur nisi duis commodo eu nostrud minim voluptate proident laboris eiusmod nostrud consequat aliquip consequat est mollit nulla ut aliquip ut quis sit culpa adipisicing nulla aliqua irure laborum officia fugiat Lorem",
            name: "Weaver Holman Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Warehouse",
            propertyFor: "Sale",
            size: 17761,
            bedrooms: 2,
            numberOfBedrooms: "",
            price: 96840975,
            community: "Cleveland Heights",
            rentType: "",
            bathrooms: 4,
            garages: 7
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "aliquip ullamco magna fugiat nostrud sunt sunt in fugiat quis adipisicing magna exercitation et eu veniam non ea exercitation eiusmod dolor laborum consequat labore do nulla non reprehenderit voluptate fugiat dolor deserunt dolore in mollit velit exercitation eu consequat Lorem id ullamco reprehenderit et mollit aliqua deserunt id id officia anim dolore pariatur fugiat officia labore anim amet ullamco fugiat",
            name: "Melinda Page Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 8598,
            bedrooms: 10,
            numberOfBedrooms: "",
            price: 18110313,
            community: "Leonard Heights",
            rentType: "",
            bathrooms: 16,
            garages: 13
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Furnished",
              icon: "mdi-sofa"
            }
          ],
          description: {
            description:
              "ex dolore do Lorem laborum in veniam magna eiusmod aliqua exercitation irure do deserunt consequat sunt consequat qui excepteur fugiat aliquip id reprehenderit nostrud nostrud et enim laborum labore exercitation quis nulla ut consectetur sint ut ut incididunt officia eiusmod eu nostrud irure ex laborum ea aliqua sit dolor quis excepteur esse nisi veniam consequat dolor fugiat et minim minim",
            name: "Stephanie Rice Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 3083,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 74296833,
            community: "Sanders Heights",
            rentType: "",
            bathrooms: 2,
            garages: 5
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Tennis Court",
              icon: "mdi-tennis"
            }
          ],
          description: {
            description:
              "sit velit laborum laborum culpa cillum consectetur non sunt anim nostrud ut nisi dolor irure elit id nostrud veniam nostrud irure non consequat velit adipisicing aute occaecat voluptate do consectetur aute qui occaecat aliqua reprehenderit irure irure deserunt dolor duis pariatur ullamco aute adipisicing proident ex culpa ipsum ullamco nostrud mollit laborum consectetur ea ad laborum laborum amet voluptate et",
            name: "Ladonna Pratt Property"
          },
          details: {
            propertyId: "",
            parish: "St. Andrew",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 18183,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 72647276,
            community: "Blair Heights",
            rentType: "",
            bathrooms: 9,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gym",
              icon: "mdi-dumbbell"
            }
          ],
          description: {
            description:
              "laborum ad et tempor do mollit consectetur minim ad culpa sint proident eu quis aliquip adipisicing duis cillum magna velit minim ipsum et deserunt elit irure velit nulla in voluptate sint eu in magna culpa qui Lorem nulla veniam aute qui dolor nostrud irure aliquip culpa in nisi ex amet deserunt nulla non qui ullamco irure dolore occaecat exercitation tempor",
            name: "Neva Merrill Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 13049,
            bedrooms: 4,
            numberOfBedrooms: "",
            price: 19505160,
            community: "Haley Heights",
            rentType: "",
            bathrooms: 11,
            garages: 13
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "24 Hour Security",
              icon: "mdi-cctv"
            }
          ],
          description: {
            description:
              "reprehenderit commodo deserunt non mollit duis aute Lorem et duis ad qui aliqua nostrud incididunt esse sunt deserunt dolore et duis pariatur voluptate reprehenderit deserunt sunt in nostrud mollit ullamco occaecat cillum cupidatat sit irure enim ex incididunt adipisicing nulla non ad nostrud labore irure pariatur ea Lorem fugiat culpa ea eiusmod incididunt magna mollit culpa labore consectetur tempor tempor",
            name: "Mcbride Stone Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 8941,
            bedrooms: 10,
            numberOfBedrooms: "",
            price: 38630938,
            community: "Noel Heights",
            rentType: "",
            bathrooms: 17,
            garages: 19
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "dolor ea ut anim minim sunt pariatur sit aute magna incididunt cupidatat laborum laborum aute occaecat sint adipisicing dolore occaecat eiusmod veniam duis non laborum ipsum id aute veniam deserunt ut ad labore consectetur deserunt laborum tempor aute voluptate nostrud minim ad sint aliquip ut velit ipsum ut duis fugiat eiusmod deserunt esse qui ea cupidatat velit nulla ullamco id",
            name: "Johnston Carlson Property"
          },
          details: {
            propertyId: "",
            parish: "St. Andrew",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 12525,
            bedrooms: 20,
            numberOfBedrooms: "",
            price: 64059588,
            community: "Mckinney Heights",
            rentType: "",
            bathrooms: 19,
            garages: 4
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Park Near By",
              icon: "mdi-nature-people"
            }
          ],
          description: {
            description:
              "proident deserunt et laborum elit minim aliquip et minim adipisicing aute culpa dolore anim velit in laborum officia sunt occaecat aliqua laboris veniam dolore voluptate et esse proident cupidatat nulla fugiat minim laborum est minim aliquip consectetur sint proident cillum cupidatat pariatur exercitation magna non velit reprehenderit sunt qui aute incididunt dolor elit minim magna sint excepteur exercitation irure exercitation",
            name: "Arlene Welch Property"
          },
          details: {
            propertyId: "",
            parish: "St. Andrew",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 17059,
            bedrooms: 1,
            numberOfBedrooms: "",
            price: 77395380,
            community: "Hogan Heights",
            rentType: "",
            bathrooms: 9,
            garages: 3
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Furnished",
              icon: "mdi-sofa"
            }
          ],
          description: {
            description:
              "aute et esse exercitation velit aute ea ut enim officia consequat laborum irure sint incididunt irure nisi laboris eu duis nulla sint cupidatat nulla est veniam occaecat fugiat laboris quis aute consequat velit minim ut veniam dolor aliqua pariatur officia do anim minim aliquip cillum incididunt nulla pariatur veniam cupidatat id esse adipisicing incididunt magna sit est nostrud in laboris",
            name: "Walsh Snyder Property"
          },
          details: {
            propertyId: "",
            parish: "Westmoreland",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 5574,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 50974769,
            community: "Eaton Heights",
            rentType: "",
            bathrooms: 10,
            garages: 16
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Family Oriented",
              icon: "mdi-home-heart"
            }
          ],
          description: {
            description:
              "aliquip in tempor qui quis ipsum veniam est ad qui sunt aliqua et et in pariatur minim pariatur ut adipisicing elit velit culpa eu est culpa mollit adipisicing enim ad Lorem mollit sunt proident consectetur id ad cupidatat magna tempor elit incididunt sit commodo eu labore laboris ea laborum excepteur occaecat id nulla aute labore nostrud aliquip tempor labore laborum",
            name: "Mcclain Doyle Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 6277,
            bedrooms: 11,
            numberOfBedrooms: "",
            price: 66928940,
            community: "Rose Heights",
            rentType: "",
            bathrooms: 16,
            garages: 19
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Hospital Near By",
              icon: "mdi-hospital-building"
            }
          ],
          description: {
            description:
              "qui non dolor culpa anim ullamco veniam mollit tempor non adipisicing cillum magna aliquip do proident laborum ad aliquip commodo veniam labore voluptate occaecat labore exercitation dolore incididunt in dolor qui eiusmod dolore consectetur ut commodo magna quis magna amet deserunt nostrud fugiat et ad mollit adipisicing et consectetur sint adipisicing ipsum voluptate ullamco id reprehenderit ad commodo sint cupidatat",
            name: "Kelsey Jensen Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 17240,
            bedrooms: 18,
            numberOfBedrooms: "",
            price: 12256769,
            community: "Rivas Heights",
            rentType: "",
            bathrooms: 12,
            garages: 19
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "aute deserunt culpa minim elit esse laborum cillum incididunt eu exercitation culpa sint laboris pariatur irure labore magna consequat ad id anim ad reprehenderit aute minim sit velit ut ut enim deserunt exercitation duis magna elit commodo anim dolore ea proident eiusmod officia ad pariatur est non in laborum consectetur nostrud Lorem anim adipisicing esse velit sunt esse tempor enim",
            name: "Mia Smith Property"
          },
          details: {
            propertyId: "",
            parish: "Portland",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 8227,
            bedrooms: 17,
            numberOfBedrooms: "",
            price: 18543305,
            community: "Sparks Heights",
            rentType: "",
            bathrooms: 16,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "ad esse labore proident excepteur consequat Lorem exercitation tempor aliquip duis et ullamco cillum ut sint mollit ad magna id elit est esse aliqua consequat id aliqua laboris ut sunt magna consequat voluptate ut tempor culpa labore fugiat minim non sint officia enim nisi non nisi est nostrud nostrud reprehenderit nostrud eu minim elit sunt ea nisi ea tempor officia",
            name: "Kerry Le Property"
          },
          details: {
            propertyId: "",
            parish: "Kingston",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 17616,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 76659008,
            community: "Stark Heights",
            rentType: "",
            bathrooms: 14,
            garages: 14
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Cable TV ",
              icon: "mdi-television"
            }
          ],
          description: {
            description:
              "aliquip nostrud eiusmod cupidatat commodo in voluptate cillum nisi irure velit ex est Lorem pariatur pariatur culpa minim cillum labore amet in nostrud magna labore voluptate ad proident aute in minim qui et est ad ad est exercitation eu voluptate commodo dolor elit nisi deserunt excepteur qui elit aute adipisicing laboris elit tempor fugiat nisi commodo nulla proident in qui",
            name: "Nichole Barnett Property"
          },
          details: {
            propertyId: "",
            parish: "Westmoreland",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 15785,
            bedrooms: 8,
            numberOfBedrooms: "",
            price: 96510362,
            community: "Mclaughlin Heights",
            rentType: "",
            bathrooms: 5,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gym",
              icon: "mdi-dumbbell"
            }
          ],
          description: {
            description:
              "incididunt reprehenderit enim consequat qui incididunt ad id irure id do anim et anim culpa quis reprehenderit adipisicing non exercitation dolor mollit excepteur ipsum elit labore in eu ex veniam nostrud culpa cillum reprehenderit esse do ex ex nulla aliquip occaecat ea mollit nostrud laboris commodo voluptate ut magna adipisicing consectetur ipsum qui sint mollit nostrud fugiat reprehenderit fugiat laboris",
            name: "Courtney Lyons Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "House",
            propertyFor: "Sale",
            size: 2434,
            bedrooms: 3,
            numberOfBedrooms: "",
            price: 10005283,
            community: "Flores Heights",
            rentType: "",
            bathrooms: 3,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "24 Hour Security",
              icon: "mdi-cctv"
            }
          ],
          description: {
            description:
              "laboris consectetur mollit commodo elit tempor veniam et ea labore do dolore consequat dolor culpa amet occaecat mollit ut sint anim commodo adipisicing do nostrud esse non voluptate Lorem enim cillum proident in eiusmod consectetur reprehenderit minim in incididunt cupidatat magna elit cupidatat exercitation cupidatat do labore id irure consequat esse pariatur qui cillum id elit sint nulla Lorem fugiat",
            name: "Tamara Collins Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 8558,
            bedrooms: 8,
            numberOfBedrooms: "",
            price: 2570305,
            community: "Benson Heights",
            rentType: "",
            bathrooms: 17,
            garages: 3
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "proident est veniam qui sit aliquip aute commodo veniam tempor culpa deserunt nisi reprehenderit proident reprehenderit culpa qui occaecat magna ea consequat voluptate irure velit qui est sint ut anim et voluptate amet ad anim proident cillum ea consequat sit consequat commodo enim adipisicing voluptate commodo est fugiat occaecat eu incididunt dolor voluptate elit Lorem duis quis velit voluptate fugiat",
            name: "Phoebe Carpenter Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 19918,
            bedrooms: 1,
            numberOfBedrooms: "",
            price: 41648671,
            community: "Best Heights",
            rentType: "",
            bathrooms: 10,
            garages: 10
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "24 Hour Security",
              icon: "mdi-cctv"
            }
          ],
          description: {
            description:
              "fugiat anim dolore incididunt ut consectetur est enim tempor nostrud elit elit ullamco ullamco exercitation adipisicing esse minim commodo aliqua commodo enim culpa laboris qui qui labore et ad dolor do duis quis dolor do eu dolor enim tempor in cupidatat ut adipisicing irure enim aute cillum mollit labore esse nostrud consequat in non aliqua consectetur esse excepteur dolore non",
            name: "Lucia Harrison Property"
          },
          details: {
            propertyId: "",
            parish: "Westmoreland",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 17134,
            bedrooms: 6,
            numberOfBedrooms: "",
            price: 69411369,
            community: "Zimmerman Heights",
            rentType: "",
            bathrooms: 4,
            garages: 5
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Water Heater",
              icon: "mdi-thermometer-high"
            }
          ],
          description: {
            description:
              "officia magna commodo esse in adipisicing quis ipsum do adipisicing aute do aliqua quis ullamco enim nostrud reprehenderit minim labore sunt exercitation adipisicing ut et labore occaecat commodo anim aliqua consectetur mollit culpa cillum anim duis nostrud mollit minim aliqua id mollit velit magna id ipsum pariatur anim amet tempor laboris enim proident consectetur Lorem cupidatat ex anim qui laborum",
            name: "Simon Davenport Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 17713,
            bedrooms: 14,
            numberOfBedrooms: "",
            price: 86201487,
            community: "Hale Heights",
            rentType: "",
            bathrooms: 19,
            garages: 8
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Grilled",
              icon: "mdi-shield-home"
            }
          ],
          description: {
            description:
              "reprehenderit magna deserunt reprehenderit incididunt occaecat sint fugiat incididunt pariatur Lorem in reprehenderit dolore et nulla sunt esse in mollit magna veniam sit deserunt officia adipisicing nisi cillum laboris exercitation voluptate aute dolore qui sit cillum et culpa elit laboris sint dolor laborum irure aute nulla tempor aliqua mollit anim nostrud elit consequat non nulla aliquip ad irure do pariatur",
            name: "Franks Greene Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 16842,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 62401630,
            community: "Case Heights",
            rentType: "",
            bathrooms: 17,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "24 Hour Security",
              icon: "mdi-cctv"
            }
          ],
          description: {
            description:
              "ex dolor fugiat id consectetur mollit id ullamco velit id eiusmod pariatur ad qui et non et irure ipsum ea eiusmod ipsum eiusmod ea commodo et duis excepteur enim consequat est duis veniam incididunt adipisicing laborum dolor exercitation occaecat in sunt eu et ipsum ut enim sunt Lorem aliquip incididunt occaecat pariatur exercitation aute veniam duis id voluptate esse ullamco",
            name: "Sarah Hopper Property"
          },
          details: {
            propertyId: "",
            parish: "St. Elizabeth",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 8464,
            bedrooms: 13,
            numberOfBedrooms: "",
            price: 15111305,
            community: "Day Heights",
            rentType: "",
            bathrooms: 1,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Grilled",
              icon: "mdi-shield-home"
            }
          ],
          description: {
            description:
              "sunt exercitation dolore sunt pariatur aliqua sit officia proident enim ad qui veniam pariatur occaecat sunt velit duis nulla officia eiusmod minim sit eu sit cupidatat cillum nostrud id sint fugiat laboris ullamco ea Lorem do labore elit cupidatat ipsum id enim adipisicing tempor qui fugiat in dolore elit eiusmod pariatur velit et eiusmod nisi nisi in velit ea laborum",
            name: "Iris Cash Property"
          },
          details: {
            propertyId: "",
            parish: "Portland",
            propertyType: "House",
            propertyFor: "Sale",
            size: 7465,
            bedrooms: 6,
            numberOfBedrooms: "",
            price: 23507404,
            community: "Steele Heights",
            rentType: "",
            bathrooms: 4,
            garages: 1
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Movie Theater Near By",
              icon: "mdi-theater"
            }
          ],
          description: {
            description:
              "aliquip exercitation duis ea ut culpa amet esse ex sint proident exercitation excepteur ex cupidatat non nostrud exercitation aliquip deserunt veniam cillum ullamco nostrud aute ad cupidatat elit adipisicing et aute velit culpa nulla minim ad excepteur in sunt cupidatat consectetur dolore et aliqua est enim enim labore ea voluptate incididunt ut sit et pariatur nostrud dolor velit aute ipsum",
            name: "Muriel Blackburn Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 7221,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 61851988,
            community: "Mcfarland Heights",
            rentType: "",
            bathrooms: 6,
            garages: 19
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Cable TV ",
              icon: "mdi-television"
            }
          ],
          description: {
            description:
              "nisi adipisicing incididunt culpa ullamco non magna dolore amet anim labore elit officia sint tempor proident elit consequat consequat consectetur sunt aliquip mollit non reprehenderit quis esse anim duis adipisicing fugiat est mollit amet ut anim ut irure eiusmod magna ad eu consequat sunt voluptate sint sunt ut in ullamco eiusmod reprehenderit ipsum laborum minim officia eiusmod cillum magna pariatur",
            name: "Young Washington Property"
          },
          details: {
            propertyId: "",
            parish: "Hanover",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 7974,
            bedrooms: 4,
            numberOfBedrooms: "",
            price: 96472515,
            community: "Parrish Heights",
            rentType: "",
            bathrooms: 16,
            garages: 10
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Schools Near By",
              icon: "mdi-school"
            }
          ],
          description: {
            description:
              "nulla magna deserunt esse veniam aute do cillum est fugiat laborum est incididunt excepteur esse sint et in cillum qui laborum deserunt minim ad velit pariatur sint tempor elit elit sit nulla occaecat occaecat ut irure sint ex deserunt fugiat cupidatat exercitation fugiat eu proident elit nostrud do cupidatat incididunt adipisicing ea excepteur minim Lorem eiusmod duis eu reprehenderit exercitation",
            name: "Adele Brock Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 6955,
            bedrooms: 11,
            numberOfBedrooms: "",
            price: 25295778,
            community: "Bush Heights",
            rentType: "",
            bathrooms: 16,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Generator",
              icon: "mdi-flash"
            }
          ],
          description: {
            description:
              "consectetur ullamco commodo ut in incididunt aliquip tempor quis adipisicing nulla adipisicing sint esse est officia eiusmod reprehenderit excepteur tempor culpa veniam sunt commodo est cupidatat anim in sint ullamco consequat pariatur cillum dolor sunt ipsum Lorem cupidatat magna ullamco quis quis ex amet anim consequat sint consectetur exercitation minim consequat aliquip officia ut cupidatat laborum duis eiusmod labore anim",
            name: "Kathryn Raymond Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 16539,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 5051614,
            community: "Wolf Heights",
            rentType: "",
            bathrooms: 5,
            garages: 19
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Smart Home",
              icon: "mdi-home-assistant"
            }
          ],
          description: {
            description:
              "consectetur cillum dolore reprehenderit sunt ea deserunt velit duis ipsum dolore exercitation esse magna est exercitation ea Lorem tempor veniam mollit irure et magna ullamco est laborum aliquip nisi aute voluptate amet voluptate non cupidatat labore ipsum consequat cupidatat nostrud est do cupidatat enim veniam minim in aliqua nisi cillum eiusmod officia exercitation excepteur non id esse aliqua labore nostrud",
            name: "Mann Palmer Property"
          },
          details: {
            propertyId: "",
            parish: "Hanover",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 6184,
            bedrooms: 8,
            numberOfBedrooms: "",
            price: 4973736,
            community: "Bond Heights",
            rentType: "",
            bathrooms: 19,
            garages: 13
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Park Near By",
              icon: "mdi-nature-people"
            }
          ],
          description: {
            description:
              "excepteur officia in labore pariatur reprehenderit cupidatat voluptate ex duis amet nisi magna pariatur sunt Lorem consectetur consequat reprehenderit sunt velit occaecat consectetur irure excepteur tempor ea labore amet commodo do consequat sint elit ex Lorem fugiat aliquip enim excepteur occaecat nostrud eu dolore ullamco ullamco proident ullamco excepteur ipsum sit ipsum eiusmod tempor anim esse irure cillum enim id",
            name: "Rosario Whitaker Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 18090,
            bedrooms: 16,
            numberOfBedrooms: "",
            price: 12706315,
            community: "Green Heights",
            rentType: "",
            bathrooms: 2,
            garages: 4
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gated Community",
              icon: "mdi-security"
            }
          ],
          description: {
            description:
              "irure ex velit sint dolore voluptate excepteur dolor consequat anim culpa Lorem sint pariatur culpa veniam velit in proident nostrud mollit in consequat voluptate commodo laborum eu nulla officia eiusmod quis in veniam duis veniam ullamco deserunt id veniam non est esse esse voluptate do ad exercitation minim qui minim do tempor ad cillum laboris veniam magna laboris non aliqua",
            name: "Love Odonnell Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 16013,
            bedrooms: 9,
            numberOfBedrooms: "",
            price: 57817647,
            community: "Harper Heights",
            rentType: "",
            bathrooms: 4,
            garages: 12
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Supermarket Near By",
              icon: "mdi-shopping"
            }
          ],
          description: {
            description:
              "eu cupidatat deserunt nulla dolor amet irure sunt sit et id ipsum ut eu cupidatat sint incididunt Lorem id est ad velit pariatur culpa et veniam pariatur esse eu officia ipsum ut sint do duis exercitation aliquip labore adipisicing esse velit aliquip esse cupidatat ad occaecat quis esse duis occaecat deserunt sint minim in labore enim tempor aliqua fugiat cillum",
            name: "York Wright Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 14752,
            bedrooms: 12,
            numberOfBedrooms: "",
            price: 45336156,
            community: "Daugherty Heights",
            rentType: "",
            bathrooms: 8,
            garages: 10
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Supermarket Near By",
              icon: "mdi-shopping"
            }
          ],
          description: {
            description:
              "labore tempor eiusmod sunt id velit deserunt aute minim consequat do eiusmod excepteur aliqua reprehenderit pariatur ex ipsum non voluptate aliquip culpa sit incididunt magna aute laborum aliquip excepteur ad qui commodo mollit ut anim eiusmod laboris veniam ullamco dolore ipsum eu anim duis exercitation eiusmod tempor velit culpa sit Lorem nulla esse consequat occaecat officia culpa laborum id incididunt",
            name: "Vera Rowe Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 16496,
            bedrooms: 11,
            numberOfBedrooms: "",
            price: 72478383,
            community: "Reilly Heights",
            rentType: "",
            bathrooms: 3,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Generator",
              icon: "mdi-flash"
            }
          ],
          description: {
            description:
              "veniam officia consectetur irure sint labore minim duis cillum est magna dolore excepteur dolore do ipsum amet minim labore ad amet nulla ut minim est sunt ad non anim eiusmod pariatur voluptate nulla labore laboris irure laborum officia commodo nulla ipsum nulla eu minim eu id reprehenderit nostrud pariatur irure velit incididunt excepteur magna in adipisicing irure et sunt voluptate",
            name: "Bush Good Property"
          },
          details: {
            propertyId: "",
            parish: "St. Elizabeth",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 6803,
            bedrooms: 1,
            numberOfBedrooms: "",
            price: 78692643,
            community: "Huffman Heights",
            rentType: "",
            bathrooms: 11,
            garages: 19
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Basketball Court",
              icon: "mdi-basketball"
            }
          ],
          description: {
            description:
              "dolore eiusmod ut mollit aute voluptate labore sint minim amet irure officia do qui ut enim enim nisi nulla eu consequat adipisicing non laboris velit et qui Lorem voluptate officia excepteur sunt magna exercitation laboris et esse incididunt eiusmod do ex nisi nostrud cillum in consectetur reprehenderit qui aliquip mollit veniam veniam id aliqua amet voluptate nisi eu consequat ad",
            name: "Reynolds Guzman Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 13722,
            bedrooms: 9,
            numberOfBedrooms: "",
            price: 24422077,
            community: "Burris Heights",
            rentType: "",
            bathrooms: 13,
            garages: 3
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Grilled",
              icon: "mdi-shield-home"
            }
          ],
          description: {
            description:
              "dolor sint ullamco ut culpa consectetur ex qui pariatur dolor sunt cillum elit amet sint enim veniam consectetur tempor esse in veniam tempor quis excepteur duis dolore labore dolor pariatur Lorem laborum qui laboris dolor Lorem ullamco pariatur ut sint sit exercitation anim aute veniam minim nostrud ea id non quis aliqua culpa laboris enim nostrud ullamco fugiat duis do",
            name: "Bartlett Roberson Property"
          },
          details: {
            propertyId: "",
            parish: "Westmoreland",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 6426,
            bedrooms: 19,
            numberOfBedrooms: "",
            price: 33224223,
            community: "Callahan Heights",
            rentType: "",
            bathrooms: 15,
            garages: 9
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Parking",
              icon: "mdi-car"
            }
          ],
          description: {
            description:
              "consectetur eu consectetur reprehenderit pariatur mollit ea laboris mollit irure id dolor enim eu ut culpa id fugiat consectetur laborum reprehenderit minim aliqua culpa anim sunt cillum dolor laboris voluptate eu proident sit aliquip in minim sunt commodo sunt labore cupidatat excepteur eu duis consequat sit sit non non laboris culpa eiusmod mollit do aliqua ut magna commodo qui cupidatat",
            name: "Jeannie Cohen Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 9459,
            bedrooms: 19,
            numberOfBedrooms: "",
            price: 29551384,
            community: "Ramirez Heights",
            rentType: "",
            bathrooms: 17,
            garages: 4
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Family Oriented",
              icon: "mdi-home-heart"
            }
          ],
          description: {
            description:
              "elit consequat nostrud anim sint est elit consectetur ut dolor exercitation dolore ipsum anim aute non et cillum id cupidatat consequat ullamco officia ut et occaecat ut mollit labore exercitation magna Lorem incididunt cupidatat adipisicing dolor enim laboris eiusmod nisi esse sit veniam deserunt proident est laborum fugiat proident Lorem sit in veniam nisi amet non non mollit adipisicing consectetur",
            name: "Lamb Mendoza Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 18533,
            bedrooms: 20,
            numberOfBedrooms: "",
            price: 41386930,
            community: "Lopez Heights",
            rentType: "",
            bathrooms: 16,
            garages: 1
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Parking",
              icon: "mdi-car"
            }
          ],
          description: {
            description:
              "aliqua ipsum id esse ullamco et in consequat do est do anim eiusmod ea cupidatat minim est et incididunt excepteur occaecat nulla do proident nostrud Lorem Lorem nisi sint occaecat aute irure esse dolor labore Lorem esse officia elit est fugiat adipisicing nostrud sit voluptate do velit ipsum velit est nulla qui mollit pariatur dolore est enim dolore laboris id",
            name: "Odom Kirk Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 18765,
            bedrooms: 10,
            numberOfBedrooms: "",
            price: 67522191,
            community: "Cook Heights",
            rentType: "",
            bathrooms: 20,
            garages: 10
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Tennis Court",
              icon: "mdi-tennis"
            }
          ],
          description: {
            description:
              "tempor ex incididunt sit consequat ut incididunt eiusmod magna aliqua magna reprehenderit consequat elit et magna labore consequat fugiat amet enim culpa aute aliquip duis nostrud dolor dolor do incididunt est occaecat sint laborum irure non deserunt pariatur ut amet est aute elit duis sint adipisicing consectetur pariatur exercitation do ea qui pariatur incididunt duis aute aliquip ut non anim",
            name: "Jacobs Witt Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 9194,
            bedrooms: 20,
            numberOfBedrooms: "",
            price: 23277606,
            community: "James Heights",
            rentType: "",
            bathrooms: 11,
            garages: 9
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Generator",
              icon: "mdi-flash"
            }
          ],
          description: {
            description:
              "laboris consequat nisi consequat laborum eiusmod minim consectetur et veniam id dolore laboris qui cillum mollit adipisicing laborum et irure duis pariatur occaecat incididunt laboris in commodo aliqua aliquip irure nostrud qui adipisicing do consequat nulla esse labore occaecat aliqua consequat proident tempor id reprehenderit magna nostrud veniam ipsum labore veniam laborum laborum deserunt reprehenderit aliquip incididunt sit eu nisi",
            name: "Sullivan Tanner Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 4591,
            bedrooms: 1,
            numberOfBedrooms: "",
            price: 8242779,
            community: "Shields Heights",
            rentType: "",
            bathrooms: 4,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Hospital Near By",
              icon: "mdi-hospital-building"
            }
          ],
          description: {
            description:
              "cupidatat consectetur ut incididunt eu aute veniam magna Lorem mollit sint enim aliqua eiusmod ut duis cillum dolore irure sint ex officia dolor sit elit deserunt pariatur ipsum occaecat enim est ad irure aliqua irure cupidatat voluptate cupidatat sunt ad occaecat aliqua reprehenderit qui magna amet sunt cillum dolor in cillum ea aute et minim minim in dolore deserunt occaecat",
            name: "Jackie Mendez Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 18894,
            bedrooms: 16,
            numberOfBedrooms: "",
            price: 51406341,
            community: "Lewis Heights",
            rentType: "",
            bathrooms: 13,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Parking",
              icon: "mdi-car"
            }
          ],
          description: {
            description:
              "voluptate adipisicing consectetur mollit sint ea irure tempor cillum commodo deserunt esse Lorem ullamco deserunt incididunt amet nulla consequat in fugiat occaecat ad elit duis anim in sit nulla magna incididunt id cupidatat dolore deserunt cupidatat aliqua pariatur labore ut irure cupidatat do reprehenderit dolore laboris consectetur dolor fugiat anim nisi duis quis deserunt labore Lorem Lorem ex adipisicing deserunt",
            name: "Benton Henson Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 3378,
            bedrooms: 14,
            numberOfBedrooms: "",
            price: 78216932,
            community: "Warner Heights",
            rentType: "",
            bathrooms: 1,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gated Community",
              icon: "mdi-security"
            }
          ],
          description: {
            description:
              "consectetur aute aliquip eu anim ullamco veniam sint commodo sit laboris irure laboris eiusmod minim aliqua dolor fugiat tempor qui do occaecat velit reprehenderit anim ut in ad do consequat exercitation non dolor amet sit duis laborum officia reprehenderit anim et cillum officia aliquip officia laborum anim in mollit amet laborum eu ut quis esse ex enim magna irure ex",
            name: "Nikki Bennett Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 17925,
            bedrooms: 19,
            numberOfBedrooms: "",
            price: 20363988,
            community: "House Heights",
            rentType: "",
            bathrooms: 16,
            garages: 4
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "aute nisi nisi enim Lorem non dolore esse dolore consequat do quis sit eu adipisicing pariatur aute duis qui Lorem enim reprehenderit anim ipsum culpa eu nulla tempor do pariatur pariatur officia fugiat fugiat qui velit dolor labore do do dolore nisi velit eiusmod proident velit minim minim aliqua pariatur aute commodo eu deserunt ad ut reprehenderit non consectetur pariatur",
            name: "Isabelle Hayden Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 13417,
            bedrooms: 2,
            numberOfBedrooms: "",
            price: 9051050,
            community: "Rojas Heights",
            rentType: "",
            bathrooms: 15,
            garages: 16
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Smart Home",
              icon: "mdi-home-assistant"
            }
          ],
          description: {
            description:
              "in sint officia fugiat incididunt cupidatat anim ex ullamco minim sint id Lorem duis ea nostrud excepteur veniam excepteur dolor ullamco reprehenderit exercitation irure pariatur et incididunt proident aliquip do excepteur consectetur esse ad ut in proident dolor enim id deserunt occaecat nostrud eiusmod nulla anim do mollit sint adipisicing officia aliquip cillum anim elit dolore minim adipisicing deserunt cupidatat",
            name: "Tessa Byrd Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 13212,
            bedrooms: 11,
            numberOfBedrooms: "",
            price: 64662639,
            community: "Roth Heights",
            rentType: "",
            bathrooms: 6,
            garages: 14
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Furnished",
              icon: "mdi-sofa"
            }
          ],
          description: {
            description:
              "qui aute esse incididunt ex ex ea dolore esse magna do consequat consectetur nostrud cillum veniam sint mollit quis mollit in consectetur do id cillum reprehenderit non Lorem commodo id magna aliqua nulla enim laboris fugiat nisi duis sit pariatur est eiusmod aute voluptate ipsum aute dolore nulla duis labore laborum nulla enim adipisicing id dolore magna sit tempor nisi",
            name: "Leona Thompson Property"
          },
          details: {
            propertyId: "",
            parish: "St. Andrew",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 11550,
            bedrooms: 4,
            numberOfBedrooms: "",
            price: 63588724,
            community: "Fitzgerald Heights",
            rentType: "",
            bathrooms: 15,
            garages: 14
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "24 Hour Security",
              icon: "mdi-cctv"
            }
          ],
          description: {
            description:
              "in commodo elit magna Lorem deserunt ullamco culpa aliqua id laborum ea labore pariatur officia occaecat ut ex cupidatat eiusmod deserunt duis fugiat quis ex eu ut eu eu excepteur veniam eiusmod cupidatat ut id Lorem minim enim nostrud occaecat magna est esse consequat labore est ullamco qui enim aute Lorem nulla exercitation veniam commodo esse elit ipsum nulla fugiat",
            name: "Montgomery Combs Property"
          },
          details: {
            propertyId: "",
            parish: "St. Elizabeth",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 12612,
            bedrooms: 19,
            numberOfBedrooms: "",
            price: 23732318,
            community: "Cantu Heights",
            rentType: "",
            bathrooms: 13,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Movie Theater Near By",
              icon: "mdi-theater"
            }
          ],
          description: {
            description:
              "labore amet cillum cupidatat consectetur cillum culpa cupidatat deserunt nostrud commodo ex sit dolor culpa Lorem et id cillum eiusmod velit consequat cillum dolore cillum ad deserunt occaecat dolor magna sunt nisi ad ea consequat occaecat aliqua voluptate ea labore incididunt quis non id nisi adipisicing sunt minim do ex do anim deserunt in do labore ipsum labore dolore enim",
            name: "Deann Finch Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 9415,
            bedrooms: 11,
            numberOfBedrooms: "",
            price: 4315352,
            community: "Riggs Heights",
            rentType: "",
            bathrooms: 1,
            garages: 7
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Basketball Court",
              icon: "mdi-basketball"
            }
          ],
          description: {
            description:
              "anim nulla cillum tempor in magna proident excepteur duis ipsum irure velit ea esse aliqua consectetur eu eu magna in incididunt voluptate consectetur sunt do ipsum velit Lorem cillum eiusmod non id ex nostrud est reprehenderit ullamco et labore deserunt quis nulla veniam et nostrud eu aliquip ea minim proident laborum minim anim Lorem in non consectetur amet est elit",
            name: "Rosalyn Shelton Property"
          },
          details: {
            propertyId: "",
            parish: "St. Andrew",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 12859,
            bedrooms: 3,
            numberOfBedrooms: "",
            price: 81174060,
            community: "Puckett Heights",
            rentType: "",
            bathrooms: 14,
            garages: 5
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Smart Home",
              icon: "mdi-home-assistant"
            }
          ],
          description: {
            description:
              "mollit ut velit qui elit Lorem consequat ad laborum tempor quis minim laborum deserunt irure aliquip fugiat officia minim dolor elit anim occaecat aliquip sunt labore laborum sint tempor proident mollit fugiat adipisicing pariatur ullamco reprehenderit excepteur ex ad labore ad commodo magna eiusmod do adipisicing consequat nisi occaecat minim qui culpa consectetur nisi excepteur cillum ut culpa in aliqua",
            name: "Freda Blevins Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 18585,
            bedrooms: 12,
            numberOfBedrooms: "",
            price: 56628630,
            community: "Cardenas Heights",
            rentType: "",
            bathrooms: 7,
            garages: 4
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gym",
              icon: "mdi-dumbbell"
            }
          ],
          description: {
            description:
              "aliqua excepteur ex excepteur occaecat proident veniam ex eu id id excepteur in pariatur ipsum magna laboris proident fugiat aute laboris do deserunt ad velit sunt cupidatat dolore ex sunt eu in excepteur labore pariatur incididunt qui qui veniam id anim ipsum est irure ipsum veniam aliquip cupidatat laborum et pariatur voluptate in ullamco duis anim consectetur id laborum qui",
            name: "Howe Hendricks Property"
          },
          details: {
            propertyId: "",
            parish: "Portland",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 6091,
            bedrooms: 13,
            numberOfBedrooms: "",
            price: 61194756,
            community: "Hurley Heights",
            rentType: "",
            bathrooms: 9,
            garages: 8
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Generator",
              icon: "mdi-flash"
            }
          ],
          description: {
            description:
              "amet et fugiat velit fugiat sint laborum aute eu nisi velit eiusmod nostrud occaecat id quis sunt dolor culpa tempor pariatur ea aliqua occaecat labore nostrud aliquip incididunt nisi irure minim ullamco qui cupidatat tempor pariatur do minim sunt mollit cillum occaecat enim tempor Lorem sit dolore elit fugiat do incididunt enim ad amet irure aliquip consectetur labore tempor aliqua",
            name: "Mcfarland Cruz Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 6595,
            bedrooms: 11,
            numberOfBedrooms: "",
            price: 50110790,
            community: "Chang Heights",
            rentType: "",
            bathrooms: 2,
            garages: 5
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Furnished",
              icon: "mdi-sofa"
            }
          ],
          description: {
            description:
              "ea sit officia ad in nostrud eiusmod adipisicing ipsum proident minim ipsum labore qui anim amet cupidatat reprehenderit id adipisicing id sint qui aliquip id nostrud voluptate ad eu quis duis consectetur dolore esse irure in ex quis aliqua sunt exercitation officia nisi aute tempor sint ea ad tempor est aliqua deserunt nostrud ullamco laboris nostrud tempor ea laboris esse",
            name: "Meyer Mercer Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 18054,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 88766612,
            community: "Aguirre Heights",
            rentType: "",
            bathrooms: 1,
            garages: 6
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Air Conditioning",
              icon: "mdi-air-filter"
            }
          ],
          description: {
            description:
              "nostrud nostrud aute amet est qui magna do elit cillum ea fugiat amet excepteur id mollit sint consectetur non Lorem id sunt ut id voluptate proident tempor veniam id labore non elit tempor velit in incididunt ea laboris in veniam adipisicing voluptate ipsum esse officia pariatur exercitation labore elit fugiat pariatur do mollit labore labore commodo labore velit ullamco voluptate",
            name: "Magdalena Sears Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 11092,
            bedrooms: 1,
            numberOfBedrooms: "",
            price: 61099043,
            community: "Vargas Heights",
            rentType: "",
            bathrooms: 1,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Supermarket Near By",
              icon: "mdi-shopping"
            }
          ],
          description: {
            description:
              "aliquip ipsum ad quis nisi ipsum mollit elit proident ea anim excepteur adipisicing cupidatat in nisi non labore labore commodo incididunt ea proident nulla quis nisi mollit dolor quis nostrud in id eiusmod ex dolor id dolor consequat non voluptate ullamco est consectetur proident laborum deserunt nisi sunt fugiat aliqua cillum officia consequat elit nulla magna aliquip commodo in id",
            name: "Alta Workman Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Warehouse",
            propertyFor: "Sale",
            size: 14049,
            bedrooms: 2,
            numberOfBedrooms: "",
            price: 85835523,
            community: "Hood Heights",
            rentType: "",
            bathrooms: 3,
            garages: 4
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Furnished",
              icon: "mdi-sofa"
            }
          ],
          description: {
            description:
              "ut exercitation ex eiusmod deserunt laboris deserunt magna veniam sunt sunt voluptate magna velit ad excepteur dolor aliquip culpa tempor labore laborum qui enim sit eiusmod proident labore dolore laborum cupidatat sint ut id consectetur culpa et nisi est adipisicing dolore elit voluptate dolor excepteur mollit sunt occaecat nisi ex duis ipsum excepteur deserunt sint ullamco officia dolor elit non",
            name: "Strong Mullins Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Warehouse",
            propertyFor: "Sale",
            size: 5462,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 29106734,
            community: "Malone Heights",
            rentType: "",
            bathrooms: 12,
            garages: 14
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Movie Theater Near By",
              icon: "mdi-theater"
            }
          ],
          description: {
            description:
              "id nostrud nostrud esse enim amet occaecat quis dolor qui ut pariatur incididunt amet magna irure minim pariatur enim anim sit deserunt voluptate mollit ipsum aute duis incididunt fugiat sint duis reprehenderit consectetur culpa quis exercitation deserunt eiusmod laborum aliqua adipisicing officia labore incididunt pariatur anim ipsum irure et sint sunt et duis reprehenderit cillum ex ea nostrud magna elit",
            name: "Jeannine Barnes Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 6280,
            bedrooms: 6,
            numberOfBedrooms: "",
            price: 93277063,
            community: "Mccullough Heights",
            rentType: "",
            bathrooms: 16,
            garages: 9
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Park Near By",
              icon: "mdi-nature-people"
            }
          ],
          description: {
            description:
              "pariatur excepteur sit mollit aliqua et reprehenderit elit in nulla reprehenderit pariatur nisi consectetur proident eiusmod sint elit incididunt laborum exercitation deserunt aliqua ex eiusmod exercitation voluptate reprehenderit consectetur reprehenderit incididunt reprehenderit consectetur ea mollit velit nisi dolor nostrud enim proident laboris amet ut id ipsum reprehenderit occaecat proident consectetur anim eu quis anim cillum amet velit aliqua est id",
            name: "Church Coleman Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 2924,
            bedrooms: 19,
            numberOfBedrooms: "",
            price: 50227918,
            community: "Richard Heights",
            rentType: "",
            bathrooms: 18,
            garages: 17
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Swimming Pool",
              icon: "mdi-pool"
            }
          ],
          description: {
            description:
              "aliquip amet do labore occaecat esse ad proident incididunt in ipsum non excepteur occaecat incididunt qui dolor fugiat cillum ipsum aliqua officia mollit pariatur fugiat culpa minim exercitation deserunt in pariatur excepteur nisi nulla aliquip sint elit aliqua aliquip sit ad et nisi et esse in culpa labore officia culpa ex fugiat deserunt enim laboris officia ad duis culpa magna",
            name: "Jackson Riddle Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 9776,
            bedrooms: 6,
            numberOfBedrooms: "",
            price: 27743479,
            community: "Garrett Heights",
            rentType: "",
            bathrooms: 7,
            garages: 7
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gated Community",
              icon: "mdi-security"
            }
          ],
          description: {
            description:
              "ad ex dolor dolor ad pariatur cupidatat velit sit pariatur proident sint pariatur sunt deserunt nisi aute in excepteur id ea do esse dolore aliqua culpa nisi culpa ipsum exercitation officia do reprehenderit occaecat sunt Lorem consectetur deserunt ipsum fugiat fugiat duis magna aliqua velit esse amet irure reprehenderit cillum quis cupidatat do culpa Lorem sunt exercitation duis esse non",
            name: "Trisha Townsend Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Warehouse",
            propertyFor: "Sale",
            size: 4425,
            bedrooms: 9,
            numberOfBedrooms: "",
            price: 54951996,
            community: "Fisher Heights",
            rentType: "",
            bathrooms: 11,
            garages: 16
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Basketball Court",
              icon: "mdi-basketball"
            }
          ],
          description: {
            description:
              "reprehenderit aute et nostrud ea eu enim eu aliqua non occaecat pariatur ullamco excepteur incididunt sint fugiat enim quis irure ut exercitation dolor laborum aliquip aute consectetur aliquip tempor id reprehenderit laborum dolore pariatur amet cupidatat et irure ad ullamco excepteur voluptate et cillum commodo aliqua incididunt adipisicing ut reprehenderit mollit minim pariatur elit amet dolor ullamco minim deserunt ullamco",
            name: "Roach Bender Property"
          },
          details: {
            propertyId: "",
            parish: "Westmoreland",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 5750,
            bedrooms: 3,
            numberOfBedrooms: "",
            price: 99855049,
            community: "Silva Heights",
            rentType: "",
            bathrooms: 11,
            garages: 16
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "ea aliquip excepteur amet aute ea est velit officia esse tempor aliquip ad aliquip eiusmod labore tempor esse aliqua veniam veniam sunt do commodo sit nulla ea laborum ipsum duis aliqua consequat duis quis nostrud do esse ea laboris sunt voluptate exercitation incididunt velit Lorem cillum pariatur laborum aliquip dolor aliqua aute aute enim veniam consectetur officia sint proident laboris",
            name: "Brandy Hughes Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 15922,
            bedrooms: 4,
            numberOfBedrooms: "",
            price: 27327119,
            community: "Mathews Heights",
            rentType: "",
            bathrooms: 20,
            garages: 6
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Park Near By",
              icon: "mdi-nature-people"
            }
          ],
          description: {
            description:
              "Lorem Lorem laboris fugiat magna quis deserunt in reprehenderit quis adipisicing sit consectetur incididunt officia tempor occaecat mollit sunt ad adipisicing Lorem eiusmod adipisicing ex enim consequat laboris minim velit dolor deserunt velit non velit qui esse culpa labore ut magna est et aliqua consectetur adipisicing eiusmod nulla minim irure proident consectetur cupidatat officia ea duis non Lorem laborum do",
            name: "Tamra Gillespie Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 11475,
            bedrooms: 1,
            numberOfBedrooms: "",
            price: 4442373,
            community: "Rich Heights",
            rentType: "",
            bathrooms: 6,
            garages: 9
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Hospital Near By",
              icon: "mdi-hospital-building"
            }
          ],
          description: {
            description:
              "incididunt elit dolor velit quis irure labore consequat consectetur nostrud labore sit nostrud sunt voluptate eu nisi quis enim ullamco qui ullamco et voluptate duis laborum adipisicing enim id culpa qui dolore proident nostrud et Lorem ex ad non ut enim dolor ut mollit ad et est enim ex elit consectetur ut ut adipisicing ullamco elit amet do ullamco fugiat",
            name: "Patrice Olson Property"
          },
          details: {
            propertyId: "",
            parish: "Westmoreland",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 9644,
            bedrooms: 7,
            numberOfBedrooms: "",
            price: 67641816,
            community: "Dillard Heights",
            rentType: "",
            bathrooms: 5,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Family Oriented",
              icon: "mdi-home-heart"
            }
          ],
          description: {
            description:
              "duis minim dolore dolore reprehenderit incididunt proident sit aliqua in deserunt adipisicing nostrud consectetur eu non sunt sit duis sit et ea officia magna quis anim labore fugiat enim ullamco proident laborum voluptate labore laborum dolore consequat proident eu id cillum esse adipisicing sit ipsum id quis nostrud consequat nostrud nostrud deserunt qui tempor sunt sunt sit amet ut adipisicing",
            name: "Franco Alvarez Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 16209,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 15127066,
            community: "Davidson Heights",
            rentType: "",
            bathrooms: 12,
            garages: 2
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Movie Theater Near By",
              icon: "mdi-theater"
            }
          ],
          description: {
            description:
              "exercitation exercitation nisi qui aliqua fugiat proident pariatur aliqua laborum consectetur cillum dolor proident mollit reprehenderit laborum aliqua excepteur voluptate elit elit velit incididunt veniam dolore sunt incididunt eiusmod non eu cillum Lorem mollit in nisi anim veniam excepteur consectetur cillum officia incididunt amet eiusmod ipsum esse reprehenderit adipisicing ullamco in elit ipsum labore laboris fugiat reprehenderit cillum excepteur amet",
            name: "Karin Knox Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 11920,
            bedrooms: 14,
            numberOfBedrooms: "",
            price: 45655900,
            community: "Rosa Heights",
            rentType: "",
            bathrooms: 8,
            garages: 14
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Air Conditioning",
              icon: "mdi-air-filter"
            }
          ],
          description: {
            description:
              "commodo et ullamco occaecat aute sit laborum sunt reprehenderit incididunt occaecat sunt adipisicing nostrud sint enim esse elit aute magna nulla minim ullamco eu proident occaecat labore minim ut occaecat esse nostrud do sunt commodo anim ex amet amet laboris incididunt officia excepteur magna non proident ipsum irure magna ullamco non ea et consectetur consectetur culpa ut magna excepteur anim",
            name: "Pena Howard Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "House",
            propertyFor: "Sale",
            size: 19913,
            bedrooms: 1,
            numberOfBedrooms: "",
            price: 95343628,
            community: "Robertson Heights",
            rentType: "",
            bathrooms: 13,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Supermarket Near By",
              icon: "mdi-shopping"
            }
          ],
          description: {
            description:
              "mollit anim qui consectetur ut amet nostrud amet laborum irure esse excepteur duis aliquip in voluptate aliqua non nisi eu officia dolor incididunt ea officia ipsum anim enim laboris aute officia duis voluptate do nulla deserunt eu officia occaecat cupidatat non ex adipisicing aliqua proident est reprehenderit minim esse nulla ad et velit tempor nisi sunt deserunt eiusmod elit incididunt",
            name: "Harrison Burke Property"
          },
          details: {
            propertyId: "",
            parish: "St. Elizabeth",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 14366,
            bedrooms: 14,
            numberOfBedrooms: "",
            price: 73512511,
            community: "Maddox Heights",
            rentType: "",
            bathrooms: 18,
            garages: 7
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gated Community",
              icon: "mdi-security"
            }
          ],
          description: {
            description:
              "minim veniam nisi labore velit eiusmod qui est reprehenderit sunt cupidatat commodo sunt non dolor culpa tempor fugiat ex et sit mollit ad elit proident excepteur nostrud ex ex ullamco culpa cillum magna qui nisi occaecat nostrud ipsum officia exercitation labore nisi enim elit exercitation eiusmod elit reprehenderit reprehenderit duis Lorem id est ipsum labore officia occaecat ex consectetur pariatur",
            name: "Welch Parsons Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 19494,
            bedrooms: 2,
            numberOfBedrooms: "",
            price: 11348215,
            community: "Benton Heights",
            rentType: "",
            bathrooms: 17,
            garages: 6
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Air Conditioning",
              icon: "mdi-air-filter"
            }
          ],
          description: {
            description:
              "sunt dolor magna sint eiusmod ut anim excepteur voluptate officia sunt tempor duis ullamco sit veniam laborum ex amet occaecat velit ea aliquip nostrud velit laborum quis est consectetur aute est eiusmod eiusmod minim elit aliqua aute ea culpa dolor deserunt duis cillum proident esse sint sint cupidatat sunt adipisicing anim excepteur reprehenderit id qui voluptate culpa duis et qui",
            name: "Bauer Hensley Property"
          },
          details: {
            propertyId: "",
            parish: "St. Andrew",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 12503,
            bedrooms: 17,
            numberOfBedrooms: "",
            price: 4932279,
            community: "Tate Heights",
            rentType: "",
            bathrooms: 8,
            garages: 14
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Water Heater",
              icon: "mdi-thermometer-high"
            }
          ],
          description: {
            description:
              "veniam esse ea esse duis laborum id consequat quis pariatur nostrud occaecat qui tempor veniam ad sunt eiusmod elit adipisicing elit anim sunt amet qui minim consequat deserunt est eiusmod incididunt consequat ex qui et commodo anim proident sint sit consectetur est aute officia est anim ad in ea amet consequat proident mollit excepteur nostrud non sint incididunt adipisicing est",
            name: "Graves Estrada Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 13999,
            bedrooms: 10,
            numberOfBedrooms: "",
            price: 97684681,
            community: "Cobb Heights",
            rentType: "",
            bathrooms: 16,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Smart Home",
              icon: "mdi-home-assistant"
            }
          ],
          description: {
            description:
              "velit mollit cillum ex excepteur sunt eiusmod incididunt elit mollit consequat cillum ea commodo mollit aute sint voluptate dolor aliqua adipisicing aliqua voluptate occaecat proident quis voluptate commodo duis laborum excepteur reprehenderit do excepteur commodo et laboris ea enim exercitation id aliqua occaecat fugiat qui amet ipsum cillum cupidatat excepteur aliquip esse consequat fugiat aliqua est tempor adipisicing anim excepteur",
            name: "Callie Roman Property"
          },
          details: {
            propertyId: "",
            parish: "Westmoreland",
            propertyType: "Warehouse",
            propertyFor: "Sale",
            size: 19532,
            bedrooms: 16,
            numberOfBedrooms: "",
            price: 55883679,
            community: "Pace Heights",
            rentType: "",
            bathrooms: 10,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Schools Near By",
              icon: "mdi-school"
            }
          ],
          description: {
            description:
              "pariatur cupidatat id commodo esse cillum dolor exercitation tempor esse cupidatat Lorem sint laboris ex officia velit culpa tempor adipisicing adipisicing amet esse ullamco velit voluptate ipsum anim ullamco sit elit veniam tempor adipisicing occaecat adipisicing nulla sint voluptate eu velit commodo veniam enim nostrud reprehenderit occaecat do laborum anim pariatur consequat ut qui ut pariatur elit ea dolor ea",
            name: "Cleveland Mcintosh Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 11523,
            bedrooms: 12,
            numberOfBedrooms: "",
            price: 1836498,
            community: "Dennis Heights",
            rentType: "",
            bathrooms: 9,
            garages: 2
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gym",
              icon: "mdi-dumbbell"
            }
          ],
          description: {
            description:
              "nulla et minim Lorem eu cupidatat dolor excepteur amet ad sunt cillum ullamco mollit ex ipsum minim enim incididunt minim tempor ea Lorem tempor voluptate sunt qui elit commodo et cupidatat enim occaecat incididunt non deserunt exercitation et anim dolor consequat proident pariatur officia occaecat sunt consectetur consectetur enim duis aute adipisicing eiusmod laborum laborum magna commodo sint exercitation aliqua",
            name: "Elvia Fields Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 7088,
            bedrooms: 7,
            numberOfBedrooms: "",
            price: 30989002,
            community: "Nicholson Heights",
            rentType: "",
            bathrooms: 3,
            garages: 10
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Water Tank",
              icon: "mdi-water"
            }
          ],
          description: {
            description:
              "sit eu irure in anim enim adipisicing dolore enim dolor Lorem exercitation cupidatat veniam sit Lorem ullamco deserunt cupidatat laborum occaecat in incididunt dolor irure sint nisi nulla magna ullamco sit aliquip duis incididunt velit aliquip voluptate consectetur elit in laborum mollit ad veniam id non cupidatat ut exercitation dolor nostrud eiusmod anim incididunt in sunt laboris est enim consectetur",
            name: "Jacqueline Head Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 14141,
            bedrooms: 13,
            numberOfBedrooms: "",
            price: 21157371,
            community: "Gay Heights",
            rentType: "",
            bathrooms: 1,
            garages: 14
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gym",
              icon: "mdi-dumbbell"
            }
          ],
          description: {
            description:
              "duis ea in enim ad consectetur officia laborum culpa id sunt Lorem minim nostrud esse veniam veniam minim aliquip nulla veniam in qui Lorem occaecat aliquip sunt Lorem reprehenderit sunt in laborum esse sint ut elit do adipisicing sint dolor do ut enim aliquip tempor adipisicing incididunt ex eiusmod nisi irure elit qui pariatur id ex enim magna cupidatat mollit",
            name: "Hull Thomas Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "House",
            propertyFor: "Sale",
            size: 8989,
            bedrooms: 8,
            numberOfBedrooms: "",
            price: 91217313,
            community: "Floyd Heights",
            rentType: "",
            bathrooms: 16,
            garages: 13
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Hospital Near By",
              icon: "mdi-hospital-building"
            }
          ],
          description: {
            description:
              "ea incididunt sint dolore laborum officia aliqua aliquip qui nulla minim nostrud commodo amet sunt ad aliqua nisi aliqua et elit proident aliqua qui reprehenderit ut eiusmod fugiat sit sint irure in consectetur cillum officia cupidatat in sunt laboris Lorem occaecat cupidatat eu ut velit elit consectetur sint occaecat qui elit dolor ad elit velit elit laborum officia irure commodo",
            name: "Roman William Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 7286,
            bedrooms: 12,
            numberOfBedrooms: "",
            price: 50165494,
            community: "Rosales Heights",
            rentType: "",
            bathrooms: 17,
            garages: 14
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Air Conditioning",
              icon: "mdi-air-filter"
            }
          ],
          description: {
            description:
              "anim sunt Lorem ex quis qui cillum velit culpa in pariatur veniam non exercitation id sint irure amet nulla fugiat sunt Lorem et amet nostrud fugiat aute laborum ipsum minim nisi eu elit elit fugiat occaecat amet amet cillum nostrud nisi elit veniam ea amet proident est labore commodo tempor non ullamco labore nostrud deserunt ut ullamco labore proident officia",
            name: "Sonya Robbins Property"
          },
          details: {
            propertyId: "",
            parish: "St. Andrew",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 9946,
            bedrooms: 10,
            numberOfBedrooms: "",
            price: 60837569,
            community: "Clay Heights",
            rentType: "",
            bathrooms: 7,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Water Tank",
              icon: "mdi-water"
            }
          ],
          description: {
            description:
              "eiusmod occaecat est culpa ipsum nulla est sit eiusmod aute aliqua ut ullamco minim anim minim consectetur voluptate reprehenderit cupidatat culpa sint consequat dolor exercitation nostrud mollit magna voluptate anim incididunt esse ex esse do nulla commodo amet fugiat commodo adipisicing adipisicing deserunt qui cillum cillum aute ullamco labore ex labore amet mollit pariatur duis culpa ipsum culpa officia do",
            name: "Tyson Allen Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 14879,
            bedrooms: 7,
            numberOfBedrooms: "",
            price: 47900043,
            community: "Whitney Heights",
            rentType: "",
            bathrooms: 10,
            garages: 4
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Hospital Near By",
              icon: "mdi-hospital-building"
            }
          ],
          description: {
            description:
              "ut Lorem magna eu eiusmod anim quis amet incididunt nisi incididunt culpa occaecat nulla eiusmod dolore officia excepteur veniam aliquip excepteur duis qui Lorem velit exercitation do esse proident irure dolor id est cillum tempor ad laborum ea irure fugiat occaecat sit reprehenderit officia enim esse ea ipsum ipsum fugiat dolore eu elit officia est enim sit duis quis dolore",
            name: "Myra Jarvis Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 12921,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 23670720,
            community: "Mcdowell Heights",
            rentType: "",
            bathrooms: 18,
            garages: 2
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Schools Near By",
              icon: "mdi-school"
            }
          ],
          description: {
            description:
              "irure enim anim ut amet elit magna excepteur qui amet officia nisi culpa ad pariatur veniam eiusmod reprehenderit qui nulla amet fugiat duis elit adipisicing labore fugiat reprehenderit ut elit minim cupidatat dolore consequat dolore eiusmod velit labore qui anim eu ipsum duis sunt fugiat excepteur sit fugiat commodo nulla ipsum id sit excepteur consequat consectetur cillum ullamco elit dolore",
            name: "Mercedes Hodges Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 3800,
            bedrooms: 10,
            numberOfBedrooms: "",
            price: 99466233,
            community: "Morgan Heights",
            rentType: "",
            bathrooms: 14,
            garages: 16
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Family Oriented",
              icon: "mdi-home-heart"
            }
          ],
          description: {
            description:
              "non elit et tempor irure velit do cillum deserunt qui ut cupidatat et enim ea dolor aliquip ex dolor dolore commodo reprehenderit in anim veniam deserunt velit duis et commodo sunt adipisicing in proident aliqua anim esse do do veniam incididunt nisi laboris dolor sunt elit do nulla excepteur in do nulla culpa ut qui officia in nisi Lorem tempor",
            name: "Stuart Vang Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 5181,
            bedrooms: 16,
            numberOfBedrooms: "",
            price: 42141834,
            community: "Hatfield Heights",
            rentType: "",
            bathrooms: 3,
            garages: 7
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Tennis Court",
              icon: "mdi-tennis"
            }
          ],
          description: {
            description:
              "in ad minim labore proident fugiat irure quis excepteur enim quis commodo adipisicing voluptate ipsum laboris elit dolore culpa aliqua mollit commodo amet ex eu in do culpa amet laborum cupidatat commodo non id labore anim anim Lorem ea ex nisi Lorem sunt eu minim reprehenderit labore consequat eiusmod officia eiusmod non ea exercitation ex consectetur laboris aliquip Lorem deserunt",
            name: "Shawn Ayala Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Warehouse",
            propertyFor: "Sale",
            size: 6424,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 18264557,
            community: "Davis Heights",
            rentType: "",
            bathrooms: 20,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Swimming Pool",
              icon: "mdi-pool"
            }
          ],
          description: {
            description:
              "aute Lorem nulla ut tempor voluptate labore non minim quis ipsum laborum ut aliquip exercitation ullamco elit minim occaecat incididunt enim fugiat ullamco cupidatat sit mollit consequat et nisi reprehenderit sint mollit occaecat officia laboris sit fugiat aliqua voluptate et tempor reprehenderit consectetur exercitation voluptate adipisicing mollit Lorem qui ex id minim ipsum incididunt elit dolore esse fugiat et ullamco",
            name: "Mayo Cox Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 13559,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 25039013,
            community: "Owen Heights",
            rentType: "",
            bathrooms: 12,
            garages: 8
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Water Tank",
              icon: "mdi-water"
            }
          ],
          description: {
            description:
              "laboris pariatur laborum dolor nostrud commodo voluptate ea elit reprehenderit duis exercitation aliqua sunt tempor et commodo esse consequat exercitation enim eiusmod sit adipisicing ad Lorem officia cupidatat ea non consequat id magna est veniam Lorem exercitation ullamco aliqua anim incididunt non duis ipsum ad ad sint cupidatat sit incididunt voluptate et eiusmod adipisicing veniam ullamco fugiat mollit excepteur esse",
            name: "Melissa Webster Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "House",
            propertyFor: "Sale",
            size: 18455,
            bedrooms: 8,
            numberOfBedrooms: "",
            price: 88905853,
            community: "Hardin Heights",
            rentType: "",
            bathrooms: 1,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "et amet culpa ea adipisicing elit ut exercitation pariatur ullamco anim quis nisi labore aliqua aliqua eiusmod dolore et quis magna laboris aliquip ullamco proident ullamco aliqua mollit magna in non consequat non amet consequat labore voluptate et cillum velit labore ea culpa incididunt enim dolor nulla voluptate reprehenderit nisi fugiat proident ut in mollit incididunt ullamco excepteur commodo nulla",
            name: "Delia Duran Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 7598,
            bedrooms: 12,
            numberOfBedrooms: "",
            price: 10821503,
            community: "Hull Heights",
            rentType: "",
            bathrooms: 4,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Movie Theater Near By",
              icon: "mdi-theater"
            }
          ],
          description: {
            description:
              "veniam dolor sint esse proident Lorem qui in qui culpa elit cillum elit in sunt ex excepteur duis do eu culpa magna et adipisicing do tempor culpa aliqua nisi esse deserunt in labore minim aute proident et officia sit ad pariatur tempor deserunt deserunt dolore ut veniam mollit laboris consectetur aliqua commodo aliqua cillum esse exercitation excepteur proident enim ea",
            name: "Rochelle Mayo Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 6869,
            bedrooms: 19,
            numberOfBedrooms: "",
            price: 74812665,
            community: "Livingston Heights",
            rentType: "",
            bathrooms: 19,
            garages: 8
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "ut ullamco ea sunt sunt ad incididunt voluptate tempor id esse nulla nulla laborum ea esse proident Lorem est incididunt duis proident Lorem consectetur do veniam veniam nulla laborum cupidatat reprehenderit laborum aliquip aliqua enim culpa eiusmod labore est esse cillum officia ea nostrud esse aute ipsum nisi quis voluptate aute aliquip amet laborum deserunt aliqua velit et dolor magna",
            name: "Hinton Fischer Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "House",
            propertyFor: "Sale",
            size: 7728,
            bedrooms: 19,
            numberOfBedrooms: "",
            price: 86935900,
            community: "Pacheco Heights",
            rentType: "",
            bathrooms: 20,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gym",
              icon: "mdi-dumbbell"
            }
          ],
          description: {
            description:
              "aute et do id amet reprehenderit duis tempor ullamco magna ad dolore qui irure Lorem dolore commodo ea non nostrud ullamco eu enim nostrud consequat sit incididunt deserunt incididunt aliquip consectetur deserunt reprehenderit quis excepteur irure nostrud veniam ullamco cillum veniam aliquip et nulla culpa id tempor mollit est laboris do incididunt commodo mollit ad magna ea dolore laborum consequat",
            name: "Ester Carroll Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 6321,
            bedrooms: 12,
            numberOfBedrooms: "",
            price: 28990894,
            community: "Hart Heights",
            rentType: "",
            bathrooms: 10,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Park Near By",
              icon: "mdi-nature-people"
            }
          ],
          description: {
            description:
              "ea enim ad pariatur cupidatat ad officia adipisicing eiusmod reprehenderit nisi est culpa quis dolore veniam adipisicing ullamco et consectetur sit est anim nostrud minim eu exercitation sunt consectetur veniam proident eiusmod fugiat et anim eiusmod esse proident duis dolor labore non in aliquip officia officia in duis sint amet voluptate non est occaecat ea dolore incididunt magna cupidatat eu",
            name: "Jenna Valentine Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 2807,
            bedrooms: 16,
            numberOfBedrooms: "",
            price: 88788780,
            community: "Pope Heights",
            rentType: "",
            bathrooms: 4,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Schools Near By",
              icon: "mdi-school"
            }
          ],
          description: {
            description:
              "eiusmod proident occaecat ad ex duis ea culpa laborum duis laborum ex elit sint laborum dolore commodo magna aliquip ullamco aute mollit commodo cillum ad dolore eiusmod eu quis eu labore laborum occaecat dolor nostrud ea incididunt mollit nisi dolore eu Lorem est laborum sunt dolore voluptate occaecat ut proident labore laboris ipsum exercitation velit velit ut et culpa do",
            name: "Solis Fuller Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 16105,
            bedrooms: 7,
            numberOfBedrooms: "",
            price: 2006855,
            community: "Orr Heights",
            rentType: "",
            bathrooms: 1,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gated Community",
              icon: "mdi-security"
            }
          ],
          description: {
            description:
              "occaecat do nostrud culpa occaecat dolor do ea sunt qui excepteur eiusmod sunt eu ad enim ex sunt est et veniam in ex id eu ullamco do laboris laboris pariatur veniam proident sit in est ea duis esse fugiat tempor esse voluptate deserunt deserunt commodo est Lorem mollit nostrud laborum aute magna esse ipsum sit adipisicing in ex cupidatat aute",
            name: "Donovan Carson Property"
          },
          details: {
            propertyId: "",
            parish: "Portland",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 17865,
            bedrooms: 19,
            numberOfBedrooms: "",
            price: 80580697,
            community: "Gentry Heights",
            rentType: "",
            bathrooms: 6,
            garages: 17
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Parking",
              icon: "mdi-car"
            }
          ],
          description: {
            description:
              "ullamco sint officia et proident amet eiusmod eu dolor non nisi aute veniam consequat dolore laboris culpa pariatur irure quis anim cillum eu Lorem aliquip occaecat Lorem elit minim amet quis sint nostrud incididunt ea cupidatat deserunt reprehenderit enim Lorem laborum enim labore deserunt est in ut ex officia ut sint ipsum excepteur culpa incididunt aliqua cupidatat in proident velit",
            name: "Lynn Dunlap Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 16364,
            bedrooms: 16,
            numberOfBedrooms: "",
            price: 62053160,
            community: "Peters Heights",
            rentType: "",
            bathrooms: 10,
            garages: 13
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gym",
              icon: "mdi-dumbbell"
            }
          ],
          description: {
            description:
              "aliqua occaecat velit ullamco nulla consequat enim nisi do cupidatat sit nulla excepteur mollit reprehenderit ex sint magna ipsum et sunt dolor labore reprehenderit est eiusmod aliquip ut cillum sit laborum fugiat culpa qui elit in ad fugiat duis duis dolore irure ea id aliqua deserunt irure velit anim et culpa laboris enim sunt enim voluptate nisi ad sint et",
            name: "Roseann Bolton Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 6644,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 83997123,
            community: "Hoover Heights",
            rentType: "",
            bathrooms: 2,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "24 Hour Security",
              icon: "mdi-cctv"
            }
          ],
          description: {
            description:
              "dolore esse fugiat deserunt exercitation commodo et excepteur minim adipisicing commodo est voluptate quis excepteur ut reprehenderit aute sit ex veniam non aliqua velit consectetur consectetur et ut in ipsum mollit ex sunt sunt sunt reprehenderit veniam cillum minim cupidatat non deserunt culpa duis ut non enim cupidatat amet est sint velit laboris in mollit proident amet ut minim tempor",
            name: "Colon Guy Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 19249,
            bedrooms: 6,
            numberOfBedrooms: "",
            price: 35103228,
            community: "Baker Heights",
            rentType: "",
            bathrooms: 1,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Church Near By",
              icon: "mdi-church"
            }
          ],
          description: {
            description:
              "pariatur dolore voluptate adipisicing nostrud consectetur proident consectetur laborum consectetur laborum fugiat ad velit eiusmod tempor consectetur eu commodo nulla irure nulla aute cillum do nulla occaecat fugiat fugiat eiusmod anim sunt excepteur cillum do culpa do laborum sunt ut non tempor commodo culpa anim deserunt pariatur culpa incididunt et ullamco ex incididunt pariatur non velit sit do cillum cillum",
            name: "Crane Sexton Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 10245,
            bedrooms: 12,
            numberOfBedrooms: "",
            price: 38716543,
            community: "Frederick Heights",
            rentType: "",
            bathrooms: 1,
            garages: 12
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Church Near By",
              icon: "mdi-church"
            }
          ],
          description: {
            description:
              "elit aliqua amet aute aute ut pariatur minim culpa est voluptate occaecat excepteur est voluptate officia ea officia dolor cupidatat ipsum ullamco proident excepteur elit reprehenderit excepteur mollit elit id excepteur commodo occaecat sint Lorem dolore amet ex exercitation pariatur nostrud do aute excepteur dolore ea ut magna quis consectetur aliquip ipsum ipsum duis ad incididunt laboris sunt deserunt Lorem",
            name: "Marshall Frazier Property"
          },
          details: {
            propertyId: "",
            parish: "Hanover",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 11126,
            bedrooms: 4,
            numberOfBedrooms: "",
            price: 89257321,
            community: "Mitchell Heights",
            rentType: "",
            bathrooms: 16,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Smart Home",
              icon: "mdi-home-assistant"
            }
          ],
          description: {
            description:
              "laboris nisi ea eiusmod incididunt eu culpa excepteur laboris quis consequat occaecat do et velit ipsum culpa tempor nulla id commodo deserunt exercitation nostrud eiusmod magna adipisicing ex aliqua ad pariatur anim incididunt sunt cupidatat duis velit fugiat do velit magna enim sint cillum cillum nostrud tempor sit incididunt consectetur cillum in sit sit ullamco magna tempor do dolore consequat",
            name: "Angelica Fleming Property"
          },
          details: {
            propertyId: "",
            parish: "St. Elizabeth",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 13226,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 58043513,
            community: "Reid Heights",
            rentType: "",
            bathrooms: 10,
            garages: 5
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Supermarket Near By",
              icon: "mdi-shopping"
            }
          ],
          description: {
            description:
              "consequat id et occaecat laboris commodo ea ipsum ex quis ad qui cillum ad culpa ad in quis ut veniam Lorem excepteur tempor non duis anim ullamco aliqua consequat sit minim officia proident elit adipisicing exercitation anim eu irure quis velit et ut mollit magna nostrud ut exercitation adipisicing consectetur reprehenderit esse officia laborum esse proident deserunt ut ullamco veniam",
            name: "Adrienne Merritt Property"
          },
          details: {
            propertyId: "",
            parish: "Westmoreland",
            propertyType: "Warehouse",
            propertyFor: "Sale",
            size: 3066,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 73866583,
            community: "Mccarthy Heights",
            rentType: "",
            bathrooms: 12,
            garages: 16
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Schools Near By",
              icon: "mdi-school"
            }
          ],
          description: {
            description:
              "magna do adipisicing quis occaecat sunt veniam Lorem laborum voluptate culpa anim quis culpa duis ea aliqua elit tempor consectetur do adipisicing adipisicing laboris qui cillum aliquip irure in esse id do dolor quis veniam nisi enim excepteur mollit nisi fugiat non dolor aute est consectetur amet reprehenderit pariatur commodo officia incididunt veniam irure commodo ad anim non in adipisicing",
            name: "Livingston Perry Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 7999,
            bedrooms: 20,
            numberOfBedrooms: "",
            price: 31542418,
            community: "Sims Heights",
            rentType: "",
            bathrooms: 6,
            garages: 19
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Supermarket Near By",
              icon: "mdi-shopping"
            }
          ],
          description: {
            description:
              "incididunt tempor ex do reprehenderit do commodo esse magna exercitation aliqua est laboris duis ad est cillum exercitation amet ex proident mollit ipsum consectetur adipisicing excepteur laboris occaecat occaecat adipisicing ad nostrud reprehenderit reprehenderit magna exercitation nisi cupidatat sunt incididunt deserunt duis consequat incididunt occaecat quis consequat ex voluptate id consectetur consequat fugiat qui do consequat deserunt ullamco et quis",
            name: "Graham Weeks Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 11479,
            bedrooms: 16,
            numberOfBedrooms: "",
            price: 58594855,
            community: "Curry Heights",
            rentType: "",
            bathrooms: 12,
            garages: 14
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Family Oriented",
              icon: "mdi-home-heart"
            }
          ],
          description: {
            description:
              "incididunt nostrud dolor culpa cillum reprehenderit sunt cillum veniam pariatur ut incididunt amet in tempor duis nisi in incididunt eiusmod mollit cupidatat Lorem reprehenderit sunt aliqua dolor reprehenderit ex ullamco mollit sunt sunt occaecat occaecat elit excepteur officia officia sint elit consectetur reprehenderit duis quis magna laboris labore dolor sunt consequat ad nulla sunt esse dolore eu culpa aute commodo",
            name: "Natasha Jackson Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 4280,
            bedrooms: 6,
            numberOfBedrooms: "",
            price: 7494366,
            community: "Holt Heights",
            rentType: "",
            bathrooms: 5,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Grilled",
              icon: "mdi-shield-home"
            }
          ],
          description: {
            description:
              "laborum quis Lorem officia et consectetur elit sint ullamco voluptate enim nisi non labore pariatur et in officia ullamco voluptate sit ex velit ullamco consequat amet sit cupidatat anim cupidatat mollit officia qui aliqua tempor sint anim do elit consectetur est adipisicing adipisicing laboris veniam occaecat occaecat fugiat incididunt aliqua occaecat mollit labore mollit ea sunt ut enim anim non",
            name: "Tasha Ray Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 13357,
            bedrooms: 18,
            numberOfBedrooms: "",
            price: 42114419,
            community: "Hansen Heights",
            rentType: "",
            bathrooms: 1,
            garages: 13
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Parking",
              icon: "mdi-car"
            }
          ],
          description: {
            description:
              "pariatur laborum ea pariatur labore nisi proident est minim Lorem consectetur elit ad amet mollit eiusmod proident eiusmod voluptate consequat deserunt non sunt et eu magna mollit mollit ea eiusmod est in duis nostrud amet dolore esse ex amet sint anim aliqua ad non sunt laboris veniam aute excepteur minim fugiat id in aliquip reprehenderit aute id exercitation duis id",
            name: "Malinda Holmes Property"
          },
          details: {
            propertyId: "",
            parish: "Hanover",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 12768,
            bedrooms: 14,
            numberOfBedrooms: "",
            price: 96003802,
            community: "Villarreal Heights",
            rentType: "",
            bathrooms: 15,
            garages: 9
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Movie Theater Near By",
              icon: "mdi-theater"
            }
          ],
          description: {
            description:
              "ad exercitation elit ea sint eiusmod elit quis cillum amet commodo dolore sint quis velit est aliqua ea laboris Lorem aliquip ipsum dolore officia anim non ex consectetur irure sit laborum occaecat voluptate cupidatat id minim elit consequat id est dolore sint nisi nostrud dolor eiusmod nisi nulla laboris ipsum mollit commodo commodo incididunt occaecat voluptate non consequat id occaecat",
            name: "Priscilla Brooks Property"
          },
          details: {
            propertyId: "",
            parish: "St. Elizabeth",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 16271,
            bedrooms: 16,
            numberOfBedrooms: "",
            price: 63643612,
            community: "Nunez Heights",
            rentType: "",
            bathrooms: 7,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Hospital Near By",
              icon: "mdi-hospital-building"
            }
          ],
          description: {
            description:
              "ullamco exercitation velit aute adipisicing reprehenderit tempor cupidatat commodo anim non veniam excepteur ex nulla sint qui anim nisi nostrud veniam ut cupidatat pariatur do adipisicing exercitation veniam ut pariatur occaecat occaecat deserunt magna tempor mollit excepteur do dolore ipsum voluptate ullamco deserunt id adipisicing magna exercitation in mollit eu aute nostrud esse consectetur aliquip excepteur dolore dolor id adipisicing",
            name: "Juana Lane Property"
          },
          details: {
            propertyId: "",
            parish: "Portland",
            propertyType: "Warehouse",
            propertyFor: "Sale",
            size: 16645,
            bedrooms: 9,
            numberOfBedrooms: "",
            price: 24548980,
            community: "Salas Heights",
            rentType: "",
            bathrooms: 8,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Water Tank",
              icon: "mdi-water"
            }
          ],
          description: {
            description:
              "aliquip deserunt ex dolore qui irure esse cupidatat mollit anim in tempor nostrud ullamco est cupidatat fugiat magna labore cupidatat cillum esse in fugiat ullamco incididunt aliqua veniam aute est eiusmod sint do in sit ut aliqua mollit excepteur consectetur velit adipisicing laboris mollit aliqua cupidatat occaecat excepteur deserunt esse veniam id adipisicing proident ullamco culpa officia dolore ex labore",
            name: "Kirby Weaver Property"
          },
          details: {
            propertyId: "",
            parish: "Portland",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 5942,
            bedrooms: 1,
            numberOfBedrooms: "",
            price: 91188656,
            community: "Montgomery Heights",
            rentType: "",
            bathrooms: 10,
            garages: 8
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "ipsum aliquip tempor consectetur culpa incididunt consectetur eiusmod eiusmod veniam enim veniam dolore ut sint ullamco labore ut pariatur qui velit magna exercitation reprehenderit esse labore ex ex esse velit occaecat voluptate do anim occaecat laborum adipisicing pariatur veniam laborum culpa ex anim ad labore fugiat irure non duis proident elit aliqua esse sunt officia id labore in velit exercitation",
            name: "Huff Webb Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 4137,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 45592993,
            community: "Decker Heights",
            rentType: "",
            bathrooms: 11,
            garages: 5
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gated Community",
              icon: "mdi-security"
            }
          ],
          description: {
            description:
              "dolor enim mollit veniam amet nisi cillum sunt elit dolor sit veniam voluptate id labore consectetur cillum ut excepteur cillum nulla eiusmod labore id tempor elit labore proident anim excepteur consequat tempor velit culpa eu exercitation amet ullamco fugiat labore tempor culpa ullamco est velit fugiat consequat occaecat aliquip officia est anim sit sint consectetur ut incididunt irure sint ut",
            name: "Ramirez Nolan Property"
          },
          details: {
            propertyId: "",
            parish: "St. Thomas",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 16970,
            bedrooms: 4,
            numberOfBedrooms: "",
            price: 66063011,
            community: "Moon Heights",
            rentType: "",
            bathrooms: 1,
            garages: 6
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Water Tank",
              icon: "mdi-water"
            }
          ],
          description: {
            description:
              "laborum officia excepteur dolor est ea aliquip mollit amet esse aliqua magna ea culpa amet fugiat eu Lorem sit minim eu est commodo anim ad anim qui veniam eu veniam ea aliquip Lorem voluptate Lorem ea ea sunt qui aute do nisi sit laborum labore exercitation sit consequat nisi enim cupidatat pariatur esse laboris magna sunt culpa ipsum aliquip ad",
            name: "Francis Hawkins Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 10878,
            bedrooms: 3,
            numberOfBedrooms: "",
            price: 79265877,
            community: "Higgins Heights",
            rentType: "",
            bathrooms: 18,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Cable TV ",
              icon: "mdi-television"
            }
          ],
          description: {
            description:
              "ipsum nisi est deserunt amet ut quis nulla deserunt in qui adipisicing anim aliqua cupidatat laboris consequat id tempor adipisicing non dolore amet laborum enim proident commodo esse id non est cupidatat deserunt aliqua excepteur elit id labore mollit eu tempor nostrud cillum aliquip consequat elit irure tempor irure Lorem aliqua dolore eiusmod excepteur velit dolor non exercitation elit in",
            name: "Lillie Bowers Property"
          },
          details: {
            propertyId: "",
            parish: "Portland",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 10875,
            bedrooms: 7,
            numberOfBedrooms: "",
            price: 99706218,
            community: "Alvarado Heights",
            rentType: "",
            bathrooms: 2,
            garages: 10
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Gym",
              icon: "mdi-dumbbell"
            }
          ],
          description: {
            description:
              "quis sit magna laborum sint do laboris aute dolor elit quis adipisicing in occaecat sint eiusmod ut deserunt velit laborum irure incididunt culpa esse minim dolor sit consectetur amet Lorem qui magna nisi quis consequat quis sint qui esse labore dolor amet Lorem adipisicing esse qui nostrud quis laboris adipisicing ipsum ullamco nostrud magna nisi enim commodo elit do ea",
            name: "Evangeline Woods Property"
          },
          details: {
            propertyId: "",
            parish: "Westmoreland",
            propertyType: "House",
            propertyFor: "Sale",
            size: 11593,
            bedrooms: 2,
            numberOfBedrooms: "",
            price: 91266581,
            community: "Velazquez Heights",
            rentType: "",
            bathrooms: 12,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Generator",
              icon: "mdi-flash"
            }
          ],
          description: {
            description:
              "do voluptate veniam cupidatat cillum anim irure do dolore sunt veniam ullamco eu nulla commodo do occaecat duis sunt velit aliquip sint laborum duis duis culpa enim sunt sit veniam eiusmod culpa nisi duis aliqua enim enim qui et ad id ullamco ut elit excepteur cillum et aliqua dolor ex laborum tempor nostrud sunt est qui nostrud eu Lorem tempor",
            name: "Tina Mcmahon Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 7214,
            bedrooms: 20,
            numberOfBedrooms: "",
            price: 67029025,
            community: "Mcfadden Heights",
            rentType: "",
            bathrooms: 7,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Family Oriented",
              icon: "mdi-home-heart"
            }
          ],
          description: {
            description:
              "consectetur anim elit sit consectetur deserunt mollit officia qui officia ut magna eiusmod dolor elit anim in duis et Lorem et sit eu ut occaecat sint est minim ipsum reprehenderit ut anim anim cillum cupidatat do ut esse ipsum do reprehenderit deserunt consequat pariatur ullamco nisi tempor ea quis ullamco qui eiusmod commodo dolore eiusmod sint irure laborum tempor ea",
            name: "Nicholson Norris Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 3173,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 54725865,
            community: "Baird Heights",
            rentType: "",
            bathrooms: 1,
            garages: 16
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Cable TV ",
              icon: "mdi-television"
            }
          ],
          description: {
            description:
              "anim ullamco deserunt fugiat qui culpa ipsum incididunt quis elit fugiat officia non minim quis anim id pariatur laborum laborum id aliquip tempor occaecat incididunt pariatur deserunt aliquip qui ut commodo minim dolor irure sunt ut nulla commodo amet ad sit fugiat sint proident officia et aliqua laboris ea duis eu enim irure anim deserunt fugiat irure ullamco pariatur non",
            name: "Milagros Hudson Property"
          },
          details: {
            propertyId: "",
            parish: "Kingston",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 18924,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 24770085,
            community: "Walker Heights",
            rentType: "",
            bathrooms: 7,
            garages: 7
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Water Heater",
              icon: "mdi-thermometer-high"
            }
          ],
          description: {
            description:
              "eiusmod ipsum minim labore magna magna eu occaecat ipsum enim est eiusmod laboris non sint id elit ipsum laboris sint excepteur ipsum deserunt enim voluptate do voluptate labore sint occaecat proident nostrud incididunt proident eiusmod qui labore ullamco et aliqua irure cupidatat sint in id nisi aute nulla pariatur quis laborum nostrud esse incididunt excepteur consectetur cupidatat laborum dolore veniam",
            name: "Diann Castro Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 16753,
            bedrooms: 12,
            numberOfBedrooms: "",
            price: 44936705,
            community: "Cochran Heights",
            rentType: "",
            bathrooms: 9,
            garages: 7
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Hospital Near By",
              icon: "mdi-hospital-building"
            }
          ],
          description: {
            description:
              "eu ea quis ea excepteur exercitation est quis culpa incididunt velit occaecat ipsum cillum velit velit anim nostrud cillum id enim proident est fugiat irure quis fugiat nulla occaecat commodo nulla aute commodo duis quis dolore irure fugiat tempor quis mollit veniam ullamco proident laboris sit id consectetur eiusmod reprehenderit aute veniam esse cupidatat ipsum nulla ex culpa mollit labore",
            name: "Case Watkins Property"
          },
          details: {
            propertyId: "",
            parish: "St. Andrew",
            propertyType: "Warehouse",
            propertyFor: "Sale",
            size: 14311,
            bedrooms: 10,
            numberOfBedrooms: "",
            price: 42968803,
            community: "Perkins Heights",
            rentType: "",
            bathrooms: 19,
            garages: 4
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Movie Theater Near By",
              icon: "mdi-theater"
            }
          ],
          description: {
            description:
              "nulla ullamco commodo sunt tempor nulla laboris culpa irure exercitation consequat sit tempor consequat voluptate adipisicing consectetur pariatur ullamco et incididunt aliquip magna mollit dolor reprehenderit non fugiat sunt in sint mollit nisi do pariatur ea veniam reprehenderit ullamco occaecat mollit irure esse in nostrud et dolore et nulla ad nisi Lorem proident excepteur cillum et irure eu labore eu",
            name: "Little Mueller Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 17138,
            bedrooms: 10,
            numberOfBedrooms: "",
            price: 14320912,
            community: "Valdez Heights",
            rentType: "",
            bathrooms: 18,
            garages: 19
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Hospital Near By",
              icon: "mdi-hospital-building"
            }
          ],
          description: {
            description:
              "quis adipisicing aliquip reprehenderit aute ut eiusmod nostrud enim enim Lorem eu esse magna consequat excepteur duis sint ipsum esse cillum do sit non est excepteur adipisicing duis labore Lorem id ullamco ipsum adipisicing esse in dolor laborum sunt do tempor occaecat et Lorem exercitation aute occaecat elit officia amet id ipsum cillum enim aliquip cillum anim do fugiat incididunt",
            name: "Shepherd Meyers Property"
          },
          details: {
            propertyId: "",
            parish: "Kingston",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 5920,
            bedrooms: 6,
            numberOfBedrooms: "",
            price: 83554678,
            community: "Yates Heights",
            rentType: "",
            bathrooms: 14,
            garages: 3
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Swimming Pool",
              icon: "mdi-pool"
            }
          ],
          description: {
            description:
              "mollit ipsum duis ut voluptate elit nulla non consequat exercitation ad officia quis irure culpa officia ut irure est elit eiusmod aliqua dolor quis fugiat mollit proident sit veniam tempor ut ipsum esse ad non reprehenderit enim tempor labore do consequat proident dolore et consequat occaecat elit commodo reprehenderit quis in dolore eiusmod cupidatat voluptate pariatur cillum laborum ad eiusmod",
            name: "Strickland Grimes Property"
          },
          details: {
            propertyId: "",
            parish: "Hanover",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 12989,
            bedrooms: 17,
            numberOfBedrooms: "",
            price: 80024681,
            community: "Weiss Heights",
            rentType: "",
            bathrooms: 1,
            garages: 5
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Air Conditioning",
              icon: "mdi-air-filter"
            }
          ],
          description: {
            description:
              "duis quis est id anim id commodo laborum voluptate nostrud sit eu deserunt exercitation elit exercitation deserunt labore sint in incididunt commodo cillum et consequat mollit eu est ipsum elit excepteur eiusmod occaecat do commodo pariatur pariatur amet Lorem fugiat esse labore minim aliqua aute ex deserunt do irure exercitation dolor esse laboris id consequat quis dolore qui Lorem minim",
            name: "Geneva Britt Property"
          },
          details: {
            propertyId: "",
            parish: "St. Catherine",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 3306,
            bedrooms: 7,
            numberOfBedrooms: "",
            price: 64782898,
            community: "Petty Heights",
            rentType: "",
            bathrooms: 12,
            garages: 17
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Water Tank",
              icon: "mdi-water"
            }
          ],
          description: {
            description:
              "est aute est ex laboris id elit aute quis nulla aliqua officia eu veniam non incididunt enim cillum ipsum ullamco non ea proident adipisicing aliqua ad excepteur nostrud nulla est velit ad laborum minim deserunt nostrud tempor magna enim pariatur tempor excepteur exercitation magna dolor est exercitation nisi voluptate commodo cillum commodo laboris ad pariatur ipsum eu qui commodo officia",
            name: "Rachelle Rogers Property"
          },
          details: {
            propertyId: "",
            parish: "Clarendon",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 7483,
            bedrooms: 17,
            numberOfBedrooms: "",
            price: 15470107,
            community: "Romero Heights",
            rentType: "",
            bathrooms: 9,
            garages: 1
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Water Heater",
              icon: "mdi-thermometer-high"
            }
          ],
          description: {
            description:
              "proident pariatur do deserunt ea reprehenderit non minim consectetur exercitation qui anim elit fugiat quis laborum mollit proident ea labore esse aliquip tempor magna voluptate nulla et nostrud consequat cupidatat dolore consectetur ipsum velit pariatur elit occaecat officia minim anim Lorem in dolore ullamco nostrud ea tempor tempor minim nulla exercitation Lorem occaecat enim dolore veniam eiusmod sit in occaecat",
            name: "Janis Ochoa Property"
          },
          details: {
            propertyId: "",
            parish: "Westmoreland",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 17809,
            bedrooms: 12,
            numberOfBedrooms: "",
            price: 34054513,
            community: "Willis Heights",
            rentType: "",
            bathrooms: 11,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Schools Near By",
              icon: "mdi-school"
            }
          ],
          description: {
            description:
              "sint velit proident esse sunt pariatur irure do occaecat incididunt ut sit fugiat consequat irure deserunt duis commodo magna consectetur aliqua Lorem incididunt laborum minim cupidatat labore ipsum id ad veniam adipisicing eiusmod officia qui duis ipsum commodo et exercitation laborum quis ut aute qui sint minim occaecat enim enim est aliqua fugiat in eu ad nulla officia nisi laboris",
            name: "Brittany Faulkner Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 9347,
            bedrooms: 8,
            numberOfBedrooms: "",
            price: 52161456,
            community: "Stein Heights",
            rentType: "",
            bathrooms: 1,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Movie Theater Near By",
              icon: "mdi-theater"
            }
          ],
          description: {
            description:
              "enim ipsum dolor elit amet nisi culpa tempor cupidatat velit ea tempor aliqua minim pariatur id ipsum sit eu officia adipisicing reprehenderit adipisicing laboris tempor amet velit exercitation et mollit irure elit excepteur magna incididunt consequat irure esse adipisicing aliqua anim eiusmod aliquip consequat dolore amet Lorem do amet ut ea eiusmod in proident aute minim proident elit amet deserunt",
            name: "Cantrell Simmons Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 10452,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 34477498,
            community: "Moody Heights",
            rentType: "",
            bathrooms: 13,
            garages: 6
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "24 Hour Security",
              icon: "mdi-cctv"
            }
          ],
          description: {
            description:
              "adipisicing sint sint amet aute anim eu ipsum duis amet excepteur excepteur duis reprehenderit in laborum ea eu laboris dolore incididunt occaecat culpa eu elit sit cupidatat ea sunt duis ex proident aliqua aute sunt sunt consequat laboris aliquip reprehenderit eu excepteur magna cillum ex non ullamco qui eu cillum tempor officia officia nulla nostrud cillum pariatur enim reprehenderit voluptate",
            name: "Vang Erickson Property"
          },
          details: {
            propertyId: "",
            parish: "St. Elizabeth",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 7365,
            bedrooms: 15,
            numberOfBedrooms: "",
            price: 53494786,
            community: "Powers Heights",
            rentType: "",
            bathrooms: 2,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Supermarket Near By",
              icon: "mdi-shopping"
            }
          ],
          description: {
            description:
              "elit voluptate et fugiat amet culpa et amet occaecat quis in aliquip quis culpa mollit officia mollit deserunt occaecat qui nulla et deserunt ex sit duis elit amet sunt cillum labore qui Lorem consectetur mollit tempor anim anim culpa officia eiusmod occaecat et commodo aliqua amet dolore ullamco et aliquip cupidatat reprehenderit duis quis Lorem nostrud ullamco consequat do sit",
            name: "Figueroa Bean Property"
          },
          details: {
            propertyId: "",
            parish: "Hanover",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 18813,
            bedrooms: 1,
            numberOfBedrooms: "",
            price: 63424324,
            community: "Christian Heights",
            rentType: "",
            bathrooms: 6,
            garages: 14
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "aliquip est excepteur aliqua pariatur exercitation eiusmod labore dolore laboris amet elit ex irure ut non et sint deserunt ad esse deserunt cupidatat qui aute sint in culpa ullamco minim id labore proident magna incididunt elit eiusmod excepteur nulla ea cupidatat cillum aliqua anim consequat in mollit dolore minim aliqua deserunt cupidatat ad elit fugiat sint proident ea ex cupidatat",
            name: "Chen Leon Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 9848,
            bedrooms: 16,
            numberOfBedrooms: "",
            price: 23981179,
            community: "Ward Heights",
            rentType: "",
            bathrooms: 6,
            garages: 19
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Schools Near By",
              icon: "mdi-school"
            }
          ],
          description: {
            description:
              "aliqua esse irure occaecat irure officia est enim exercitation in reprehenderit mollit Lorem laboris qui laborum sunt anim sint dolor nostrud aute ullamco nostrud nulla esse quis dolore sint magna consequat ipsum commodo incididunt culpa veniam cillum enim esse reprehenderit amet adipisicing sit aliqua laborum culpa ad do est exercitation eiusmod consectetur irure tempor ex elit in consectetur labore occaecat",
            name: "Soto Newton Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 19713,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 73733156,
            community: "Lindsey Heights",
            rentType: "",
            bathrooms: 14,
            garages: 12
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Smart Home",
              icon: "mdi-home-assistant"
            }
          ],
          description: {
            description:
              "incididunt veniam exercitation laborum aute mollit do dolore nisi mollit pariatur sit aliquip voluptate minim sit et eu do dolor incididunt cupidatat incididunt nulla proident in eu eiusmod irure proident dolor nulla labore ad fugiat incididunt ea in cupidatat excepteur est veniam sint aliquip occaecat ipsum dolore qui minim culpa consectetur nostrud proident anim quis non exercitation reprehenderit eu mollit",
            name: "Betty King Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Factory",
            propertyFor: "Sale",
            size: 13497,
            bedrooms: 8,
            numberOfBedrooms: "",
            price: 54353242,
            community: "Holden Heights",
            rentType: "",
            bathrooms: 19,
            garages: 7
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Generator",
              icon: "mdi-flash"
            }
          ],
          description: {
            description:
              "pariatur commodo nulla qui excepteur culpa laboris culpa voluptate labore consequat aliquip labore laboris sunt quis anim dolore eiusmod culpa amet cillum dolor exercitation ad culpa culpa id qui officia veniam nulla irure enim magna aute irure proident sint mollit labore incididunt elit Lorem est reprehenderit veniam commodo do velit id ex sint adipisicing qui laboris id enim aliqua aliquip",
            name: "Marianne Wiggins Property"
          },
          details: {
            propertyId: "",
            parish: "Trelawny",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 8115,
            bedrooms: 5,
            numberOfBedrooms: "",
            price: 78309028,
            community: "Fry Heights",
            rentType: "",
            bathrooms: 5,
            garages: 20
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F3.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Air Conditioning",
              icon: "mdi-air-filter"
            }
          ],
          description: {
            description:
              "nostrud nostrud do cillum pariatur pariatur in est cupidatat in occaecat nisi quis adipisicing reprehenderit mollit elit eu id consectetur veniam exercitation commodo est anim ipsum fugiat aliquip exercitation consequat consequat dolor exercitation quis enim ullamco reprehenderit est duis culpa nulla ex laborum aliquip sit proident veniam et incididunt ex nisi do ullamco nostrud excepteur laborum minim ipsum nisi amet",
            name: "Sweet Salinas Property"
          },
          details: {
            propertyId: "",
            parish: "Westmoreland",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 6258,
            bedrooms: 7,
            numberOfBedrooms: "",
            price: 24332209,
            community: "Mason Heights",
            rentType: "",
            bathrooms: 13,
            garages: 9
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Furnished",
              icon: "mdi-sofa"
            }
          ],
          description: {
            description:
              "cupidatat labore nulla nostrud consequat irure est cillum deserunt laboris ad officia labore velit id elit reprehenderit anim adipisicing dolor qui labore labore exercitation elit ex non sit sit eu consectetur exercitation quis irure non in adipisicing exercitation do duis aute velit et do id deserunt reprehenderit reprehenderit proident non cillum cupidatat fugiat non duis in cupidatat ullamco dolor culpa",
            name: "Mccullough Berry Property"
          },
          details: {
            propertyId: "",
            parish: "Westmoreland",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 7562,
            bedrooms: 14,
            numberOfBedrooms: "",
            price: 24026694,
            community: "Hancock Heights",
            rentType: "",
            bathrooms: 8,
            garages: 13
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Water Tank",
              icon: "mdi-water"
            }
          ],
          description: {
            description:
              "eu anim aute anim commodo reprehenderit laboris ea Lorem sint ad veniam pariatur fugiat id aliquip ipsum mollit velit occaecat proident in veniam enim reprehenderit Lorem ad amet pariatur in ipsum minim enim consequat commodo id tempor magna fugiat nostrud fugiat non aliqua qui ullamco laborum ex cupidatat sunt exercitation consequat culpa nostrud ipsum minim do nostrud in Lorem enim",
            name: "Florence Lawrence Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 3477,
            bedrooms: 10,
            numberOfBedrooms: "",
            price: 99624489,
            community: "Meadows Heights",
            rentType: "",
            bathrooms: 1,
            garages: 14
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F18.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F0.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Parking",
              icon: "mdi-car"
            }
          ],
          description: {
            description:
              "aute esse occaecat laborum nisi laborum proident cupidatat in proident do tempor sit do reprehenderit consequat voluptate deserunt officia tempor id ex nulla pariatur id deserunt in ea aute aliqua ut eiusmod cillum dolore veniam fugiat velit ullamco tempor sit commodo incididunt eiusmod Lorem dolore commodo pariatur qui ullamco irure quis laborum occaecat minim nostrud culpa excepteur exercitation eiusmod nostrud",
            name: "Bray Larsen Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Development Land (Residential)",
            propertyFor: "Sale",
            size: 9619,
            bedrooms: 8,
            numberOfBedrooms: "",
            price: 71697816,
            community: "Coffey Heights",
            rentType: "",
            bathrooms: 16,
            garages: 13
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Basketball Court",
              icon: "mdi-basketball"
            }
          ],
          description: {
            description:
              "eiusmod proident occaecat incididunt minim officia elit non occaecat fugiat minim eu ex eu do eiusmod tempor esse elit ex cillum deserunt velit laboris amet in do consequat proident non fugiat tempor qui exercitation ad voluptate laboris occaecat nostrud voluptate culpa in nulla veniam sunt ad eiusmod ad ipsum reprehenderit consequat do veniam magna in irure consequat incididunt sint nisi",
            name: "Leila Hickman Property"
          },
          details: {
            propertyId: "",
            parish: "St. Mary",
            propertyType: "Development Land (Commercial)",
            propertyFor: "Sale",
            size: 15211,
            bedrooms: 2,
            numberOfBedrooms: "",
            price: 49775084,
            community: "Sullivan Heights",
            rentType: "",
            bathrooms: 11,
            garages: 3
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F14.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F12.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "24 Hour Security",
              icon: "mdi-cctv"
            }
          ],
          description: {
            description:
              "occaecat eiusmod enim sint irure qui laboris nisi cupidatat incididunt tempor veniam elit reprehenderit exercitation laboris mollit nisi eu irure et non laborum nisi qui ea duis adipisicing adipisicing fugiat amet qui aliqua esse aute sunt ea amet esse aliquip in consectetur duis duis do deserunt veniam dolore eu sit nisi consequat occaecat nulla sit voluptate excepteur pariatur excepteur et",
            name: "Mai Whitehead Property"
          },
          details: {
            propertyId: "",
            parish: "St. Ann",
            propertyType: "Commercial Building/Offices",
            propertyFor: "Sale",
            size: 15161,
            bedrooms: 8,
            numberOfBedrooms: "",
            price: 65419582,
            community: "Kennedy Heights",
            rentType: "",
            bathrooms: 18,
            garages: 14
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F4.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F15.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: true
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Generator",
              icon: "mdi-flash"
            }
          ],
          description: {
            description:
              "culpa consectetur eu sunt reprehenderit officia magna nostrud sunt pariatur ea consectetur aliquip nisi ullamco ullamco aute do reprehenderit irure eu mollit excepteur fugiat laboris ea nisi quis nisi sint ea est commodo consectetur do officia in aliqua sunt anim ipsum dolore veniam cillum deserunt ipsum nisi aliqua exercitation mollit sit eu Lorem enim veniam ex non veniam fugiat ex",
            name: "Darlene Mcintyre Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 2098,
            bedrooms: 4,
            numberOfBedrooms: "",
            price: 12634086,
            community: "Crawford Heights",
            rentType: "",
            bathrooms: 6,
            garages: 11
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F2.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Park Near By",
              icon: "mdi-nature-people"
            }
          ],
          description: {
            description:
              "dolore occaecat laborum aliqua mollit ullamco sit dolore et esse cupidatat irure exercitation ut dolor do ex ex aute laboris Lorem velit fugiat ea labore et magna irure excepteur sint sit adipisicing Lorem proident deserunt sint nostrud elit et anim culpa dolore id id sit ea laboris anim cillum tempor magna excepteur minim anim commodo ex consequat cillum sunt ex",
            name: "Santiago Reese Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Townhouse",
            propertyFor: "Sale",
            size: 14486,
            bedrooms: 19,
            numberOfBedrooms: "",
            price: 95675828,
            community: "Bonner Heights",
            rentType: "",
            bathrooms: 7,
            garages: 18
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F11.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F5.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Church Near By",
              icon: "mdi-church"
            }
          ],
          description: {
            description:
              "voluptate nisi et officia duis enim sit sint dolor ad sint exercitation voluptate eu aliquip est enim aliqua sit quis sunt proident excepteur tempor in voluptate nisi fugiat sunt voluptate occaecat irure anim dolore velit aliquip aliquip consequat aliquip quis incididunt consequat tempor amet est in et ipsum aliqua amet amet ad nisi laborum consequat sunt ad ipsum deserunt veniam",
            name: "Stokes Camacho Property"
          },
          details: {
            propertyId: "",
            parish: "St. James",
            propertyType: "Apartment",
            propertyFor: "Sale",
            size: 15070,
            bedrooms: 7,
            numberOfBedrooms: "",
            price: 89207927,
            community: "Hahn Heights",
            rentType: "",
            bathrooms: 13,
            garages: 15
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F9.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F8.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F6.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
        },
        {
          timestamp: {
            created: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            updated: this.$fireModule.firestore.FieldValue.serverTimestamp()
          },
          amenities: [
            {
              title: "Wifi",
              icon: "mdi-wifi"
            }
          ],
          description: {
            description:
              "aliqua enim magna occaecat Lorem in Lorem sint enim duis commodo pariatur id mollit qui officia quis eiusmod magna nostrud amet ea adipisicing deserunt minim ad esse exercitation proident qui sint laborum ad eiusmod elit eu cupidatat enim consectetur labore ex labore esse aliqua laborum aliquip ea ipsum aliquip quis quis officia nulla commodo ullamco consequat laboris incididunt velit excepteur",
            name: "Dina Oneal Property"
          },
          details: {
            propertyId: "",
            parish: "Manchester",
            propertyType: "Farm/Agriculture",
            propertyFor: "Sale",
            size: 7620,
            bedrooms: 18,
            numberOfBedrooms: "",
            price: 71585583,
            community: "Burns Heights",
            rentType: "",
            bathrooms: 6,
            garages: 6
          },
          images: [
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F17.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F19.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F7.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F10.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F13.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            },
            {
              fileName: "1633293204535_5.jpg",
              src:
                "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F16.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
            }
          ],
          tours: {
            youtube: "",
            matterport: ""
          },
          verification: {
            featured: false,
            verified: false
          },
          uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2"
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
          element.details.bedrooms = "0";
        } else if (element.details.bedrooms >= 4) {
          element.details.numberOfBedrooms = "4 +";
          // console.log(bedrooms);
          // console.log(typeof bedrooms);
        } else {
          element.details.numberOfBedrooms = `${element.details.bedrooms}`;
          // console.log(bedrooms);
          // console.log(typeof bedrooms);
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
