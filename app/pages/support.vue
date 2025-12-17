<script setup lang="ts">

import {definePageMeta} from "#imports";

definePageMeta({layout: 'header'});

</script>

<template>

  <div>
    <UPageSection title="Need some help?" description="Browse Documentation, Open an issue or contact us"/>


    <div class="flex flex-row max-w-9/12 place-self-center space-x-20 text-center">

      <div class="flex flex-col">
        <UIcon name="lucide:book-search" class="place-self-center m-6" size="64"></UIcon>
        <span class="text-3xl font-bold mb-2 text-highlighted">How can i ... ?</span>
        <span class="text-1xl">Learn about Postchi via documentation</span>
        <ULink to="/docs" class="mt-6 text-secondary-800 dark:text-secondary-400">Open Documentation
          <UIcon name="ic:round-navigate-next" class=" align-middle" size="24"></UIcon>
        </ULink>
      </div>

      <div class="flex flex-col">
        <UIcon name="lucide:bug" class="place-self-center m-6" size="64"></UIcon>
        <span class="text-3xl font-bold mb-2 text-highlighted">Found a bug?</span>
        <span class="text-1xl">Submit an issue on github</span>
        <ULink to="/docs" class="mt-6 text-secondary-800 dark:text-secondary-400">Open A ticket
          <UIcon name="ic:round-navigate-next" class=" align-middle" size="24"></UIcon>
        </ULink>
      </div>

      <div class="flex flex-col">
        <UIcon name="lucide:mail-question-mark" class="place-self-center m-6" size="64"></UIcon>
        <span class="text-3xl font-bold mb-2 text-highlighted">Have a question?</span>
        <span class="text-1xl font-light">Contact us over email</span>
        <ULink to="mailto:support@getpostchi.com" class="mt-6 text-secondary-800 dark:text-secondary-400">
          Send email
          <UIcon name="ic:round-navigate-next" class=" align-middle" size="24"></UIcon>
        </ULink>
      </div>
    </div>

  </div>


</template>