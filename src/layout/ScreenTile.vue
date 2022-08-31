<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div :class="color" class="tile">
    <slot name="header"></slot>
    <slot name="content"></slot>
  </div>
</template>

<style scoped>
.tile {
  @apply min-h-screen bg-skin-fill text-skin-base flex flex-col;
}
</style>
