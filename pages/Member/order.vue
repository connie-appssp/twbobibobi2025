<template #content>

    <div class="px-2 pt-1 pb-5 bg-white/75 shadow-md md:col-span-4 md:px-8 md:pt-0" v-cloak>

        <h1 class="w-full text-center text-xl font-medium text-red-950 border-b pb-2 my-4 md:text-2xl">購買資料</h1>

        <div class="w-full mx-auto overflow-auto">

            <table id="testTable" class="table table-striped table-hover m-0 text-nowrap text-center" style="width: 100%;"></table>

        </div>

<!-- 
        <hr class="w-full border-0 h-px bg-zinc-200 my-5" />

        <button class="w-full bg-red-950 text-white px-4 py-2 rounded-lg hover:bg-red-950/[.9] transition disabled:opacity-50" v-on:click="openFormModal">新增祈福人資料</button> -->

        <div v-if="showDetailModal" class="fixed top-0 left-0 w-full h-dvh transition-all duration-300" ref="DetailModal">
            <div class="w-full h-dvh bg-black/25" ref="mask"></div>
            <div class="absolute m-auto inset-0 h-fit w-fit max-w-full p-4">
                <div class="bg-white w-full md:w-[500px] rounded-lg p-4">
                    <div class="h-8 border-b flex justify-between pr-2" ref="modalHeader">
                        <div>詳細資訊</div>
                        <div class="text-2xl/4">
                            <button v-on:click="showDetailModal=false">×</button>
                        </div>
                    </div>
                    <div class="min-h-24 p-2 content-center tracking-wider grid grid-cols-12 items-center space-y-1" ref="modalContent">
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">訂單編號</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{detailData.orderNo}}
                        </div>

                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">購買人</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{detailData.buyer}}
                        </div>

                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">購買人電話</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{detailData.buyerMobile}}
                        </div>

                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">宮廟</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{detailData.temple}}
                        </div>

                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">服務項目</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{define.parseService()[detailData.service]}}
                        </div>

                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">金額</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{detailData.price}}
                        </div>

                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">付款日期</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{detailData.payDate}}
                        </div>

                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">付款狀態</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{define.parsePayStatus()[detailData.payStatus]}}
                        </div>
                        
                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-12" style="margin-top:2rem; margin-bottom:1rem">祈福人基本資料</div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">祈福人</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{detailData.prayFor}}
                        </div>

                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">祈福人電話</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{detailData.prayForMobile}}
                        </div>
                        
                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">居住地址</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{detailData.prayForAddress}}
                        </div>

                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">農曆生日</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{detailData.lunarBirth}}
                        </div>

                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">國曆生日</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{detailData.solarBirth}}
                        </div>

                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">閏月</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{define.parseIsLeap()[detailData.isLeap]}}
                        </div>

                        <div class="col-span-12 border-b border-zinc-100"></div>
                        
                        <div class="col-span-4 md:col-span-3 text-zinc-500">
                            <div class="px-2">電子信箱</div>
                        </div>
                        <div class="col-span-8 md:col-span-9">
                            {{detailData.email}}
                        </div>

                        <div class="col-span-12 border-b border-zinc-100"></div>

                    </div>
                    <div class="h-8 py-2 border-t flex justify-end" ref="modalFooter">
                        <div>
                            <button type="button" 
                                class="bg-red-950 text-white px-2 py-1 rounded-lg hover:bg-yellow-950 transition disabled:opacity-50"
                                ref="sendVerifyCodeBtn"
                                v-on:click='showDetailModal=false'>
                                關閉
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
const showDetailModal = ref(false);
const define = {
    parseDefaultToIcon: (data) => {
        if (data === 1)
            return `<div class='w-fit place-self-center'><input type='checkbox' checked></div>`
    },
    parseService: () => {
        return {
            1: '藥師佛燈',
            2: '觀音佛祖燈',
            3: '超度嬰靈',
            4: '福祿燈'
        }
    },
    parsePayStatus: () => {
        return {
            0: '付款中',
            1: '已付款',
            2: '未付款'
        }
    },
    parseIsLeap: () => {
        return {
            0: '非閏月',
            1: '閏月'
        }
    }
};

