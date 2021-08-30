<template>
  <v-container>
    <h1>Messages</h1>

    <SectionPadding v-if="loading == true">
      <v-skeleton-loader type="paragraph@4"></v-skeleton-loader>
      <v-skeleton-loader class='mx-auto mt-6'  max-width="300" type="text"></v-skeleton-loader>
    </SectionPadding>
    <SectionPadding v-else-if="!newMessages.length">
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center "
        outlined
        ><p class="text-h6 text-center font-weight-regular">
          No messages as yet.
        </p>
      </v-sheet>
    </SectionPadding>
    <SectionPadding v-else>
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="(message, index) in newMessages" :key="index">
          <v-expansion-panel-header
            disable-icon-rotate
            @click="readMessage(index)"
            >From: {{ message[0].sender }}

            <template v-slot:actions>
              <v-icon color="green" v-if="message[0].read">
                mdi-message
              </v-icon>
              <v-icon color="green" v-else>
                mdi-message-outline
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p class="mt-6">Name: {{ message[0].sender }}</p>
            <p>
              Email:
              <a :href="`mailto:${message[0].email}`" target="_blank">{{
                message[0].email
              }}</a>
            </p>
            <p>
              Phone Number:
              <a :href="`tel:${message[0].phoneNumber}`" target="_blank">
                {{ message[0].phoneNumber }}</a
              >
            </p>
            <p>
              Date: {{ message[0].timestamp.toDate().toLocaleDateString() }}
            </p>
            <p>Message: {{ message[0].message }}</p>
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
            <v-btn
              dark
              color="error"
              elevation="0"
              class="mt-lg-0  mt-3 mr-3"
              @click="deleteMessage(index)"
              ><v-icon left>mdi-delete mdi-18px</v-icon> Delete Message</v-btn
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-btn color="success" @click="getNewMessages" class="mt-6 d-block mx-auto">Load More Messages</v-btn>
    </SectionPadding>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "dashboard",
  fetch() {
    console.log("fetch");
    console.log(this.newMessages);
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      readMessage: "messages/readMessage",
      deleteMessage: "messages/deleteMessage",
      setLoading: "messages/setLoading",
      getNewMessages: "messages/getNewMessages"
    })
  },
  computed: {
    ...mapGetters({
      newMessages: "messages/newMessages",
      loading: "messages/loading"
      //  unReadMessages: "messages/unReadMessages"
    })
  }
};
</script>

<style lang="scss" scoped>
.test {
  background-color: transparent;
}
</style>
