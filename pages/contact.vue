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
            <v-form v-model="valid" class="mx-0" ref="form">
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
              <v-btn large color="success" @click="validate" block depressed
                >Send</v-btn
              >
            </v-form></v-col
          >
          <v-col cols="12" md="6"
            ><v-img
              gradient="to top right, rgba(0, 0, 0, 0.1) ,rgba(0, 0, 0, 0.25)"
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            ></v-img
          ></v-col>
        </v-row>
      </v-container>
    </SectionPadding>
  </div>
</template>

<script>
import img from "~/assets/images/house.jpg";
export default {
  data() {
    return {
      img: img,
      iconColor: "rgba(0, 200, 83, 1)",
      valid: false,
      firstname: "",
      lastname: "",
      message: "",
      messageRules: [
        v => !!v || "Message is required",
        v => v.length <= 10 || "Message must be less than 10 characters"
      ],
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
   validate () {
        this.$refs.form.validate()
      },
  },
};
</script>
<style lang="scss"></style>
