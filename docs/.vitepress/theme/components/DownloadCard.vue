<script setup lang="ts">
defineProps<{
  href: string
  label: string
  meta?: string
}>()
</script>

<template>
  <a class="download-card" :href="href" target="_blank" rel="noreferrer">
    <span class="download-card-meta">{{ meta || 'GGUF file' }}</span>
    <span class="download-card-row">
      <svg class="download-card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 3v11m0 0l-4.5-4.5M12 14l4.5-4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <span class="download-card-label">{{ label }}</span>
    </span>
  </a>
</template>
