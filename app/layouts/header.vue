<script setup lang="ts">

import {docsUrl} from "~/utils/constants";


const route = useRoute();

const items = computed(() => {
  return [{
    label: '~/Download',
    to: '/download',
    active: route.path.startsWith('/download')
  }, {
    label: '~/Login',
    to: '/login',
    active: route.path.startsWith('/login')
  }, {
    label: '~/Docs',
    to: docsUrl,
    target: '_blank',
    active: route.fullPath == 'https://docs.getpostchi.com'
  },
    {
      label: '~/Support',
      to: '/support',
      active: route.path.startsWith('/support')
    }
  ];
});

const footers = [
  {
    label: 'Privacy Policy',
    to: 'privacy',
    target: '_blank'
  },
  {
    label: 'Refund Policy',
    to: 'refund',
    target: '_blank'
  },
  {
    label: 'terms and conditions',
    to: 'terms',
    target: '_blank'
  }
]

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <nav
        class="px-4 py-3 flex items-center justify-between bg-white/50 dark:bg-[#111111]/50 backdrop-blur-md sticky top-0 z-50">
      <div class="flex items-center gap-6">
        <div class="flex flex-row items-center gap-2">
          <ULink to="/">
            <img src="/postchi.svg" alt="Postchi Logo" class="h-12 absolute left-0 top-1 inline"/>
            <span class="ml-8">Postchi</span>
          </ULink>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="hidden md:flex gap-4 text-xs font-mono opacity-80 dark:opacity-60 mr-4 items-center">
          <ULink v-for="link in items" :to="link.to" class="hover:text-primary text-default text-lg"
                 active-class="text-primary">{{ link.label }}
          </ULink>
        </div>
        <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
          <UButton
              color="neutral"
              variant="ghost"
              to="https://github.com/dramaticallyincorrect/postchi"
              target="_blank"
              icon="i-simple-icons-github"
              aria-label="GitHub"
          />
        </UTooltip>
        <UColorModeButton/>
      </div>
    </nav>

    <main class="flex-1">
      <slot/>
    </main>

    <UFooter class="mt-8">
      <template #left>
        <p class="text-muted text-sm">Copyright © Dramatically Incorrect {{ new Date().getFullYear() }}</p>
      </template>

      <UNavigationMenu :items="footers" variant="link"/>
    </UFooter>
  </div>
</template>