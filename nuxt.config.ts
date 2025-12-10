// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    routeRules: {
        '/dashboard': {ssr: false},
        '/dashboard/**': {ssr: false},
        '/otp': {ssr: false},
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    css: ['./app/assets/css/main.css'],
    modules: ['@nuxt/ui'],
    hooks: {
        'pages:extend'(pages) {
            pages.push({
                name: 'dashboard',
                path: '/dashboard',
                file: '~/pages/dashboard/licence.vue'
            })
        }
    }
})
