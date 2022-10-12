<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <TheHeader />
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<style global>
body,
html {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  scroll-behavior: smooth;
}
body {
  background-color: #1b1212;
}
main {
  margin-inline: 30%;
}
</style>
