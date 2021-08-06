<template>
  <v-container>
    <h1>Messages</h1>
    <SectionPadding v-if="messages.length > 0">
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="(message, index) in messages" :key="index">
          <v-expansion-panel-header
            disable-icon-rotate
            @click="readMessage(index)"
            >From: {{ message.name }}

            <template v-slot:actions>
              <v-icon color="green" v-if="message.read">
                mdi-message
              </v-icon>
              <v-icon color="green" v-else>
                mdi-message-outline
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p class="mt-6">Name: {{ message.name }}</p>
            <p>
              Email:
              <a :href="`mailto:${message.email}`" target="_blank">{{
                message.email
              }}</a>
            </p>
            <p>
              Phone Number:
              <a :href="`tel:${message.phone}`" target="_blank">
                {{ message.phone }}</a
              >
            </p>
            <p>Date: {{ message.date }}</p>
            <p>Message: {{ message.message }}</p>
            <v-btn
              link
              :href="`mailto:${message.email}`"
              target="_blank"
              dark
              color="green"
              elevation="0"
              class="mt-lg-0  mt-3 mr-3"
              ><v-icon left>mdi-email mdi-18px</v-icon> Send Email</v-btn
            >
            <v-btn
              link
              :href="`tel:${message.phone}`"
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
    </SectionPadding>
    <SectionPadding v-else>
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center "
        outlined
        ><p class="text-h6 text-center font-weight-regular">
          No messages as yet.
        </p>
      </v-sheet>
    </SectionPadding>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "dashboard",
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      readMessage: "messages/readMessage",
      deleteMessage: "messages/deleteMessage"
    })
  },
  computed: {
    ...mapGetters({
      messages: "messages/allMessages",
      unReadMessages: "messages/unReadMessages"
    })
  }
};
</script>

<style lang="scss" scoped>
.test {
  background-color: transparent;
}
</style>
