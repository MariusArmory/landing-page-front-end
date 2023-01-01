<script setup lang="ts">
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


onMounted(() => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'GallerImage',
    loop: false,
    pswpModule: () => import('photoswipe')
  });
  lightbox.init();
});
</script>
<template>
{{ images }}
<div id="gallery" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
<GalleryImage v-for="image in images" :key="image.id" :image="image" />
</div>
</template>
