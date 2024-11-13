// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Metropolitan Electric",
      meta: [
        {
          name: "description",
          content:
            "Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.",
        },
        {
          name: "og:description",
          content:
            "Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.",
        },
        {
          name: "og:image",
          content: "logo.svg",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
    "@zadigetvoltaire/nuxt-gtm",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxthq/studio",
    "nuxt-swiper",
  ],
  site: {
    url: "https://metropolitanelectricng.com",
    name: "Metropolitan Electric Limited",
    defaultLocale: "en",
  },
  robots: {
    disallow: ["/_nuxt/", "/_nuxt/builds/", "/_nuxt/meta/", "/api/"],
  },
  sitemap: {
    exclude: ["/_nuxt/**"],
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-07-02",
  runtimeConfig: {
    public: {
      Emailjs: "75u1MbtaSAXCYENAL",
      gtm: {
        id: process.env.NUXT_GTM_ID!,
        queryParams: {
          gtm_auth: "AB7cDEf3GHIjkl-MnOP8qr",
          gtm_preview: "env-4",
          gtm_cookies_win: "x",
        },
        defer: false,
        compatibility: false,
        nonce: "2726c7f26c",
        enabled: true,
        debug: true,
        loadScript: true,
        enableRouterSync: true,
        ignoredViews: ["homepage"],
        trackOnNextTick: false,
        devtools: true,
      },
    },
  },
});
