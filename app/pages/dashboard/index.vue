<script setup lang="ts">
import {type Account, AccountType} from "~~/server/api/account";

import {navigateTo} from "#app";
import LicenceDashboard from "~/components/licenceDashboard.vue";
import IndividualLicence from "~/components/IndividualLicence.vue";

let token = localStorage.getItem('token')

const {data: user} = useFetch<Account>('http://localhost:8080/account', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

console.log(user?.value?.type);

function logout(e: Event) {
  e.preventDefault();
  localStorage.removeItem('token');
  navigateTo('/login');
}


</script>

<template>
  <div>
    <div class="min-h-screen flex flex-row  w-full">
      <div class="flex flex-col w-56  overflow-hidden bg-elevated">
        <div class="flex items-center justify-center h-20 shadow-md">
          <h1 class="text-3xl uppercase">Logo</h1>
        </div>
        <ul class="flex flex-col py-4">
          <li>
            <a href="#"
               class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-default hover:text-highlighted">
              <span class="text-sm font-medium pl-6">Licence</span>
            </a>
          </li>
          <li>
            <a href="#"
               class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-default hover:text-highlighted">
              <span class="text-sm font-medium pl-6">Billing</span>
            </a>
          </li>
          <li>
            <a href="#"
               class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-default hover:text-highlighted">
              <span class="text-sm font-medium pl-6">Account</span>
            </a>
          </li>
          <li>
            <button v-on:click="logout"
                    class="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-default hover:text-highlighted">
              <span class="text-sm font-medium pl-6">Logout</span>
            </button>
          </li>
        </ul>
      </div>

      <div class="flex-grow">
        <LicenceDashboard :token="token!" v-if="user?.type == AccountType.Organisation"/>
        <div class="flex flex-row h-full">
          <IndividualLicence v-if="user?.type == AccountType.Individual" class="content-center flex-grow"/>
        </div>
      </div>

    </div>
  </div>
</template>