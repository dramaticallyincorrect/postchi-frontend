<script setup lang="ts">
import type {Account} from "~~/server/api/account";
import type {Licence} from "~~/server/api/licence";

import {navigateTo} from "#app";

let token = localStorage.getItem('token')
const toast = useToast()

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

function deleteLicence(licence: Licence, e: Event) {
  $fetch(`http://localhost:8080/licences/${licence.key}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    },
    onResponse: ({response, request, options}) => {
      if (response.ok) {
        licences.value = licences.value?.filter((value) => value.key != licence.key)
        toast.add({
          title: 'Licence Deleted',
          color: 'success'
        });
      }
    }
  });
}

let email = ref('')

async function inviteUser() {
  if (email.value.trim() != '') {
    await $fetch<Licence | undefined>(`http://localhost:8080/subscription/invite?email=${email.value}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      onResponse: async ({response, request, options}) => {
        if (response.ok) {
          toast.add({
            title: 'Invitation sent',
            description: 'Licence has been generated',
            color: 'success'
          })
        }
        if (response.status == 201) {
          let licence = response._data as Licence;
          licences.value = licences.value?.concat(licence)
        } else if (response.status == 409) {
          toast.add({
            title: 'user already has an activated licence',
            description: 'Delete active licence first',
            color: 'error'
          })
        } else if (response.status == 403) {
          toast.add({
            title: 'No seats available',
            description: 'Add more seats on the subscription page',
            color: 'error'
          })
        }
      }
    });
  }
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
        <UContainer class="m-4 flex flex-row justify-end">
          <UInput v-model="email" placeholder="user email"/>
          <UButton label="Send Invitation" class="ml-2" v-on:click="inviteUser"/>
        </UContainer>
        <table class="w-full">
          <tr class="flex flex-row text-muted">
            <th class="flex-2" scope="colgroup">Email</th>
            <th class="flex-2" scope="colgroup">Licence</th>
            <th class="flex-1" scope="colgroup">Creation Date</th>
            <th class="flex-1" scope="colgroup">Activation Status</th>
            <th class="flex-1" scope="colgroup">Delete</th>
          </tr>
          <USeparator class="my-2"/>
          <div v-for="licence in licences">
            <tr class="flex flex-row text-default">
              <th class="flex-2">{{ licence.email }}</th>
              <th class="flex-2 uppercase font-mono">{{ licence.key }}</th>
              <th class="flex-1">{{ licence.creationDate }}</th>
              <th class="flex-1">{{ licence.activated ? 'Activated' : 'Pending' }}</th>
              <th class="flex-1">
                <UIcon v-on:click="deleteLicence(licence,$event)" name="material-symbols:delete"
                       class="size-5 cursor-pointer"/>
              </th>
            </tr>
            <USeparator class="my-2"/>
          </div>

        </table>

      </div>
    </div>
  </div>
</template>