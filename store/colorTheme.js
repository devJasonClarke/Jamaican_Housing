export const state = () => ({
  darkTheme:  false
});

export const getters = {
  theme: state => state.darkTheme
};

export const actions = {
  toggleTheme({ commit }) {
    commit("TOGGLE_THEME");
  },
  checkTheme({ commit }) {
    commit("CHECK_THEME");
  }
};

export const mutations = {
  TOGGLE_THEME: state => {
    state.darkTheme = !state.darkTheme;
    window.$nuxt.$root.$vuetify.theme.dark = state.darkTheme;
    localStorage.setItem(
      "darkTheme",
      window.$nuxt.$root.$vuetify.theme.dark.toString()
    );
  },
  
  CHECK_THEME: state => {
    const theme = localStorage.getItem("darkTheme");

    if (theme === "true") {
      window.$nuxt.$root.$vuetify.theme.dark = true;
      state.darkTheme = true;
    } else {
      window.$nuxt.$root.$vuetify.theme.dark = false;
      state.darkTheme = false;
    }
  }
};
