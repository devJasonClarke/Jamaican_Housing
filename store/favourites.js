export const state = () => ({
  favourites: []
});

export const getters = {
  favourites: state => state.favourites
};

export const actions = {
  setFavourites({ commit }, data) {
    commit("SET_FAVOURITES", data);
  },
  removeFavourites({ commit }, data) {
    this.$fireModule.auth().onAuthStateChanged(user => {
      if (user) {
        this.$fire.firestore
          .collection("users")
          .doc(user.uid)
          .update({
            favourites: this.$fireModule.firestore.FieldValue.arrayRemove(data)
          });
        commit("REMOVE_FAVOURITES", data);
        // console.log(user);
      } else {
        // User is signed out
        commit(
          "errors/LOG_ERROR",
          "Please login to remove property to your favourites.",
          { root: true }
        );
      }
    });
  },
  addFavourites({ commit }, data) {
    this.$fireModule.auth().onAuthStateChanged(user => {
      if (user) {
        this.$fire.firestore
          .collection("users")
          .doc(user.uid)
          .update({
            favourites: this.$fireModule.firestore.FieldValue.arrayUnion(data)
          });
        commit("ADD_FAVOURITES", data);
        // console.log(user);
      } else {
        // User is signed out
        commit(
          "errors/LOG_ERROR",
          "Please login to add property to your favourites.",
          { root: true }
        );
      }
    });
  }
};

export const mutations = {
  SET_FAVOURITES: (state, data) => {
    state.favourites = data;
  },
  REMOVE_FAVOURITES: (state, data) => {

    let index = state.favourites.indexOf(data);
    // console.log('index '+ index);
    let theFavourites = [...state.favourites];

    // console.log('theFavourites');
    // console.log(theFavourites);

    theFavourites.splice(index, 1);

    // console.log('theFavourites 2');
    // console.log(theFavourites);

    state.favourites = theFavourites;
  },
  ADD_FAVOURITES: (state, data) => {
    state.favourites.push(data);
  }
};
