export const state = () => ({
  user: null,
  googleAuth: false,
  loading: false
});

export const getters = {
  user: state => state.user,
  loading: state => state.loading
};

export const actions = {
  //* sign up with crediential
  signup({ commit }, credentials) {
    const { email, password, firstName, lastName } = credentials;

    function getInitials() {
      return `${firstName} ${lastName}`;
    }

    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

    let initials = [...getInitials().matchAll(rgx)] || [];

    initials = (
      (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
    ).toUpperCase();

    // console.log(initials);
    commit("LOADING_STATE", true);
    //* sign up using firebase with credentials
    this.$fireModule
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        return this.$fire.firestore
          .collection("users")
          .doc(userCredential.user.uid)
          .set({
            achievements: [],
            profilePicture: {
              src: "",
              fileName: ""
            },
            uid: userCredential.user.uid,
            verified: false,
            verificationProcess: 'no attempt',
            role: "user",
            numberOfProperties: 0,
            favourites: [],
            personalDetails: {
              displayName: `${firstName} ${lastName}`,
              firstName: firstName,
              lastName: lastName,
              initials: initials,
              about: ""
            },
            realEstateFirm: { name: "", uid: "" },
            socialMedia: {
              facebook: "",
              instagram: "",
              youtube: "",
              linkedIn: ""
            },
            contact: {
              email: email,
              phoneNumber: null,
              whatsappNumber: null,
              website: ""
            }
          });
      })
      //* check user and add user to state
      .then(() => {
        this.$fireModule.auth().onAuthStateChanged(user => {
          if (user) {
            commit("LOGIN", user);
            commit("LOADING_STATE", false);
          } else {
            // User is signed out
            // ...
          }
        });
      })
      //* push to the dashboard
      .then(() => {
        this.$router.push({ name: "dashboard" });
      })
      //* catch and log error in error module
      .catch(error => {
        commit("errors/LOG_ERROR", error.message, { root: true });
        commit("LOADING_STATE", false);
        // console.log(error);
        // ..
      });
  },
  googleLogin({ commit }) {
    let provider = new this.$fireModule.auth.GoogleAuthProvider();
    let theResults;
    this.$fireModule
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        theResults = result.user;
        return this.$fire.firestore
          .collection("users")
          .doc(result.user.uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              // console.log("Doc EXIsts");
              commit("profile/SET_PROFILE", doc.data(), { root: true });
              commit("favourites/SET_FAVOURITES", doc.data().favourites, {
                root: true
              });
            } else {
              // console.log("setting google document");
              // console.log(result.user);
              this.$fire.firestore
                .collection("users")
                .doc(result.user.uid)
                .set({
                  achievements: [],
                  profilePicture: {
                    src: "",
                    fileName: ""
                  },
                  uid: result.user.uid,
                  verified: false,
                  verificationProcess: 'no attempt',
                  role: "user",
                  favourites: [],
                  numberOfProperties: 0,
                  personalDetails: {
                    displayName: result.user.displayName,
                    firstName: "",
                    lastName: "",
                    initials: "",
                    about: ""
                  },
                  realEstateFirm: { name: "", uid: "" },
                  socialMedia: {
                    facebook: "",

                    instagram: "",
                    youtube: "",
                    linkedIn: ""
                  },
                  contact: {
                    email: email,
                    phoneNumber: null,
                    whatsappNumber: null,
                    website: ""
                  }
                });
            }
          });

        // ...
      })
      .then(() => {
        this.$fireModule.auth().onAuthStateChanged(user => {
          if (user) {
            this.$fire.firestore
              .collection("users")
              .doc(user.uid)
              .get()
              .then(doc => {
                if (doc.exists) {
                  // console.log("Document data exits:", doc.data());
                  commit("profile/SET_PROFILE", doc.data(), { root: true });
                  commit("favourites/SET_FAVOURITES", doc.data().favourites, {
                    root: true
                  });
                } else {
                  // doc.data() will be undefined in this case
                  // console.log("No such document!");
                }
              })
              .catch(error => {
                commit("errors/LOG_ERROR", error.message, { root: true });
              });
          } else {
            // User is signed out
            // ...
          }
        });
      })
      .then(() => {
        this.$router.push({ name: "dashboard" });
      })
      .catch(error => {
        commit("errors/LOG_ERROR", error.message, { root: true });
        // ...
      });
  },
  login({ commit }, credentials) {
    const { email, password } = credentials;
    commit("LOADING_STATE", true);
    this.$fireModule
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.$fireModule.auth().onAuthStateChanged(user => {
          if (user) {
            commit("LOGIN", user);
            commit("LOADING_STATE", false);
          } else {
            // User is signed out
            // ...
          }
        });
      })
      .then(() => {
        this.$router.push({ name: "dashboard" });
      })
      .catch(error => {
        commit("errors/LOG_ERROR", error.message, { root: true });
        commit("LOADING_STATE", false);
      });
  },
  logout({ commit }) {
    this.$fireModule
      .auth()
      .signOut()
      .then(() => {
        commit("getUserProperties/REMOVE_USER_PROPERTY_STATE", "", {
          root: true
        });
        commit("LOGOUT");
        commit("LOADING_STATE", false);
      })
      .then(() => {
        return location.reload();
      })
      .catch(error => {
        commit("errors/LOG_ERROR", error.message, { root: true });
      });
  },
  //* check if user is authenticated
  checkAuthentication({ commit, state }) {
    //* if user is not in state, check indexdb if user is present
    if (state.user === null) {
      this.$fireModule.auth().onAuthStateChanged(user => {
        if (user) {
          // console.log(user);
          commit("CHECK_AUTHENTICATION", user);

          //* get user from firestore
          this.$fire.firestore
            .collection("users")
            .doc(user.uid)
            .get()
            .then(doc => {
              if (doc.exists) {
                // console.log("Document data exits:", doc.data());
                commit("profile/SET_PROFILE", doc.data(), { root: true });
                commit("favourites/SET_FAVOURITES", doc.data().favourites, {
                  root: true
                });
              } else {
                // doc.data() will be undefined in this case
                // console.log("No such document!");
              }
            })
            .catch(error => {
              commit("errors/LOG_ERROR", error.message, { root: true });
            });
        } else {
          // User is signed out
          // ...
        }
      });
    } else {
      // console.log("logged in");
    }
  },
  loadingState({ commit }, value) {
    commit("LOADING_STATE", value);
  }
};

export const mutations = {
  CHECK_AUTHENTICATION: (state, user) => {
    if (state.user === null) {
      // // console.log(user);
      localStorage.setItem("loggedIn", true);
      state.user = {
        email: user.email,
        uid: user.uid
      };
    }
  },
  LOGIN: (state, user) => {
    if (state.user === null) {
      // // console.log(user);
      localStorage.setItem("loggedIn", true);

      state.user = {
        email: user.email,
        uid: user.uid
      };
    }
  },
  LOGOUT: state => {
    localStorage.setItem("loggedIn", false);
    state.user = null;
  },

  LOADING_STATE: (state, value) => {
    state.loading = value;
  }
};
