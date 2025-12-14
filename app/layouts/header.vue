<script setup lang="ts">
import type {NavigationMenuItem} from "@nuxt/ui/components/NavigationMenu.vue";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Download',
  to: '/pricing',
  active: route.path.startsWith('/pricing')
}, {
  label: 'Login',
  to: '/login',
  active: route.path.startsWith('/login')
}, {
  label: 'Docs',
  to: '/docs/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/docs/getting-started')
}]);

</script>

<template>
  <UHeader>
    <template #title>
      Postchi
    </template>

    <template #right>
      <UNavigationMenu :items="items"/>

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
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5"/>
    </template>
  </UHeader>
  <slot></slot>
</template>