<script setup lang="ts">
import {type Account, AccountType} from "~~/server/api/account";

import LicenceDashboard from "~/components/licenceDashboard.vue";
import IndividualLicence from "~/components/IndividualLicence.vue";
import {useApi} from "~/composable/useApi";


const {data: user} = useApi<Account>('/dashboard/account', {
  method: 'GET',
});

console.log(user?.value?.type);


</script>

<template>
  <div class="min-h-screen flex flex-row  w-full">
    <div class="grow">
      <LicenceDashboard v-if="user?.type == AccountType.Organisation"/>
      <div class="flex flex-row h-full">
        <IndividualLicence v-if="user?.type == AccountType.Individual" class="content-center grow"/>
      </div>
    </div>
  </div>
</template>