<script setup lang="ts">
import {useToast} from "#imports";

const toast = useToast();
let password = ref<string>('');
let loading = ref<boolean>(false);
let error = ref<string>();

const {destination} = defineProps({
  destination: String
});

async function setPassword(e: Event) {
  e.preventDefault();
  loading.value = true;
  error.value = '';
  $fetch('http://localhost:8080/dashboard/setPassword', {
    method: 'POST',
    body: {
      password: password.value
    }
  }).then(data => {
    toast.add({
      title: 'Password set!',
      color: 'success'
    });
    if (destination != '') {
      navigateTo(destination);
    }
  }).catch(err => {
    error.value = 'Request failed, please try again';
  }).finally(() => {
    loading.value = false;
  });
}

</script>

<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="flex flex-col space-y-6" action="#" method="POST">
      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-100">Password</label>
        </div>
        <div class="mt-2">
          <input v-model="password" type="password" name="password" id="password" autocomplete="new-password"
                 required
                 class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"/>
        </div>
      </div>

      <UButton v-on:click="setPassword" label="Change Password" class="place-self-end"/>
      <span class="text-error text-lg">{{ error }}</span>
    </form>
  </div>
</template>

<style scoped>

</style>