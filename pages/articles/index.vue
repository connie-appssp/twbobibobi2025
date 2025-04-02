<template #content>
    <div class="md:mt-[5rem]">


        <section>
            <div class="place-items-center">
                <div class="w-[80vw] text-center text-3xl text-red-950 mt-3 tracking-widest">專欄文章</div>
                
                <div class="h-fit w-[80vw] mt-5 sm:grid-cols-2 place-items-center">
                    <div class="w-full h-12 border border-zinc-300 rounded-full flex">
                        <input type="text" class="flex-1 rounded-l-full bg-white/70 px-5 focus-visible:outline-0" placeholder="你想瞭解什麼嗎 ? ...">
                        <button class="text-2xl text-zinc-400 rounded-r-full bg-white/70 px-3">
                            <ClientOnly><i class="fa fa-search"></i></ClientOnly>
                        </button>
                    </div>

                    <div class="w-full flex mt-2 px-0 space-x-5">
                        <div class="flex-1 flex flex-wrap" v-if="!!columns.length">
                            <div v-for="column, index in columns" :key="column.title+index" class="w-fit px-3 py-1 mb-2 mr-2 border border-zinc-300 bg-white/30 text-zinc-400 text-sm rounded-full hover:bg-zinc-600 hover:text-white transition duration-700 cursor-pointer" v-on:click="toggleArticleList(column)">{{column.title}}</div>
                            <!-- <div class="w-fit px-3 py-1 mb-2 mr-2 border border-zinc-300 bg-white/30 text-zinc-400 text-sm rounded-full hover:bg-zinc-600 hover:text-white transition duration-700 cursor-pointer">燈種說明</div>
                            <div class="w-fit px-3 py-1 mb-2 mr-2 border border-zinc-300 bg-white/30 text-zinc-400 text-sm rounded-full hover:bg-zinc-600 hover:text-white transition duration-700 cursor-pointer">生肖運勢</div>
                            <div class="w-fit px-3 py-1 mb-2 mr-2 border border-zinc-300 bg-white/30 text-zinc-400 text-sm rounded-full hover:bg-zinc-600 hover:text-white transition duration-700 cursor-pointer">過年注意事項</div> -->
                        </div>
                    </div>
                    
                </div>

            </div>
        </section>

        <section class="place-items-center space-y-3 mt-5">
            <div v-for="article, index in articles" :key="article.metaSiteTitle + index" class="grid w-[80vw] bg-white/20 backdrop-blur-sm rounded-md shadow-md p-3 space-y-2 group cursor-pointer md:flex md:p-3 md:space-x-5 md:space-y-0" v-on:click="goArticle(article.articlesId)">
                <div>
                    <div class="md:w-28 aspect-square overflow-hidden">
                        <img :src="article.img" class="w-full" />
                    </div>
                </div>
                <div class="w-full flex flex-col">
                    <div class="text-2xl tracking-wide">{{article.metaSiteTitle}}</div>
                    <div class="flex-1 text-zinc-500 tracking-wide line-clamp-2">{{article.metaSiteCaption}}</div>
                    <div class="w-full flex justify-between">
                        <div class="text-sm text-zinc-400 tracking-wide py-1">文章分類：{{article.columnTitle}}</div>
                        <div class="w-fit px-3 py-1 border border-zinc-200 text-zinc-400 text-xs rounded-full group-hover:bg-zinc-600 group-hover:text-white transition duration-700">前往文章</div>
                    </div>
                </div>
            </div>
            
        </section>


    </div>
</template>

<script setup>
import axios from 'axios';

const apiBase = useRuntimeConfig().public.apiBase;
const api = {
    GetColumns: `${apiBase}/Columns`,
    GetArticles: `${apiBase}/Articles`,
};

const columns = ref([]);
const articles = ref([])
// const articles = reactive([
//     {
//         dataid: 2,
//         column: '燈種說明',
//         MetaSiteTitle: '光明燈介紹',
//         MetaSiteCaption: '保必保庇導讀｜光明燈是一種傳統的宗教祈福方式，常見於道教和佛教信仰中。點光明燈的目的在於祈求光明、智慧與平安，尤其在運勢低迷或犯太歲的年份 ，很多人會選擇點光明燈以消災解厄，祈求新的一年能夠順利無礙。',
//         img: 'https://bobibobi.tw/Temples/images/temple/Zodiac/Rat_2025.jpg',
//     },
//     {
//         dataid: 5,
//         column: '生肖運勢',
//         MetaSiteTitle: '2025生肖運勢',
//         MetaSiteCaption: '保必保庇導讀｜2025年是乙巳蛇年，乙木與巳火結合，木火相生，象徵著能量增強與活力的年份。這一年不同生肖的運勢會受到「蛇」 這個生肖以及天干地支的影響。',
//         img: 'https://bobibobi.tw/Temples/images/temple/Zodiac/Rat_2025.jpg',
//     },
//     {
//         dataid: 12,
//         column: '過年注意事項',
//         MetaSiteTitle: '過年祭祖注意事項',
//         MetaSiteCaption: '保必保庇導讀｜過年祭祖是重要的傳統儀式，代表對祖先的尊敬與感恩，同時祈求新年家宅平安、運勢昌隆。在進行祭祖儀式時，有以下注意事項，幫助您莊重且順利地完成儀式。',
//         img: "https://bobibobi.tw/Temples/SiteFile/News/20241228_NewsImg_s.jpg?t=666168",
//     },
// ])


const goArticle = (dataid) => location.href=`/articles/${dataid}`;

const apiGetColumns = (params) => { return axios.get(api.GetColumns, params).catch((error) => console.warn('apiGetColumns: ', error.response?.data || error)) };
const GetColumns = async (queryTitle) => {
    const queryStringParams = {
        params: {
            queryTitle: queryTitle
        }
    };

    try {
        const { data } = await apiGetColumns(queryStringParams);
        console.log('GetColumns data', data)
        columns.value = data;
    } catch (error) { console.warn('GetColumns: ', error.response?.data || error) }
};

const apiGetArticles = (params) => { return axios.get(api.GetArticles, params).catch((error) => console.warn('apiGetArticles: ', error)) };
const GetArticles = async (columns) => {
    const queryStringParams = {
        params: {
            ColumnsId: columns.columnsId
        }
    };

    try {
        const { data } = await apiGetArticles(queryStringParams);
        console.log('GetArticles data', data)
        articles.value = parseArticlesData(data, columns.title);

    } catch (error) { console.warn('GetArticles: ', error) }
};

const toggleArticleList = async (columns) => {
    await GetArticles(columns);
}

function parseArticlesData(data, columnTitle) {
    return data.map(item => {
        const obj = JSON.parse(JSON.stringify(item));
        obj.columnTitle = columnTitle;
        return obj;
    })
}

onMounted(()=>{
    GetColumns(null);
})
</script>