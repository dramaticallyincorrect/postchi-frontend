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
  <div class="flex flex-row justify-center items-center h-dvh">
    <ChangePassword destination="/dashboard/licence" />
  </div>
</template>