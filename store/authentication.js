export const state = () => ({
  user: null,
  profile: null
});

export const getters = {
  user: state => state.user
};

export const actions = {
  async signup({ commit }, credentials) {
    // console.log(credentials, " signup");
    const { email, password } = credentials;

    await this.$fireModule
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        return (
          this.$fire.firestore
            .collection("users")
            /*      .doc(userCredential.user.uid)
    .set({
      email: this.email,
      uid: userCredential.user.uid
    }); */
            .add({
              email: email,
              uid: userCredential.user.uid
            })
        );
      })
      .then(() => {
        this.$fireModule.auth().onAuthStateChanged(user => {
          if (user) {
            commit("CHECK_AUTHENTICATION", user);
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
        /*        this.loading = false;
      this.error = true;
      this.errorMessage = error.message;
*/
        console.log(error);
        // ..
      });
  },
  async checkAuthentication({ commit, state }) {
    let currentState = state.user;

    if (currentState === null) {
      await this.$fireModule.auth().onAuthStateChanged(user => {
        if (user) {
          console.log(user);
          commit("CHECK_AUTHENTICATION", user);
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
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        uid: user.uid
      };
    }
  }
};
