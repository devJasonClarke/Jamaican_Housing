[
  '{{repeat(5, 7)}}',
  {
      parish: function (t) {
      var parish = ["Kingston", "St. Andrew", "St. Catherine", "Clarendon", "Manchester", "St. Elizabeth", "Westmoreland", "Hanover", "St. James", "Trelawny", "St. Ann", "St. Mary", "Portland", "St. Thomas"];
      return parish[t.integer(0, parish.length - 1)];
    },
    timestamp: { seconds: 1633293163, nanoseconds: 151000000 },
    amenities: [
    { icon: "mdi-car", title: "Parking" },
    { icon: "mdi-shield-home", title: "Grilled" },
    { title: "Water Tank", icon: "mdi-water" },
    { title: "Water Heater", icon: "mdi-thermometer-high" },
    { icon: "mdi-pool", title: "Swimming Pool" }
  ],
     bedrooms: function (b) {
      var bed = ["1","2","3","4 +"];
      return bed[b.integer(0, bed.length - 1)];
    },
      description: {
    description: '{{lorem(250, "words")}}',
    name: "{{firstName()}} {{surname()}}"
  },
    index: '{{index()}}',
      price: '{{integer(2000000, 2000000000)}}',
    featured: false,
      details: {
    propertyId: "",
    parish: function (t) {
      var parishz = ["Kingston", "St. Andrew", "St. Catherine", "Clarendon", "Manchester", "St. Elizabeth", "Westmoreland", "Hanover", "St. James", "Trelawny", "St. Ann", "St. Mary", "Portland", "St. Thomas"];
      return parishz[t.integer(0, parishz.length - 1)];
    },
    propertyType: function (ty) {
      var type = [ "Apartment",
    "Commercial Building/Offices",
    "Development Land (Commercial)",
    "Development Land (Residential)",
    "Factory",
    "Farm/Agriculture",
    "House",
    "Townhouse",
    "Warehouse"];
    },
    propertyFor: "Sale",
    size: '{{integer(2000, 20000)}}',
    bedrooms: "{{integer(1, 20)}}",
    price:  '{{integer(2000000, 2000000000)}}',
    community: "test test",
    rentType: "",
    bathrooms: "{{integer(1, 20)}}",
    garages: "{{integer(1, 20)}}"
  },
      images: [
         '{{repeat(7)}}',
    {
      fileName: "1633293204535_5.jpg",
      src:
        "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F1633293204535_5.jpg?alt=media&token=ee9a7780-aafb-4e82-b7ba-3cb119e204fa"
    }
  ],
     verified: '{{bool()}}',
        uploader: 'qhdYBX7tVfOcUyV6bYtFOP9JGiD2',
      propertyFor: "Sale",
      type:  function (tay) {
      var tyape = [ "Apartment",
    "Commercial Building/Offices",
    "Development Land (Commercial)",
    "Development Land (Residential)",
    "Factory",
    "Farm/Agriculture",
    "House",
    "Townhouse",
    "Warehouse"];
    }
  }]