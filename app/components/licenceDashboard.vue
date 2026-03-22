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
        v.string(),
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
  <div class="flex flex-col gap-6 px-8 py-8 w-full">
    <div class="flex items-start justify-between gap-4">
      <div>
        <h1 class="text-2xl font-semibold">Licences</h1>
        <p class="text-sm text-muted mt-0.5">Manage seats and send invitations to your team.</p>
      </div>
      <UForm :validate-on="[]" :schema="schema" :state="invitationState" @submit="inviteUser" class="flex flex-row items-start gap-2">
        <UFormField name="email">
          <UInput required placeholder="User email" v-model="invitationState.email" type="email" class="w-64"/>
        </UFormField>
        <UButton type="submit" color="secondary">Send Invitation</UButton>
      </UForm>
    </div>

    <div v-if="pending" class="flex items-center justify-center h-40">
      <UIcon name="i-lucide-loader-circle" class="size-6 animate-spin text-muted" />
    </div>

    <div v-else class="border border-default rounded-lg overflow-hidden">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-default bg-elevated">
            <th class="text-left px-4 py-3 text-muted font-medium w-[28%]">Email</th>
            <th class="text-left px-4 py-3 text-muted font-medium w-[32%]">Licence Key</th>
            <th class="text-left px-4 py-3 text-muted font-medium w-[15%]">Created</th>
            <th class="text-left px-4 py-3 text-muted font-medium w-[15%]">Status</th>
            <th class="text-left px-4 py-3 text-muted font-medium w-[10%]">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="licence in licences"
            :key="licence.key"
            class="border-b border-default last:border-b-0 hover:bg-elevated"
          >
            <td class="px-4 py-3">{{ licence.email }}</td>
            <td class="px-4 py-3 font-mono text-xs uppercase tracking-widest">{{ licence.key }}</td>
            <td class="px-4 py-3 text-muted">
              <NuxtTime :datetime="licence.creationDate" month="short" day="numeric" year="numeric" />
            </td>
            <td class="px-4 py-3">
              <UBadge :color="licence.activated ? 'success' : 'warning'" variant="subtle" size="sm">
                {{ licence.activated ? 'Activated' : 'Pending' }}
              </UBadge>
            </td>
            <td class="px-4 py-3">
              <button
                v-on:click="deleteLicence(licence, $event)"
                class="text-muted hover:text-error transition-colors"
                title="Delete licence"
              >
                <UIcon name="i-lucide-trash-2" class="size-4" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="!licences || licences.length === 0" class="px-4 py-8 text-center text-muted text-sm">
        No licences yet. Send an invitation to add team members.
      </div>
    </div>
  </div>
</template>
