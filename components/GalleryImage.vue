<script setup lang="ts">
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <img class="w-full h-auto rounded-lg" />
</template>
