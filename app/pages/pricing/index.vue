<script setup lang="ts">
import {navigateTo} from "#app";

definePageMeta({
  layout: false,
});
import type {PricingPlan} from "~~/server/api/pricing";

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
        navigateTo(`/checkout/${value.id}`);
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
        <UPricingPlans class="w-3/4" >
          <UPricingPlan
              v-for="(plan, index) in plans"
              :key="index"
              v-bind="plan"
          />
        </UPricingPlans>
      </div>

      <!--      <div class="pricing-grid w-full flex flex-row gap-6 m-4 items-stretch justify-center">-->
      <!--        <div v-for="item in products" :key="item.id"-->
      <!--             class="w-full max-w-sm flex flex-col p-6  border border-neutral-200 rounded-lg shadow-xs ">-->
      <!--          <h5 class="mb-4 text-xl font-medium self-start px-5 py-2 rounded-lg bg-secondary  ">{{-->
      <!--              item.name-->
      <!--            }}</h5>-->
      <!--          <div class="flex items-baseline text-heading">-->
      <!--            <span class="text-5xl font-extrabold tracking-tight">{{ item.total }}</span>-->
      <!--          </div>-->
      <!--          <ul class="space-y-4 my-6 flex-grow">-->
      <!--            <li class="flex items-center" v-for="infoItem in item.info">-->
      <!--              <svg class="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"-->
      <!--                   width="24" height="24" fill="none" viewBox="0 0 24 24">-->
      <!--                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
      <!--                      d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>-->
      <!--              </svg>-->
      <!--              <span class="text-body">{{ infoItem }}</span>-->
      <!--            </li>-->
      <!--          </ul>-->
      <!--          <NuxtLink :to="{ name: 'checkout-id', params: { id: item.id } }">-->
      <!--            <button type="button"-->
      <!--                    class="w-full text-onbrand bg-brand hover:bg-brand-strong box-border rounded-md focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">-->
      <!--              Buy-->
      <!--            </button>-->
      <!--          </NuxtLink>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>