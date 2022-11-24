<template>
  <nav class="flex align-center justify-center py-2">
    <NavItem :href="'/'">
    Home
    </NavItem>
    <NavItem :href="'/'">
    Shop
    </NavItem>
    <NavItem :href="'/gallery'">
    Gallery
    </NavItem>
    <NavItem :href="'https://www.instagram.com/'">
      <font-awesome-icon :icon="['fab', 'instagram']" /> 
    </NavItem>
    <NavItem :href="'https://www.facebook.com/'">
      <font-awesome-icon :icon="['fab', 'facebook']" /> 
    </NavItem>
  </nav>
</template>
