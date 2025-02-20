<template>
  <BaseLayout>
    <template #content>

        <main class="mt-28">
            
        <div class="sidebar-layout">
            <aside>
                <nav>Sidebar</nav>
            </aside>
        </div>

          <slot />  <!-- 這裡顯示頁面內容 -->
        </main>
      
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from './BaseLayout.vue';
</script>