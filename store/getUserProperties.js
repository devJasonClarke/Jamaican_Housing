export const state = () => ({
  properties: [],
  lastVisible: null,
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
  paginateNext: state => state.paginateNext
};

export const actions = {
  getUserProperties({ commit, state }) {
    console.log("getTheProperty");

    this.$fireModule.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(`Properties: ${state.properties.length}`);

        console.log("lastVisible");
        console.log(state.lastVisible);

        const ref = this.$fire.firestore
          .collection("properties")
          .where("uploader", "==", user.uid)
          .orderBy("timestamp", "desc")
          .startAfter(
            state.lastVisible || {
              parish: "St. Ann",
              details: {
                propertyFor: "Sale",
                community: "Big Mango",
                garages: "0",
                bathrooms: "0",
                propertyId: "",
                bedrooms: "0",
                rentType: "",
                price: "100000000",
                parish: "St. Ann",
                size: "1000",
                propertyType: "Farm/Agriculture"
              },
              timestamp: { seconds: 1629599693, nanoseconds: 943000000 },
              tours: { virtualTour: "", youtube: "" },
              uploader: "Zm29pU2QULXXuFgQrNB2s5bHXTq1",
              price: "100000000",
              verified: false,
              amenities: [
                { title: "Wifi", icon: "mdi-wifi" },
                { title: "Furnished", icon: "mdi-sofa" },
                { title: "24 Hour Security", icon: "mdi-cctv" },
                { title: "Swimming Pool", icon: "mdi-pool" }
              ],
              bedrooms: "0",
              type: "Farm/Agriculture",
              featured: false,
              description: {
                name: "Jason Clarke Residential",
                description: "Jason Clarke Residential"
              }
            }
          )
          .limit(3);

        ref.get().then(
          querySnapshot => {
            commit(
              "SET_LAST_VISIBLE",
              Object.freeze(querySnapshot.docs[querySnapshot.docs.length - 1])
            );
            console.log("lastVisible_2");
            console.log(state.lastVisible);

            if (querySnapshot.empty) {
              console.log("Empty Rass");

              commit("SET_PAGINATE_NEXT");
            }
            if (querySnapshot.empty && state.properties.length) {
              commit("errors/LOG_ERROR", "You have no more properties.", {
                root: true
              });
            }
            let properties = [];

            querySnapshot.forEach(doc => {
              console.log(`This Document was fetched ${doc.id}`);
              commit("SET_PROPERTIES", [doc.data(), doc.id]);
              properties.push([doc.data(), doc.id]);
            });

            //console.log(properties);

            console.log(`Fetch properties ${state.properties}`);
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
    console.log(`Set properties: ` + state.properties);
  },
  SET_LAST_VISIBLE: (state, data) => {
    console.log("Set_Last_Visible");
    console.log(data);
    state.lastVisible = data;
    console.log("Set_Last_Visible after");
    console.log(state.lastVisible);
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
    console.log("LOG OUt From Remove User");
    state.properties = [];
    state.lastVisible = null;
    state.loading = true;
    state.paginateNext = {
      disabled: false,
      dark: true
    };
  }
};
