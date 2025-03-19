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


    <!-- 當前活動 start -->
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


    <!-- 資訊專區 start -->
    <section>
      <div class="d-flex place-items-center mt-[5rem]">
        <div class="w-fit">
          <img src="/img/obj/roof.png" class="w-[200px]" />
        </div>

        <div class="w-full text-center text-3xl text-red-900 mt-3" 
            style="background-image: linear-gradient(to right, rgba(0,0,0, 0),rgba(171, 131, 12, 0.2),rgba(0, 0, 0, 0))"
        >- 資訊專區 -</div>
        
        <div class="h-fit w-[80vw] grid gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-4">
          
          <div v-for='(item, index) in columns' :key="item.title+index" class="border border-zinc-100 flex flex-col shadow-md bg-white/80 group cursor-pointer">
            
            <div class="w-full aspect-video bg-orange-100">
              <img :src="item.img" class="w-full" />
            </div>

            <div class="h-[50px] w-full relative text-2xl font-bold overflow-hidden tracking-widest grow-0 p-3 lg:text-xl">
              {{item.title}}
              <div class="h-[50px] w-full absolute top-0 left-0 bg-gradient-to-b from-white/0 from-0% via-white/0 via-70% to-white to-100%"></div>
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

    
    <!-- 新聞報導 start -->
    <section>
      <div class="d-flex place-items-center mt-[5rem]">
        <div class="w-fit">
          <img src="/img/obj/roof.png" class="w-[200px]" />
        </div>

        <div class="w-full text-center text-3xl text-red-900 mt-3" 
            style="background-image: linear-gradient(to right, rgba(0,0,0, 0),rgba(171, 131, 12, 0.2),rgba(0, 0, 0, 0))"
        >- 新聞報導 -</div>
        
        <div class="h-fit w-[80vw] grid gap-4 mt-5 sm:grid-cols-2">
          
          <div v-for="(item, index) in news" :key="item.title+index" class="border border-zinc-100 p-5 space-y-2 flex flex-col shadow-md backdrop-blur-sm group cursor-pointer">
            <div class="w-full justify-items-end">
              <div class="w-fit px-3 py-1 border border-zinc-100 text-zinc-400 text-xs rounded-full group-hover:bg-zinc-600 group-hover:text-white transition duration-700">更多新聞內容</div>
            </div>
            <div class="text-xl font-bold tracking-wide">{{item.title}}</div>
            <div class="tracking-wide flex-1 text-zinc-500">{{item.caption}}</div>
            
          </div>
          
        </div>

        <div class="w-full text-center text-xs mt-5 text-zinc-500">●  ○</div>
      </div>

    </section>


    <!-- 信眾服務 start -->
    <section>
      <div class="d-flex place-items-center mt-[5rem] bg-[url(/img/bg/indexServiceListBg.jpg)] bg-cover py-[3rem]">
        <div class="w-fit">
          <img src="/img/obj/roof.png" class="w-[200px]" />
        </div>

        <div class="w-full text-center text-3xl text-red-900 mt-3" 
            style="background-image: linear-gradient(to right, rgba(0,0,0, 0),rgba(171, 131, 12, 0.2),rgba(0, 0, 0, 0))"
        >- 信眾服務 -</div>
        
        <div class="h-fit w-90 grid gap-8 mt-5 p-10 sm:grid-cols-3">

          <div class="text-xl md:text-3xl text-center px-10 py-3 bg-[url(/img/obj/servicebox.svg)] bg-contain bg-center bg-no-repeat">祈福點燈</div>
          <div class="text-xl md:text-3xl text-center px-10 py-3 bg-[url(/img/obj/servicebox.svg)] bg-contain bg-center bg-no-repeat">中元普渡</div>
          <div class="text-xl md:text-3xl text-center px-10 py-3 bg-[url(/img/obj/servicebox.svg)] bg-contain bg-center bg-no-repeat">補財庫</div>

        </div>

      </div>

    </section>

    
    <!-- 合作宮廟 start 
    <section>
      <div class="d-flex place-items-center mt-[5rem]">
        <div class="w-fit">
          <img src="/img/obj/roof.png" class="w-[200px]" />
        </div>

        <div class="w-full text-center text-3xl text-red-900 mt-3" 
            style="background-image: linear-gradient(to right, rgba(0,0,0, 0),rgba(171, 131, 12, 0.2),rgba(0, 0, 0, 0))"
        >- 合作宮廟 -</div>
        
        <div class="h-fit w-[80vw] grid gap-4 mt-5 sm:grid-cols-2 bg-[url(/img/bg/indexServiceListBg.jpg)]">
          <div>

          </div>

        </div>

        <div class="w-full text-center text-xs mt-5 text-zinc-500">●  ○</div>
      </div>

    </section>
    -->

  </div>

    <!-- <div>
      <div>
        <h1 v-for="n in 50" :key="'item'+ n" >Welcome to the Home Page</h1>
        <div>
          <NuxtLink to="/member">會員登入</NuxtLink>
          <NuxtLink to="/member/profile">會員資料</NuxtLink>
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


