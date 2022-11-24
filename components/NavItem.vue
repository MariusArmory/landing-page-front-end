<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "/",
  },
})
</script>
<template>
  <NuxtLink :to="href" class="text-xl text-white hover:text-amber-400 font-mont font-[100] px-2">
    <slot />
  </NuxtLink>
</template>
