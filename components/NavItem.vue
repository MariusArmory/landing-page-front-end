<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "/",
  },
})
</script>
<template>
  <NuxtLink :to="href" class="text-xl hover:text-amber-400 font-mont font-light px-2">
    <slot />
  </NuxtLink>
</template>
