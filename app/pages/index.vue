<script setup lang="ts">

definePageMeta({
  layout: 'header',
});


</script>

<template>
  <UMain>
    <UPage>
      <div class="mt-6 flex flex-col w-10/12 place-self-center max-w-7xl">
        <div class="place-self-center my-6">
          <h1 class="text-4xl">The <span class="italic text-amber-300">IDE-Inspired</span>
            API
            Client</h1>
          <h2 class="text-xl text-muted mt-1 text-center">everything in plain text boosted by Intellisense</h2>
        </div>

        <div class="flex flex-row justify-between my-12">

          <UPageFeature
              title="Clear"
              description="See your entire request at a glance"
              icon="pixelarticons:visible"
          />

          <UPageFeature
              title="Git Ready"
              description="Everything is stored as plane text files as seen in Postchi"
              icon="ri:git-branch-line"
              class="max-w-[200px]"
          />

          <UPageFeature
              title="Intelligent"
              description="Postchi gives immediate errors and hints as you type"
              icon="material-symbols:network-intelligence"
          />

        </div>

        <img src="/postchi.png" class="place-self-center mt-6 rounded-md mb-16" alt="postchi-screenshot">

        <div class="flex flex-row justify-evenly my-16">
          <div class="flex flex-col">
            <span class="text-6xl mb-4 font-bold text-brand">Intelligent</span>
            <span class="text-toned text-3xl">Postchi provides immediate feedback for errors and auto complete</span>
          </div>
          <img
              src="https://placehold.co/500x400"
              alt="Illustration"
              class="rounded-lg mx-10"
          />
        </div>

        <div class="flex flex-row-reverse justify-evenly my-17">
          <div class="flex flex-col">
            <span class="text-6xl mb-4 font-bold text-brand">Intuitive Environments</span>
            <span
                class="text-toned text-3xl">Define all environments in a single file with easy syntax and Intellisense</span>
          </div>
          <img
              src="https://placehold.co/500x400"
              alt="Illustration"
              class="rounded-lg mx-10"
          />
        </div>

        <div class="flex flex-row justify-evenly my-16">
          <div class="flex flex-col">
            <span class="text-6xl mb-4 font-bold text-brand">Folder Configuration</span>
            <span class="text-toned text-3xl">Apply configuration to all or subset of collections like setting a base path</span>
          </div>
          <img
              src="https://placehold.co/500x400"
              alt="Illustration"
              class="rounded-lg mx-10"
          />
        </div>

        <div class="flex flex-row-reverse justify-evenly my-17">
          <div class="flex flex-col">
            <span class="text-6xl mb-4 font-bold text-brand">Scripts</span>
            <span
                class="text-toned text-3xl">Use folder or request before and after scripts to change a request or perform actions</span>
          </div>
          <img
              src="https://placehold.co/500x400"
              alt="Illustration"
              class="rounded-lg mx-10"
          />
        </div>

        <span class="place-self-center text-5xl my-4 py-4">
          With many more to come!
        </span>

        <UButton class="cursor-pointer place-self-center text-lg mb-36" color="primary" icon="i-lucide-download"
                 to="/pricing">
          Download
          Postchi
        </UButton>

      </div>
    </UPage>
  </UMain>
</template>