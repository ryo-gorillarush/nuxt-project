const isDev = process.env.NODE_ENV === "development"

export default defineNuxtConfig({
    modules: ["@vueuse/nuxt", "@nuxt/image", "@nuxtjs/tailwindcss"],
    experimental: {
        viewTransition: true,
        renderJsonPayloads: true,
    },
    routeRules: {
        "/**": isDev
            ? {}
            : {
                  cache: {
                      swr: true,
                      maxAge: 120,
                      staleMaxAge: 60,
                      headersOnly: true,
                  },
              },
    },
    tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "tailwind.config",
        exposeConfig: false,
    },
    devtools: { enabled: true },
})
