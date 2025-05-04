import { BlogPostsGrid } from '../.nuxt/components';
<template>
  <BlogHero />
  <BlogBanner />
  <BlogPostsGrid />
</template>
<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";
useSeoMeta({
  title: "Blog | 2025 體驗營",
  description: "",
});
onMounted(() => {
  AOS.init({
    duration: 800,
    once: false,
  });
});
</script>
