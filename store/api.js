export const state = () => ({
  /* API Calls to get user's IP adress and corresponding info */
  ipAddress: null,
  error: null,

  /* Info needed for app */
  currencies: {},
  currencyCodeList: [],
  activeCurrency: "JMD",
  currencyRate: 1,
  country: {}
});

export const getters = {
  ip: state => state.ip,
  ipAddress: state => state.ipAddress,
  country: state => state.country,
  currencies: state => state.currencies,
  currencyCodeList: state => state.currencyCodeList,
  activeCurrency: state => state.activeCurrency,
  currencyRate: state => state.currencyRate
};

export const actions = {
  async getIPAddress({ commit }) {
    const ip = await fetch("https://api64.ipify.org?format=json")
      .then(res => res.json())
      .then(data => data)
      .catch(err => {
        /*      this.error = `Please Check Internet Connection. ${err}`;
      this.snackbar = true; */
        console.log("the eror for api4 is" + err);
      });

    commit("GET_IP_ADDRESS", ip.ip);
  },
  async getIPInfo({ commit, state }) {
    const info = await fetch(
      `https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${state.ipAddress}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.geoLocationApi,
          "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com"
        }
      }
    )
      .then(response => response.json())
      .then(data => data)
      .catch(err => {
        this.error = `Please Check Internet Connection. ${err}`;
        /* this.snackbar = true; */
      });

    commit("GET_IP_INFO", info);
  },

  async getCurrencies({ commit }) {
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
      .catch(err => {
        console.error(err);
      });

    commit("GET_Currencies", currencies.rates);
  },
  setActiveCurrency({ commit }, data) {
    console.log(data)
    commit("SET_ACTIVE_CURRENCY", data);
    
  }
};

export const mutations = {
  GET_IP_ADDRESS: (state, ip) => {
    state.ipAddress = ip;
    console.log(ip);
  },
  GET_IP_INFO: (state, info) => {
    state.country = {
      country: info.country,
      flag: info.country_flag,
      currencyCode: info.currency_code,
      currencySymbol: info.currency_symbol
    };
  
  },
  GET_Currencies: (state, currencies) => {
    state.currencies = currencies;
    const myObject = currencies;
    const keyNames = Object.keys(myObject);
    state.currencyCodeList = keyNames;

  },
  SET_ACTIVE_CURRENCY: (state, data) => {
    state.currencyRate = state.currencies[data];
    state.activeCurrency = data;
  }
};
