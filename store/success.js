export const state = () => ({
  successMessage: null
});

export const getters = {
  successMessage: state => state.successMessage
};

export const actions = {
  logSuccess({ commit }, success) {
    commit("LOG_SUCCESS", success);
  },
  removeSuccess({ commit }) {
    commit("REMOVE_SUCCESS");
  }
};

export const mutations = {
  LOG_SUCCESS: (state, success) => {
    // console.log("Loggedsuccess " + success);
    state.successMessage = success;
  },
  REMOVE_SUCCESS: state => {
    // // console.log("REMOVE_Success " );
    state.successMessage = null;
  }
};
