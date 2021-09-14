export const state = () => ({
  parishes: [
    "Clarendon",
    "Hanover",
    "Kingston",
    "Manchester",
    "Portland",
    "St. Andrew",
    "St. Ann",
    "St. Catherine",
    "St. Elizabeth",
    "St. James",
    "St. Mary",
    "St. Thomas",
    "Trelawny",
    "Westmoreland"
  ],
  realEstateType: [
    "Apartment",
    "Commercial Building/Offices",
    "Development Land (Commercial)",
    "Development Land (Residential)",
    "Factory",
    "Farm/Agriculture",
    "House",
    "Townhouse",
    "Warehouse"
  ],
  maxPrices: {
    rent: [
      { text: "$ 50,000 JMD", value: 50000 },
      { text: "$ 70,000 JMD", value: 70000 },
      { text: "$ 150,000 JMD", value: 150000 },
      { text: "$ 200,000 JMD", value: 200000 },
      { text: "$ 500,000 JMD", value: 500000 },
      { text: "$ 700,000 JMD", value: 700000 },
      { text: "$ 1,500,000 JMD ", value: 1500000 }
    ],
    buy: [
      { text: "$ 5,000,000 JMD", value: 5000000 },
      { text: "$ 14,000,000 JMD", value: 14000000 },
      { text: "$ 25,000,000 JMD", value: 25000000 },
      { text: "$ 50,000,000 JMD", value: 50000000 },
      { text: "$ 75,000,000 JMD", value: 75000000 },
      { text: "$ 100,000,000 JMD", value: 100000000 },
      { text: "$ 150,000,000 JMD", value: 150000000 }
    ]
  },

  search: {
    parish: "",
    type: "",
    price: "",
    bedrooms: ""
  },

  bedrooms: [1, 2, 3, "4 +"],
  rentProperty: true
});

export const getters = {
  parishes: state => state.parishes,
  realEstateType: state => state.realEstateType,
  maxPrices: state => state.maxPrices,
  bedrooms: state => state.bedrooms,
  search: state => state.search
};

export const actions = {
  setParish({ commit }, value) {
    commit("SET_PARISH", value);
  },
  setType({ commit }, value) {
    commit("SET_TYPE", value);
  },
  setPrice({ commit }, value) {
    //  let price = parseFloat(value.replace(/[^0-9]/g, ""));
    //  console.log(price);
    commit("SET_PRICE", value);
  },
  setBedrooms({ commit }, value) {
    commit("SET_BEDROOMS", value);
  }
};

export const mutations = {
  SET_PARISH: (state, value) => {
    state.search.parish = value;
  },
  SET_TYPE: (state, value) => {
    state.search.type = value;
  },
  SET_PRICE: (state, value) => {
    state.search.price = value;
  },
  SET_BEDROOMS: (state, value) => {
    state.search.bedrooms = value;
  }
};
