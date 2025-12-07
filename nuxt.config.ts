// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    routeRules: {
        '/dashboard': {ssr: false},
        '/dashboard/admin': {ssr: false}
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    css: ['./app/assets/css/main.css'],
    modules: ['@nuxt/ui']
})
