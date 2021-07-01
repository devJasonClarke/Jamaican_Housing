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
          "$ 50,000 JMD",
          "$ 70,000 JMD",
          "$ 150,000 JMD",
          "$ 200,000 JMD",
          "$ 500,000 JMD",
          "$ 700,000 JMD",
          "$ 1,500,000 JMD "
        ],
        buy: [
          "$ 5,000,000 JMD",
          "$ 14,000,000 JMD",
          "$ 25,000,000 JMD",
          "$ 50,000,000 JMD",
          "$ 75,000,000 JMD",
          "$ 100,000,000 JMD",
          "$ 150,000,00 JMD"
        ]
      },
      
      bedrooms: ["1", "2", "3", "4 +"],
      buyProperty: true 
  });
  
  export const getters = {
      parishes: state => state.parishes,
      realEstateType: state => state.realEstateType,
      maxPrices: state => state.maxPrices,
      bedrooms: state => state.bedrooms,
  };
  
  export const actions = {};
  
  export const mutations = {};
  