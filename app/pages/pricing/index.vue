<script setup lang="ts">
import {navigateTo} from "#app";
import {businessId, individualId} from "~/constants/prices";
import {initializePaddle, type PricePreviewResponse} from '@paddle/paddle-js';

definePageMeta({
  layout: 'header',
});

const loading = ref(true);

const tiers = ref()
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
  },
  {
    title: 'Coming Soon',
    features: [
      {
        title: 'Open Api Sync',
        tiers: {
          free: 'TBD',
          individual: true,
          teams: true
        }
      },
      {
        title: 'Web Sockets',
        tiers: {
          free: 'TBD',
          individual: true,
          teams: true
        }
      },
      {
        title: 'GraphQL',
        tiers: {
          free: 'TBD',
          individual: true,
          teams: true
        }
      },
      {
        title: 'Functions',
        tiers: {
          free: 'TBD',
          individual: true,
          teams: true
        }
      },
      {
        title: 'Advanced Scripting',
        tiers: {
          free: 'TBD',
          individual: true,
          teams: true
        }
      }
    ]
  }
])


const faq = ref([
  {
    label: 'Why some features are under Coming Soon?',
    content: 'These features such as websockets and graphql are not yet implemented but are planned and will be in later version of postchi, very soon!!'
  },
  {
    label: 'What happens when my subscription ends?',
    content: 'Individual licenses can keep using the last version that was released during the time of their subscription, Team licenses are only active while the subscription has not ended'
  },
  {
    label: 'Lifetime Fallback',
    content: 'Individual Licenses can always be used for versions released during the time of subscription even after subscription ends'
  },
])

const paddle = await initializePaddle({
  environment: 'sandbox',
  token: 'test_5ab60d9d332161a26e0cfe66605',
});

paddle?.PricePreview({
  items: [
    {
      quantity: 1,
      priceId: individualId,
    },
    {
      quantity: 2,
      priceId: businessId,
    }
  ]
}).then((result: PricePreviewResponse) => {
  let items = result.data.details.lineItems;
  let individualTotal = items.find(value => value.price.id == individualId)?.formattedUnitTotals.total;
  let businessTotal = items.find(value => value.price.id == businessId)?.formattedUnitTotals.total;

  let currency = individualTotal?.charAt(0)

      tiers.value = [
    {
      id: 'free',
      title: 'Free',
      price: `${currency}0`,
      description: 'Try out postchi',
      button: {
        label: 'Download',
        variant: 'outline',
        onClick: () => {
          navigateTo(`/download`);
        }
      }
    },
    {
      id: 'individual',
      title: 'Individual',
      price: individualTotal,
      description: 'For individuals',
      billingCycle: '/year',
      button: {
        label: 'Buy now',
        onClick: () => {
          navigateTo(`/payment/billingInfo?type=pri_01kb3n17k8vzgy4vdafcxtanhx`);
        }
      }
    },
    {
      id: 'teams',
      title: 'Teams',
      price: businessTotal,
      description: 'For teams of any size',
      billingCycle: '/year/user',
      button: {
        label: 'Buy Now',
        onClick: () => {
          navigateTo(`/payment/billingInfo?type=pri_01kb3n774k95ee7njf08n0exr9`);
        }
      }
    }
  ];

  loading.value = false;
  console.log(result);
})
    .catch((error) => {
      console.error(error);
    });

</script>


<template>
  <UPage class="mt-6 flex flex-col w-10/12 place-self-center max-w-7xl" v-if="!loading">
    <UPricingTable :tiers="tiers" :sections="sections"/>

    <div class="mt-20 mb-20 ">
      <span class="text-6xl mb-4 block place-self-center">Frequently Asked Questions</span>

      <UAccordion :items="faq"/>
    </div>

  </UPage>
</template>