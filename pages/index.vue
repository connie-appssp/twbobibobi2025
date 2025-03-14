<template>
  <div>
    <section class="h-[calc(100vh-105px)] w-full d-flex relative">
      <!-- Trees -->
      <img src="/img/bg/kv_bg_r.png" class="w-[10%] absolute top-0 right-0" />
      <img src="/img/bg/kv_bg_l.png" class="w-[15%] absolute bottom-0 left-0" />
      
      <div class="w-px h-[8vh] bg-red-950 absolute m-auto inset-x-0 top-0"></div><!-- top verticle line -->

      <div class="w-fit h-fit absolute m-auto inset-0 d-flex flex-column">
          <div>
            <img src="/img/logo/logo-home.png" />
          </div>
          
          <div class="text-center mt-8">
            <h1 class="text-lg md:text-xl text-red-950 tracking-widest">線上宮廟服務平台</h1>
          </div>

          <div class="text-center mt-10">
            <h4 class="text-xl md:text-2xl text-red-950 tracking-widest">世代信仰，數位傳承</h4>
            <h4 class="text-sm mt-5">與全臺知名宮廟合作，提供宮廟服務線上報名，</h4>
            <h4 class="text-sm">讓您在忙碌之餘也可以透過線上報名的方式，參與宮廟的服務。</h4>
          </div>
      </div>

      <div class="w-px h-[8vh] bg-red-950 absolute m-auto inset-x-0 bottom-0"></div><!-- bottom verticle line -->
    </section>

    <section>

      <img src="https://bobibobi.tw/Temples/SiteFile/carousel/11.jpg" class="w-full" />
      <!-- <img src="https://bobibobi.tw/Temples/SiteFile/carousel/18.jpg" class="w-full" /> -->

    </section>


    
    <section>
      <div class="d-flex place-items-center mt-[5rem]">
        <div class="w-fit">
          <img src="/img/obj/roof.png" class="w-[200px]" />
        </div>

        <!-- todo: needs transfer from style setting to tailwindcss class name  -->
        <div class="w-full text-center text-3xl text-red-900 mt-3" 
            style="background-image: linear-gradient(to right, rgba(0,0,0, 0),rgba(171, 131, 12, 0.2),rgba(0, 0, 0, 0))"
        >- 當前活動 -</div>
        
        <div class="h-fit w-[80vw] grid gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-4">
          
          <div v-for='(item, index) in activities' :key="item.title+index" class="border border-zinc-100 flex flex-col shadow-md p-3 space-y-5 bg-gradient-to-b from-white/80 from-0% via-white via-40% to-white to-100% group cursor-pointer">
            
            <div class="w-full aspect-square bg-orange-100">
              <img :src="item.img" class="w-full" />
            </div>

            <div class="h-[70px] w-full relative text-2xl font-bold overflow-hidden tracking-widest grow-0 lg:text-xl">
              {{item.title}}
              <div class="h-[70px] w-full absolute top-0 left-0 bg-gradient-to-b from-white/0 from-0% via-white/0 via-70% to-white to-100%"></div>
            </div>

            <div class="w-full tracking-wide flex-1 text-zinc-400">
              {{item.caption}}
            </div>

            <div class="w-full justify-items-end">
              <div class="w-fit px-3 border border-zinc-100 text-zinc-400 text-xs rounded-full group-hover:bg-zinc-600 group-hover:text-white transition duration-700">詳情</div>
            </div>

          </div>
        </div>

      </div>

    </section>

    
    <section>
      <div class="d-flex place-items-center mt-[5rem]">
        <div class="w-fit">
          <img src="/img/obj/roof.png" class="w-[200px]" />
        </div>

        <!-- todo: needs transfer from style setting to tailwindcss class name  -->
        <div class="w-full text-center text-3xl text-red-900 mt-3" 
            style="background-image: linear-gradient(to right, rgba(0,0,0, 0),rgba(171, 131, 12, 0.2),rgba(0, 0, 0, 0))"
        >- 資訊專區 -</div>
        
        <div class="h-fit w-[80vw] grid gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-4">
          
          <div v-for='(item, index) in activities' :key="item.title+index" class="border border-zinc-100 flex flex-col shadow-md bg-gradient-to-b from-white/80 from-0% via-white via-40% to-white to-100% group cursor-pointer">
            
            <div class="w-full aspect-square bg-orange-100">
              <img :src="item.img" class="w-full" />
            </div>

            <div class="h-[70px] w-full relative text-2xl font-bold overflow-hidden tracking-widest grow-0 p-3 lg:text-xl">
              {{item.title}}
              <div class="h-[70px] w-full absolute top-0 left-0 bg-gradient-to-b from-white/0 from-0% via-white/0 via-70% to-white to-100%"></div>
            </div>

            <div class="w-full tracking-wide flex-1 text-zinc-400 p-3">
              {{item.caption}}
            </div>

            <div class="w-full justify-items-end p-3">
              <div class="w-fit px-3 border border-zinc-100 text-zinc-400 text-xs rounded-full group-hover:bg-zinc-600 group-hover:text-white transition duration-700">詳情</div>
            </div>

          </div>
        </div>

      </div>

    </section>



  </div>

    <!-- <div>
      <div>
        <h1 v-for="n in 50" :key="'item'+ n" >Welcome to the Home Page</h1>
        <div>
          <NuxtLink to="/Member">會員登入</NuxtLink>
          <NuxtLink to="/Member/profile">會員資料</NuxtLink>
        </div>
      </div>

    </div> -->
  <!-- </main> -->
