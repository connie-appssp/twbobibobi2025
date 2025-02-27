<template>
  <BaseLayout>
    <template #content>

        <div class="mt-28 container mx-auto px-4">
            
          <nav aria-label="breadcrumb" class="border-b border-zinc-300 p-2 text-zinc-400 text-sm">
              <ol class="flex space-x-1">
                  <li><a href="/">首頁</a></li>
                  <li>&gt;</li>
                  <li><a href="/category">信眾服務</a></li>
                  <li>&gt;</li>
                  <li>信眾專區</li>
                  <li>&gt;</li>
                  <li v-if="isLoginPage">信眾身份驗證</li>
                  <li v-if="isProfilePage">基本資料</li>
                  <li v-if="isReceivePage">收件資料</li>
                  <li v-if="isPrayforPage">祈福人資料</li>
                  <li v-if="isOrderPage">購買資料</li>
              </ol>
          </nav>

          <div class="p-2 space-x-0 space-y-2 md:grid md:grid-cols-5 md:p-8 md:space-x-4 md:space-y-0" v-cloak>
            <aside v-if="!isLoginPage" class="w-full h-fit" v-cloak>
              <nav class="rounded text-zinc-500 bg-white/75 shadow-md px-2 md:p-8 flex flex-col">
                <button type="button" class="md:hidden self-end relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/75 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset " aria-controls="mobile-menu" aria-expanded="false"
                  v-on:click="toggleAsideMenu">
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open main menu</span>
                  
                  <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  
                  <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <ul class="space-y-1 md:space-y-3 opacity-100 transition-all duration-300" ref="asideMenu">
                  <li class="block rounded p-1 cursor-pointer hover:bg-zinc-100 md:p-2" v-on:click="goToPage('/Member/profile')">基本資料</li>
                  <li class="block rounded p-1 cursor-pointer hover:bg-zinc-100 md:p-2" v-on:click="goToPage('/Member/receive')">收件資料</li>
                  <li class="block rounded p-1 cursor-pointer hover:bg-zinc-100 md:p-2" v-on:click="goToPage('/Member/prayfor')">祈福人資料</li>
                  <li class="block rounded p-1 cursor-pointer hover:bg-zinc-100 md:p-2" v-on:click="goToPage('/Member/order')">購買資料</li>
                  <li class="block rounded p-1 cursor-pointer hover:bg-zinc-100 md:p-2" v-on:click="goToPage('#')">登出</li>
                </ul>
              
              </nav>
            </aside>

            <slot />  <!-- 這裡顯示頁面內容 -->

          </div>

        </div>
      
    </template>
  </BaseLayout>
</template>

<script setup>
import { useRoute } from 'vue-router'
import BaseLayout from './BaseLayout.vue';

const route = useRoute();

const asideMenu = ref(null);
const isLoginPage = ref(true);
const isProfilePage = ref(false);
const isReceivePage = ref(false);
const isPrayforPage = ref(false);
const isOrderPage = ref(false);

const toggleAsideMenu = () => {
    asideMenu.value.classList.toggle('hidden');
    asideMenu.value.classList.toggle('opacity-0');
    asideMenu.value.classList.toggle('opacity-100');
}

const resizeWindow = () => {
    if (window.innerWidth > 768 && asideMenu.value && asideMenu.value.classList.contains('hidden')) {
        asideMenu.value.classList.remove('hidden');
        asideMenu.value.classList.remove('opacity-0');
        asideMenu.value.classList.add('opacity-100');
    }
}

const checkRoutePath = (newPath) => {
  const path  = newPath ?? route.path;
    isLoginPage.value = path === '/Member' || path === '/Member/';
    isProfilePage.value = path === '/Member/profile';
    isReceivePage.value = path === '/Member/receive';
    isPrayforPage.value = path === '/Member/prayfor';
    isOrderPage.value = path === '/Member/order';
    
}


const goToPage = (link) => {
    location.href = link;
}


onMounted(() => {
  window.addEventListener('resize', resizeWindow);
  checkRoutePath();
})

watch(() => route.path, (newPath) => {
  checkRoutePath(newPath);
})



</script>