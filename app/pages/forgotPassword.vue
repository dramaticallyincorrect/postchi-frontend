<script setup lang="ts">

definePageMeta({ layout: 'header' });

const route = useRoute();
const email = ref<string>((route.query.email as string) ?? '');
const loading = ref(false);
const submitted = ref(false);

async function submit(e: Event) {
  e.preventDefault();
  loading.value = true;
  try {
    await $api('/forgotPassword', { params: { email: email.value } });
  } catch {
    // Swallow error — don't leak whether account exists
  } finally {
    loading.value = false;
    submitted.value = true;
  }
}
</script>

<template>
  <div class="max-w-sm mx-auto px-6 py-24">
    <div class="text-center mb-8">
      <img class="mx-auto h-10 w-auto mb-6" src="/postchi.svg" alt="Postchi"/>
      <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Reset your password</h2>
    </div>

    <div class="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-8">

      <div v-if="submitted" class="text-center space-y-4">
        <p class="text-slate-700 dark:text-slate-300 text-sm">
          If an account exists for <strong>{{ email }}</strong>, you'll receive a password reset email shortly.
        </p>
        <NuxtLink to="/login" class="block text-sm font-semibold text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300">
          Back to sign in
        </NuxtLink>
      </div>

      <form v-else class="space-y-6" @submit="submit">
        <div>
          <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Email address</label>
          <UInput v-model="email" type="email" id="email" autocomplete="email" required placeholder="you@example.com" size="lg" class="w-full"/>
        </div>

        <UButton type="submit" :loading="loading" block size="lg" color="primary" class="font-semibold">
          Send reset email
        </UButton>

        <div class="text-center">
          <NuxtLink to="/login" class="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
            Back to sign in
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>
