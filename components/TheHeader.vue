<script setup lang="ts">

</script>

<template>
  <header>
    <div id="logo">
      Marius Armory
    </div>
    <nav class="navbar">
      <li class="navitem">
        <a href="shop.mariusarmory.com" class="navlink navlink__away">
          Store
        </a>
      </li>
      <li class="navitem">
        <NuxtLink to="/gallery" class="navlink">
          Gallery
        </NuxtLink>
      </li>
      <li class="navitem">
        <a href="/#about" class="navlink">
          About
        </a>
      </li>
      <li class="navitem">
        <a href="/#contact" class="navlink">
          About
        </a>
      </li>
      <li class="navitem">
        <a href="shop.mariusarmory.com" class="navlink navlink__away">
          Store
        </a>
      </li>
      <li class="navitem">
        <a href="shop.mariusarmory.com" class="navlink navlink__away">
          <fa icon="fa-facebook" />
        </a>
      </li>
      <li class="navitem">
        <a href="shop.mariusarmory.com" class="navlink navlink__away">
          <fa icon="fa-instagram" />
        </a>
      </li>
    </nav>
  </header>
</template>

<style scoped>
    #logo{
        font-family: "Cinzel Decorative";
        color: #fff;
        font-size: 3rem;
        text-align: center;
        user-select: none;
        padding: 0.5rem;
    }
</style>
