import { NuxtLink } from '../../.nuxt/components';
<template>
  <ul
    class="flex [&>li]:hover:cursor-pointer justify-center items-center h-16 gap-10 bg-gray-800 text-white"
  >
    <li>
      <NuxtLink to="/">首頁</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about">部落格</NuxtLink>
    </li>
  </ul>
</template>
