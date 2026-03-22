<script setup lang="ts">

definePageMeta({
  layout: 'header',
});

let email = ref<string>('');
let password = ref<string>('');
let loading = ref<boolean>(false);
let error = ref<string>();

async function login(e: Event) {
  e.preventDefault();
  loading.value = true;
  error.value = '';

  $api<{ token: string }>('/login', {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value
    }
  }).then(data => {
    localStorage.setItem('token', data.token);
    navigateTo('/dashboard/licence')
  }).catch(() => {
    error.value = 'incorrect username or password';
  }).finally(() => {
    loading.value = false;
  });
}
</script>


<template>
  <div class="max-w-sm mx-auto px-6 py-24">
    <div class="text-center mb-8">
      <img class="mx-auto h-10 w-auto mb-6" src="/postchi.svg" alt="Postchi"/>
      <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Sign in to your account</h2>
    </div>

    <div class="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-8">
      <form class="space-y-6" @submit="login">
        <div>
          <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Email address</label>
          <UInput v-model="email" type="email" id="email" autocomplete="email" required placeholder="you@example.com" size="lg" class="w-full"/>
        </div>

        <div>
          <div class="flex items-center justify-between mb-2">
            <label for="password" class="block text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
            <a href="#" class="text-sm font-semibold text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300">Forgot password?</a>
          </div>
          <UInput v-model="password" type="password" id="password" autocomplete="current-password" required size="lg" class="w-full"/>
        </div>

        <UButton type="submit" :loading="loading" block size="lg" color="primary" class="font-semibold">
          Sign in
        </UButton>

        <span v-if="error" class="text-red-600 dark:text-red-400 text-sm block text-center">{{ error }}</span>
      </form>
    </div>
  </div>
</template>