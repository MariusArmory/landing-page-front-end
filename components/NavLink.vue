<script setup lang="ts">
defineProps({
  page: {
    type: Boolean,
    required: true,
  },
  to: {
    type: String,
    default: "/",
  },
  href: {
    type: String,
    default: ".",
  },
});
</script>

<template>
  <NuxtLink v-if="page" :to="to" class="navlink">
    <slot />
  </NuxtLink>
  <a v-else :href="href" class="navlink navlink__away">
    <slot />
  </a>
</template>

<style scoped>
.navlink {
  text-decoration: none;
  color: #fff;
}
.navlink:hover {
  color: gold;
}
</style>
