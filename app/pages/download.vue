<script setup lang="ts">
definePageMeta({
  layout: 'header',
});

type Platform = 'mac' | 'windows' | 'linux' | null

interface DownloadAssets {
  mac: { arm: string; intel: string }
  windows: { exe: string; msi: string }
  linux: { appimage: string; deb: string; rpm: string }
}

const detectedOS = ref<Platform>(null)
const assets = ref<DownloadAssets | null>(null)
const loading = ref(true)
const error = ref(false)

function detectOS(): Platform {
  const ua = navigator.userAgent
  if (ua.includes('Win')) return 'windows'
  if (ua.includes('Mac')) return 'mac'
  if (ua.includes('Linux')) return 'linux'
  return null
}

function triggerDownload(url: string) {
  if (!url) return
  const a = document.createElement('a')
  a.href = url
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

onMounted(async () => {
  detectedOS.value = detectOS()

  try {
    assets.value = await $fetch<DownloadAssets>('/api/releases')

    if (detectedOS.value === 'mac' && assets.value.mac.arm) {
      triggerDownload(assets.value.mac.arm)
    } else if (detectedOS.value === 'windows' && assets.value.windows.exe) {
      triggerDownload(assets.value.windows.exe)
    } else if (detectedOS.value === 'linux' && assets.value.linux.appimage) {
      triggerDownload(assets.value.linux.appimage)
    }
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-16">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-3">Download Postchi</h1>

      <template v-if="loading">
        <p class="text-muted text-lg">Fetching latest release...</p>
      </template>
      <template v-else-if="error">
        <p class="text-red-500 text-lg">Could not fetch release info. Please try again or visit our
          <ULink to="https://github.com/dramaticallyincorrect/postchi/releases" target="_blank" class="underline">GitHub Releases</ULink>.
        </p>
      </template>
      <template v-else-if="detectedOS">
        <p class="text-muted text-lg">Your download is starting&hellip; choose a different platform below if needed.</p>
      </template>
      <template v-else>
        <p class="text-muted text-lg">Choose your platform to get started.</p>
      </template>
    </div>

    <div v-if="!loading && !error && assets" class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <!-- Mac -->
      <UCard :class="detectedOS === 'mac' ? 'ring-2 ring-primary' : ''">
        <div class="flex flex-col items-center gap-4 py-2">
          <UIcon name="i-simple-icons-apple" class="size-10"/>
          <h2 class="text-xl font-semibold">macOS</h2>
          <div class="flex flex-col gap-2 w-full">
            <UButton
                color="primary"
                block
                :to="assets.mac.arm"
                target="_blank"
                icon="i-lucide-download"
            >
              Apple Silicon
            </UButton>
            <UButton
                color="neutral"
                variant="outline"
                block
                :to="assets.mac.intel"
                target="_blank"
                icon="i-lucide-download"
            >
              Intel
            </UButton>
          </div>
        </div>
      </UCard>

      <!-- Windows -->
      <UCard :class="detectedOS === 'windows' ? 'ring-2 ring-primary' : ''">
        <div class="flex flex-col items-center gap-4 py-2">
          <UIcon name="i-simple-icons-windows" class="size-10"/>
          <h2 class="text-xl font-semibold">Windows</h2>
          <div class="flex flex-col gap-2 w-full">
            <UButton
                color="primary"
                block
                :to="assets.windows.exe"
                target="_blank"
                icon="i-lucide-download"
            >
              Installer (.exe)
            </UButton>
            <UButton
                color="neutral"
                variant="outline"
                block
                :to="assets.windows.msi"
                target="_blank"
                icon="i-lucide-download"
            >
              MSI
            </UButton>
          </div>
        </div>
      </UCard>

      <!-- Linux -->
      <UCard :class="detectedOS === 'linux' ? 'ring-2 ring-primary' : ''">
        <div class="flex flex-col items-center gap-4 py-2">
          <UIcon name="i-simple-icons-linux" class="size-10"/>
          <h2 class="text-xl font-semibold">Linux</h2>
          <div class="flex flex-col gap-2 w-full">
            <UButton
                color="primary"
                block
                :to="assets.linux.appimage"
                target="_blank"
                icon="i-lucide-download"
            >
              AppImage
            </UButton>
            <UButton
                color="neutral"
                variant="outline"
                block
                :to="assets.linux.deb"
                target="_blank"
                icon="i-lucide-download"
            >
              .deb
            </UButton>
            <UButton
                color="neutral"
                variant="outline"
                block
                :to="assets.linux.rpm"
                target="_blank"
                icon="i-lucide-download"
            >
              .rpm
            </UButton>
          </div>
        </div>
      </UCard>

    </div>
  </div>
</template>
