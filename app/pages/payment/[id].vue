<script lang="ts" setup>
definePageMeta({
  layout: false,
});

import {navigateTo} from "#app";
import {type CheckoutCustomer, type CheckoutEventsTotals, initializePaddle} from '@paddle/paddle-js';

import {useHead} from "#imports";
import {businessId, individualId} from "~/constants/prices";

const route = useRoute();

const id = route.params.id
const email = <string>route.query.email;


let pricingInfo = ref<{
  currency: string,
  pricing: CheckoutEventsTotals,
} | null>(null);

const paddle = await initializePaddle({
  environment: 'sandbox', token: 'test_5ab60d9d332161a26e0cfe66605', checkout: {
    settings: {
      displayMode: "inline",
      variant: "one-page",
      frameTarget: "checkout-container",
      frameInitialHeight: 450,
      frameStyle: "width: 100%; min-width: 312px; background-color: transparent; border: none;"
    }
  },
  eventCallback: event => {
    console.log(event)
    if (!event.name)
      return;
    const item = event.data?.items[0];
    pricingInfo.value = {
      currency: event.data!.currency_code,
      pricing: item!.totals
    }
  }
});

onMounted(() => {
  if (!email) {
    navigateTo('/pricing')
    return;
  } else {
    let customer: CheckoutCustomer;
    let seats = Number.parseInt(<string>route.query['seats']);
    const orgName = <string>route.query.name;
    if (id == individualId) {
      customer = {
        email: email,
      }
    } else {
      const billingEmail = <string>route.query.billing;


      console.log(billingEmail);
      if (!billingEmail || !seats || !orgName) {
        navigateTo('/pricing')
        return;
      }

      customer = {
        email: billingEmail,
      }
    }

    paddle?.Checkout.open({
      items: [
        {
          priceId: route.params.id as string,
          quantity: id == individualId ? 1 : seats
        }
      ],
      settings: {
        successUrl: "http://localhost:3000/purchaseSuccess"
      },
      customer: customer,
      customData: {
        email: email,
        name: orgName
      }
    });
  }
})

useHead(
    {
      bodyAttrs: {
        class: 'h-full bg-checkout'
      },
      htmlAttrs: {
        class: 'h-full'
      }
    }
)

</script>

<template>
  <div class="flex flex-col h-full md:flex-row">
    <div class="flex-1 bg-neutral justify-center mt-20 mb-4  h-full " v-if="pricingInfo != null">
      <div class="justify-self-center ml-20">
        <span class="text-muted">Subscribe to Postchi Pro</span><br>
        <span class="text-4xl">{{ pricingInfo.currency }} {{
            pricingInfo.pricing.total
          }}</span><span> per year</span><br>
        <span class="text-muted mb-4 block" v-if="id == businessId">{{ route.query.seats }} seats</span>
        <span class="text-muted">Access to all features with one year of updates<br>
own all the versions released during your subscription</span>
      </div>
    </div>
    <div class="flex-1  h-dvh" v-if="pricingInfo == null"></div>
    <div class="checkout-container flex-1 bg-white h-dvh"></div>
  </div>
</template>