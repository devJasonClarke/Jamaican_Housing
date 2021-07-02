export const state = () => ({
  buy: [
    {
      title: "Sunny Private Studio Apartment",
      parish: "St. James",
      realEstateType: "Apartment",
      squareMeters: 80,
      beds: 3,
      bathroom: 2,
      price: 70
    }
  ],
  rent: [
    {
      title: "Sunny Private Studio Apartment",
      parish: "St. James",
      realEstateType: "Apartment",
      squareMeters: 80,
      beds: 3,
      bathroom: 2,
      price: 85000
    }
  ],
  featured: [
    {
      title: "Sunny Private Studio Apartment",
      parish: "St. James",
      realEstateType: "Apartment",
      squareMeters: 80,
      beds: 3,
      bathroom: 2,
      price: 80000
    },
    {
      title: "Sunny Private Studio Apartment",
      parish: "St. James",
      realEstateType: "Apartment",
      squareMeters: 80,
      beds: 3,
      bathroom: 2,
      price: 20000
    },
    {
      title: "Sunny Private Studio Apartment",
      parish: "St. James",
      realEstateType: "Apartment",
      squareMeters: 80,
      beds: 3,
      bathroom: 2,
      price: 170000
    },
    {
      title: "Sunny Private Studio Apartment",
      parish: "St. James",
      realEstateType: "Apartment",
      squareMeters: 80,
      beds: 3,
      bathroom: 2,
      price: 72000
    },
    {
      title: "Sunny Private Studio Apartment",
      parish: "St. James",
      realEstateType: "Apartment",
      squareMeters: 80,
      beds: 3,
      bathroom: 2,
      price: 120000
    },
    {
      title: "Sunny Private Studio Apartment",
      parish: "St. James",
      realEstateType: "Apartment",
      squareMeters: 80,
      beds: 3,
      bathroom: 2,
      price: 5000000
    },
    {
      title: "Sunny Private Studio Apartment",
      parish: "St. James",
      realEstateType: "Apartment",
      squareMeters: 80,
      beds: 3,
      bathroom: 2,
      price: 57400
    }
  ],
});

export const getters = {
    listedToBuy: state => state.buy,
    listedToRent: state => state.rent,
    featuredProperties: state => state.featured,
};

export const actions = {};

export const mutations = {};
