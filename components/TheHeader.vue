<script setup lang="ts">
</script>

<template>
  <header>
    <SiteLogo />
    <nav class="navbar">
      <NavList>
        <NavItem>
          <NavLink :page="false" :href="'https://shop.mariusarmory.com'">
            Shop
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink :page="true" :to="'gallery'"> Gallery </NavLink>
        </NavItem>
        <NavItem>
          <NavLink :page="false" :href="'/#about'"> About </NavLink>
        </NavItem>
        <NavItem>
          <NavLink :page="false" :href="'/#contact'"> Contact </NavLink>
        </NavItem>
        <NavItem>
          <NavLink :page="false" :href="'https://facebook.com'">
            <fa icon="faFacebook"/>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink :page="false" :href="'https://instagram.com'">
          </NavLink>
        </NavItem>
      </NavList>
    </nav>
  </header>
</template>
