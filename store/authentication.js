export const state = () => ({
  user: null,
  profile: {
    "first name": "loading",
    "last name": "loading",
    initials: "loading"
  }
});

export const getters = {
  user: state => state.user,
  profile: state => state.profile
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
        return this.$fire.firestore.collection("users").add({
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
            .where("uid", "==", user.uid)
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                commit("SET_PROFILE", doc.data());
              });
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
  SET_PROFILE: (state, data) => {
    state.profile = data;
  }
};
