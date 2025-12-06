<script setup lang="ts">
import type {Account} from "~~/server/api/account";
import type {Licence} from "~~/server/api/licence";
import {navigateTo} from "#app";

let token = localStorage.getItem('token')

const {data: user} = useFetch<Account>('http://localhost:8080/account', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

let {data: licences, pending, error, refresh} = useFetch<Licence[]>('http://localhost:8080/licences', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

function logout(e: Event) {
  e.preventDefault();
  console.log('logout');
  localStorage.removeItem('token')
  navigateTo('/login')
}

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
  <div>
    <div class="min-h-screen flex flex-row bg-gray-100 w-full">
      <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
        <div class="flex items-center justify-center h-20 shadow-md">
          <h1 class="text-3xl uppercase text-indigo-500">Logo</h1>
        </div>
        <ul class="flex flex-col py-4">
          <li>
            <a href="#"
               class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span class="text-sm font-medium pl-6">Licence</span>
            </a>
          </li>
          <li>
            <a href="#"
               class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span class="text-sm font-medium pl-6">Billing</span>
            </a>
          </li>
          <li>
            <a href="#"
               class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span class="text-sm font-medium pl-6">Account</span>
            </a>
          </li>
          <li>
            <button v-on:click="logout"
                    class="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span class="text-sm font-medium pl-6">Logout</span>
            </button>
          </li>
        </ul>
      </div>
      <div class="content-center flex-grow">
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
      </div>
    </div>
  </div>
</template>