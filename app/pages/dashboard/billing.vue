<script setup lang="ts">

import type {Account} from "~~/server/api/account";
import type {PurchaseHistory} from "~~/server/api/PurchaseHistory";
import type {Subscription} from "~~/server/api/Subscription";

const toast = useToast();

const { data: user } = useFetch<Account>('/dashboard/account', { $fetch: $api });

const {
  data: subscription,
  pending,
  error
} = useFetch<Subscription>('/dashboard/subscription', { $fetch: $api });

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
  $api<Subscription>('/dashboard/subscription/cancel', { method: 'POST' })
    .then(data => { subscription.value = data })
    .catch(() => {
      toast.add({
        title: 'There was an issue cancelling your subscription',
        description: 'Please try again later',
        color: 'error'
      })
    })
}

</script>


<template>
  <div class="flex flex-col w-full px-8 py-8">
    <div v-if="pending" class="flex items-center justify-center h-64">
      <UIcon name="i-lucide-loader-circle" class="size-8 animate-spin text-muted" />
    </div>

    <div v-else-if="subscription" class="flex flex-col gap-8">
      <div class="flex flex-row items-start justify-between gap-4">
        <div>
          <div class="flex items-center gap-3 mb-1">
            <h1 class="text-3xl font-semibold">
              {{ subscription.seats === 1 ? 'Individual Licence' : 'Organization Licence' }}
            </h1>
            <UBadge
              :color="subscription.status === 'active' ? 'success' : 'neutral'"
              variant="subtle"
            >
              {{ subscription.status === 'active' ? 'Active' : 'Cancelled' }}
            </UBadge>
          </div>
          <p class="text-base text-muted" v-if="subscription.seats == 1">
            Valid for all versions released before {{ new Date(subscription.end).toDateString() }}
          </p>
          <p v-if="subscription.seats > 1" class="text-base text-muted">
            {{ subscription.seats }} Seats
          </p>
        </div>
        <UButton
          v-if="subscription.status === 'active'"
          v-on:click="cancelSubscription"
          color="neutral"
          variant="outline"
        >
          Cancel Subscription
        </UButton>
      </div>

      <USeparator />

      <div class="hidden">
        <h2 class="hiddentext-xl font-semibold mb-4">Purchase History</h2>
        <div class="border border-default rounded-lg overflow-hidden">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-default bg-elevated">
                <th class="text-left px-4 py-3 text-muted font-medium">ID</th>
                <th class="text-left px-4 py-3 text-muted font-medium">Date</th>
                <th class="text-left px-4 py-3 text-muted font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(purchase, index) in purchaseHistory"
                :key="purchase.id + index"
                class="border-b border-[var(--ui-border)] last:border-b-0"
              >
                <td class="px-4 py-3 font-mono text-xs text-muted">{{ purchase.id }}</td>
                <td class="px-4 py-3">
                  <NuxtTime :datetime="purchase.date" month="long" year="numeric" day="numeric" />
                </td>
                <td class="px-4 py-3 font-medium">{{ purchase.currency }}{{ purchase.amount }}</td>
              </tr>
            </tbody>
          </table>
          <div v-if="purchaseHistory.length === 0" class="px-4 py-8 text-center text-muted text-sm">
            No purchase history yet.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