const columns = reactive([
  {
    img: 'https://bobibobi.tw/Temples/SiteFile/light/40.jpeg',
    title: '蛇年十二生肖運勢',
    caption: '2025年是乙巳蛇年，乙木與巳火結合，木火相生，這一年不同生肖的運勢會受到「蛇」 這個生肖以及天干地支的影響。',
  },
  {
    img: 'https://bobibobi.tw/Temples/SiteFile/light/38.jpeg',
    title: '光明燈',
    caption: '點光明燈的目的在於祈求光明、智慧與平安，尤其在運勢低迷或犯太歲的年份 ，會選擇點光明燈以消災解厄。',
  },
  {
    img: 'https://bobibobi.tw/Temples/SiteFile/light/39.jpeg',
    title: '太歲燈',
    caption: '在特定年份犯太歲或希望增強運勢的人。點太歲燈的目的是化解流年不利、增旺福祿壽禧，祈求平安順遂。',
  },
  {
    img: 'https://bobibobi.tw/Temples/SiteFile/light/41.jpg',
    title: '補財庫',
    caption: '透過向財神與城隍爺祈求補足財庫缺漏，修復財富流通，扭轉財運、吸引財氣，為事業、投資帶來更多保障。',
  },
])

const news = reactive([
  {
    title: '遠見 | 光明燈是什麼？「線上點燈」有用嗎？想求財、求順遂該去哪間廟？',
    caption: '伴隨農曆新年即將到來，財神燈、太歲燈、平安燈等傳統祈福點燈儀式也跟著活絡，然而2020年以後因為新冠疫情影響，民眾生活習慣也從宮廟點燈，轉移為線上點燈。',
    link: 'https://www.gvm.com.tw/article/118470',
  },
  {
    title: 'ETtoday新聞雲 | 保必保庇攜手大甲鎮瀾宮線上點燈服務邁入第四年',
    caption: '國內知名的宗教科技平台「保必保庇」與全臺代表性媽祖信仰中心大甲鎮瀾宮攜手合作的線上點燈服務，正式邁入第四年。這項創新的合作計畫自推出以來，深受全球信徒支持與肯定，為傳統宗教儀式注入科技活力，同時帶動信仰文化的數位化轉型。',
    link: 'https://www.ettoday.net/news/20241224/2879589.htm',
  },
  // {
  //   title: '今周刊 | 光明燈何時點？大甲鎮瀾宮、新港奉天宮…11所廟宇5步驟「免人擠人」',
  //   caption: '「過往如果是親自在過年期間跑一趟廟宇點燈，不計算車程，光排隊可能就要2、3小時，現在用線上點燈，可以省下車程與排隊的時間。」新薪網元科技股份有限公司（保必保庇線上宮廟）執行長王耀賢這樣說明過去信徒在過年期間面對的痛點。',
  //   link: 'https://www.businesstoday.com.tw/article/category/183027/post/202501060023/',
  // },
  // {
  //   title: 'udn聯合新聞網 | 農曆春節「線上點燈」商機爆發！業者曝求姻緣、財運推薦廟宇',
  //   caption: '熱門的大廟常因點燈人潮而擠得水洩不通，又或距離遙遠難以前往特定廟宇祈福，業者瞄準廟宇科儀的龐大線上商機，讓原本需要親臨現場的儀式，轉變成可在線上完成點燈、消災解厄等儀式。其中，新薪網元科技股份有限公司（保必保庇線上宮廟）就專注提供這樣的線上服務。',
  //   link: 'https://udn.com/news/story/123907/8489460',
  // },
])


</script>

<style>
@import "/assets/css/pages/index.css";
</style>