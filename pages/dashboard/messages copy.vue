<template>
  <v-container>
    <h1>Messages</h1>
    <SectionPadding>
      <v-list two-line >
        <v-subheader>Messages</v-subheader>
        <div v-for="(item, index) in items" :key="index">
        

          <v-list-item  :to="{ name: 'about' }">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Name: {{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>
                Message: {{ item.message }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

            <v-divider class="my-4"></v-divider>

            
        </div>
      </v-list>
    </SectionPadding>



    <SectionPadding>
      <div v-for="(item, index) in items" :key="index">
        <v-card elevation="0">
          <v-list-item-avatar rounded="circle" class="mx-4 mt-6">
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
          <v-card-title>Name: {{ item.name }}</v-card-title>
          <v-card-text>Phone Number:{{ item.phone }}</v-card-text>
          <v-card-text>Email: {{ item.email }}</v-card-text>
          <v-card-text class="text-truncate"> Message: {{ item.message }}</v-card-text>
        </v-card>
        <v-divider class="my-3"></v-divider>
      </div>
    </SectionPadding>
  </v-container>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          name: "Jason Clarke",
          phone: 8763147199,
          email: "test@email.com",
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repudiandae quod fuga blanditiis consequatur porro placeat ea unde necessitatibus dignissimos quos consectetur dolorem doloribus, ipsam velit rem repellat! Reiciendis, cupiditate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repudiandae quod fuga blanditiis consequatur porro placeat ea unde necessitatibus dignissimos quos consectetur dolorem doloribus, ipsam velit rem repellat! Reiciendis, cupiditate."
        },

        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          name: "James",
          phone: 8763147199,
          email: "test@email.com",
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repudiandae quod fuga blanditiis consequatur porro placeat ea unde necessitatibus dignissimos quos consectetur dolorem doloribus, ipsam velit rem repellat! Reiciendis, cupiditate."
        },

        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          name: "Lewis",
          phone: 8763147199,
          email: "test@email.com",
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repudiandae quod fuga blanditiis consequatur porro placeat ea unde necessitatibus dignissimos quos consectetur dolorem doloribus, ipsam velit rem repellat! Reiciendis, cupiditate."
        },

        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          name: "Leroy",
          phone: 8763147199,
          email: "test@email.com",
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repudiandae quod fuga blanditiis consequatur porro placeat ea unde necessitatibus dignissimos quos consectetur dolorem doloribus, ipsam velit rem repellat! Reiciendis, cupiditate."
        },

        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          name: "Kent",
          phone: 8763147199,
          email: "test@email.com",
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repudiandae quod fuga blanditiis consequatur porro placeat ea unde necessitatibus dignissimos quos consectetur dolorem doloribus, ipsam velit rem repellat! Reiciendis, cupiditate."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.test{
  background-color: transparent;
}
</style>
