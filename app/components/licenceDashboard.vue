<script setup lang="ts">
import type {Licence} from "~~/server/api/licence";

let toast = useToast();

let {data: licences, pending, error, refresh} = useFetch<Licence[]>('http://localhost:8080/dashboard/licences', {
  method: 'GET',
});

function deleteLicence(licence: Licence, e: Event) {
  $fetch(`http://localhost:8080/dashboard/licences/${licence.key}`, {
    method: 'DELETE',
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
    await $fetch<Licence | undefined>(`http://localhost:8080/dashboard/subscription/invite?email=${email.value}`, {
      method: 'POST',
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
</template>

<style scoped>

</style>