<script setup lang="ts">
import type {NavigationMenuItem} from "@nuxt/ui/components/NavigationMenu.vue";
import {docsUrl} from "~/utils/constants";


const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => {
  return [{
    label: '~/Download',
    to: '/pricing',
    active: route.path.startsWith('/pricing')
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

const footers: NavigationMenuItem[] = [
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
        class="border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between bg-white/50 dark:bg-[#0b0e14]/50 backdrop-blur-md sticky top-0 z-50">
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 bg-amber-500 rounded flex items-center justify-center">
            <UIcon name="i-lucide-code" class="text-white text-xs"/>
          </div>
          <ULink to="/">
            <span class="font-bold tracking-tighter dark:text-white">POSTCHI.exe</span>
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
              to="https://github.com/dramaticclyIncorrect/postchi"
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