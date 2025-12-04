<script lang="ts" setup>
const route = useRoute()
import {type CheckoutEventsTotals, initializePaddle} from '@paddle/paddle-js';

let pricingInfo = ref<{
  currency: string,
  pricing: CheckoutEventsTotals,
}>({
  currency: '$',
  pricing: {
    subtotal: 17.01,
    tax: 2.99,
    total: 20.01,
    discount: 0,
  }
});

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
  paddle?.Checkout.open({
    items: [
      {
        priceId: route.params.id as string,
        quantity: 1
      }
    ]
  });
})


</script>

<template class="flex flex-row">
  <div class="w-[450px]">
    <CheckoutInfo name="Billing frequency" value="Yearly"></CheckoutInfo>
    <CheckoutInfo name="Plan" value="Individual"></CheckoutInfo>
    <CheckoutInfo :prefix="pricingInfo.currency" name="Subtotal" :value="pricingInfo.pricing.subtotal.toString()"></CheckoutInfo>
    <CheckoutInfo :prefix="pricingInfo.currency" name="Vat" :value="pricingInfo.pricing.tax.toString()"></CheckoutInfo>
    <CheckoutInfo :prefix="pricingInfo.currency" name="Total" :value="pricingInfo?.pricing.total.toString()"></CheckoutInfo>
  </div>
  <div class="checkout-container"></div>
</template>