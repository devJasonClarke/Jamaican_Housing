export const state = () => ({
  errorMessage: null
});

export const getters = {
  errorMessage: state => state.errorMessage
};

export const actions = {
  logError({ commit }, error) {
    commit("LOG_ERROR", error);
  },
  removeError({commit}){
    commit("REMOVE_ERROR");
  }
};

export const mutations = {
  LOG_ERROR: (state, error) => {
    // console.log("Logged Error " + error);
    state.errorMessage = error;
  },
  REMOVE_ERROR: (state) => {
    // // console.log("REMOVE_ERROR " );
    state.errorMessage = null;
  },
};
