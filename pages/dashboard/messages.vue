<template>
  <v-container>
    <TheMetaTags :title="title" :description="description" />
    <h1>Your Messages</h1>

    <SectionPadding v-if="loading == true" class="pt-9">
      <v-skeleton-loader type="paragraph@4"></v-skeleton-loader>
      <v-skeleton-loader
        class="mx-auto mt-6"
        max-width="300"
        type="text"
      ></v-skeleton-loader>
    </SectionPadding>
    <SectionPadding class="pt-9" v-else-if="!newMessages.length">
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center flex-column pa-3"
        outlined
        ><p class="text-body-1 text-sm-h6 text-center font-weight-regular">
          No messages received as yet.
        </p>
        <v-icon>mdi-message-outline mdi-36px</v-icon>
      </v-sheet>
    </SectionPadding>
    <SectionPadding class="pt-9" v-else>
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="(message, index) in newMessages" :key="index">
          <v-expansion-panel-header disable-icon-rotate v-if="message[0].read"
            >From: {{ message[0].sender }}

            <template v-slot:actions>
              <v-icon color="green">
                mdi-message
              </v-icon>
            </template>
          </v-expansion-panel-header>

          <v-expansion-panel-header
            disable-icon-rotate
            v-else
            @click="updateMessage(message[1], index)"
            >From: {{ message[0].sender }}

            <template v-slot:actions>
              <v-icon color="green">
                mdi-message-outline
              </v-icon>
            </template>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <p class="mt-6">Name: {{ message[0].sender }}</p>
            <p>
              Email:
              <a
                class="blue--text"
                :href="`mailto:${message[0].email}`"
                target="_blank"
                >{{ message[0].email }}</a
              >
            </p>
            <p>
              Phone Number:
              <a
                class="blue--text"
                :href="`tel:${message[0].phoneNumber}`"
                target="_blank"
              >
                {{ message[0].phoneNumber }}</a
              >
            </p>
            <p>
              Date Sent:
              {{ message[0].timestamp.toDate().toLocaleDateString() }}
            </p>
            <p>
              Property Interested In:
              <a
                :href="`${message[0].property}`"
                class="hyphens blue--text"
                target="_blank"
                >{{ message[0].property }}</a
              >
            </p>
            <p>Message: {{ profanityFilter(message[0].message) }}</p>
            <v-btn
              link
              :href="`mailto:${message[0].email}`"
              target="_blank"
              dark
              color="green"
              elevation="0"
              class="mt-lg-0  mt-3 mr-3"
              ><v-icon left>mdi-email mdi-18px</v-icon> Send Email</v-btn
            >
            <v-btn
              link
              :href="`tel:${message[0].phoneNumber}`"
              target="_blank"
              dark
              color="green"
              elevation="0"
              class="mt-lg-0 mt-3  mr-3"
              ><v-icon left>mdi-phone mdi-18px</v-icon> Call
            </v-btn>
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  color="error"
                  elevation="0"
                  class="mt-lg-0  mt-3 mr-3"
                  @click="dialog = true"
                  v-bind="attrs"
                  v-on="on"
                  ><v-icon left>mdi-delete mdi-18px</v-icon> Delete
                  Message</v-btn
                >
              </template>
              <v-card>
                <v-card-title class="text-h5 hyphens">
                  Are you sure you want to delete this message?
                </v-card-title>
                <v-card-text
                  >We recommend that you double check to ensure that you
                  selected the correct message and that it is not important.
                  Deleting a message cannot be reversed.</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false">
                    Go back
                  </v-btn>
                  <v-btn
                    color="red darken-1"
                    text
                    @click="removeMessage(message[1], index)"
                  >
                    Delete message
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-btn
        color="success"
        @click="getNewMessages"
        class="mt-6 d-block mx-auto"
        :dark="paginateNext.dark"
        :disabled="paginateNext.disabled"
        >Load More Messages</v-btn
      >
    </SectionPadding>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "dashboard",
  fetch() {
    // console.log("fetch");
    // console.log(this.newMessages);
  },
  data() {
    return { dialog: false };
  },
  methods: {
    ...mapActions({
      readMessage: "messages/readMessage",
      deleteMessage: "messages/deleteMessage",
      removeLocalMessage: "messages/removeLocalMessage",
      setLoading: "messages/setLoading",
      getNewMessages: "messages/getNewMessages",
      changeMessageReadState: "messages/changeMessageReadState"
    }),
    updateMessage(message, index) {
      this.readMessage(message);
      this.changeMessageReadState(index);
      // console.log(message);
      // console.log(index);
    },
    profanityFilter(info) {
      var Filter = require("bad-words");
      let filter = new Filter();

      return filter.clean(info);
    },
    removeMessage(message, index) {
      this.deleteMessage(message);
      this.removeLocalMessage(index);
      this.dialog = false;
      // console.log(message);
      // console.log(index);
    }
  },
  computed: {
    ...mapGetters({
      newMessages: "messages/newMessages",
      loading: "messages/loading",
      paginateNext: "messages/paginateNext",
      //  unReadMessages: "messages/unReadMessages",
      profile: "profile/profile"
    }),
    title() {
      return `${this.profile.personalDetails.displayName} | Messages | Dashboard`;
    },
    description() {
      return "Messages";
    }
  }
};
</script>

<style lang="scss" scoped>
.test {
  background-color: transparent;
}
</style>
