export const state = () => ({
  errorMessage: null
});

export const getters = {
  errorMessage: state => state.errorMessage
};

export const mutations = {
  LOG_ERROR: (state, error) => {
    console.log("Logged Error " + error);
    state.errorMessage = error;
  }
};
