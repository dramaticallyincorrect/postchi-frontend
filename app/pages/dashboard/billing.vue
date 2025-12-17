<script setup lang="ts">

import type {Account} from "~~/server/api/account";
import type {PurchaseHistory} from "~~/server/api/PurchaseHistory";
import type {Subscription} from "~~/server/api/Subscription";
import {useApi} from "~/composable/useApi";
import {$api} from "~/utils/api";

const toast = useToast();

const {data: user} = useApi<Account>('/dashboard/account', {
  method: 'GET',
});

let {
  data: subscription,
  pending,
  error
} = useApi<Subscription>('/dashboard/subscription', {
  method: 'GET',
});

const purchaseHistory: PurchaseHistory[] = [
  {
    id: '1',
    amount: 20,
    currency: '$',
    date: new Date().toISOString()
  },
  {
    id: '1',
    amount: 20,
    currency: '$',
    date: new Date().toISOString()
  },
  {
    id: '1',
    amount: 20,
    currency: '$',
    date: new Date().toISOString()
  }
]


function cancelSubscription() {
  $api<Subscription>('/dashboard/subscription/cancel', {
    method: 'POST',
    onResponse: ({response, request, options}) => {
      if (response.status === 200) {
        subscription.value = response._data as Subscription
      } else {
        toast.add({
          title: 'There was an issue cancelling your subscription',
          description: 'Please try again later',
          color: 'error'
        })
      }
    }
  });
}

</script>


<template>
  <div class="flex flex-col w-full" v-if="subscription != null">
    <div class="m-20 flex flex-row w-10/12 justify-between">
      <div>
        <h1 class="text-5xl mb-1">{{ subscription.seats == 1 ? 'Individual Licence' : 'Organization Licence' }}</h1>
        <h2 class="text-xl text-muted font-light">Valid for all versions released before
          {{ new Date(subscription.end).toDateString() }}</h2>
        <h2 class="text-xl text-muted font-light" v-if="subscription.seats > 1">{{ subscription.seats }} Seats</h2>
      </div>
      <div class="flex-grow"></div>
      <UButton v-on:click="cancelSubscription" v-if="subscription.status == 'active'" class="h-[42px]" color="neutral"
               variant="outline">Cancel
        Subscription
      </UButton>
      <span v-if="subscription.status != 'active'" class="text-lg">Subscription Cancelled</span>
    </div>
    <USeparator/>
    <div class="mx-20">
      <h3 class="text-3xl mt-6 mb-10">Purchase History</h3>
      <table class="w-full">
        <tr class="flex flex-row text-muted mb-4">
          <th class="flex-1" scope="colgroup">ID</th>
          <th class="flex-2" scope="colgroup">Date</th>
          <th class="flex-2" scope="colgroup">Amount</th>
        </tr>
        <div class="border border-muted rounded-lg">
          <div v-for="(purchase, index) in purchaseHistory" class="">
            <tr class="flex flex-row text-default my-3">
              <th class="flex-1" scope="colgroup">{{ purchase.id }}</th>
              <th class="flex-2" scope="colgroup">
                <NuxtTime :datetime="purchase.date" month="long" year="numeric" day="numeric"/>
              </th>
              <th class="flex-2" scope="colgroup">{{ purchase.currency }}{{ purchase.amount }}</th>
            </tr>
            <USeparator v-if="index != purchaseHistory.length - 1"/>
          </div>
        </div>

      </table>
    </div>
  </div>

</template>