<script setup lang="ts">
import {navigateTo} from "#app";
import {businessId} from "~/constants/prices";
import { usePaddlePrices } from "~/composables/usePaddlePrices";
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
  numberOfSeats: v.pipe(v.number(), v.minValue(1, 'Must be at least 1'))
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
  numberOfSeats: 1
})

const { prices, fetchPrices } = usePaddlePrices()
onMounted(() => { fetchPrices() })

const perSeatPrice = computed(() => {
  const raw = prices.value?.businessTotal ?? ''
  return parseFloat(raw.replace(/[^0-9.]/g, '')) || 0
})

const currency = computed(() => prices.value?.currency ?? '$')

const totalAmount = computed(() => `${currency.value}${(perSeatPrice.value * state.numberOfSeats).toFixed(2)}`)

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Individual | Organization>) {
  event.preventDefault()
  navigateTo(`/payment/${businessId}?email=${state.email}&billing=${state.billingEmail}&name=${state.name}&seats=${state.numberOfSeats}`)
}

</script>


<template>
  <div
      class="mt-10 w-full flex flex-col items-center">
    <h1 class="text-5xl font-bold">Buy Postchi</h1>
    <h2 class="text-1xl mt-2">Streamline your apis with unlocked features</h2>
    <UCard variant="outline" class="mt-8">
      <UForm :schema="(businessSchema)" :state="state" class="space-y-4 p-2"
             @submit="onSubmit">

        <UFormField label="Organization name" name="name" v-if="id == businessId">
          <UInput v-model="state.name" type="text" class="w-80"/>
        </UFormField>

        <UFormField label="Email" name="email">
          <UInput v-model="state.email" type="email" class="w-80"/>
        </UFormField>

        <UFormField label="Billing Email" name="billingEmail" v-if="id == businessId">
          <UInput v-model="state.billingEmail" type="email" class="w-80"/>
        </UFormField>

        <UFormField label="Number of seats" name="numberOfSeats" v-if="id == businessId">
          <UInput v-model="state.numberOfSeats" type="number" class="w-80"/>
        </UFormField>

        <div class="flex flex-row justify-between" v-if="id == businessId">
          <span>Total Amount</span>
          <span>{{ totalAmount }}</span>
        </div>

        <UButton type="submit" variant="solid">
          Continue to Payment
        </UButton>
      </UForm>
    </UCard>
  </div>
</template>