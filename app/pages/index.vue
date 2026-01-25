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

        <div class="max-w-7xl mx-auto px-6 py-4">
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

          <div class="space-y-20 mt-16">

            <section class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div class="space-y-6">
                <span class="text-amber-500 font-mono text-sm tracking-widest uppercase font-bold">Intellisense</span>
                <h3 class="text-4xl md:text-5xl font-bold tracking-tight">Intelligent Feedback</h3>
                <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  Postchi provides <span
                    class="text-slate-900 dark:text-white font-semibold">context-aware suggestions</span> and errors to
                  help you along the way.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center gap-3 text-slate-500">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500"/>
                    Auto-complete for standard headers
                  </li>
                  <li class="flex items-center gap-3 text-slate-500">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500"/>
                    Real-time environment variable validation
                  </li>
                </ul>
              </div>
              <div class="relative">
                <div
                    class="absolute -inset-4 bg-linear-to-tr from-amber-500/10 to-transparent blur-2xl rounded-[2rem]"></div>
                <div class="lg:order-1 relative">
                  <div
                      class="absolute -inset-4 bg-linear-to-tl from-blue-500/10 to-transparent blur-2xl rounded-[2rem]"></div>
                  <div
                      class="relative rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl bg-black">
                    <video controls class="w-full">
                      <source src="/intellisense_1080.mp4" type="video/mp4">
                    </video>
                  </div>
                </div>
              </div>
            </section>

            <section class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div class="lg:order-2 space-y-6">
                <span class="text-blue-500 font-mono text-sm tracking-widest uppercase font-bold">Simple</span>
                <h3 class="text-4xl md:text-5xl font-bold tracking-tight">Intuitive Environments</h3>
                <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  Forget deep-nested menus. Define your dev, staging, and prod environments in a <span
                    class="text-slate-900 dark:text-white font-semibold">single env file</span>.
                </p>
              </div>
              <div class="lg:order-1 relative">
                <div
                    class="absolute -inset-4 bg-gradient-to-tl from-blue-500/10 to-transparent blur-2xl rounded-[2rem]"></div>
                <div
                    class="relative rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl bg-black">
                  <video controls class="w-full">
                    <source src="/environments.mp4" type="video/mp4">
                  </video>
                </div>
              </div>
            </section>

          </div>

          <section class="relative z-10 pt-32 pb-24 text-center overflow-hidden">
            <div
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_100%,_rgba(245,158,11,0.08)_0%,_transparent_50%)]"></div>

            <div class="relative z-10">
              <h2 class="text-4xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                More Coming Soon<br/>
              </h2>

              <div class="flex flex-col items-center gap-6">
                <UButton size="xl" color="primary" variant="outline"
                         class="rounded-full px-8 font-bold shadow-xl shadow-amber-500/10" to="pricing">
                  <span class="text-green-600">GET</span> /postchi
                </UButton>

                <p class="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  Available for macOS, Windows, and Linux
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </UPage>
  </UMain>
</template>