<template>
  <BaseLayout>
    <template #content>

        <!-- <main> -->
          <slot />  <!-- 這裡顯示頁面內容 -->
        <!-- </main> -->
      
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from './BaseLayout.vue';
</script>


<style scoped>
@import "@/assets/css/pages/index.css";
</style>