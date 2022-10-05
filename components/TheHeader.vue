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
          <NavLink :page="true" :to="'about'"> Gallery </NavLink>
        </NavItem>
        <NavItem>
          <NavLink :page="false" :href="'/#about'"> About </NavLink>
        </NavItem>
        <NavItem>
          <NavLink :page="false" :href="'/#contact'"> Contact </NavLink>
        </NavItem>
        <NavItem>
          <NavLink :page="false" :href="'https://facebook.com'">
            <fa icon="fa-facebook" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink :page="false" :href="'https://instagram.com'">
            <fa icon="fa-instagram" />
          </NavLink>
        </NavItem>
      </NavList>
    </nav>
  </header>
</template>