const api = {
    GetOrderList: '',
};

const detailData = reactive({
    orderNo: '',
    buyer: '',
    buyerMobile: '',
    temple: '',
    service: '',
    price: '',
    payDate: '',
    prayFor: '',
    prayForMobile: '',
    prayForAddress: '',
    lunarBirth: '',
    solarBirth: '',
})

let tableParams = null;
let tableInst = null;
let resOrderList = reactive([
    {
        parentId: 0,
        dataid: 1,
        date: '2024-02-09',
        buyer: '王大明他媽',
        mobile: '0900111222',
        temple: '桃園威天宮',
        total: 5880,
        payStatus: 1,
        products: [
            {
                parentId: 1,
                dataid: 1,
                orderNo: 'FUI1211',
                prayFor: '王小明',
                mobile: '0922111000',
                zip: '500',
                city: '彰化縣',
                area: '彰化市',
                street: '中正路二段',
                lunarBirth: '民國60年3月7日',
                solorBirth: '民國60年4月8日',
                isLeap: 0,
                email: 'abc@example.com',
                service: 1,
                price: 600
            },
            {
                parentId: 1,
                dataid: 2,
                orderNo: 'FUI1212',
                prayFor: '王大明',
                mobile: '0922111000',
                zip: '500',
                city: '彰化縣',
                area: '彰化市',
                street: '中正路二段',
                lunarBirth: '民國60年3月7日',
                solorBirth: '民國60年4月8日',
                isLeap: 0,
                email: 'abc@example.com',
                service: 4,
                price: 4280
            },
        ],
    },
    {
        parentId: 0,
        dataid: 2,
        date: '2024-02-05',
        buyer: '王大明',
        mobile: '0900111222',
        temple: '西螺福興宮',
        total: 2400,
        payStatus: 1,
        products: [
            {
                parentId: 2,
                dataid: 1,
                orderNo: 'FUI1221',
                prayFor: '王小明',
                mobile: '0922111000',
                zip: '500',
                city: '彰化縣',
                area: '彰化市',
                street: '中正路二段',
                lunarBirth: '民國60年3月7日',
                solorBirth: '民國60年4月8日',
                isLeap: 0,
                email: 'abc@example.com',
                service: 1,
                price: 600
            },
            {
                parentId: 2,
                dataid: 2,
                orderNo: 'FUI1222',
                prayFor: '王中明',
                mobile: '0922111000',
                zip: '500',
                city: '彰化縣',
                area: '彰化市',
                street: '中正路二段',
                lunarBirth: '民國60年3月7日',
                solorBirth: '民國60年4月8日',
                isLeap: 1,
                email: 'abc@example.com',
                service: 2,
                price: 600
            },
            {
                parentId: 2,
                dataid: 3,
                orderNo: 'FUI1223',
                prayFor: '王大明',
                mobile: '0922111000',
                zip: '500',
                city: '彰化縣',
                area: '彰化市',
                street: '中正路二段',
                lunarBirth: '民國60年3月7日',
                solorBirth: '民國60年4月8日',
                isLeap: 0,
                email: 'abc@example.com',
                service: 3,
                price: 1200
            },
        ],
    },
    {
        parentId: 0,
        dataid: 3,
        date: '2024-01-26',
        buyer: '王大明他爸',
        mobile: '0900111222',
        temple: '大甲鎮瀾宮',
        total: 620,
        payStatus: 1,
        products: [
            {
                parentId: 3,
                dataid: 1,
                orderNo: 'FUI1231',
                prayFor: '王小明',
                mobile: '0922111000',
                zip: '500',
                city: '彰化縣',
                area: '彰化市',
                street: '中正路二段',
                lunarBirth: '民國60年3月7日',
                solorBirth: '民國60年4月8日',
                isLeap: 0,
                email: 'abc@example.com',
                service: 2,
                price: 620
            },
        ],
    },
])

const expandGroups = []; // 紀錄展開中的群組，供排序後設定用



// Methods
const apiGetOrderList = () => axios.get(api.GetOrderList).catch(error => console.log(error))
const GetOrderList = async () => {
    try {
        const data = resOrderList;

        tableParams = setTableParams();
        generateTable(tableParams, '#testTable');

    } catch (error) {
        console.log( 'GetOrderList', error)
    }

}


