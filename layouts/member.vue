<template>
  <BaseLayout>
    <template #content>

        <main class="mt-28">
            
          <aside v-if="!isLoginPage" class="w-full md:w-24 h-fit text-white p-4">
            <nav class="rounded text-zinc-500 border border-zinc-200 p-2">
              <ul class="space-y-1">
                <li><a href="#" class="block hover:bg-zinc-50 rounded">基本資料</a></li>
                <li><a href="#" class="block hover:bg-zinc-50 rounded">常用祈福人</a></li>
                <li><a href="#" class="block hover:bg-zinc-50 rounded">購買資料</a></li>
              </ul>
            </nav>
          </aside>

          <slot />  <!-- 這裡顯示頁面內容 -->
        </main>
      
    </template>
  </BaseLayout>
</template>

<script setup>
import { useRoute } from 'vue-router'
import BaseLayout from './BaseLayout.vue';

const route = useRoute();
const isLoginPage = route.path === '/Member' || route.path === '/Member/';


</script>