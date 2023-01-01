<template>
  <div class="bg-stone-900 text-stone-200 min-h-screen">
    <PageLogo class="pt-10"/>
    <NavBar class="mt-4"/>
    <main class="my-10 mx-4 pb-20 lg:mx-96 md:mx-44 font-mont ">
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