const setDetailData = (parentInfo, childInfo) => {
    detailData.buyer = parentInfo.buyer;
    detailData.buyerMobile = parentInfo.mobile;
    detailData.temple = parentInfo.temple;
    detailData.payDate = parentInfo.date;
    detailData.payStatus = parentInfo.payStatus;

    detailData.orderNo = childInfo.orderNo;
    detailData.service = childInfo.service;
    detailData.price = childInfo.price;
    detailData.prayFor = childInfo.prayFor;
    detailData.prayForMobile = childInfo.mobile;
    detailData.prayForAddress = childInfo.zip + childInfo.city + childInfo.area + childInfo.street;
    detailData.lunarBirth = childInfo.lunarBirth;
    detailData.solarBirth = childInfo.solorBirth;
    detailData.isLeap = childInfo.isLeap;
    detailData.email = childInfo.email;
}

const clearChild = () => {
    const doms = document.querySelectorAll('[class^=pid]');
    if (doms.length)
        doms.forEach(dom => dom.remove());
};

const addGroupDataRow = (parentInfo) => {
    // if changing columns, must to check columns in setDataTableParams() too
    const groupDom = document.querySelector('.gid-' + parentInfo.dataid);

    parentInfo.products.forEach(child => {
        const detailBtn = document.createElement('button');
        const i = document.createElement('i');

        detailBtn.classList.add('bg-red-950', 'text-white', 'px-2', 'py-1', 'rounded-lg', 'hover:bg-red-950/[.5]');
        i.classList.add('fa', 'fa-search');
        detailBtn.append(i);

        const columnsData = {
            parentId: child.parentId,
            dataid: child.dataid,
            date: child.orderNo,
            buyer: child.prayFor,
            temple: child.service,
            total: child.price,
            detail: detailBtn,
        };

        const tr = document.createElement('tr');
        tr.classList.add('pid-' + columnsData.parentId);

        Object.entries(columnsData).forEach(item => {
            const td = document.createElement('td');
            td.style.verticalAlign = 'middle';

            if (item[0] === 'parentId') td.innerHTML = '└';
            else if (item[0] === 'detail') td.appendChild(item[1]);
            else if (item[0] === 'temple') td.innerHTML = define.parseService()[item[1]];
            else td.innerHTML = item[1];

            
            if (item[0] === 'dataid')
                td.style.display = 'none';

            if (item[0] === 'detail') {
                td.addEventListener('click', () => {
                    setDetailData(parentInfo, child);
                    openDetailModal();
                });
            }

            tr.appendChild(td);
        });
        
        groupDom.after(tr);
    });
};

const openGroup = (parentData) => {
    //console.log('openGroup', parentData.Id);

    // show child's data
    const doms = document.querySelectorAll('.pid-' + parentData.dataid);
    doms.forEach(dom => dom.style.display = 'table-row');

    // change parent's icon
    const parentDom = document.querySelector('.gid-' + parentData.dataid);
    parentDom.firstElementChild.innerHTML = `<i class="fa-solid fa-minus"></i>`;

    // insert parent id to expandGroups[]
    const isIdExist = expandGroups.some(item => item === parentData.dataid);
    if (!isIdExist)
        expandGroups.push(parentData.dataid);
};

const closeGroup = (parentData) => {
    // hide child's data
    const doms = document.querySelectorAll('.pid-' + parentData.dataid);
    doms.forEach(dom => dom.style.display = 'none');

    // change parent's icon
    const parentDom = document.querySelector('.gid-' + parentData.dataid);
    parentDom.firstElementChild.innerHTML = `<i class="fa-solid fa-plus"></i>`;

    // remove parent id from expandGroups[]
    const pIndex = expandGroups.findIndex(item => item === parentData.dataid);
    if (pIndex > -1)
        expandGroups.splice(pIndex, 1);
};

const toggleGroup = (parentData) => {
    const isExpandGroup = expandGroups.some(item => item === parseInt(parentData.dataid));
    if (isExpandGroup)
        closeGroup(parentData);
    else
        openGroup(parentData);
};

