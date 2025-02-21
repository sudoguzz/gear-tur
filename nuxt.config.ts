import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    pages: true,

    vite: {
        plugins: [tailwindcss()],
    },

    css: ["~/assets/app.css"],
    modules: [
        "@nuxt/image",
        "@nuxt/icon",
        "@nuxtjs/google-fonts",
        "vue3-carousel-nuxt",
    ],

    googleFonts: {
        families: {
            Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
    },

    nitro: {
        preset: "github_pages",
    },
});
