<template>
  <BaseLayout>
    <template #content>
      <!-- <main> -->
      <div class="container mt-10">
        <div class="row">
          <div class="col-12">
            <slot />
          </div>
        </div>
      </div>
      <!-- </main> -->
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from './BaseLayout.vue';
</script>