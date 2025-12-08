export default defineNuxtPlugin(() => {

    globalThis.$fetch = $fetch.create({
        onRequest({options, request}) {
            const url = typeof request === 'string' ? request : request.url
            if (url.startsWith('http://localhost:8080/dashboard')) {
                const token = localStorage.getItem('token')

                if (!token) {
                    return
                }
                options.headers.set('Authorization', `Bearer ${token}`)
            }
        }
    })
})