export const state = () => ({
  messages: [
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      name: "Jason Clarke",
      phone: 8763147199,
      email: "test@email.com",
      date: "jan 21 2020",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repudiandae quod fuga blanditiis consequatur porro placeat ea unde necessitatibus dignissimos quos consectetur dolorem doloribus, ipsam velit rem repellat! Reiciendis, cupiditate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repudiandae quod fuga blanditiis consequatur porro placeat ea unde necessitatibus dignissimos quos consectetur dolorem doloribus, ipsam velit rem repellat! Reiciendis, cupiditate.",
      read: false
    },

    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      name: "James",
      phone: 8763147199,
      email: "test@email.com",
      date: "jan 21 2020",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repudiandae quod fuga blanditiis consequatur porro placeat ea unde necessitatibus dignissimos quos consectetur dolorem doloribus, ipsam velit rem repellat! Reiciendis, cupiditate.",
      read: false
    },

    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      name: "Lewis",
      phone: 8763147199,
      email: "test@email.com",
      date: "jan 21 2020",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repudiandae quod fuga blanditiis consequatur porro placeat ea unde necessitatibus dignissimos quos consectetur dolorem doloribus, ipsam velit rem repellat! Reiciendis, cupiditate.",
      read: false
    },

    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      name: "Leroy",
      phone: 8763147199,
      email: "test@email.com",
      date: "jan 21 2020",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repudiandae quod fuga blanditiis consequatur porro placeat ea unde necessitatibus dignissimos quos consectetur dolorem doloribus, ipsam velit rem repellat! Reiciendis, cupiditate.",
      read: false
    },

    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      name: "Kent",
      phone: 8763147199,
      email: "test@email.com",
      date: "jan 21 2020",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repudiandae quod fuga blanditiis consequatur porro placeat ea unde necessitatibus dignissimos quos consectetur dolorem doloribus, ipsam velit rem repellat! Reiciendis, cupiditate.",
      read: false
    }
  ]
});

export const getters = {
  allMessages: state => state.messages,
  unReadMessages: state => {
  return  state.messages.filter(message => (message.read == false));
  }
};

export const actions = {
  readMessage({ commit }, index) {
    commit("READ_MESSAGE", index);
  },
  deleteMessage({commit}, index){
    commit('DELETE_MESSAGE', index)
  }
};

export const mutations = {
  READ_MESSAGE: (state, index) => {
    state.messages[index].read = true;
  },
  DELETE_MESSAGE: (state, index)=>{
    state.messages.splice(index, 1);
  }
};
