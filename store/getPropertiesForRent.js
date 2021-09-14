export const state = () => ({
  properties: [],
  lastVisible: null,
  searchedProperties: [],
  lastSearchedVisible: null,
  loading: true,
  userSearch: false,
  paginateNext: {
    disabled: false,
    dark: true
  },
  paginateNextSearched: {
    disabled: false,
    dark: true
  },

  // Selected

  selectedParishRent: "",
  selectedRealEstateTypeRent: "",
  selectedMaxPricesRent: "",
  selectedBedroomsRent: ""
});

export const getters = {
  properties: state => state.properties,
  loading: state => state.loading,
  lastVisible: state => state.lastVisible,
  paginateNext: state => state.paginateNext,
  searchedProperties: state => state.searchedProperties,
  lastSearchedVisible: state => state.lastSearchedVisible,
  userSearch: state => state.userSearch,
  paginateNextSearched: state => state.paginateNextSearched,

  //Selected

  selectedParishRent: state => state.selectedParishRent,
  selectedRealEstateTypeRent: state => state.selectedRealEstateTypeRent,
  selectedMaxPricesRent: state => state.selectedMaxPricesRent,
  selectedBedroomsRent: state => state.selectedBedroomsRent
};

export const actions = {
  getPropertiesForRent({ commit, state }) {
    console.log("getTheProperty");

    console.log("Get User: User");

    let equal = "==";
    // console.log(`Properties: ${state.properties.length}`);

    // console.log("lastVisible");
    console.log(state.lastVisible);

    const ref = this.$fire.firestore
      .collection("properties")
      //.where("parish", "==", "Hanover")
      // .where("bedrooms", "==", 2)
      // .where("price", "<=", 500000)
      // .where("type", "==", "Development Land (Commercial)")
      .where("propertyFor", equal, "Rent")
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
  getSearchedPropertiesForRent({ commit, state, rootState }) {
    console.log("getTheProperty Searched");
    console.log(rootState.selectOptionsRent.search.parish);
    console.log(rootState.selectOptionsRent.search.bedrooms);
    console.log(rootState.selectOptionsRent.search.price);
    console.log(rootState.selectOptionsRent.search.type);
    console.log("Get User: User");

    // console.log(`Properties: ${state.properties.length}`);

    // console.log("lastVisible");
    console.log(state.lastSearchedVisible);

    const ref = this.$fire.firestore
      .collection("properties")
      .where("parish", "==", rootState.selectOptionsRent.search.parish)
      .where("bedrooms", "==", rootState.selectOptionsRent.search.bedrooms)
      .where("price", "<=", rootState.selectOptionsRent.search.price)
      .where("type", "==", rootState.selectOptionsRent.search.type)
      .where("propertyFor", "==", "Rent")
      .orderBy("price", "desc")
      .orderBy("timestamp", "desc")
      .startAfter(state.lastSearchedVisible || {})
      .limit(3);

    ref.get().then(
      querySnapshot => {
        commit(
          "SET_LAST_SEARCHED_VISIBLE",
          Object.freeze(querySnapshot.docs[querySnapshot.docs.length - 1])
        );
        //    console.log("lastVisible_2");
        //  console.log(state.lastVisible);

        if (querySnapshot.empty) {
          console.log("Empty");

          commit("SET_PAGINATE_NEXT_SEARCHED");
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
          commit("SET_SEARCHED_PROPERTIES", [doc.data(), doc.id]);
        });

        commit("LOADING", false);

        //    this.loading = false;

        if (state.searchedProperties === []) {
          commit("LOADING", false);
        }
      },
      error => {
        console.log("Firebase");
        console.log(error);
      }
    );
  },
  removeFilters({ commit }) {
    commit("REMOVE_FILTERS");
  },
  setLoading({ commit }, data) {
    commit("LOADING", data);
  },

  setPaginateNext({ commit }, data) {
    commit("SET_PAGINATE_NEXT", data);
  },
  setPaginateNextSearched({ commit }, data) {
    commit("SET_PAGINATE_NEXT_SEARCHED", data);
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
  SET_SEARCHED_PROPERTIES: (state, data) => {
    state.searchedProperties.push(data);
    // console.log(`Set properties: ` + state.properties);
  },
  SET_LAST_VISIBLE: (state, data) => {
    /*     console.log("Set_Last_Visible");
    console.log(data); */
    state.lastVisible = data;
  },
  SET_LAST_SEARCHED_VISIBLE: (state, data) => {
    /*     console.log("Set_Last_Visible");
    console.log(data); */

    state.lastSearchedVisible = data;
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
  SET_PAGINATE_NEXT_SEARCHED: state => {
    state.paginateNextSearched = {
      disabled: true,
      dark: false
    };
  },
  REMOVE_FILTERS: state => {
    state.searchedProperties = [];
    state.lastSearchedVisible = null;
    state.selectedParishBuy = "";
    state.selectedRealEstateTypeBuy = "";
    state.selectedMaxPricesBuy = "";
    state.selectedBedroomsBuy = "";
    state.paginateNextSearched = {
      disabled: false,
      dark: true
    };
  },
  REMOVE_USER_PROPERTY_STATE: state => {
    console.log("LOG out From Remove User");
    state.properties = [];
    state.lastVisible = null;
    searchedProperties = [];
    lastSearchedVisible = null;
    paginateNextSearched = {
      disabled: false,
      dark: true
    };
    state.paginateNext = {
      disabled: false,
      dark: true
    };
    state.loading = true;
  }
};
