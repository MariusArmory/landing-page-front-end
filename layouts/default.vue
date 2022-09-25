<script setup lang="ts">
import Header from '~/components/TheHeader.vue'
import Footer from '~/components/TheFooter.vue'

</script>

<template>
  <body>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </body>
</template>

<style global>
    main{
        margin-inline: 1rem;
    }
</style>
