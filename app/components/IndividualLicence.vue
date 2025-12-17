<script setup lang="ts">

import type {Licence} from "~~/server/api/licence";
import {type Subscription} from "~~/server/api/Subscription";

let {data: licences} = useApi<Licence[]>('dashboard/licences', {
  method: 'GET',
});

let {
  data: subscription,
  pending,
  error,
  refresh
} = useApi<Subscription>('/dashboard/subscription', {
  method: 'GET',
});

let isCopied = ref(false);

function copyLicence(licence: Licence, e: Event) {
  navigator.clipboard.writeText(licence.key);
  isCopied.value = true;
  setTimeout(() => {
    isCopied.value = false;
  }, 2000);
}

</script>

<template>
  <div class="m-20 flex flex-row h-fit">
    <div class="flex flex-row w-10/12 justify-between" v-if="subscription != null && licences != null">
      <div>
        <h1 class="text-5xl">Individual Licence</h1>
        <h2 class="text-xl text-muted font-light">Valid for all versions released before {{ new Date(subscription.end).toDateString() }}</h2>
        <div v-for="licence in licences"
             class="cursor-pointer mt-4 flex flex-row border-2 py-3 px-3 rounded-md border-gray-300 hover:border-brand"
             v-on:click="copyLicence(licence, $event)">
      <span class=" uppercase tracking-wider font-mono">
      {{ licence.key }}
    </span>
          <div class="ml-2 border-1 rounded-md px-2 border-gray-300">
            <div
                v-if="!isCopied"
                class="text-sm font-semibold rounded-lg">
              Copy
            </div>
            <div
                v-if="isCopied"
                class="text-sm font-semibold text-green-600 rounded-lg transition-opacity duration-300">
              Copied!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow"></div>
    <UButton class="cursor-pointer place-self-end text-lg" color="primary" icon="i-lucide-download">Download Postchi
    </UButton>
  </div>
</template>