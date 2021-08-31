export const state = () => ({
  properties: [],
  lastVisible: null,
  loading: true,
  userSearch: false,
  paginateNext: {
    disabled: false,
    dark: true
  }
});

export const getters = {
  properties: state => state.properties,
  loading: state => state.loading,
  lastVisible: state => state.lastVisible,
  paginateNext: state => state.paginateNext
};

export const actions = {
  getPropertiesForRent({ commit, state }) {
    console.log("getTheProperty");

    console.log("Get User: User");

    // console.log(`Properties: ${state.properties.length}`);

    // console.log("lastVisible");
    console.log(state.lastVisible);

    const ref = this.$fire.firestore
      .collection("properties")
      // .where("bedrooms", "==", "2")
      // .where("price", "<=", "500000")
      // .where("type", "==", "Development Land (Commercial)")
      .where("propertyFor", "==", "Rent")
      //.orderBy("price", "desc")
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
          commit(
            "errors/LOG_ERROR",
            "Looks like we've run out of properties to show you.",
            {
              root: true
            }
          );
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
  },

  setLoading({ commit }, data) {
    commit("LOADING", data);
  },

  setPaginateNext({ commit }, data) {
    commit("SET_PAGINATE_NEXT", data);
  },
  removeUserPropertyState({ commit }) {
    commit("REMOVE_USER_PROPERTY_STATE");
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
