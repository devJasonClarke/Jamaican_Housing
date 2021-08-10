export const state = () => ({
  user: null,
  userAthenticated: false,
  profile: {}
});

export const getters = {
  user: state => state.user,
  profile: state => state.profile,
  userAthenticated: state => state.userAthenticated
};

export const actions = {
  //* sign up with crediential
  async signup({ commit }, credentials) {
    const { email, password, firstName, lastName } = credentials;

    function getInitials() {
      return `${firstName} ${lastName}`;
    }

    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

    let initials = [...getInitials().matchAll(rgx)] || [];

    initials = (
      (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
    ).toUpperCase();

    console.log(initials);

    //* sign up using firebase with credentials
    await this.$fireModule
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        return this.$fire.firestore
          .collection("users")
          .doc(userCredential.user.uid)
          .set({
            email: email,
            "first name": firstName,
            "last name": lastName,
            uid: userCredential.user.uid,
            initials: initials
          });
      })
      //* check user and add user to state
      .then(() => {
        this.$fireModule.auth().onAuthStateChanged(user => {
          if (user) {
            commit("LOGIN", user);
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
        commit("errors/LOG_ERROR", error, { root: true });
        console.log(error);
        // ..
      });
  },
  async login({ commit }, credentials) {
    const { email, password } = credentials;

    await this.$fireModule
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.$fireModule.auth().onAuthStateChanged(user => {
          if (user) {
            commit("LOGIN", user);
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
        commit("errors/LOG_ERROR", error, { root: true });
      });
  },
  async logout({ commit }) {
       await this.$fireModule
      .auth()
      .signOut()
      
      .then(() => {
        commit("LOGOUT");
       })
      .catch(error => {
        // An error happened.
      });
  },
  //* check if user is authenticated
  async checkAuthentication({ commit, state }) {
    let currentState = state.user;

    //* if user is not in state, check indexdb if user is present
    if (currentState === null) {
      await this.$fireModule.auth().onAuthStateChanged(user => {
        if (user) {
          console.log(user);
          commit("CHECK_AUTHENTICATION", user);

          //* get user from firestore
          this.$fire.firestore
            .collection("users")
            .doc(user.uid)
            .get()
            .then(doc => {
              if (doc.exists) {
                console.log("Document data exits:", doc.data());
                commit("SET_PROFILE", doc.data());
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }
            })
            .catch(error => {
              console.log("Error getting documents: ", error);
            });
        } else {
          // User is signed out
          // ...
        }
      });
    } else {
      console.log("logged in");
    }
  }
};

export const mutations = {
  CHECK_AUTHENTICATION: (state, user) => {
    if (state.user === null) {
      //      console.log(user);
      state.user = {
        email: user.email,
        emailVerified: user.emailVerified,
        uid: user.uid
      };
    }
  },
  LOGIN: (state, user) => {
    if (state.user === null) {
      //      console.log(user);
      state.user = {
        email: user.email,
        emailVerified: user.emailVerified,
        uid: user.uid
      };
    }
  },
  LOGOUT: state => {
    state.user = null;
    state.userAthenticated = false;
    state.profile = {};
  },
  SET_PROFILE: (state, data) => {
    state.profile = data;
    state.userAthenticated = true;
  }
};
