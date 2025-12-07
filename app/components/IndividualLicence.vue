<script setup lang="ts">

import type {Licence} from "~~/server/api/licence";

let token = localStorage.getItem('token')

let {data: licences, pending, error, refresh} = useFetch<Licence[]>('http://localhost:8080/licences', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`
  }
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
  <span class="flex flex-row justify-center items-center">
          <div v-for="licence in licences"
               class="cursor-pointer flex flex-row border-2 py-3 px-3 rounded-md border-gray-300 hover:border-brand"
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
        </span>
</template>