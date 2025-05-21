// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  build: {
    transpile: ["@phosphor-icons/vue"],
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
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Monoton&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/motion/nuxt",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/scripts",
    "@nuxt/image",
    "nuxt-swiper",
    "shadcn-nuxt",
  ],
  shadcn: {
    /**
     * Prefix for all the imported componen
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default
     */
    componentDir: "./components/ui",
  },
  colorMode: {
    classSuffix: "",
    preference: "light",
    storage: "cookie",
    // fallback: "light",
  },
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
  scripts: {
    registry: {
      googleTagManager: true,
      googleAnalytics: true,
    },
  },
  runtimeConfig: {
    public: {
      Emailjs: "75u1MbtaSAXCYENAL",
      scripts: {
        googleAnalytics: {
          id: process.env.NUXT_GOOGLE_ANALYTICS_ID!,
        },
        googleTagManager: {
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
  },
});
