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
    titleTemplate: "Jamaica Housing ",
    title: "Jamaica Housing ",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Discover the best offers on the Jamaican Real Estate Market"
      },
      { hid: "author", name: "author", content: "Jason Clarke" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  env: {
    geoLocationApi: process.env.GEO_LOCATION_API_KEY,
    abstractApi: process.env.ABSTRACT_API_KEY,
    formApi: process.env.FORM_API_KEY,
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
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
    "@nuxtjs/axios",

    "@nuxtjs/onesignal",

    "@nuxtjs/pwa",

    "@nuxtjs/gtm",
    "@nuxtjs/robots",

    // https://go.nuxtjs.dev/content
    /*     '@nuxt/content', */
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: process.env.apiKey,
          authDomain: process.env.authDomain,
          projectId: process.env.projectId,
          storageBucket: process.env.storageBucket,
          messagingSenderId: process.env.messagingSenderId,
          appId: process.env.appId,
          measurementId: process.env.measurementId
        },
        services: {
          auth: true,
          firestore: true,
          storage: true,
          analytics: true
        }
      }
    ],
    "@nuxtjs/sitemap"
  ],
  robots: () => {
    return {
      UserAgent: "*",
      Disallow: "/dashboard"
    };
  },
  sitemap: {
    hostname: "https://jamaican-housing.pages.dev/",
    gzip: true,
    exclude: ["/dashboard"],
    routes: [
      "/buy",
      "/rent",
      "/contact",
      "/sponsors",
      "/featured",
      "/parish",
      "/property",
      "/blog",
      "/parish/clarendon",
      "/parish/hanover",
      "/parish/kingston",
      "/parish/manchester",
      "/parish/portland",
      "/parish/st-andrew",
      "/parish/st-ann",
      "/parish/st-catherine",
      "/parish/st-elizabeth",
      "/parish/st-james",
      "/parish/st-mary",
      "/parish/st-thomas",
      "/parish/trelawny",
      "/parish/westmoreland",
      {
        url: "/",
        priority: 1
      }
    ]
  },
  oneSignal: {
    init: {
      appId: "3b3f470a-3687-4700-a38e-551bdf04fb86",
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: false
      },
      notifyButton: {
        enable: true
      }
    }
  },
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
      description:
        "Discover the best offers on the Jamaican Real Estate Market",
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
