<template>
  <div>
    <ThePropertySwiper />
    <v-container class="mt-6">
      <v-row>
        <v-col cols="12" md="8">
          <p class="green--text text--accent-4 text-capitalize">
            <v-icon :color="iconColor">mdi-map-marker mdi-24px</v-icon>
            catherine hall, St. James
          </p>
          <h1>
            Modern Studio APARTMENT

            <v-tooltip color="blue" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon color="blue" dark v-bind="attrs" v-on="on">
                  mdi-check-decagram mdi-36px
                </v-icon>
              </template>
              <span>Verified</span>
            </v-tooltip>
          </h1>
          <p>Apartment</p>
          <div class="pa-0 pb-2 d-flex justify-space-between icons-max-width">
            <p>
              <v-icon :color="iconColor"
                >mdi-ruler-square mdi-flip-v mdi-18px</v-icon
              >
              12 m<sup>2</sup>
            </p>
            <p>
              <v-icon :color="iconColor">mdi-bed mdi-18px</v-icon>
              1 Bedroom
            </p>
            <p>
              <v-icon :color="iconColor">mdi-shower-head mdi-18px</v-icon>
              1 Bathroom
            </p>
            <p>
              <v-icon :color="iconColor">mdi-tag mdi-18px</v-icon>
              55K
            </p>
          </div>

          <div class="">
            <p>Description</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              animi quam blanditiis veritatis ducimus explicabo illo ex dolore a
              atque sapiente voluptates rem reiciendis, libero perferendis
              aspernatur esse. Voluptates, commodi! A facilis eligendi at quos
              odit eum, itaque illum nulla quidem delectus magnam fugiat dolorum
              sed aut pariatur sunt. Et doloremque officiis nam quos sunt!
            </p>
          </div>
          <v-divider class="mb-4"></v-divider>
          <div>
            <p>Overview</p>
          </div>
          <v-divider class="mb-4"></v-divider>
          <div>
            <p>Details</p>
          </div>
          <v-divider class="mb-4"></v-divider>
          <div>
            <p>Amenities</p>
            <div class="">
              <div>
                <v-list dense flat>
                  <v-list-item-group
                    :color="iconColor"
                    class="amendities-grid"
                  >
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-icon>
                        <v-icon
                          v-text="item.icon"
                          :color="iconColor"
                        ></v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.text"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </div>
            </div>
          </div>
          <v-divider class="mb-4"></v-divider>
          <div>
            <p>Video</p>
          </div>
          <v-divider class="mb-4"></v-divider>
          <div>
            <p>Virtual Tour</p>
            <iframe
              width="100%"
              height="480"
              src="https://my.matterport.com/show/?m=a8wno1TmcYb"
              frameborder="0"
              allowfullscreen
              allow="xr-spatial-tracking"
            ></iframe>
          </div>
        </v-col>
        <v-col cols="12" md="4">4. Realtor Card</v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconColor: "rgba(0, 200, 83, 0.5)",
      items: [
        {
          text: "Wifi",
          icon: "mdi-wifi"
        },
        { text: "Air Conditioning", icon: "mdi-air-filter" },
        { text: "Cable TV ", icon: "mdi-television" },
        { text: "Gated Community", icon: "mdi-security" },
        { text: "Parking", icon: "mdi-car" },
        { text: "Furnished", icon: "mdi-sofa" },
        { text: "24 Hour Security", icon: "mdi-cctv" },
        { text: "Family Oriented", icon: "mdi-home-heart" },
        { text: "Grilled", icon: "mdi-shield-home" },
        { text: "Water Heater", icon: "mdi-thermometer-high" },
        { text: "Swimming Pool", icon: "mdi-pool" },
        { text: "Generator", icon: "mdi-flash" },
        { text: "Water Tank", icon: "mdi-water" }
      ]
    };
  }
};
</script>

<style>
.icons-max-width {
  max-width: 400px;
}
.amendities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
