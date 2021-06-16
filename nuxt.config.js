import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  generate: {
    fallback: true
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "Jamaica Housing",
    title: "Jamaica Housing",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { hid: "author", name: "author", content: "Jason Clarke" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  env: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://jasonjh.netlify.app/"
        : "http://localhost:3000"
  },
  loading: {
    color: "#00C853",
    height: "5px"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/vueAwesomeSwiper", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    //Google Tag Manager
    "@nuxtjs/gtm",
    // https://go.nuxtjs.dev/content
    /*     '@nuxt/content', */
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "<apiKey>",
          authDomain: "<authDomain>",
          projectId: "<projectId>",
          storageBucket: "<storageBucket>",
          messagingSenderId: "<messagingSenderId>",
          appId: "<appId>",
          measurementId: "<measurementId>"
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  gtm: {
    enabled: true,
    id: "GTM-5QNQDKF"
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
      name: "Jamaica Housing",
      short_name: "JA Housing",
      description: "Housing Web App",
      theme_color: "#00c853",
      background_color: "#00c853"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      themes: {
        light: {
          primary: colors.lightBlue,
          secondary: colors.grey.darken1,
          accent: colors.pink.darken1,
          error: colors.red.accent3,
          background: colors.indigo.lighten5,
          info: colors.teal.darken1
        },
        dark: {
          primary: colors.blue.darken4,
          background: colors.indigo.base,
          info: colors.teal.lighten1
        }
      },
      dark: false
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
