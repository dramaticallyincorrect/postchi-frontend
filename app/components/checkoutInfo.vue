<script setup lang="ts">
defineProps<{
  name: string,
  prefix?: string,
  value: string,
}>()
</script>

<template>
  <div class="text-xl p-1 flex flex-row">
    <span>{{ name }}</span>
    <span class="flex-grow"></span>
    <span class="text-sm  self-end pe-1 text-muted">{{ prefix }}</span><span>{{ value }}</span>
  </div>
</template>

<style scoped>

</style>