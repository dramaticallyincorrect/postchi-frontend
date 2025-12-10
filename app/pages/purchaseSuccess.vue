<script setup lang="ts">
definePageMeta({
  layout: false,
});

useHead({
  bodyAttrs: {
    class: 'h-full',
  },
  htmlAttrs: {
    class: 'h-full',
  }
});

</script>


<template>
  <div class="flex flex-row justify-center justify-items-center h-dvh">
    <div class="flex flex-col  max-w-[460px] items-center place-self-center p-8">
      <UIcon class="size-48 text-success" name="ep:success-filled"/>
      <h1 class="text-4xl my-2">Payment Successful
        <UIcon name="fxemoji:partypopper"/>
      </h1>
      <p class="mt-2">Once we process your payment you will receive an email with a link to login Use the link to set
        a password
        for your account and access the dashboard</p>
    </div>
  </div>
</template>