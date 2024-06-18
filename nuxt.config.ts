// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@primevue/nuxt-module", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/global.css"],
  primevue: {
    options: {
      unstyled: true,
    },
    components: {
      include: [],
    },
  },
  components: false,
});
