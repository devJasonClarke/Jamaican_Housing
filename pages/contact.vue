<template>
  <div>
    <TheMetaTags :title="title" :description="description" />
    <v-img :src="img" min-height="300" max-height="400"></v-img>
    <SectionPadding>
      <SectionTitlesSecondary
        mainTitle="Contact"
        paragraph="We'd love to hear from you. Feel free to fill out the form below and we'll be in touch soon."
      />
    </SectionPadding>

    <v-divider></v-divider>

    <SectionPadding class="backgroundShade">
      <v-container>
        <v-row>
          <v-col>
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
                    v-model="lastname"
                    :rules="nameRules"
                    label="Last Name *"
                    required
                    :color="iconColor"
                  ></v-text-field
                ></v-col>

                <v-col cols="6">
                  <v-text-field
                    outlined
                    v-model="email"
                    :rules="emailRules"
                    label="Email Address *"
                    type="email"
                    required
                    :color="iconColor"
                  ></v-text-field
                ></v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    v-model.number="phoneNumber"
                    :rules="phoneNumberRules"
                    label="Phone Number *"
                    type="number"
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
                v-if="sent === false"
                :loading="loading"
                large
                dark
                color="green accent-4"
                block
                depressed
                >Send
              </v-btn>
              <v-btn
                v-else-if="sent === true"
                large
                dark
                color="green accent-4"
                block
                depressed
              >
                Message Sent <v-icon dark> mdi-check</v-icon>
              </v-btn>
            </v-form></v-col
          >
        </v-row>
      </v-container>
    </SectionPadding>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
      phoneNumber: null,
      message: "",
      loading: false,
      sent: false,

      email: ""
    };
  },
  methods: {
    ...mapActions({
      logError: "snackbars/errors/logError",
      logSuccess: "snackbars/success/logSuccess"
    }),
    validate() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        this.$fire.firestore
          .collection("adminMessages")
          .add({
            sender: `${this.firstname} ${this.lastname}`,
            phoneNumber: this.phoneNumber,
            email: this.email,
            message: this.message,
            timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            read: false,
            important: false,
            urgent: false
          })
          .then(() => {
            this.loading = false;
            this.sent = true;
            this.logSuccess(
              "Message Sent! We have been notifed and will respond shortly."
            );
          })
          .catch(error => {
            this.logError(error.message);
            this.loading = false;
          });

  
      } else {
        this.logError("Please complete required sections.");
      }
    }
  },
  computed: {
    ...mapGetters({
      emailRules: "inputRules/inputRules/emailRules",
      phoneNumberRules: "inputRules/inputRules/phoneNumberRules",
      nameRules: "inputRules/inputRules/nameRules",
      messageRules: "inputRules/inputRules/messageRules"
    })
  }
};
</script>
<style lang="scss"></style>
