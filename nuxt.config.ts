// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                {src: 'https://cdn.paddle.com/paddle/v2/paddle.js'}
            ]
        }
    },
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true}
})
