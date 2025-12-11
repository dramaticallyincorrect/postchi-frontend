<script setup lang="ts">
import type {NavigationMenuItem} from "@nuxt/ui/components/NavigationMenu.vue";

definePageMeta({
  layout: false,
});

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
  <UMain>
    <UPage>
      <div class="mt-6 flex flex-col w-10/12 place-self-center">
        <div class="place-self-center my-6">
          <h1 class="text-4xl">The <span class="italic text-amber-300">IDE-Inspired</span>
            API
            Client</h1>
          <h2 class="text-xl text-muted mt-1 text-center">everything in plain text boosted by Intellisense</h2>
        </div>
        <img src="/postchi.png" class="place-self-center mt-6 rounded-md" alt="postchi-screenshot">
        <div class="flex flex-row justify-between my-12">

          <UPageFeature
              title="Clear"
              description="See your request all in on place"
              icon="pixelarticons:visible"
          />

          <UPageFeature
              title="Git friendly"
              description="Everything is stored as plane text files"
              icon="i-lucide-swatch-book"
          />

          <UPageFeature
              title="Intelligent"
              description="See errors and hints as you type"
              icon="material-symbols:network-intelligence"
          />

        </div>
      </div>
    </UPage>
  </UMain>
</template>