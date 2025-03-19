<template #content>

    <div class="px-2 pt-1 pb-5 bg-white/75 shadow-md md:col-span-4 md:px-8 md:pt-0" v-cloak>

        <h1 class="w-full text-center text-xl font-medium text-red-950 border-b pb-2 my-4 md:text-2xl">祈福人資料</h1>

        <div class="w-full mx-auto overflow-auto">

            <table id="testTable" class="table table-striped table-hover m-0 text-nowrap text-center" style="width: 100%;"></table>

        </div>

        <hr class="w-full border-0 h-px bg-zinc-200 my-5" />

        <button class="w-full bg-red-950 text-white px-4 py-2 rounded-lg hover:bg-red-950/[.9] transition disabled:opacity-50"
                v-on:click="openFormModal">新增祈福人資料</button>

        <div v-if="showForm" class="fixed top-0 left-0 w-full h-dvh transition-all duration-300" ref="FormModal">
            <div class="w-full h-dvh bg-black/25" ref="mask"></div>
            <div class="absolute m-auto inset-0 h-fit w-fit max-w-full p-4">
                <div class="bg-white w-full md:w-[500px] rounded-lg p-4">
                    <div class="h-8 border-b flex justify-between pr-2" ref="modalHeader">
                        <div>新增祈福人資料</div>
                        <div class="text-2xl/4">
                            <button v-on:click="showForm=false">×</button>
                        </div>
                    </div>
                    <div class="min-h-24 p-2 text-center content-center tracking-wider grid grid-cols-12 items-center space-y-1" ref="modalContent">
                        
                        <div class="col-span-4 md:col-span-3">
                            <div class="px-2" style="text-align-last: justify;">姓名</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            <input type="text" v-model='input.name'
                                    class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                                    required>
                        </div>

                        <div class="col-span-12"></div>
                        
                        <div class="col-span-4 md:col-span-3">
                            <div class="px-2" style="text-align-last: justify;">電話</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            <input type="tel" v-model='input.name'
                                    class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                                    required>
                        </div>

                        <div class="col-span-12"></div>
                        
                        <div class="col-span-4 md:col-span-3">
                            <div class="px-2" style="text-align-last: justify;">性別</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            <input type="tel" v-model='input.name'
                                    class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                                    required>
                        </div>

                        <div class="col-span-12"></div>
                        
                        <div class="col-span-4 md:col-span-3">
                            <div class="px-2" style="text-align-last: justify;">農曆生日</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            <input type="tel" v-model='input.name'
                                    class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                                    required>
                        </div>

                        <div class="col-span-12"></div>
                        
                        <div class="col-span-4 md:col-span-3">
                            <div class="px-2" style="text-align-last: justify;">閏月</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            <input type="tel" v-model='input.name'
                                    class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                                    required>
                        </div>

                        <div class="col-span-12"></div>
                        
                        <div class="col-span-4 md:col-span-3">
                            <div class="px-2" style="text-align-last: justify;">時辰</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            <input type="tel" v-model='input.name'
                                    class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                                    required>
                        </div>

                        <div class="col-span-12"></div>
                        
                        <div class="col-span-4 md:col-span-3">
                            <div class="px-2" style="text-align-last: justify;">國曆生日</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            <input type="tel" v-model='input.name'
                                    class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                                    required>
                        </div>

                        <div class="col-span-12"></div>
                        
                        <div class="col-span-4 md:col-span-3">
                            <div class="px-2" style="text-align-last: justify;">電子信箱</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            <input type="tel" v-model='input.name'
                                    class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                                    required>
                        </div>
                        <div class="col-span-12"></div>
                        
                        <div class="col-span-4 md:col-span-3 self-start pt-2">
                            <div class="px-2 " style="text-align-last: justify;">收件人地址</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            <select class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                                    v-model='input.isOversea'
                                    required>
                                <option value="0">國內</option>
                                <option value="1">國外</option>
                            </select>
                        </div>

                        <div class="col-span-12 space-y-1">
                            <div v-if="Number(input.isOversea) === 0" class="w-full flex flex-row items-center">
                                <input type="text" v-model='input.zip'
                                        class="w-1/3 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                                        placeholder="區碼"
                                        required>
                                <select class="w-1/3 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none">
                                    <option value="">縣市</option>
                                    <option value="">台中市</option>
                                </select>
                                <select class="w-1/3 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none">
                                    <option value="">地區</option>
                                    <option value="">西屯區</option>
                                    <option value="">四個字區</option>
                                </select>
                            </div>
                            
                            <input type="text" v-model='input.name'
                                    class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                                    placeholder="街道地址"
                                    required>
                                    <span class="text-zinc-400">請填寫完整地址，以便寄送特定服務之贈品</span>
                        </div>
                        
                    </div>
                    <div class="h-8 py-2 border-t flex justify-end" ref="modalFooter">
                        <div>
                            <button type="button" 
                                class="bg-red-950 text-white px-2 py-1 rounded-lg hover:bg-yellow-950 transition disabled:opacity-50"
                                ref="sendVerifyCodeBtn"
                                v-on:click='verifyMember' disabled>
                                儲存
                            </button>
                        </div>
                    </div>
                </div>
            </div>

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
const showForm = ref(false);
const define = {
    parseDefaultToIcon: (data) => {
        if (data === 1)
            return `<div class='w-fit place-self-center'><input type='checkbox' checked></div>`
    },

};

