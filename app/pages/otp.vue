<script setup lang="ts">
import {type TokenResponse} from "~~/server/api/TokenResponse";

definePageMeta({
  layout: false,
});

useHead({
  bodyAttrs: {
    class: "h-full"
  },
  htmlAttrs: {
    class: "h-full"
  },
})

let route = useRoute()

let otp = route.query.code;

const {data: response, error} = await useFetch<TokenResponse>(`http://localhost:8080/otp?code=${otp}`, {
  method: 'POST'
})

if (response.value != null) {
  localStorage.setItem('token', response.value.token);
  navigateTo('/setPassword')
}

</script>

<template>
  <div class="flex flex-row justify-center items-center h-dvh">
    <p v-if="error != null" class="text-3xl align-middle">
      There was an error logging you in, please try again
    </p>
  </div>
</template>