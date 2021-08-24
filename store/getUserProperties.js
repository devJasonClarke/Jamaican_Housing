export const state = () => ({
  properties: [],
  lastVisible: null,
  loading: false,
  paginateNext: {
    disabled: false,
    dark: true
  }
});

export const getters = {
  properties: state => state.properties,
  loading: state => state.loading,
  lastVisible: state => state.lastVisible,
  paginateNext: state => state.paginateNext
};

export const actions = {
  setUserProperties({ commit }, data) {
    console.log("SetTheProperty");
    commit("SET_USER_PROPERTIES", data);
  },
  setLastVisible({ commit }, data) {
    commit("SET_LAST_VISIBLE", data);
  }
};

export const mutations = {
  SET_USER_PROPERTIES: (state, data) => {
    state.properties.push(data);
    console.log(`Set properties: ` + state.properties);
  },
  SET_LAST_VISIBLE: (state, data) => {
    //    let theLastVisible = data;
    console.log("Set_Last_Visible");
    console.log(data);
    state.lastVisible = data;
  },
  LOADING: (state, data) => {
    state.loading = data;
  },
  SET_PAGINATE_NEXT: state => {
    /*   state.paginateNext = {
      disabled: true,
      dark: false
    }; */
  }
};
