<script setup lang="ts">

import type {Licence} from "~~/server/api/licence";
import {type Subscription} from "~~/server/api/Subscription";

const { data: licences, pending: licencesPending } = useFetch<Licence[]>('/dashboard/licences', { $fetch: $api });

const {
  data: subscription,
  pending: subscriptionPending,
} = useFetch<Subscription>('/dashboard/subscription', { $fetch: $api });

const pending = computed(() => licencesPending.value || subscriptionPending.value);

const copiedKey = ref<string | null>(null);

function copyLicence(licence: Licence, e: Event) {
  navigator.clipboard.writeText(licence.key);
  copiedKey.value = licence.key;
  setTimeout(() => {
    copiedKey.value = null;
  }, 2000);
}

</script>

<template>
  <div class="flex flex-col px-8 py-8 gap-8 w-full">
    <div v-if="pending" class="flex items-center justify-center h-64">
      <UIcon name="i-lucide-loader-circle" class="size-8 animate-spin text-muted" />
    </div>

    <div v-else-if="subscription && licences">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h1 class="text-2xl font-semibold">Individual Licence</h1>
          <p class="text-base text-muted mt-0.5">
            Valid for all versions released before {{ new Date(subscription.end).toDateString() }}
          </p>
        </div>
        <UButton color="primary" icon="i-lucide-download" to="/download">
          Download Postchi
        </UButton>
      </div>

      <div class="flex flex-col gap-3 mt-6">
        <div
          v-for="licence in licences"
          :key="licence.key"
          v-on:click="copyLicence(licence, $event)"
          class="flex items-center justify-between cursor-pointer border border-default hover:border-brand rounded-lg px-4 py-3 transition-colors duration-150 select-none"
        >
          <span class="uppercase tracking-widest font-mono text-sm">{{ licence.key }}</span>
          <UBadge color="neutral" variant="outline" size="sm">
            {{ copiedKey === licence.key ? 'Copied!' : 'Copy' }}
          </UBadge>
        </div>
      </div>
    </div>
  </div>
</template>
