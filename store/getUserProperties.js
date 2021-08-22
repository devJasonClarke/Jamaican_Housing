export const state = () => ({
  properties: [],
  lastVisible: "",
  loading: false
});

export const getters = {
  properties: state => state.properties,
  loading: state => state.loading
};

export const actions = {
  async getTheProperties({ commit, state }, user) {
    console.log("getTheProperty");
    commit("LOADING", true);
    let theState = state.properties;
    let propertiesArray = [];
    let theLastVisible = {};

    console.log(`Properties: ${theState.length}`);

    if (theState.length <= 0) {
      console.log(`From Inside the if statement`);
      const db = await this.$fire.firestore;
      db.collection("properties")
        .where("uploader", "==", user.uid)
        .orderBy("timestamp", "desc")
        .limit(1)
        .onSnapshot(
          querySnapshot => {
            theLastVisible = querySnapshot.docs[
              querySnapshot.docs.length - 1
            ];
            console.log("last", theLastVisible);

            propertiesArray = [];
            querySnapshot.forEach(doc => {
              propertiesArray.push([doc.data(), doc.id]);
            });
            commit("PROPERTIES", propertiesArray);

            commit(
              "SET_LAST_VISIBLE",
              JSON.parse(JSON.stringify(theLastVisible))
            );
            console.log(theLastVisible);
            console.log(`Fetch properties ${propertiesArray}`);
            commit("LOADING", false);
            if (propertiesArray === []) {
              commit("PROPERTIES", []);
              commit("LOADING", false);
            }
          },
          error => {
            console.log("Firebase Error");
            console.log(error);
            commit("LOADING", false);
          }
        );
    } else {
      commit("LOADING", false);
    }
  },
  async next({ commit, state, rootState }) {
    const db = await this.$fire.firestore;
    let propertiesArray = [];

    let theStateLastVisible = state.lastVisible;

    console.log(`Love ${theStateLastVisible}`);
    console.log(theStateLastVisible);

    db.collection("properties")
      .where("uploader", "==", rootState.authentication.user.uid)
      .orderBy("timestamp", "desc")
      .startAfter(theStateLastVisible)
      .limit(1)
      .onSnapshot(
        querySnapshot => {
          var theLastVisible =
            querySnapshot.docs[querySnapshot.docs.length - 1];
          console.log("last", theLastVisible);

          propertiesArray = [];
          querySnapshot.forEach(doc => {
            propertiesArray.push([doc.data(), doc.id]);
          });
          commit("PROPERTIES", propertiesArray);
          console.log(`Fetch properties ${propertiesArray}`);
          commit("LOADING", false);
          if (propertiesArray === []) {
            commit("PROPERTIES", []);
            commit("LOADING", false);
          }
        },
        error => {
          console.log("Firebase Error");
          console.log(error);
          commit("LOADING", false);
        }
      );

    /*     const db = await this.$fire.firestore;
    const first = db
      .collection("properties")
      .where("uploader", "==", user.uid)
      .orderBy("timestamp", "desc")
      .limit(2);

  return first.get().then(documentSnapshots => {
      // Get the last visible document
      var lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      console.log("last", lastVisible);

      // Construct a new query starting at this document,
      // get the next 25 cities.
      var next = db
        .collection("properties")
        .where("uploader", "==", user.uid)
        .orderBy("timestamp", "desc")
        .startAfter(lastVisible)
        .limit(25);
    });

    const db = await this.$fire.firestore;

    var next = db
      .collection("properties")
      .where("uploader", "==", user.uid)
      .orderBy("timestamp", "desc")
      .startAfter(lastVisible)
      .limit(25); */
  },
  setLoading({ commit }, data) {
    commit("LOADING", data);
  }
};

export const mutations = {
  PROPERTIES: (state, data) => {
    state.properties = data;
  },
  SET_LAST_VISIBLE: (state, data) => {
    state.lastVisible = data;
    console.log(state.lastVisible);
  },
  LOADING: (state, data) => {
    state.loading = data;
  }
};
