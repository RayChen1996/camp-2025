import { HomeCase } from '../.nuxt/components';
<template>
  <HomeHero />
  <HomeProfessionalServices />
  <HomeBlogCarousel />
  <HomeCase />

  <HomePremium />

  <HomeContract />
</template>

<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";
useSeoMeta({
  title: "2025 體驗營",
  description: "",
});
onMounted(() => {
  AOS.init({
    duration: 800,
    once: false,
  });
});
</script>
