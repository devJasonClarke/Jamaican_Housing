<template>
  <v-app class="font">
    {{location.asn}}
    <TheNavigation />
    <v-main>
      <v-container fluid class="ma-0 pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <TheFooter />
     <v-snackbar
      v-model="snackbar"
      :timeout="20000"
      right
    >
    {{error}}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
     snackbar: false,
      ip: null,
      location:  {asn: 0},
      error: false
    };
  },
  async fetch() {
    const ip = await fetch("https://api64.ipify.org?format=json").then(res =>
      res.json()
    ).catch(err =>{
              this.error =  `Please Check Internet Connection. ${err}`;
       this.snackbar = true;
      console.log('the eror for api4 is' + err)
    });
    this.ip = ip.ip;
    console.log(this.ip);

    const location = await fetch(
      `https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${this.ip}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            process.env.geoLocationApi,
          "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com"
        },
    
      }
    )
   .then(response => response.json())
  .then(data => data)
      .catch(err => {
        this.error = `Please Check Internet Connection. ${err}`;
       this.snackbar = true;
      });
    this.location = location;
    console.log(this.location);
  }
};
</script>