const input = reactive({
    name: authStore.user?.name,
    mobile: authStore.user?.mobile,
    isOversea: "0",
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
            { data: 'name', title: '姓名', className: 'text-center w-20' },
            { data: 'name', title: '電話', className: 'text-center w-20' },
            { data: 'zip', title: '地址-郵遞區號', visible: false },
            { data: 'city', title: '地址-縣市', visible: false },
            { data: 'area', title: '地址-地區', visible: false },
            { data: 'street', title: '地址-街道', visible: false },
            { 
                data: null, 
                title: '地址', 
                className: 'text-left',
                render: (data, type, row, meta) => {
                    return row.zip + row.city + row.area + row.street;
                }
            },
            { 
                data: null, 
                title: '詳細',
                className: 'text-center w-20',
                // render: (data, type, row, meta) => {
                //     return define.parseDefaultToIcon(data);
                // },
                createdCell: (td, cellData, rowData, rowIndex, colIndex) => {
                    const button = document.createElement('button');
                    const i = document.createElement('i');
                    button.classList.add('bg-red-950', 'text-white', 'px-2', 'py-1', 'rounded-lg', 'hover:bg-red-950/[.5]');
                    i.classList.add('fa', 'fa-eye');
                    button.append(i)

                    // button.textContent = '查看';
                    
                    $(td).html(button);
                }
            },
            { 
                data: null, 
                title: '編輯',
                className: 'text-center w-20',
                // render: (data, type, row, meta) => {
                //     return define.parseDefaultToIcon(data);
                // },
                createdCell: (td, cellData, rowData, rowIndex, colIndex) => {
                    const button = document.createElement('button');
                    const i = document.createElement('i');
                    button.classList.add('bg-red-950', 'text-white', 'px-2', 'py-1', 'rounded-lg', 'hover:bg-red-950/[.5]');
                    i.classList.add('fa', 'fa-edit');
                    button.append(i)
                    // button.textContent = '查看';
                    
                    $(td).html(button);
                }
            },
            { 
                data: null, 
                title: '刪除',
                className: 'text-center w-20',
                // render: (data, type, row, meta) => {
                //     return define.parseDefaultToIcon(data);
                // },
                createdCell: (td, cellData, rowData, rowIndex, colIndex) => {
                    const button = document.createElement('button');
                    const i = document.createElement('i');
                    button.classList.add('bg-red-500', 'text-white', 'px-2', 'py-1', 'rounded-lg', 'hover:bg-red-950/[.5]');
                    i.classList.add('fa', 'fa-trash');
                    button.append(i)
                    // button.textContent = '查看';
                    
                    $(td).html(button);
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

const openFormModal = () => {
    // initFormData();
    showForm.value = true;
}


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

<style>
@import "~/assets/css/plugins/dataTables.tailwindcss.css";

.dt-info {
    display: none;
}
</style>
