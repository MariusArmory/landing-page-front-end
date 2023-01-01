<template>
  <div>
    <PageLogo />
    <NavBar />
    <slot /> 
  </div>
</template>

<style global>
body {
  height: 100vh;
  margin: 0;
  padding: 0;
}
body {
  background-color: rgb(0 0 0);
}
::-webkit-scrollbar {
    display: none;
}
</style>
