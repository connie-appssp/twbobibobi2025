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