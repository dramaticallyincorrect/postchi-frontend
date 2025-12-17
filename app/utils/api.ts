export const $api = $fetch.create({
    // 1. Set the Base URL from runtime config
    onRequest({request, options}) {
        const config = useRuntimeConfig();
        options.baseURL = config.public.postchiApi;
    },

    onResponseError({response}) {
        // 3. Global error handling (e.g., redirect on 401)
        if (response.status === 401 && !response.url.includes('login')) {
            localStorage.removeItem('token',)
            navigateTo('/login')
        }
    }
})