const setGroupStatus = (parentData) => {
    const isExpandGroup = expandGroups.some(item => item === parseInt(parentData.dataid));
    console.log('setGroupStatus', isExpandGroup);
    if (isExpandGroup)
        openGroup(parentData);
    else
        closeGroup(parentData);
};


const mapGroup = (e) => {
    // const app = this;
    // 清空 child 重新 insert
    clearChild();
    e.api().rows().every(function (rowIdx, tableLoop, rowLoop) {
        const parentInfo = this.data();
        addGroupDataRow(parentInfo);
        setGroupStatus(parentInfo);
    });
};

// const closeAllGroup = () => {
//     // hide child's data
//     const doms = document.querySelectorAll('[class^=pid]');
//     doms.forEach(dom => dom.style.display = 'none');

//     // change parent's icon
//     const parentDoms = document.querySelectorAll('[class^=gid]');
//     parentDoms.forEach(parentDom => parentDom.firstElementChild.innerHTML = `<i class="fa-solid fa-plus"></i>`);

//     // remove all parent id from expandGroups[]
//     this.expandGroups.length = 0;

//     // hide expandBtn & show collapseBtn
//     document.querySelector('.expandBtn').classList.remove('d-none');
//     document.querySelector('.collapseBtn').classList.add('d-none');
// };

// const openAllGroup = () => {
//     // hide child's data
//     const doms = document.querySelectorAll('[class^=pid]');
//     doms.forEach(dom => dom.style.display = 'table-row');

//     // change parent's icon
//     const parentDoms = document.querySelectorAll('[class^=gid]');
//     parentDoms.forEach(parentDom => parentDom.firstElementChild.innerHTML = `<i class="fa-solid fa-minus"></i>`);

//     // insert parent id to expandGroups[]
//     this.parseResData.forEach(parentData => {
//         const isIdExist = this.expandGroups.some(item => item === parseInt(parentData.Id));
//         if (!isIdExist)
//             this.expandGroups.push(parentData.Id);
//     });

//     // show expandBtn & hide collapseBtn
//     document.querySelector('.expandBtn').classList.add('d-none');
//     document.querySelector('.collapseBtn').classList.remove('d-none');
// }

const setTableParams = () => {
    return {
        data: resOrderList,
        paging: false,
        searching: false,
        order: [[1, "desc"]],
        columns:[
            { 
                data: 'parentId',
                title: '',
                orderable: false,
                // render: (data, type, row) => {
                //     return type === 'export' && !data ? '-' : '';
                // },
                createdCell: (td, cellData, rowData, row, col) => {
                    let res = `<i class="fa-solid fa-plus"></i>`;
                    $(td).html(res).css('cursor', 'pointer');
                    $(td).click(() => {
                        toggleGroup(rowData);
                    });
                },
            },
            { data: 'dataid', title: '', visible: false },
            { data: 'date', title: '購買日期<br>/訂單編號' },
            { data: 'buyer', title: '購買人<br>/祈福人' },
            { data: 'temple', title: '宮廟<br>/服務項目' },
            { data: 'total', title: '總額<br>/服務金額' },
            { 
                data: null, 
                title: '詳細',
                className: 'text-center w-20',
                render: (data, type, row, meta) => ''
            },
            { data: 'mobile', title: '', visible: false },
        ],
        createdRow: (row, data, dataIndex) => {
            $(row).addClass('gid-' + data.dataid + ' align-middle bg-zinc-200');
        },
        initComplete: function (settings, json) {
            //console.log('DataTables has finished its initialisation.');
            const initCompleteThis = this;
            mapGroup(initCompleteThis);

            $('#testTable').on('draw.dt', function (e, settings) {
                // add child's data after sorting completed
                mapGroup(initCompleteThis);
            })
        },
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


function openDetailModal() {
    showDetailModal.value = true;
}


onMounted(() => {
    console.log('receive', authStore)
    if (!authStore.isLoggedIn) {
        useRouter().push('/Member')
    }

    GetOrderList();
})

</script>

<style>
@import "~/assets/css/plugins/dataTables.tailwindcss.css";

.dt-info {
    display: none;
}
</style>
