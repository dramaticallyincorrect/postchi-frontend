<script setup lang="ts">
import {navigateTo} from "#app";
import { usePaddlePrices } from "~/composables/usePaddlePrices";
import { businessId } from "~/constants/prices";

definePageMeta({
  layout: 'header',
});

const { prices, fetchPrices } = usePaddlePrices()

onMounted(() => { fetchPrices() })

const loading = computed(() => prices.value === null)

const allFeatures = [
  'OpenApi Sync & Integration',
  'Intellisense',
  'Scripts',
  'Actions',
  'Theme & Customization',
]

const tiers = computed(() => {
  const p = prices.value
  if (!p) return undefined

  const annualAmount = parseFloat(p.businessTotal.replace(/[^0-9.]/g, '')) || 0
  const monthlyAmount = (annualAmount / 12).toFixed(2)
  const monthlyPrice = `${p.currency}${monthlyAmount}`

  return [
    {
      id: 'free',
      title: 'Free',
      price: `${p.currency}0`,
      description: 'Every feature, for personal use. \n',
      features: allFeatures,
      button: {
        label: 'Download Now',
        variant: 'outline' as const,
        onClick: () => { navigateTo('/download') },
      }
    },
    {
      id: 'work',
      title: 'Work',
      price: monthlyPrice,
      billingNote: `billed annually`,
      description: 'supports the project development.',
      highlight: true,
      features: [
        'Helps postchi stay viable',
      ],
      button: {
        label: 'Get started',
        onClick: () => { navigateTo(`/payment/billingInfo?type=${businessId}`) }
      }
    },
  ]
})


</script>


<template>
  <UPage class="mt-10 flex flex-col w-10/12 place-self-center max-w-4xl" v-if="!loading">

    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold mb-2">Postchi is free</h1>
      <p class="text-gray-500 dark:text-gray-400">All features are available at no cost. Purchasing a license supports the project's development.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-full">
      <div
        v-for="tier in tiers"
        :key="tier.id"
        :class="[
          'rounded-2xl border p-8 flex flex-col gap-6',
          tier.highlight
            ? 'border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-950/40'
            : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'
        ]"
      >
        <!-- Plan name + price -->
        <div>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{{ tier.title }}</p>
          <div class="flex items-end gap-1.5">
            <span class="text-5xl font-bold tracking-tight">{{ tier.price }}</span>
            <span v-if="tier.billingNote" class="text-base text-gray-500 dark:text-gray-400 mb-1.5">/month</span>
          </div>
          <p v-if="tier.billingNote" class="text-sm text-gray-400 dark:text-gray-500 mt-1">{{ tier.billingNote }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">{{ tier.description }}</p>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-200 dark:border-gray-700"/>

        <!-- Features -->
        <ul class="flex flex-col gap-3 flex-1">
          <li
            v-for="feature in tier.features"
            :key="feature"
            class="flex items-center gap-3 text-sm"
          >
            <UIcon name="i-heroicons-check" class="text-primary-500 shrink-0 w-4 h-4 font-bold"/>
            <span>{{ feature }}</span>
          </li>
        </ul>

        <!-- CTA -->
        <UButton
          :label="tier.button.label"
          :variant="tier.button.variant ?? 'solid'"
          :color="tier.highlight ? 'primary' : 'neutral'"
          size="lg"
          block
          @click="tier.button.onClick"
        />
      </div>
    </div>

    <div class="mt-10 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 p-8 text-center space-y-2">
      <p class="text-sm text-gray-500 dark:text-gray-400">If you don't like subscriptions, pay once then cancel.</p>
    </div>
  </UPage>
</template>
