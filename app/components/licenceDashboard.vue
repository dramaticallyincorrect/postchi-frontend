<script setup lang="ts">
import type {Licence} from "~~/server/api/licence";
import * as v from "valibot";
import type {FormSubmitEvent} from "@nuxt/ui";
import {uniquesByKey} from "~/utils/list";

let toast = useToast();

let { data: licences, pending, error, refresh } = useFetch<Licence[]>('/dashboard/licences', { $fetch: $api });

function deleteLicence(licence: Licence, e: Event) {
  $api(`/dashboard/licences/${licence.key}`, { method: 'DELETE' })
    .then(() => {
      licences.value = licences.value?.filter((value) => value.key != licence.key)
      toast.add({ title: 'Licence Deleted', color: 'success' })
    })
}

const schema = v.object({
  email: v.pipe(v.string(), v.union([
    v.literal(''),
    v.pipe(
        v.string(), // Re-validate it's a string (necessary when using union with literal)
        v.email('Please enter a valid email address.')
    )
  ])),
})

type Schema = v.InferOutput<typeof schema>

const invitationState = reactive({
  email: '',
})

async function inviteUser(event: FormSubmitEvent<Schema>) {
  if (invitationState.email) {
    await $api<Licence>(`/dashboard/subscription/invite?email=${invitationState.email}`, { method: 'POST' })
      .then(licence => {
        licences.value = uniquesByKey(licences.value?.concat(licence) ?? [], 'key')
        toast.add({ title: 'Invitation sent', description: 'Licence has been generated', color: 'success' })
      })
      .catch(err => {
        if (err.response?.status === 409) {
          toast.add({ title: 'User already has an activated licence', description: 'Delete active licence first', color: 'error' })
        } else if (err.response?.status === 403) {
          toast.add({ title: 'No seats available', description: 'Add more seats on the subscription page', color: 'error' })
        }
      })
  }
}


</script>

<template>
  <UContainer>
    <UForm :validate-on="[]" :schema="schema" :state="invitationState" @submit="inviteUser"
           class="m-4 flex flex-row justify-end">
      <UFormField name="email">
        <UInput required placeholder="User email" v-model="invitationState.email" type="email" class="w-64"/>
      </UFormField>
      <UButton type="submit" class="h-8 ml-2">
        Send Invitation
      </UButton>
    </UForm>
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