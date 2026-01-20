<script setup lang="ts">

import {definePageMeta} from "#imports";
import {docsUrl} from "~/utils/constants";

definePageMeta({layout: 'header'});

</script>

<template>

  <div class="max-w-7xl mx-auto px-6 py-24 space-y-16">

    <div class="text-center space-y-4">
      <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
        Need some help?
      </h2>
      <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Whether you're looking for examples, reporting a bug, or just have a question, we've got you covered.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div class="group relative flex flex-col p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-amber-500/50 transition-all duration-300 shadow-sm hover:shadow-xl">
        <div class="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
          <UIcon name="i-lucide-book-search" size="32" />
        </div>

        <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">How can I...?</h3>
        <p class="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
          Checkout our guides, API references, and configuration examples.
        </p>

        <ULink :to="docsUrl" target="_blank" class="inline-flex items-center font-semibold text-primary-600 dark:text-primary-400 hover:gap-2 transition-all">
          Open Documentation
          <UIcon name="i-lucide-arrow-right" class="ml-2" />
        </ULink>
      </div>

      <div class="group relative flex flex-col p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-amber-500/50 transition-all duration-300 shadow-sm hover:shadow-xl">
        <div class="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-500/10 text-slate-600 dark:text-slate-400">
          <UIcon name="i-lucide-bug" size="32" />
        </div>

        <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">Found a bug?</h3>
        <p class="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
          Help us improve Postchi. Report issues on GitHub.
        </p>

        <ULink to="https://github.com/your-repo/issues" target="_blank" class="inline-flex items-center font-semibold text-primary-600 dark:text-primary-400 hover:gap-2 transition-all">
          Open a Ticket
          <UIcon name="i-lucide-arrow-right" class="ml-2" />
        </ULink>
      </div>

      <div class="group relative flex flex-col p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-amber-500/50 transition-all duration-300 shadow-sm hover:shadow-xl">
        <div class="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <UIcon name="i-lucide-mail-question" size="32" />
        </div>

        <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">Have a question?</h3>
        <p class="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
          Can't find what you're looking for? Reach out to our support team directly.
        </p>

        <ULink to="mailto:support@getpostchi.com" class="inline-flex items-center font-semibold text-primary-600 dark:text-primary-400 hover:gap-2 transition-all">
          Send Email
          <UIcon name="i-lucide-arrow-right" class="ml-2" />
        </ULink>
      </div>

    </div>
  </div>

</template>