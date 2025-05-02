<template>
  <div class="flex flex-col">
    <LayoutAppHeader />
    <div class="flex-1 min-h-dvh bg-gray-100">
      <router-view />
    </div>
    <LayoutAppFooter />
  </div>
</template>
