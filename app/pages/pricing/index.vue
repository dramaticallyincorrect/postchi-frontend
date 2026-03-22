<script setup lang="ts">
import {navigateTo} from "#app";
import { usePaddlePrices } from "~/composables/usePaddlePrices";
import { businessId, individualId } from "~/constants/prices";

definePageMeta({
  layout: 'header',
});

const { prices, isFetching, fetchPrices } = usePaddlePrices()

// Fetch prices if not already cached (e.g. user landed directly on this page)
onMounted(() => { fetchPrices() })

const loading = computed(() => prices.value === null)

const tiers = computed(() => {
  const p = prices.value
  if (!p) return undefined
  return [
    {
      id: 'free',
      title: 'Free',
      price: `${p.currency}0`,
      description: 'Try out postchi',
      button: {
        label: 'Download',
        variant: 'outline' as const,
        onClick: () => { navigateTo('/download') }
      }
    },
    {
      id: 'individual',
      title: 'Individual',
      price: p.individualTotal,
      description: 'For individuals',
      billingCycle: '/year',
      button: {
        label: 'Buy now',
        onClick: () => { navigateTo(`/payment/billingInfo?type=${individualId}`) }
      }
    },
    {
      id: 'teams',
      title: 'Teams',
      price: p.businessTotal,
      description: 'For teams of any size',
      billingCycle: '/year/user',
      button: {
        label: 'Buy Now',
        onClick: () => { navigateTo(`/payment/billingInfo?type=${businessId}`) }
      }
    }
  ]
})

const sections = ref([
  {
    title: 'Features',
    features: [
      {
        title: 'Lifetime Fallback',
        tiers: {
          free: 'N/A',
          individual: true,
          teams: false
        }
      },
      {
        title: 'Transferable Licences',
        tiers: {
          free: false,
          individual: false,
          teams: true
        }
      },
      {
        title: 'Active Devices',
        tiers: {
          free: 'N/A',
          individual: 3,
          teams: 2
        }
      },
      {
        title: 'Http',
        tiers: {
          free: true,
          individual: true,
          teams: true
        }
      },
      {
        title: 'Environments',
        tiers: {
          free: true,
          individual: true,
          teams: true
        }
      },
      {
        title: 'Intellisense',
        tiers: {
          free: true,
          individual: true,
          teams: true
        }
      },
      {
        title: 'Theme and Customization',
        tiers: {
          free: true,
          individual: true,
          teams: true
        }
      },
      {
        title: 'Request Scripts',
        tiers: {
          free: true,
          individual: true,
          teams: true
        }
      },
      {
        title: 'Folder Scripts',
        tiers: {
          free: false,
          individual: true,
          teams: true
        }
      },
      {
        title: 'Actions',
        tiers: {
          free: false,
          individual: true,
          teams: true
        }
      },
      {
        title: 'Folder Configuration',
        tiers: {
          free: false,
          individual: true,
          teams: true
        }
      },
      {
        title: 'Email Support',
        tiers: {
          free: false,
          individual: true,
          teams: true
        }
      }
    ]
  }
])


const faq = ref([
  {
    label: 'What happens when my subscription ends?',
    content: 'Individual licenses can keep using the last version that was released during the time of their subscription, Team licenses are only active while the subscription has not ended, if license expires, the app will switch to free mode'
  },
  {
    label: 'Lifetime Fallback',
    content: 'Individual Licenses can always be used for versions released during the time of subscription even after subscription ends'
  },
])


</script>


<template>
  <UPage class="mt-6 flex flex-col w-10/12 place-self-center max-w-7xl" v-if="!loading">
    <UPricingTable :tiers="tiers ?? []" :sections="sections"/>

    <div class="mt-20 mb-20 ">
      <span class="text-6xl mb-4 block place-self-center">Frequently Asked Questions</span>

      <UAccordion :items="faq"/>
    </div>

  </UPage>
</template>