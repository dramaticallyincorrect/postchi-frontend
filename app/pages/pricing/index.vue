<script setup lang="ts">
import {navigateTo} from "#app";
import type {PricingPlan} from "~~/server/api/pricing";

definePageMeta({
  layout: false,
});

const {data: products} = await useFetch<PricingPlan[]>("/api/pricing");

const plans = products.value?.map((value) => {
  return {
    title: value.name,
    description: 'Ideal for larger teams and organizations.',
    price: `${value.total}`,
    features: value.info,
    button: {
      label: 'Buy Now',
      onClick: () => {
        navigateTo(`/payment/billingInfo?type=${value.id}`);
      }
    }
  };
});

</script>


<template>
  <div class="h-dvh">
    <div class="pricing-page-container">
      <h1 class="text-5xl">Choose your plan</h1>

      <div class="flex flex-row content-center justify-center w-full">
        <UPricingPlans class="w-3/4">
          <UPricingPlan
              v-for="(plan, index) in plans"
              :key="index"
              v-bind="plan"
          />
        </UPricingPlans>
      </div>
    </div>
  </div>
</template>