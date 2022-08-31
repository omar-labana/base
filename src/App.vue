<template>
  <ScreenTile>
    <template #header>
      <NavigationHeader />
    </template>
    <template #content>
      <HeroSection />
    </template>
  </ScreenTile>
  <ScreenTile color="light" />
</template>

<script setup>
import ScreenTile from "./layout/ScreenTile.vue";
import NavigationHeader from "./layout/NavigationHeader.vue";
import HeroSection from "./components/HeroSection.vue";
</script>

<style scoped>
.tile {
  @apply min-h-screen bg-skin-fill text-skin-base px-6;
}
</style>
