<script setup lang="ts">
import {type TokenResponse} from "~~/server/api/TokenResponse";

definePageMeta({
  layout: false,
});

useHead({
  bodyAttrs: { class: "h-full" },
  htmlAttrs: { class: "h-full" },
})

const route = useRoute()
const otp = route.query.code;
const error = ref(false);

await $api<TokenResponse>(`/otp?code=${otp}`, { method: 'POST' })
  .then(response => {
    localStorage.setItem('token', response.token)
    navigateTo('/setPassword')
  })
  .catch(() => { error.value = true })

</script>

<template>
  <div class="flex flex-row justify-center items-center h-dvh">
    <p v-if="error != null" class="text-3xl align-middle">
      There was an error logging you in, please try again
    </p>
  </div>
</template>