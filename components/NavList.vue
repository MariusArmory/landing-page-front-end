<template>
  <ul class="navlist">
    <slot />
  </ul>
</template>

<style scoped>
.navlist {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 1rem 0;
}
</style>
