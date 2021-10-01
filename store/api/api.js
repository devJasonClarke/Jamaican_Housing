export const state = () => ({
  /* API Calls to get user's IP adress and corresponding info */

  /* Info needed for app */
  currencies: { currencies: false },
  currencyCodeList: [],
  activeCurrency: "JMD",
  currencyRate: 1,
  country: {
    country: false,
    flag: false,
    currencyCode: false
  }
});

export const getters = {
  /*  country: state => state.country, */
  currencies: state => state.currencies,
  currencyCodeList: state => state.currencyCodeList,
  currencyRate: state => state.currencyRate,
  errorMessage: state => state.errorMessage,
  activeCurrency: state => {
    return state.activeCurrency;
  }
};

export const actions = {
  /*   async getIPInfo({ commit, state }) {
    let country = state.country.country;

    // Test the API call lifecycle, ensure they are called only once per session
    // // console.log(`False ${state.country}`);

    if (country === false) {
      const info = await fetch(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.abstractApi}&fields=country,flag,currency`
      )
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
          commit("LOG_ERROR", err);
        });

      commit("GET_IP_INFO", info);
      // Test the API call lifecycle, ensure they are called only once per session
      // // console.log(`Push ${state.country}`);
    }
  }, */

  async getCurrencies({ commit, state }) {
    let currency = state.currencies.currencies;

    // Test the API call lifecycle, ensure they are called only once per session
    // // console.log(state.currencies);

    if (currency === false) {
      const currencies = await fetch(
        `https://exchangerate-api.p.rapidapi.com/rapid/latest/JMD`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": process.env.geoLocationApi,
            "x-rapidapi-host": "exchangerate-api.p.rapidapi.com"
          }
        }
      )
        .then(res => res.json())
        .then(data => data)
        .catch(error => {
          commit("snackbars/errors/LOG_ERROR", error, { root: true });
          console.error(error);
        });

      commit("GET_Currencies", currencies.rates);

      // Test the API call lifecycle, ensure they are called only once per session
      // // console.log(`Push Currency ${state.currencies}`);
    }
  },
  loadActiveCurrency({ commit }) {
    // console.log("load");
    commit("LOAD_ACTIVE_CURRENCY");
  },
  setActiveCurrency({ commit }, data) {
    commit("SET_ACTIVE_CURRENCY", data);
  }
};

export const mutations = {
/*   GET_IP_INFO: (state, info) => {
    state.country = {
      country: info.country,
      flag: info.flag.svg,
      currencyCode: info.currency.currency_code
    };
    // Test the API call lifecycle, ensure they are called only once per session
    // // console.log(`Action ${state.country}`);
  }, */
  GET_Currencies: (state, currencies) => {
    state.currencies = currencies;
    const myObject = currencies;
    const keyNames = Object.keys(myObject);
    state.currencyCodeList = keyNames;
    // Test the API call lifecycle, ensure they are called only once per session
    // // console.log(`After Currency ${state.currencies}`);
    const getCurrency = localStorage.getItem("activeCurrency");
    // // console.log(`getCurrency: ${getCurrency}`);
    if (getCurrency) {
      state.currencyRate = state.currencies[getCurrency];
      state.activeCurrency = getCurrency;
    }
  },
  SET_ACTIVE_CURRENCY: (state, data) => {
    // console.log(data);
    localStorage.setItem("activeCurrency", data);
    state.currencyRate = state.currencies[data];
    state.activeCurrency = data;
  }
};
