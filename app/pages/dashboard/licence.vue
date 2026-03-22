<script setup lang="ts">
import {type Account, AccountType} from "~~/server/api/account";

import LicenceDashboard from "~/components/licenceDashboard.vue";
import IndividualLicence from "~/components/IndividualLicence.vue";

const { data: user } = useFetch<Account>('/dashboard/account', { $fetch: $api });
</script>

<template>
  <div class="flex flex-col flex-1 w-full">
    <LicenceDashboard v-if="user?.type == AccountType.Organisation" />
    <IndividualLicence v-if="user?.type == AccountType.Individual" />
  </div>
</template>
