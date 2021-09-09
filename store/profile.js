export const state = () => ({
  profile: {
    achievements: [],
    loading: true,
    verified: false,
    role: "",
    lastName: "",
    socialMedia: {
      linkedIn: "",
      facebook: "",
      youtube: "",
      instagram: ""
    },
    realEstateFirm: {
      uid: "",
      name: ""
    },
    favourites: [],
    personalDetails: {
      lastName: "",
      displayName: "",
      initials: "",
      firstName: "",
      about: ''
    },
    contact: {
      whatsappNumber: null,
      email: "",
      website: "",
      phoneNumber: null
    },
    photoUrl: "",
    uid: ""
  },
  updateDetailsLoader: false,
  updateSocialLoader: false,
  userAthenticated: false
});

export const getters = {
  profile: state => state.profile,
  update: state => state.update,
  updateDetailsLoader: state => state.updateDetailsLoader,
  updateSocialLoader: state => state.updateSocialLoader,
  userAthenticated: state => state.userAthenticated
};

export const actions = {
  setEmail({ commit }, value) {
    commit("SET_EMAIL", value);
  },
  setFirstName({ commit }, value) {
    commit("SET_FIRST_NAME", value);
  },
  setAbout({ commit }, value) {
    commit("SET_ABOUT", value);
  },
  setLastName({ commit }, value) {
    commit("SET_LAST_NAME", value);
  },
  setPhoneNumber({ commit }, value) {
    commit("SET_PHONE_NUMBER", value);
  },
  setwhatsappNumber({ commit }, value) {
    commit("SET_WHATSAPP_NUMBER", value);
  },
  setwebsite({ commit }, value) {
    commit("SET_WEBSITE", value);
  },
  updateAccountDetails({ commit, state }) {
    commit("SET_DETAILS_LOADER", true);

    function getInitials() {
      return `${state.profile.personalDetails.firstName} ${state.profile.personalDetails.lastName}`;
    }

    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

    let initials = [...getInitials().matchAll(rgx)] || [];

    initials = (
      (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
    ).toUpperCase();

    console.log(initials);

    this.$fireModule.auth().onAuthStateChanged(user => {
      if (user) {
        this.$fire.firestore
          .collection("users")
          .doc(user.uid)
          .update({
            "personalDetails.about": state.profile.personalDetails.about,
            "personalDetails.displayName": `${state.profile.personalDetails.firstName} ${state.profile.personalDetails.lastName}`,
            "personalDetails.initials": initials,
            "personalDetails.firstName": state.profile.personalDetails.firstName,
            "personalDetails.lastName": state.profile.personalDetails.lastName,
            "contact.email": state.profile.contact.email,
            "contact.phoneNumber": state.profile.contact.phoneNumber
          })
          .then(() => {
            console.log("Successfully updated!");

            commit("success/LOG_SUCCESS", "Successfully updated!", {
              root: true
            });
            commit("SET_DETAILS_LOADER", false);
            commit("SET_NAME", initials);
          })
          .catch(error => {
            commit("errors/LOG_ERROR", error.message, { root: true });
          });

        console.log(user);
      } else {
        // User is signed out

        commit("SET_DETAILS_LOADER", false);
      }
    });
  },
  updateAccountSocials({ commit, state }) {
    commit("SET_SOCIAL_LOADER", true);
    this.$fireModule.auth().onAuthStateChanged(user => {
      if (user) {
        this.$fire.firestore
          .collection("users")
          .doc(user.uid)
          .update({
            "socialMedia.facebook": state.profile.socialMedia.facebook,
            "socialMedia.instagram": state.profile.socialMedia.instagram,
            "socialMedia.linkedIn": state.profile.socialMedia.linkedIn,
            "socialMedia.youtube": state.profile.socialMedia.youtube,
            "socialMedia.website": state.profile.contact.email,
            "contact.website": state.profile.contact.website,
            "contact.whatsappNumber": state.profile.contact.whatsappNumber
          })
          .then(() => {
            console.log("Profile successfully updated!");
            commit("success/LOG_SUCCESS", "Successfully updated!", {
              root: true
            });
            commit("SET_SOCIAL_LOADER", false);
          })
          .catch(error => {
            commit("errors/LOG_ERROR", error.message, { root: true });
          });

        console.log(user);
      } else {
        // User is signed out

        commit("SET_SOCIAL_LOADER", false);
      }
    });
  },
  setFacebook({ commit }, value) {
    commit("SET_FACEBOOK", value);
  },
  setInstagram({ commit }, value) {
    commit("SET_INSTAGRAM", value);
  },
  setLinkedIn({ commit }, value) {
    commit("SET_LINKEDIN", value);
  },

  setYoutube({ commit }, value) {
    commit("SET_YOUTUBE", value);
  }
};

export const mutations = {
  SET_PROFILE: (state, data) => {
    state.profile = data;
    state.userAthenticated = true;
  },
  SET_ABOUT: (state, value) => {
    state.profile.personalDetails.about = value;
  },
  SET_EMAIL: (state, value) => {
    state.profile.contact.email = value;
  },
  SET_FIRST_NAME: (state, value) => {
    state.profile.personalDetails.firstName = value;
  },
  SET_LAST_NAME: (state, value) => {
    state.profile.personalDetails.lastName = value;
  },
  SET_PHONE_NUMBER: (state, value) => {
    state.profile.contact.phoneNumber = value;
  },
  SET_WHATSAPP_NUMBER: (state, value) => {
    state.profile.contact.whatsappNumber = value;
  },
  SET_WEBSITE: (state, value) => {
    state.profile.contact.website = value;
  },

  SET_FACEBOOK: (state, value) => {
    state.profile.socialMedia.facebook = value;
  },
  SET_INSTAGRAM: (state, value) => {
    state.profile.socialMedia.instagram = value;
  },
  SET_LINKEDIN: (state, value) => {
    state.profile.socialMedia.linkedIn = value;
  },
  SET_YOUTUBE: (state, value) => {
    state.profile.socialMedia.youtube = value;
  },
  SET_NAME: (state, value) => {
    state.profile.personalDetails.displayName = `${state.profile.personalDetails.firstName} ${state.profile.personalDetails.lastName}`;
    state.profile.personalDetails.initials = value;
  },
  SET_DETAILS_LOADER: (state, value) => {
    state.updateDetailsLoader = value;
  },
  SET_SOCIAL_LOADER: (state, value) => {
    state.updateSocialLoader = value;
  }
};
