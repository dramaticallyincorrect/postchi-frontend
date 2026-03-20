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

        <!-- Constellation stars -->
        <svg class="absolute top-0 left-0 w-full h-[480px] pointer-events-none select-none" viewBox="0 0 1440 480" preserveAspectRatio="xMidYTop slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g class="opacity-25 dark:opacity-40">
            <!-- Constellation lines -->
            <g stroke="currentColor" stroke-width="0.6" class="text-slate-500 dark:text-slate-500">
              <line x1="75" y1="68" x2="168" y2="138"/>
              <line x1="168" y1="138" x2="252" y2="58"/>
              <line x1="168" y1="138" x2="318" y2="182"/>
              <line x1="252" y1="58" x2="398" y2="72"/>
              <line x1="318" y1="182" x2="398" y2="72"/>
              <line x1="318" y1="182" x2="468" y2="198"/>
              <line x1="398" y1="72" x2="468" y2="198"/>
              <line x1="468" y1="198" x2="548" y2="88"/>
              <line x1="468" y1="198" x2="542" y2="315"/>
              <line x1="548" y1="88" x2="648" y2="78"/>
              <line x1="542" y1="315" x2="648" y2="78"/>
              <line x1="648" y1="78" x2="718" y2="208"/>
              <line x1="718" y1="208" x2="805" y2="332"/>
              <line x1="718" y1="208" x2="858" y2="78"/>
              <line x1="858" y1="78" x2="935" y2="198"/>
              <line x1="935" y1="198" x2="805" y2="332"/>
              <line x1="935" y1="198" x2="998" y2="342"/>
              <line x1="858" y1="78" x2="1062" y2="85"/>
              <line x1="1062" y1="85" x2="1138" y2="228"/>
              <line x1="1062" y1="85" x2="1198" y2="62"/>
              <line x1="1138" y1="228" x2="1278" y2="178"/>
              <line x1="1198" y1="62" x2="1278" y2="178"/>
              <line x1="1278" y1="178" x2="1362" y2="288"/>
              <line x1="1278" y1="178" x2="1418" y2="82"/>
              <!-- bottom strip -->
              <line x1="118" y1="378" x2="292" y2="408"/>
              <line x1="292" y1="408" x2="462" y2="385"/>
              <line x1="462" y1="385" x2="638" y2="428"/>
              <line x1="638" y1="428" x2="818" y2="398"/>
              <line x1="818" y1="398" x2="988" y2="438"/>
              <line x1="988" y1="438" x2="1158" y2="392"/>
              <line x1="1158" y1="392" x2="1338" y2="422"/>
            </g>
            <!-- Stars -->
            <g fill="currentColor" class="text-slate-600 dark:text-slate-300">
              <circle cx="75" cy="68" r="1.8"/>
              <circle cx="168" cy="138" r="1.2"/>
              <circle cx="252" cy="58" r="2.2"/>
              <circle cx="318" cy="182" r="1.2"/>
              <circle cx="398" cy="72" r="1.5"/>
              <circle cx="468" cy="198" r="1"/>
              <circle cx="548" cy="88" r="2"/>
              <circle cx="542" cy="315" r="1"/>
              <circle cx="648" cy="78" r="1.5"/>
              <circle cx="718" cy="208" r="1.2"/>
              <circle cx="805" cy="332" r="1"/>
              <circle cx="858" cy="78" r="2.2"/>
              <circle cx="935" cy="198" r="1.2"/>
              <circle cx="998" cy="342" r="1"/>
              <circle cx="1062" cy="85" r="1.8"/>
              <circle cx="1138" cy="228" r="1.2"/>
              <circle cx="1198" cy="62" r="2"/>
              <circle cx="1278" cy="178" r="1.5"/>
              <circle cx="1362" cy="288" r="1"/>
              <circle cx="1418" cy="82" r="1.8"/>
              <!-- bottom strip stars -->
              <circle cx="118" cy="378" r="1.2"/>
              <circle cx="292" cy="408" r="1"/>
              <circle cx="462" cy="385" r="1.5"/>
              <circle cx="638" cy="428" r="1"/>
              <circle cx="818" cy="398" r="1.2"/>
              <circle cx="988" cy="438" r="1"/>
              <circle cx="1158" cy="392" r="1.5"/>
              <circle cx="1338" cy="422" r="1"/>
              <!-- isolated accent stars -->
              <circle cx="42" cy="280" r="1.2"/>
              <circle cx="720" cy="42" r="1"/>
              <circle cx="1080" cy="310" r="1"/>
              <circle cx="1440" cy="200" r="1.2"/>
            </g>
          </g>
        </svg>

        <section class="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">

          <h1 class="text-5xl md:text-8xl font-black tracking-tight mb-6 bg-linear-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            The IDE-Inspired<br/>API Client.
          </h1>

          <p class="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Everything in plain text, boosted by
            <span class="text-amber-600 dark:text-amber-500 font-semibold italic">Intellisense.</span>
          </p>

          <UButton size="xl" color="primary" variant="outline"
                   class="rounded-full px-8 font-bold shadow-xl shadow-amber-500/10 mb-24" to="pricing">
            Download Postchi
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
                  Download Postchi
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