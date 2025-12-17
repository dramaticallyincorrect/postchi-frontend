const config = useRuntimeConfig();

export const useApi = <T>(url: string, options = {}) => {
    return useFetch<T>(url, {
        ...options,
        // Automatically prepend the base URL from runtimeConfig
        baseURL: config.public.postchiApi
    })
}