<template>
  <div class="bg-stone-900 text-stone-200 min-h-screen">
    <PageLogo />
    <NavBar />
    <main class="">
      <slot /> 
    </main>
  </div>
</template>

<style global>
body {
  height: 100vh;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
    display: none;
}
</style>
