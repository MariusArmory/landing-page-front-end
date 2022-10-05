<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: "#",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <section class="home_section">
    <h2 class="home_section__heading">{{ title }}</h2>
    <div class="home_section__content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.home_section {
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
.home_section__heading {
  font-weight: lighter;
}
.home_section__content {
  margin-top: 1rem;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
