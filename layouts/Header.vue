<template>
    <header class="w-full top-0 left-0 pb-1 transition-all duration-500" ref="header">
        <nav class="bg-transparent mx-auto max-w-7x relative">
            <div class="space-x-[-1.8rem] sm:space-x-[1.5rem] md:space-x-[3rem] lg:space-x-[5rem] xl:space-x-[7.5rem] 
                        flex justify-center place-items-center text-center text-red-950 text-lg font-medium text-nowrap">
                <div v-if="showLogo" class="scale-[80%] sm:scale-[80%] md:scale-100 transition-all duration-500 m-0">
                    <a href="https://bobibobi.tw/Temples/temple.aspx" title="合作宮廟">
                        <img class="w-full" src="/img/logo/logo_small.png" alt="保必保庇線上點燈祈福平台" title="保必保庇線上點燈祈福平台" />
                    </a>
                </div>
                <div v-for="item, index in menuList" :key="'menu'+index" ref="menu" class="scale-[50%] sm:scale-[80%] md:scale-100 transition-all duration-500">
                    <a :href="item.link" >
                        <img :src="item.img" :alt="item.alt" :title="item.title" />
                        <span class="text-[1.4rem] md:text-[1.1rem] transition-all duration-500">{{item.text}}</span>
                    </a>
                </div>
            </div>
        </nav>

        <div class="tracking-wider space-y-2 w-fit h-fit m-auto absolute top-0 left-0 right-0 bottom-0 hidden -z-10" ref="submenu">
            <div class="rounded-full text-red-950 border border-red-950 w-fit py-1 px-3">訂單查詢</div>
            <div class="rounded-full text-red-950 border border-red-950 w-fit py-1 px-3">信眾服務</div>
        </div>

    </header>

</template>

<script setup>
import {  useRoute } from 'vue-router'
import { ref, reactive, onMounted, nextTick } from 'vue'

const activeSubmenu = false; // 確認是否啟用網站子選單

const route = useRoute();
const isIndexPage = route.path === '/';

const header = ref(null); // Dom Ref
const menu = ref(null); // Dom Ref
const submenu = ref(null); // Dom Ref

const showLogo = ref(false);
const menuList = reactive([
    {
        alt: '合作宮廟',
        title: '合作宮廟',
        text: '合作宮廟',
        img: '/img/menu/menu_01.png',
        link: 'https://bobibobi.tw/Temples/temple.aspx'
    },
    {
        alt: '信眾服務',
        title: '信眾服務',
        text: '信眾服務',
        img: '/img/menu/menu_02.png',
        link: activeSubmenu ? 'javascript:void(0)' : 'https://bobibobi.tw/Temples/service.aspx'
    },
    {
        alt: '最新消息',
        title: '最新消息',
        text: '最新消息',
        img: '/img/menu/menu_03.png',
        link: 'https://bobibobi.tw/Temples/news.aspx'
    },
    {
        alt: '訂單查詢',
        title: '訂單查詢',
        text: '訂單查詢',
        img: '/img/menu/menu_04.png',
        link: 'https://bobibobi.tw/SearchLog.aspx'
    },
    {
        alt: '開運商品',
        title: '開運商品',
        text: '開運商品',
        img: '/img/menu/menu_05.png',
        link: 'https://shop.bobibobi.tw/'
    }
]);

const addHeaderBg = () => {
    header.value?.classList.add('bg-[url(/img/bg/footBg.jpg)]');
    header.value?.classList.add('bg-no-repeat');
    header.value?.classList.add('bg-bottom');
    header.value?.classList.add('bg-cover');
}
const removeHeaderBg = () => {
    header.value?.classList.remove('bg-[url(/img/bg/footBg.jpg)]');
    header.value?.classList.remove('bg-no-repeat');
    header.value?.classList.remove('bg-bottom');
    header.value?.classList.remove('bg-cover');
}

const fixedHeader = () => {
    header.value?.classList.add('fixed');
    header.value?.classList.remove('relative');
}

const relativeHeader = () => {
    header.value?.classList.add('relative');
    header.value?.classList.remove('fixed');
}

const scrollHandler = () => {
    if (window.scrollY > 0) {
        fixedHeader();
        addHeaderBg();
        showLogo.value = true;
    } else {
        relativeHeader();
        removeHeaderBg();
        showLogo.value = false;
    }
}

const menuHandler = () => {
    const showSubMenu = () => {
        fixedHeader();
        addHeaderBg();
        header.value?.classList.add('h-full');
        submenu.value?.classList.remove('hidden');
    }
    const hideSubMenu = () => {
        if (isIndexPage) {
            scrollHandler();
        }
        
        header.value?.classList.remove('h-full')
        submenu.value?.classList.add('hidden');
    };
        
        
    const toggleSubMenu = () => {
        if (header.value?.classList.contains('h-full')) {
            hideSubMenu();
        } else {
            showSubMenu();
        }
    }

    menu.value[1].addEventListener('mouseenter', toggleSubMenu)
    menu.value[1].addEventListener('mouseleave', toggleSubMenu)
    menu.value[1].addEventListener('click', toggleSubMenu)
}


onMounted(async () => {
    await nextTick();
    menuHandler();
    scrollHandler();

    if (isIndexPage) {
        // scroll event
        window.addEventListener('scroll', scrollHandler);
    }

    if (!isIndexPage) {
        addHeaderBg();
        fixedHeader();
        showLogo.value = true;
    }

})



</script>