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
    // console.log("getTheProperty");

    this.$fireModule.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log("Get User: User");
        // console.log(user);
        // console.log(`Properties: ${state.properties.length}`);

        // console.log("lastVisible");
        // console.log(state.lastVisible);

        const ref = this.$fire.firestore
          .collection("properties")
          .where("uploader", "==", user.uid)
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
                "You have no more properties.",
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
            // console.log(error);
          }
        );
      } else {
        commit("LOADING", false);
      }
    });
  },
  addNewUserProperty({ commit }, data) {
    commit("ADD_NEW_USER_PROPERTY", data);
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
  setNewPropertyValues({ commit }, data) {
    commit("SET_NEW_PROPERTY_VALUES", data);
  },
  editUserProperty({ commit }, data) {
    commit("EDIT_USER_PROPERTY", data);
  },
  removeUserPropertyState({ commit }) {
    commit("REMOVE_USER_PROPERTY_STATE");
  },
  deleteProperty({ commit, state, rootState }, data) {
    commit("DELETE_LOADING", true);

    // console.log(data.id);
    // console.log(data.property);
    // console.log("Delete the property");

    //let index = state.properties.indexOf([data.property, data.id]);

    //  const indexs = state.properties.find( ({ name }) => name === 'cherries' );

    /*   var array = [[false, 1, "label", "label value", null], [false, 2, "label1", "label1", null]],
    checkNum = 1,;
     */

    let index = state.properties.findIndex(property => property[1] === data.id);

    let storage = this.$fire.storage.ref();

    this.$fireModule.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log(user.uid);
        if (data.property.images.length > 0) {
          for (let i = 0; i < data.property.images.length; i++) {
            // console.log(data.property.images[i].fileName);

            let ref = storage.child(
              `property_images/${user.uid}/${data.property.images[i].fileName}`
            );

            ref.delete().catch(error => {
              // console.log("delete error");
              // console.log(error);
              commit("snackbars/errors/LOG_ERROR", error.message, {
                root: true
              });
            });
          }

          this.$fire.firestore
            .collection("properties")
            .doc(data.id)
            .delete()
            .then(() => {
              this.$fire.firestore
                .collection("users")
                .doc(rootState.dashboard.profile.profile.uid)
                .update({
                  numberOfProperties: this.$fireModule.firestore.FieldValue.increment(
                    -1
                  )
                });
            })
            .then(() => {
              commit(
                "snackbars/success/LOG_SUCCESS",
                "Property successfully deleted!",
                {
                  root: true
                }
              );
              commit("DELETE_LOADING", false);
              commit("REMOVE_PROPERTY_FROM_LOCAL_STATE", index);
            })
            .catch(error => {
              commit("snackbars/errors/LOG_ERROR", error.message, {
                root: true
              });
              commit("DELETE_LOADING", false);
            });
        } else {
          this.$fire.firestore
            .collection("properties")
            .doc(data.id)
            .delete()
            .then(() => {
              commit(
                "snackbars/success/LOG_SUCCESS",
                "Property successfully deleted!",
                {
                  root: true
                }
              );
              commit("DELETE_LOADING", false);
              commit("REMOVE_PROPERTY_FROM_LOCAL_STATE", index);
            })
            .catch(error => {
              commit("snackbars/errors/LOG_ERROR", error.message, {
                root: true
              });
              commit("DELETE_LOADING", false);
            });
        }
      } else {
        commit(
          "snackbars/errors/LOG_ERROR",
          "Please log in to delete property",
          {
            root: true
          }
        );
        commit("DELETE_LOADING", false);
      }
    });
  }
};

export const mutations = {
  SET_PROPERTIES: (state, data) => {
    state.properties.push(data);
    // console.log(`Set properties: ` + state.properties);
  },
  SET_LAST_VISIBLE: (state, data) => {
    /*     // console.log("Set_Last_Visible");
    // console.log(data); */
    state.lastVisible = data;
  },
  LOADING: (state, data) => {
    state.loading = data;
  },
  ADD_NEW_USER_PROPERTY: (state, data) => {
    state.properties.unshift(data);
  },
  SET_NEW_PROPERTY_VALUES: (state, data) => {
    let index = state.properties.findIndex(property => property[1] === data[1]);

    state.properties[index] = data[0];
  },
  EDIT_USER_PROPERTY: (state, data) => {
    let index = state.properties.findIndex(property => property[1] === data[1]);

    state.properties[index] = data;
  },
  DELETE_LOADING: (state, data) => {
    state.deleteLoading = data;
  },
  REMOVE_PROPERTY_FROM_LOCAL_STATE: (state, index) => {
    state.properties.splice(index, 1);
  },
  SET_PAGINATE_NEXT: state => {
    state.paginateNext = {
      disabled: true,
      dark: false
    };
  },
  REMOVE_USER_PROPERTY_STATE: state => {
    // console.log("LOG out From Remove User");
    state.properties = [];
    state.lastVisible = null;
    state.loading = true;
    state.paginateNext = {
      disabled: false,
      dark: true
    };
  }
};
