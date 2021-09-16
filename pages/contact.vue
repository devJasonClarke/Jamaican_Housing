<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-img :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary
        mainTitle="Contact"
        paragraph="Please feel free to write an email to us or to use our electronic ticketing system."
      />
    </SectionPadding>

    <v-divider></v-divider>

    <SectionPadding class="backgroundShade">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-form
              @submit.prevent="validate"
              v-model="valid"
              class="mx-0"
              ref="form"
            >
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    dense
                    v-model="firstname"
                    :rules="nameRules"
                    label="First Name *"
                    required
                    :color="iconColor"
                  ></v-text-field
                ></v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    dense
                    v-model="lastname"
                    :rules="nameRules"
                    label="Last Name *"
                    required
                    :color="iconColor"
                  ></v-text-field
                ></v-col>

                <v-col cols="12">
                  <v-text-field
                    outlined
                    dense
                    v-model="email"
                    :rules="emailRules"
                    label="Email Address *"
                    type="email"
                    required
                    :color="iconColor"
                  ></v-text-field
                ></v-col>
                <v-col cols="12">
                  <v-textarea
                    outlined
                    name="input-7-4"
                    label="Message *"
                    v-model="message"
                    :rules="messageRules"
                    required
                    :color="iconColor"
                  ></v-textarea
                ></v-col>
              </v-row>
              <v-btn
                type="submit"
                v-if="sentStatus === false"
                :loading="loading"
                large
                color="success"
                block
                depressed
                >Send
              </v-btn>
              <v-btn
                v-else-if="sentStatus === true"
                :loading="loading"
                large
                color="success"
                block
                depressed
              >
                <v-icon dark> mdi-check</v-icon>
              </v-btn>
              <v-btn
                type="submit"
                v-else
                :loading="loading"
                large
                color="error"
                block
                depressed
              >
                <v-icon dark> mdi-close</v-icon>
              </v-btn>
            </v-form></v-col
          >
          <v-col cols="12" md="6">
            <v-img
              gradient="to top right, rgba(0, 0, 0, 0.1) ,rgba(0, 0, 0, 0.25)"
              :src="require('~/assets/images/shaking-hands.jpg')"
            ></v-img
          ></v-col>
        </v-row>
      </v-container>
    </SectionPadding>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import img from "~/assets/images/houses/9.jpg";
export default {
  data() {
    return {
      title: "Contact | Real Estate Ja",
      description: "Contact",
      img: img,
      iconColor: "rgba(0, 200, 83, 1)",
      valid: false,
      firstname: "",
      lastname: "",
      email: "",
      message: "",
      loading: false,
      sentStatus: false,

      email: ""
    };
  },
  methods: {
    validate() {
      let axios = this.$axios;
      if (this.$refs.form.validate()) {
        this.loading = true;
        axios
          .post(`https://submit-form.com/${process.env.formApi}`, {
            "First Name": this.firstname,
            "Last Name": this.lastname,
            Email: this.email,
            Message: this.message
          })
          .then(response => {
            console.log("The response: " + response);
            this.loading = false;
            this.sentStatus = true;
          })
          .catch(response => {
            console.error("The error: " + response);
            this.loading = false;
            this.sentStatus = "error";
          });
      } else {
        console.log("Your bloodclaat mada");
      }
    }
  },
  computed: {
    ...mapGetters({
      emailRules: "inputRules/emailRules",
      nameRules: "inputRules/nameRules",
      messageRules: "inputRules/messageRules",
       
    })
  }
};
</script>
<style lang="scss"></style>
