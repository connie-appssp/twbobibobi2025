<template>
  <BaseLayout>
    <template #content>
      <div class="w-full place-items-center">
        <div class="w-full md:w-[95vw] lg:w-[80vw] xl:w-[72vw] 2xl:w-[65vw]">
          <div class="w-full mx-auto px-6 md:fixed md:top-[9rem]">
            <aside class="w-full h-fit md:w-fit md:max-w-52 lg:max-w-64" v-cloak>
                <nav class="rounded text-zinc-500 bg-white/20 backdrop-blur-sm shadow-md p-3 flex flex-col md:bg-white/90">
                  <button type="button" class="md:hidden relative flex place-content-between rounded-md p-2 text-gray-400 bg-transparent focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset " aria-controls="mobile-menu" aria-expanded="false" v-on:click="toggleAsideMenu">
                    
                    <span class="text-xl mr-2 md:block">目錄</span>
                    
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>
                    
                    <svg class="md:hidden block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    
                    <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <span class="hidden text-xl mr-2 md:block md:mb-3">目錄</span>

                  <ol v-if="tableOfContents.length>0" class="space-y-1 md:space-y-0 opacity-100 transition-all duration-300" ref="asideMenu">

                    <li v-for="lv1, lv1Idx in tableOfContents" :key="lv1.title+lv1Idx" class="ml-5 list-item list-decimal">
                      <div class="px-2 rounded cursor-pointer hover:bg-zinc-100">{{lv1.title}}</div>
                      
                      <ol v-if="lv1.sub" class="ml-7 list-item list-['\FE42']">

                        <li v-for="lv2, lv2Idx in lv1.sub" :key="lv2.title+lv2Idx">
                          <div class="px-2 rounded cursor-pointer hover:bg-zinc-100">{{lv2.title}}</div>

                          <ol v-if="lv2.sub" class="ml-7 list-item list-['\FE42']">

                            <li v-for="lv3, lv3Idx in lv2.sub" :key="lv3.title+lv3Idx" >
                              <div class="px-2 rounded cursor-pointer hover:bg-zinc-100">{{lv3.title}}</div>

                              <ol v-if="lv3.sub" class="ml-7 list-item list-['\FE42']">

                                <li v-for="lv4, lv4Idx in lv3.sub" :key="lv4.title+lv4Idx" >
                                  <div class="px-2 rounded cursor-pointer hover:bg-zinc-100">{{lv4.title}}</div>

                                  <ol v-if="lv4.sub" class="ml-7 list-item list-['\FE42']">

                                    <li v-for="lv5, lv5Idx in lv4.sub" :key="lv5.title+lv5Idx" >
                                      <div class="px-2 rounded cursor-pointer hover:bg-zinc-100">{{lv5.title}}</div>
                                    </li> <!-- lv5 li end -->

                                  </ol>

                                </li> <!-- lv4 li end -->

                              </ol>

                            </li> <!-- lv3 li end -->

                          </ol>

                        </li> <!-- lv2 li end -->

                      </ol>

                    </li> <!-- lv1 li end -->

                  </ol>

                </nav>
                
              </aside>
          </div>

          <div class="mx-auto mr-0 px-6 md:w-[65vw] md:mt-[2rem] lg:w-[50vw]">
            
            <div class="py-2 space-y-2" v-cloak>
              

              <slot />  <!-- 這裡顯示頁面內容 -->

            </div>

          </div>

        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script setup>
import { useRoute } from 'vue-router'
import BaseLayout from './BaseLayout.vue';

const route = useRoute();
const routeId = route.params.id
const asideMenu = ref(null);
const isLoginPage = ref(true);
const isProfilePage = ref(false);
const isReceivePage = ref(false);
const isPrayforPage = ref(false);
const isOrderPage = ref(false);

const tableOfContents = reactive([
    {
        title: "2025犯太歲生肖有哪些?",
        link: "",
        sub: [
            {
                title: "化解太歲的方法1",
                link: "",
                sub: null,
            },
            {
                title: "安太歲象徵的意義與原因1",
                link: "",
                sub: [
                    {
                        title: "化解太歲的方法2",
                        link: "",
                        sub: null,
                    },
                    {
                        title: "安太歲象徵的意義與原因2",
                        link: "",
                        sub: [
                            {
                                title: "化解太歲的方法3",
                                link: "",
                                sub: null,
                            },
                            {
                                title: "安太歲象徵的意義與原因3",
                                link: "",
                                sub: [
                                    {
                                        title: "化解太歲的方法4",
                                        link: "",
                                        sub: null,
                                    },
                                    {
                                        title: "安太歲象徵的意義與原因4",
                                        link: "",
                                        sub: [
                                            {
                                                title: "化解太歲的方法5",
                                                link: "",
                                                sub: null,
                                            },
                                            {
                                                title: "安太歲象徵的意義與原因5",
                                                link: "",
                                                sub: null,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "光明燈介紹",
        link: "",
        sub: null,
    },
    {
        title: "太歲燈介紹",
        link: "",
        sub: null,
    },
    {
        title: "財神燈介紹",
        link: "",
        sub: null,
    },
    {
        title: "月老姻緣燈介紹",
        link: "",
        sub: null,
    },

])

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
    isLoginPage.value = path === '/member' || path === '/member/';
    isProfilePage.value = path === '/member/profile';
    isReceivePage.value = path === '/member/receive';
    isPrayforPage.value = path === '/member/prayfor';
    isOrderPage.value = path === '/member/order';
    
}


const goToPage = (link) => {
    location.href = link;
}


onMounted(() => {
  window.addEventListener('resize', resizeWindow);
  checkRoutePath();
  console.log(routeId)
})

watch(() => route.path, (newPath) => {
  checkRoutePath(newPath);
})



</script>