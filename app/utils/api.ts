export const $api = $fetch.create({
    baseURL: 'https://postchi-backend-s76aq.sevalla.app',
    onRequest({ options, request }) {
        const url = typeof request === 'string' ? request : request.url
        if (url.startsWith('/dashboard') && import.meta.client) {
            const token = localStorage.getItem('token')
            if (token) {
                options.headers.set('Authorization', `Bearer ${token}`)
            }
        }
    },
    onResponseError({ response }) {
        if (response.status === 401 && !response.url.includes('login')) {
            if (import.meta.client) {
                localStorage.removeItem('token')
            }
            navigateTo('/login')
        }
    }
})
