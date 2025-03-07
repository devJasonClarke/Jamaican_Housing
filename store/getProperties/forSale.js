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

  // Search

  search: {
    parish: "",
    type: "",
    price: "",
    bedrooms: ""
  },

  propertySearch: false,
  // Selected

  selectedParishBuy: "",
  selectedRealEstateTypeBuy: "",
  selectedMaxPricesBuy: "",
  selectedBedroomsBuy: ""
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

  selectedParishBuy: state => state.selectedParishBuy,
  selectedRealEstateTypeBuy: state => state.selectedRealEstateTypeBuy,
  selectedMaxPricesBuy: state => state.selectedMaxPricesBuy,
  selectedBedroomsBuy: state => state.selectedBedroomsBuy,

  // Search
  propertySearch: state => state.propertySearch,
  parishes: state => state.parishes,
  realEstateType: state => state.realEstateType,
  maxPrices: state => state.maxPrices,
  bedrooms: state => state.bedrooms,
  search: state => state.search
};

export const actions = {
  getPropertiesForSale({ commit, state }) {
    // console.log("getTheProperty");

    // console.log("Get User: User");

    let equal = "==";
    // console.log(`Properties: ${state.properties.length}`);

    // console.log("lastVisible");
    // console.log(state.lastVisible);

    const ref = this.$fire.firestore
      .collection("properties")
      //.where("details.parish", "==", "Hanover")
      // .where("details.numberOfBedrooms", "==", 2)
      // .where("details.price", "<=", 500000)
      // .where("details.propertyType", "==", "Development Land (Commercial)")
      .where("details.propertyFor", equal, "Sale")
      //.orderBy("details.price", "desc")
      .orderBy("timestamp.created", "desc")
      .startAfter(state.lastVisible || {})
      .limit(8);

    ref.get().then(
      querySnapshot => {
        commit(
          "SET_LAST_VISIBLE",
          Object.freeze(querySnapshot.docs[querySnapshot.docs.length - 1])
        );
        // console.log("lastVisible_2");
        // console.log(state.lastVisible);

        if (querySnapshot.empty) {
          // console.log("Empty");

          commit("SET_PAGINATE_NEXT");
        }
        if (querySnapshot.empty && state.properties.length) {
          commit(
            "snackbars/errors/LOG_ERROR",
            "Looks like we've run out of properties to show you.",
            {
              root: true
            }
          );
        }

        querySnapshot.forEach(doc => {
          // console.log(`This Document was fetched ${doc.id}`);
          commit("SET_PROPERTIES", [doc.data(), doc.id]);
        });

        commit("LOADING", false);

        //    this.loading = false;

        if (state.properties === []) {
          commit("LOADING", false);
        }
      },
      error => {
        commit("snackbars/errors/LOG_ERROR", error.message, { root: true });
        // console.log("Firebase");
        console.log(error);
      }
    );
  },
  getSearchedPropertiesForSale({ commit, state, rootState }) {
    // console.log("getTheProperty Searched");
    // console.log(state.search.parish);
    // console.log(state.search.bedrooms);
    // console.log(state.search.price);
    // console.log(state.search.type);
    // console.log("Get User: User");

    commit("REMOVE_PREVIOUS_SEARCHES");

    // console.log(`Properties: ${state.properties.length}`);
    commit("SET_PROPERTY_SEARCH", true);
    // console.log("lastVisible");
    // console.log(state.lastSearchedVisible);

    const ref = this.$fire.firestore
      .collection("properties")
      .where("details.parish", "==", state.search.parish)
      .where("details.numberOfBedrooms", "==", state.search.bedrooms)
      .where("details.price", "<=", (state.search.price / rootState.api.api.currencyRate))
      .where("details.propertyType", "==", state.search.type)
      .where("details.propertyFor", "==", "Sale")
      .orderBy("details.price", "desc")
      .orderBy("timestamp.created", "desc")
      .startAfter(state.lastSearchedVisible || {})
      .limit(8);

    ref.get().then(
      querySnapshot => {
        commit(
          "SET_LAST_SEARCHED_VISIBLE",
          Object.freeze(querySnapshot.docs[querySnapshot.docs.length - 1])
        );
        // console.log("lastVisible_2");
        // console.log(state.lastVisible);

        if (querySnapshot.empty) {
          // console.log("Empty");

          commit("SET_PAGINATE_NEXT_SEARCHED");
        }
        if (querySnapshot.empty && state.properties.length) {
          commit(
            "snackbars/errors/LOG_ERROR",
            "Currently we have no properties that match these criteria. 😞",
            {
              root: true
            }
          );
        }

        querySnapshot.forEach(doc => {
          // console.log(`This Document was fetched ${doc.id}`);
          commit("SET_SEARCHED_PROPERTIES", [doc.data(), doc.id]);
        });

        commit("LOADING", false);

        //    this.loading = false;

        if (state.searchedProperties === []) {
          commit("LOADING", false);
        }
      },
      error => {
        commit("snackbars/errors/LOG_ERROR", error.message, { root: true });
        // console.log("Firebase");
        console.log(error);
      }
    );
  },
  getSearchedPropertiesForSaleNext({ commit, state, rootState }) {
    // console.log("getTheProperty Searched");
    // console.log(state.search.parish);
    // console.log(state.search.bedrooms);
    // console.log(state.search.price);
    // console.log(state.search.type);
    // console.log("Get User: User");

    // console.log(`Properties: ${state.properties.length}`);
    commit("SET_PROPERTY_SEARCH", true);
    // console.log("lastVisible");
    // console.log(state.lastSearchedVisible);

    const ref = this.$fire.firestore
      .collection("properties")
      .where("details.parish", "==", state.search.parish)
      .where("details.numberOfBedrooms", "==", state.search.bedrooms)
      .where("details.price", "<=", (state.search.price / rootState.api.api.currencyRate) )
      .where("details.propertyType", "==", state.search.type)
      .where("details.propertyFor", "==", "Sale")
      .orderBy("details.price", "desc")
      .orderBy("timestamp.created", "desc")
      .startAfter(state.lastSearchedVisible || {})
      .limit(8);

    ref.get().then(
      querySnapshot => {
        commit(
          "SET_LAST_SEARCHED_VISIBLE",
          Object.freeze(querySnapshot.docs[querySnapshot.docs.length - 1])
        );
        // console.log("lastVisible_2");
        // console.log(state.lastVisible);

        if (querySnapshot.empty) {
          // console.log("Empty");

          commit("SET_PAGINATE_NEXT_SEARCHED");
        }
        if (querySnapshot.empty && state.properties.length) {
          commit(
            "snackbars/errors/LOG_ERROR",
            "Looks like we've run out of properties to show you.",
            {
              root: true
            }
          );
        }

        querySnapshot.forEach(doc => {
          // console.log(`This Document was fetched ${doc.id}`);
          commit("SET_SEARCHED_PROPERTIES", [doc.data(), doc.id]);
        });

        commit("LOADING", false);

        //    this.loading = false;

        if (state.searchedProperties === []) {
          commit("LOADING", false);
        }
      },
      error => {
        commit("snackbars/errors/LOG_ERROR", error.message, { root: true });
        // console.log("Firebase");
        console.log(error);
      }
    );
  },
  resetPropertySearch({ commit }) {
    // console.log("change");
    commit("SET_PROPERTY_SEARCH", false);
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
  },

  setParish({ commit }, value) {
    commit("SET_PARISH", value);
  },
  setType({ commit }, value) {
    commit("SET_TYPE", value);
  },
  setPrice({ commit ,rootState}, value) {
    //  let price = parseFloat(value.replace(/[^0-9]/g, ""));
    // console.log(price);
    console.log(value / rootState.api.api.currencyRate )
    console.log(rootState.api.api.currencyRate)
    commit("SET_PRICE", value);
  },
  setBedrooms({ commit }, value) {
    commit("SET_BEDROOMS", value);
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
    /*     // console.log("Set_Last_Visible");
    // console.log(data); */
    state.lastVisible = data;
  },
  SET_LAST_SEARCHED_VISIBLE: (state, data) => {
    /*     // console.log("Set_Last_Visible");
    // console.log(data); */

    state.lastSearchedVisible = data;
  },
  LOADING: (state, data) => {
    state.loading = data;
  },
  SET_PROPERTY_SEARCH: (state, data) => {
    state.propertySearch = data;
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
  REMOVE_PREVIOUS_SEARCHES: state => {
    state.searchedProperties = [];
    state.loading = true;
    state.lastSearchedVisible = null;
    state.paginateNextSearched = {
      disabled: false,
      dark: true
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
    state.propertySearch = false;
    state.search = {
      parish: "",
      type: "",
      price: "",
      bedrooms: ""
    };
  },
  REMOVE_USER_PROPERTY_STATE: state => {
    // console.log("LOG out From Remove User");
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
  },

  SET_PARISH: (state, value) => {
    state.search.parish = value;
  },
  SET_TYPE: (state, value) => {
    state.search.type = value;
  },
  SET_PRICE: (state, value) => {
    state.search.price = value;
  },
  SET_BEDROOMS: (state, value) => {
    state.search.bedrooms = value;
  }
};
