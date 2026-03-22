<script setup lang="ts">
import {navigateTo} from "#app";

const route = useRoute();

function logout(e: Event) {
  e.preventDefault();
  localStorage.removeItem('token');
  navigateTo('/login');
}
</script>

<template>
  <div class="min-h-screen flex flex-row w-full">
    <div class="flex flex-col w-56 shrink-0 bg-elevated border-r border-default">
      <div class="flex items-center px-2 h-16 border-b border-default">
        <div class="flex flex-row items-center text-xl font-bold tracking-tight text-brand">
          <img src="/postchi.svg" alt="Postchi Logo" class="size-6 mr-2 inline" />
          <span>Postchi</span>
        </div>
      </div>
      <ul class="flex flex-col flex-1 py-3">
        <li>
          <NuxtLink
            to="/dashboard/licence"
            class="flex items-center gap-3 h-11 px-5 text-sm font-medium transition-colors duration-150"
            :class="route.path === '/dashboard/licence' || route.path === '/dashboard'
              ? 'text-invreted bg-brand/8 border-l-2 border-brand'
              : 'text-muted hover:text-default'"
          >
            <UIcon name="i-lucide-key-round" class="size-4 shrink-0" />
            <span>Licence</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/dashboard/billing"
            class="flex items-center gap-3 h-11 px-5 text-sm font-medium transition-colors duration-150"
            :class="route.path === '/dashboard/billing'
              ? 'text-invreted bg-brand/8 border-l-2 border-brand'
              : 'text-muted hover:text-default'"
          >
            <UIcon name="i-lucide-receipt" class="size-4 shrink-0" />
            <span>Billing</span>
          </NuxtLink>
        </li>
        <li class="mt-auto border-t border-default">
          <button
            v-on:click="logout"
            class="w-full flex items-center gap-3 h-11 px-5 text-sm font-medium text-muted hover:text-default transition-colors duration-150"
          >
            <UIcon name="i-lucide-log-out" class="size-4 shrink-0" />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
    <div class="flex flex-col flex-1 min-w-0 overflow-y-auto">
      <slot />
    </div>
  </div>
</template>
