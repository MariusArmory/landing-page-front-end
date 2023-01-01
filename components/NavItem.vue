<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "/",
  },
})
</script>
<template>
  <NuxtLink :to="href" class="text-2xl hover:text-amber-400 font-mont font-light mx-4">
    <slot />
  </NuxtLink>
</template>
