<script setup lang="ts">

definePageMeta({
  layout: 'header',
});


</script>

<template>
  <UMain>
    <UPage>
      <div class="relative transition-colors duration-500 overflow-hidden">

        <div
            class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_0%,_rgba(245,158,11,0.08)_0%,_transparent_50%)]"></div>

        <section class="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">

          <h1 class="text-5xl md:text-8xl font-black tracking-tight mb-6 bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            The IDE-Inspired<br/>API Client.
          </h1>

          <p class="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Everything in plain text, boosted by
            <span class="text-amber-600 dark:text-amber-500 font-semibold italic">Intellisense.</span>
          </p>

          <UButton size="xl" color="primary" variant="outline"
                   class="rounded-full px-8 font-bold shadow-xl shadow-amber-500/10 mb-24" to="pricing">
            <span class="text-green-600">GET</span> /postchi
          </UButton>

          <div class="relative group max-w-6xl mx-auto">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div
                class="relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1">
              <video autoplay controls muted loop class="rounded-lg w-full shadow-2xl">
                <source src="/postchi_demo_1080.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </section>

        <div class="max-w-7xl mx-auto px-6 py-12 space-y-32 text-slate-900 dark:text-slate-50">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UPageFeature
                title="Clear"
                description="See your entire request at a glance in a format you already understand."
                icon="i-pixelarticons-visible"
                class="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors p-6 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
            />
            <UPageFeature
                title="Git Ready"
                description="Stored as plain text files. Version control your API collections effortlessly."
                icon="i-ri-git-branch-line"
                class="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors p-6 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
            />
            <UPageFeature
                title="Intelligent"
                description="Postchi gives immediate errors and hints as you type, just like your IDE."
                icon="i-material-symbols-network-intelligence"
                class="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors p-6 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
            />
          </div>

          <section class="flex flex-col md:flex-row items-center gap-16">
            <div class="flex-1 space-y-4">
              <h3 class="text-4xl font-bold">Intelligent Feedback</h3>
              <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Postchi provides immediate feedback for errors and intelligent auto-complete for headers, variables, and
                methods.
              </p>
            </div>
            <div
                class="flex-1 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg bg-white dark:bg-black">
              <video controls class="w-full block">
                <source src="/intellisense_1080.mp4" type="video/mp4">
              </video>
            </div>
          </section>

          <section class="flex flex-col md:flex-row-reverse items-center gap-16">
            <div class="flex-1 space-y-4">
              <h3 class="text-4xl font-bold">Intuitive Environments</h3>
              <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Define all environments in a single file with simple syntax.
              </p>
            </div>
            <div
                class="flex-1 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg bg-white dark:bg-black">
              <video controls class="w-full block">
                <source src="/environments.mp4" type="video/mp4">
              </video>
            </div>
          </section>

          <footer
              class="flex flex-col items-center py-20 bg-slate-50 dark:bg-amber-400/5 rounded-3xl border border-slate-200 dark:border-amber-400/10 text-center space-y-8">
            <div class="space-y-2">
              <p class="">Download Postchi today and experience the power of a text-first API client.</p>
            </div>
            <div class="flex flex-col items-center gap-4">
              <UButton size="xl" color="primary" variant="outline"
                       class="rounded-full px-8 font-bold shadow-xl shadow-amber-500/10 mb-24" to="pricing">
                <span class="text-green-600">GET</span> /postchi
              </UButton>

            </div>
          </footer>
        </div>
      </div>
    </UPage>
  </UMain>
</template>