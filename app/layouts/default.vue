<script setup lang="ts">
import {navigateTo} from "#app";

function logout(e: Event) {
  e.preventDefault();
  localStorage.removeItem('token');
  navigateTo('/login');
}
</script>

<template>
  <div class="min-h-screen flex flex-row  w-full">
    <div class="flex flex-col w-56  overflow-hidden bg-elevated">
      <div class="flex items-center justify-center h-20 shadow-md">
        <h1 class="text-3xl uppercase">Logo</h1>
      </div>
      <ul class="flex flex-col py-4">
        <li>
          <NuxtLink to="/dashboard/licence"
             class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-default hover:text-highlighted">
            <span class="text-sm font-medium pl-6">Licence</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/dashboard/billing" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-default hover:text-highlighted">
            <span class="text-sm font-medium pl-6">Billing</span>
          </NuxtLink>
        </li>
        <li>
          <a href="#"
             class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-default hover:text-highlighted">
            <span class="text-sm font-medium pl-6">Account</span>
          </a>
        </li>
        <li>
          <button v-on:click="logout"
                  class="cursor-pointer w-full flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-default hover:text-highlighted">
            <span class="text-sm font-medium pl-6">Logout</span>
          </button>
        </li>
      </ul>
    </div>
    <slot class=""/>
  </div>
</template>