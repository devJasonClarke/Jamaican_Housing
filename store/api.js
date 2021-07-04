export const state = () => ({
  /* API Calls to get user's IP adress and corresponding info */
  
  errorMessage: null,

  /* Info needed for app */
  currencies: {},
  currencyCodeList: [],
  activeCurrency: "JMD",
  currencyRate: 1,
  country: {}
});

export const getters = {

  country: state => state.country,
  currencies: state => state.currencies,
  currencyCodeList: state => state.currencyCodeList,
  activeCurrency: state => state.activeCurrency,
  currencyRate: state => state.currencyRate,
  errorMessage: state  => state.errorMessage
};

export const actions = {
  async getIPInfo({ commit }) {
    let error = null;


    const info = await fetch(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.abstractApi}&fields=country,flag,currency`
    )
      .then(res => res.json())
      .then(data => data)
      .catch(err => {
        error = err;
        console.log("the eror for api4 is" + err);
      });

   
    if(error === null){
      commit("GET_IP_INFO", info);
    } else{
      commit("LOG_ERROR", error);
    }
  },

  async getCurrencies({ commit }) {
    let error = null;
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
        error = err;
        console.error(err);
      });

      
    if(error === null){
   
      commit("GET_Currencies", currencies.rates);
    } else{
      commit("LOG_ERROR", error);
    }

  },
  setActiveCurrency({ commit }, data) {
    console.log(data);
    commit("SET_ACTIVE_CURRENCY", data);
  }
};

export const mutations = {

  LOG_ERROR: (state,error) =>{
    console.log('Logged Error '+ error)
state.errorMessage = error;
  },

  GET_IP_INFO: (state, info) => {
    state.country = {
      country: info.country,
      flag: info.flag.svg,
      currencyCode: info.currency.currency_code
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
