<script setup lang="ts">
defineProps({
  local: Boolean,
});
</script>

<template>
  <li class="navitem">
    <slot />
  </li>
</template>

<style scoped>
.navitem {
  padding-inline: 1rem;
}
</style>
