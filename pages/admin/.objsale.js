[
  "{{repeat(180, 180)}}",
  {
    parish: function(t) {
      var parish = [
        "Kingston",
        "St. Andrew",
        "St. Catherine",
        "Clarendon",
        "Manchester",
        "St. Elizabeth",
        "Westmoreland",
        "Hanover",
        "St. James",
        "Trelawny",
        "St. Ann",
        "St. Mary",
        "Portland",
        "St. Thomas"
      ];
      return parish[t.integer(0, parish.length - 1)];
    },
    timestamp: "xyz",
    amenities: function(t) {
      var parishz = [
        {
          title: "Wifi",
          icon: "mdi-wifi"
        },
        { title: "Air Conditioning", icon: "mdi-air-filter" },
        { title: "Cable TV ", icon: "mdi-television" },
        { title: "Gated Community", icon: "mdi-security" },
        { title: "Parking", icon: "mdi-car" },
        { title: "Furnished", icon: "mdi-sofa" },
        { title: "Smart Home", icon: "mdi-home-assistant" },
        { title: "24 Hour Security", icon: "mdi-cctv" },
        { title: "Family Oriented", icon: "mdi-home-heart" },
        { title: "Grilled", icon: "mdi-shield-home" },
        { title: "Water Heater", icon: "mdi-thermometer-high" },
        { title: "Swimming Pool", icon: "mdi-pool" },
        { title: "Generator", icon: "mdi-flash" },
        { title: "Water Tank", icon: "mdi-water" },
        { title: "Gym", icon: "mdi-dumbbell" },
        { title: "Tennis Court", icon: "mdi-tennis" },
        { title: "Basketball Court", icon: "mdi-basketball" },
        { title: "Park Near By", icon: "mdi-nature-people" },
        { title: "Church Near By", icon: "mdi-church" },
        { title: "Hospital Near By", icon: "mdi-hospital-building" },
        { title: "Schools Near By", icon: "mdi-school" },
        { title: "Supermarket Near By", icon: "mdi-shopping" },
        { title: "Movie Theater Near By", icon: "mdi-theater" },
        { title: "Restaurants Near By", icon: "mdi-silverware-fork-knife" }
      ];
      return [parishz[t.integer(0, parishz.length - 2)]];
    },
    bedrooms: function(b) {
      var bed = ["1", "2", "3", "4 +"];
      return bed[b.integer(0, bed.length - 1)];
    },
    description: {
      description: '{{lorem(60, "words")}}',
      name: "{{firstName()}} {{surname()}} Property"
    },
    price: "{{integer(1400000, 100000000)}}",
    featured: false,
    details: {
      propertyMLS: "",
      parish: function(t) {
        var parishz = [
          "Kingston",
          "St. Andrew",
          "St. Catherine",
          "Clarendon",
          "Manchester",
          "St. Elizabeth",
          "Westmoreland",
          "Hanover",
          "St. James",
          "Trelawny",
          "St. Ann",
          "St. Mary",
          "Portland",
          "St. Thomas"
        ];
        return parishz[t.integer(0, parishz.length - 1)];
      },
      propertyType: function(ty) {
        var type = [
          "Apartment",
          "Commercial Building/Offices",
          "Development Land (Commercial)",
          "Development Land (Residential)",
          "Factory",
          "Farm/Agriculture",
          "House",
          "Townhouse",
          "Warehouse",
          "Apartment",
          "Commercial Building/Offices",
          "Development Land (Commercial)",
          "Development Land (Residential)",
          "Factory",
          "Farm/Agriculture",
          "House",
          "Townhouse",
          "Warehouse"
        ];
        return type[ty.integer(0, ty.length - 1)];
      },
      propertyFor: "Sale",
      size: "{{integer(2000, 20000)}}",
      bedrooms: "{{integer(1, 20)}}",
      price: "{{integer(20000, 800000)}}",
      community: "{{surname()}} Street",
      rentType: "",
      bathrooms: "{{integer(1, 20)}}",
      garages: "{{integer(1, 20)}}"
    },
    images: [
      "{{repeat(3)}}",
      {
        fileName: "1633293204535_5.jpg",
        src:
          "https://firebasestorage.googleapis.com/v0/b/jamaica-housing.appspot.com/o/property_images%2FqhdYBX7tVfOcUyV6bYtFOP9JGiD2%2F{{integer(0, 19)}}.jpg?alt=media&token=349afe01-cafc-497b-8c78-e1365301cfdb"
      }
    ],
    tours: {
      youtube: "",
      matterport: ""
    },
    verified: "{{bool()}}",
    uploader: "qhdYBX7tVfOcUyV6bYtFOP9JGiD2",
    propertyFor: "Sale",
    type: function(ty) {
      var type = [
        "Apartment",
        "Commercial Building/Offices",
        "Development Land (Commercial)",
        "Development Land (Residential)",
        "Factory",
        "Farm/Agriculture",
        "House",
        "Townhouse",
        "Warehouse",
        "Apartment",
        "Commercial Building/Offices",
        "Development Land (Commercial)",
        "Development Land (Residential)",
        "Factory",
        "Farm/Agriculture",
        "House",
        "Townhouse",
        "Warehouse"
      ];
      return type[ty.integer(0, ty.length - 1)];
    }
  }
];
