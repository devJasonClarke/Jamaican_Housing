export const state = () => ({
  errorMessage: null
});

export const getters = {
  errorMessage: state => state.errorMessage
};

export const actions = {
  logError({ commit }, error) {
    commit("LOG_ERROR", error);
  }
};

export const mutations = {
  LOG_ERROR: (state, error) => {
    console.log("Logged Error " + error);
    state.errorMessage = error;
  }
};
