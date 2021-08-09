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
    measurementId: process.env.measurementId,
    baseUrl: process.env.BASE_URL,
    oneSignalAppID: process.env.ONE_SIGNAL_APP_ID
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
 "@nuxt/content",
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
      Disallow: "/dashboard/",
      sitemap: `${process.env.BASE_URL}sitemap.xml`
    };
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
    exclude: ["/dashboard"]
  },
  oneSignal: {
    init: {
      appId: process.env.ONE_SIGNAL_APP_ID,
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: false
      },
      promptOptions: {
        slidedown: {
          prompts: [
            {
              type: "push", // current types are "push" & "category"
              autoPrompt: true,
              text: {
                /* limited to 90 characters */
                actionMessage:
                  "We'd love to show you notifications for the latest news and updates.",
                /* acceptButton limited to 15 characters */
                acceptButton: "Allow",
                /* cancelButton limited to 15 characters */
                cancelButton: "No Thanks"
              },
              delay: {
                timeDelay: 20
              }
            }
          ]
        }
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
      name: "Real Estate Jamaica",
      short_name: "Real Estate Ja",
      description:
        "Discover the best offers on the Jamaican Real Estate Market",
      theme_color: "#00c853",
      background_color: "#00c853"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    nestedProperties: ["author.name"]
  },

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
