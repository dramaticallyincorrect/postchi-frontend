<script setup lang="ts">
import {navigateTo} from "#app";
import {individualId, businessId} from "~/constants/prices";
import * as v from 'valibot'
import type {FormSubmitEvent} from '@nuxt/ui'

definePageMeta({
  layout: 'header',
});

const route = useRoute();

let id = <string>route.query.type

useHead({
  bodyAttrs: {
    class: 'h-full',
  },
  htmlAttrs: {
    class: 'h-full',
  }
});


const businessSchema = v.object({
  name: v.pipe(v.string(), v.nonEmpty()),
  email: v.pipe(v.string(), v.email('Invalid email')),
  billingEmail: v.pipe(v.string(), v.email('Invalid email')),
  numberOfSeats: v.pipe(v.number(), v.minValue(2, 'Must be 2 or more'))
})

const individualSchema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
})
type Individual = v.InferOutput<typeof individualSchema>
type Organization = v.InferOutput<typeof businessSchema>


const state = reactive({
  name: '',
  email: '',
  billingEmail: '',
  numberOfSeats: 2
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Individual | Organization>) {
  if (id === individualId) {
    navigateTo(`/payment/pri_01kb3n17k8vzgy4vdafcxtanhx?email=${state.email}`)
  } else {
    navigateTo(`/payment/pri_01kb3n774k95ee7njf08n0exr9?email=${state.email}&billing=${state.billingEmail}&name=${state.name}&seats=${state.numberOfSeats}`)
  }
}

</script>


<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <UForm :schema="(id == individualId ? individualSchema : businessSchema)" :state="state" class="space-y-4"
           @submit="onSubmit">

      <UFormField label="Organization name" name="name" v-if="id == businessId">
        <UInput v-model="state.name" type="text" class="w-64"/>
      </UFormField>

      <UFormField label="Email" name="email">
        <UInput v-model="state.email" type="email" class="w-64"/>
      </UFormField>

      <UFormField label="Billing Email" name="billingEmail" v-if="id == businessId">
        <UInput v-model="state.billingEmail" type="email" class="w-64"/>
      </UFormField>

      <UFormField label="Number of seats" name="numberOfSeats" v-if="id == businessId">
        <UInput v-model="state.numberOfSeats" type="number" class="w-64"/>
      </UFormField>

      <UButton type="submit" variant="solid" >
        Continue to Payment
      </UButton>
    </UForm>
  </div>
</template>