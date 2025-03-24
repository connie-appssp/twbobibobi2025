<template>
  <BaseLayout>
    <template #content>
      <slot />
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from './BaseLayout.vue';
</script>


<style scoped>
@import "@/assets/css/pages/index.css";
</style>