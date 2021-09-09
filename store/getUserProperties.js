export const state = () => ({
  properties: [],
  lastVisible: null,
  deleteLoading: false,
  loading: true,
  paginateNext: {
    disabled: false,
    dark: true
  }
});

export const getters = {
  properties: state => state.properties,
  loading: state => state.loading,
  lastVisible: state => state.lastVisible,
  paginateNext: state => state.paginateNext,
  deleteLoading: state => state.deleteLoading
};

export const actions = {
  getUserProperties({ commit, state }) {
    console.log("getTheProperty");

    this.$fireModule.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Get User: User");
        console.log(user);
        // console.log(`Properties: ${state.properties.length}`);

        // console.log("lastVisible");
        //  console.log(state.lastVisible);

        const ref = this.$fire.firestore
          .collection("properties")
          .where("uploader", "==", user.uid)
          .orderBy("timestamp", "desc")
          .startAfter(state.lastVisible || {})
          .limit(3);

        ref.get().then(
          querySnapshot => {
            commit(
              "SET_LAST_VISIBLE",
              Object.freeze(querySnapshot.docs[querySnapshot.docs.length - 1])
            );
            //    console.log("lastVisible_2");
            //  console.log(state.lastVisible);

            if (querySnapshot.empty) {
              console.log("Empty");

              commit("SET_PAGINATE_NEXT");
            }
            if (querySnapshot.empty && state.properties.length) {
              commit("errors/LOG_ERROR", "You have no more properties.", {
                root: true
              });
            }

            querySnapshot.forEach(doc => {
              console.log(`This Document was fetched ${doc.id}`);
              commit("SET_PROPERTIES", [doc.data(), doc.id]);
            });

            commit("LOADING", false);

            //    this.loading = false;

            if (state.properties === []) {
              commit("LOADING", false);
            }
          },
          error => {
            console.log("Firebase");
            console.log(error);
          }
        );
      } else {
        commit("LOADING", false);
      }
    });
  },

  setLoading({ commit }, data) {
    commit("LOADING", data);
  },
  setDeleteLoading({ commit }, data) {
    commit("DELETE_LOADING", data);
  },

  setPaginateNext({ commit }, data) {
    commit("SET_PAGINATE_NEXT", data);
  },
  removeUserPropertyState({ commit }) {
    commit("REMOVE_USER_PROPERTY_STATE");
  },
  deleteProperty({ commit }, data) {
    commit("DELETE_LOADING", true);
    console.log(data.id);
    console.log(data.property);
    console.log("Delete the property");
    this.$fireModule.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.uid);
        for (let i = 0; i < data.property.images.length; i++) {
          console.log(data.property.images[i]);
        }
      } else {
        commit("errors/LOG_ERROR", "Please log in to delete property", {
          root: true
        });
      }
    });
    //  commit("DELETE_LOADING", false);
  }
};

export const mutations = {
  SET_PROPERTIES: (state, data) => {
    state.properties.push(data);
    // console.log(`Set properties: ` + state.properties);
  },
  SET_LAST_VISIBLE: (state, data) => {
    /*     console.log("Set_Last_Visible");
    console.log(data); */
    state.lastVisible = data;
  },
  LOADING: (state, data) => {
    state.loading = data;
  },
  DELETE_LOADING: (state, data) => {
    state.deleteLoading = data;
  },
  SET_PAGINATE_NEXT: state => {
    state.paginateNext = {
      disabled: true,
      dark: false
    };
  },
  REMOVE_USER_PROPERTY_STATE: state => {
    console.log("LOG out From Remove User");
    state.properties = [];
    state.lastVisible = null;
    state.loading = true;
    state.paginateNext = {
      disabled: false,
      dark: true
    };
  }
};
