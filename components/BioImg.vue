<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>
<template>
<div class="flex flex-row justify-center items-center">
<img :src="src" :alt="alt" class="object-cover object-center rounded-lg w-full md:w-[500px]" />
</div>
</template>