</template>

<script setup>
useHead({
    meta: [
        { name: 'description', content: '' }
    ]
})

definePageMeta({
  layout: 'home',
  // middleware: 'auth'
});


const activities = reactive([
  {
    img: 'https://bobibobi.tw/Temples/SiteFile/News/20241029_NewsImg_s.jpg',
    title: '２０２５乙巳蛇年新春線上點燈報名開始囉~',
    caption: '『保必保庇』今年與11家全台知名宮廟配合線上點燈服務，提供信眾更多元化的選擇，讓您在忙碌之餘也可以輕鬆完成點燈保平安，為自己與家人祈福。',
    link: '',
  },
  {
    img: 'https://bobibobi.tw/Temples/SiteFile/News/20250310_NewsImg_s.jpg',
    title: '北港武德宮２０２５天官武財神聖誕補財庫',
    caption: '財運加持・富貴來臨！農曆三月十五日迎來【天官武財神聖壽】，誠邀您一同參與補庫、植福、謝恩，添補財庫、穩固財源、開運聚富，讓新的一年財氣滾滾、錢財不斷！財運加持・富貴來臨！農曆三月十五日迎來【天官武財神聖壽】，誠邀您一同參與補庫、植福、謝恩，添補財庫、穩固財源、開運聚富，讓新的一年財氣滾滾、錢財不斷！',
    link: '',
  },
  {
    img: 'https://bobibobi.tw/Temples/SiteFile/News/20250306_NewsImg_s.jpg',
    title: '斗六五路財神宮２０２５補財庫',
    caption: '全台少數24小時營業的財神廟開放線上報名補財庫了！使用催財符打開你的財庫，並且先赦罪後再補財庫！改善正財、偏財運勢，助事業順遂，累積福報，讓財富源源不絕。',
    link: '',
  },
  {
    img: 'https://bobibobi.tw/Temples/SiteFile/News/20241228_NewsImg_s.jpg',
    title: '鹿港城隍廟２０２５補財庫',
    caption: '✨ 鹿港城隍廟，幫你補足財富能量，讓好運不斷、財源滾滾！ ✨🌟 每個人的「財庫」如同存錢罐，偶爾也需要補充和修繕。當你覺得財運卡關、收入停滯···',
    link: '',
  },
])




</script>

<style>
@import "/assets/css/pages/index.css";
</style>