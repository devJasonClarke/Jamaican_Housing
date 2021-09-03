export const state = () => ({
  profile: {
    loading: true,
    verified: false,
    role: "",
    lastName: "",
    socialMedia: {
      linkedIn: "",
      facebook: "",
      youtube: "",
      twitter: "",
      instagram: ""
    },
    initials: "",
    realEstateFirm: {
      uid: "",
      name: ""
    },
    displayName: "",
    favourites: [],
    email: "",
    firstName: "",
    name: {
      lastName: "",
      displayName: "",
      initials: "",
      firstName: ""
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
  userAthenticated: false
});

export const getters = {
  profile: state => state.profile,
  userAthenticated: state => state.userAthenticated
};

export const actions = {};

export const mutations = {
  SET_PROFILE: (state, data) => {
    state.profile = data;
    state.userAthenticated = true;
  }
};
