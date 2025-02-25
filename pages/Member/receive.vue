<template #content>

    <div class="px-2 pt-1 pb-5 bg-white/75 shadow-md md:col-span-4 md:px-8 md:pt-0">

        <h1 class="w-full text-center text-xl font-medium text-red-950 border-b pb-2 my-4 md:text-2xl">收件資料</h1>

        <div class="w-full mx-auto overflow-auto">

            <table id="testTable" class="table table-striped table-hover m-0 text-nowrap text-center" style="width: 100%;"></table>

        </div>

        <h1 class="w-full text-center text-xl font-medium text-red-950 border-b pb-2 my-4 md:text-2xl">收件資料</h1>

        <div class="w-fit mx-auto space-y-2">

            <div class="w-fit flex items-center space-x-2">
                <div class="w-20 text-justify" style="text-align-last: justify;">
                    <label for="phone">收件人姓名</label>
                </div>
                <div class="w-60">
                    <input type="text" v-model='input.name'
                            class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                            required>
                </div>
            </div>
            
            <div class="w-fit flex items-center space-x-2">
                <div class="w-20 text-justify self-start pt-2" style="text-align-last: justify;">
                    <label for="phone">收件地址</label>
                </div>
                <div class="w-60">
                    <div class="w-full flex flex-row items-center">
                        <input type="text" v-model='input.zip'
                                class="w-1/3 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                                placeholder="區碼"
                                required>
                        <select class="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none">
                            <option value="">縣市</option>
                            <option value="">台中市</option>
                        </select>
                        <select class="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none">
                            <option value="">地區</option>
                            <option value="">西屯區</option>
                            <option value="">四個字區</option>
                        </select>

                    </div>
                    
                    <input type="text" v-model='input.name'
                            class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                            placeholder="街道地址"
                            required>
                            <span class="text-zinc-400">請填寫完整地址，以便寄送特定服務所附之贈品</span>
                </div>

            </div>

            <button type="button" 
                    class="w-full bg-red-950 text-white px-4 py-2 rounded-lg hover:bg-yellow-950 transition disabled:opacity-50"
                    ref="sendVerifyCodeBtn"
                    v-on:click='verifyMember' disabled>
                儲存
            </button>

        </div>
        
    </div>

</template>

<script setup>
import { useRoute } from 'vue-router'
import $ from "jquery";
import DataTable from 'datatables.net-dt';

definePageMeta({
  layout: 'member',
  title: '常用收件資料',
})

const authStore = {
    isLoggedIn: useCookie('isLoggedIn'),
    user: useCookie('user')
};

const isSendVerifyCode = ref(false);
// const authStore = useAuthStore()

const define = {
    parseDefaultToIcon: (data) => {
        if (data === 1)
            return `<div class='w-fit place-self-center'><input type='checkbox' checked></div>`
    },

};

const input = reactive({
    name: authStore.user?.name,
    mobile: authStore.user?.mobile
    // name: '',
    // mobile: ''
})

let tableParams = null;
let tableInst = null;
let resReceiveList = [
    {
        dataid: 1,
        name: '王大明',
        zip: 500,
        city: '彰化縣',
        area: '彰化市',
        street: '中正路一段',
        isDefault: 0,
    },
    {
        dataid: 1,
        name: '王中明',
        zip: 500,
        city: '彰化縣',
        area: '彰化市',
        street: '中正路二段',
        isDefault: 1,
    },
    {
        dataid: 1,
        name: '王小明',
        zip: 500,
        city: '彰化縣',
        area: '彰化市',
        street: '中正路三段',
        isDefault: 0,
    },
]

const setTableParams = () => {
    return {
        data: resReceiveList,
        paging: false,
        searching: false,
        order: [[0, "desc"]],
        columns:[
            { data: 'dataid', title: '資料編號', visible: false },
            
            { 
                data: 'isDefault', 
                title: '預設',
                className: 'text-center w-20',
                // render: (data, type, row, meta) => {
                //     return define.parseDefaultToIcon(data);
                // },
                createdCell: (td, cellData, rowData, rowIndex, colIndex) => {
                    const icon = cellData ? define.parseDefaultToIcon(cellData) : '';
                    // console.log(td.html())
                    
                    $(td).html(icon);
                }
            },
            { data: 'name', title: '姓名', className: 'text-center w-20' },
            { data: 'name', title: '電話', className: 'text-center w-20' },
            { data: 'zip', title: '地址-郵遞區號', visible: false },
            { data: 'city', title: '地址-縣市', visible: false },
            { data: 'area', title: '地址-地區', visible: false },
            { data: 'street', title: '地址-街道', visible: false },
            { 
                data: null, 
                title: '地址', 
                render: (data, type, row, meta) => {
                    return row.zip + row.city + row.area + row.street;
                }
            },
        ],
    }

}


const generateTable = (params, dom) => {
    if (tableInst)
        tableInst.destroy();
    
    tableInst = new DataTable(dom, params);
    // $('#dataTablesButton').html(tableInst.button().container()); // buttons placement
};

const handleLogout = () => {
    authStore.logout()
    useRouter().push('/Member')
}

onMounted(() => {
    console.log('receive', authStore)
    if (!authStore.isLoggedIn) {
        useRouter().push('/Member')
    }

    
    tableParams = setTableParams();
    generateTable(tableParams, '#testTable');
})

</script>

<style scoped>
@import "~/assets/css/plugins/dataTables.tailwindcss.css";
</style>
