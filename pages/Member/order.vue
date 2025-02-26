<template #content>

    <div class="px-2 pt-1 pb-5 bg-white/75 shadow-md md:col-span-4 md:px-8 md:pt-0">

        <h1 class="w-full text-center text-xl font-medium text-red-950 border-b pb-2 my-4 md:text-2xl">購買資料</h1>

        <div class="w-full mx-auto overflow-auto">

            <table id="testTable" class="table table-striped table-hover m-0 text-nowrap text-center" style="width: 100%;"></table>

        </div>

        <hr class="w-full border-0 h-px bg-zinc-200 my-5" />

        <button class="w-full bg-red-950 text-white px-4 py-2 rounded-lg hover:bg-red-950/[.9] transition disabled:opacity-50" v-on:click="openFormModal">新增祈福人資料</button>

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

const api = {
    GetOrderList: '',
};

const input = reactive({
    name: authStore.user?.name,
    mobile: authStore.user?.mobile,
    isOversea: "0",
})

let tableParams = null;
let tableInst = null;
// let parseResOrderList = reactive([]);
let resOrderList = reactive([
    {
        dataid: 1,
        dateOrNo: '2024-02-09',
        buyOrPray: '王大明他媽',
        templeOrService: '桃園威天宮',
        totalOrPrice: 5880,
        products: [
            {
                dateOrNo: 'FUI1221',
                buyOrPray: '王小明',
                templeOrService: 1, // e.g. 1: 藥師佛燈 ; 2: 觀音佛祖燈 ； 3: 超度嬰靈 ； 4: 福祿燈
                totalOrPrice: 600
            },
            {
                dateOrNo: 'FUI1221',
                buyOrPray: '王大明',
                templeOrService: 4,
                totalOrPrice: 4280
            },
        ],
    },
    {
        dataid: 2,
        dateOrNo: '2024-02-05',
        buyOrPray: '王大明',
        templeOrService: '西螺福興宮',
        totalOrPrice: 2400,
        products: [
            {
                dateOrNo: 'FUI1221',
                buyOrPray: '王小明',
                templeOrService: 1,
                totalOrPrice: 600
            },
            {
                dateOrNo: 'FUI1222',
                buyOrPray: '王中明',
                templeOrService: 2,
                totalOrPrice: 600
            },
            {
                dateOrNo: 'FUI1221',
                buyOrPray: '王大明',
                templeOrService: 3,
                totalOrPrice: 1200
            },
        ],
    },
    {
        dataid: 3,
        dateOrNo: '2024-01-26',
        buyOrPray: '王大明他爸',
        templeOrService: '大甲鎮瀾宮',
        totalOrPrice: 620,
        products: [
            {
                dateOrNo: 'FUI1221',
                buyOrPray: '王小明',
                templeOrService: 2,
                totalOrPrice: 620
            },
        ],
    },
])




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

// const mapGroup = (e) => {
//     // const app = this;
//     // 清空 child 重新 insert
//     this.clearChild();
//     e.api().rows().every(function (rowIdx, tableLoop, rowLoop) {
//         const parentInfo = this.data();
//         addGroupDataRow(parentInfo);
//         setGroupStatus(parentInfo);
//     });
// };

// const addGroupDataRow = (parentInfo) => {
//     // if changing columns, must to check columns in writeExcel()、setDataTableParams() too
//     const groupDom = document.querySelector('.gid-' + parentInfo.Id);

//     parentInfo.childData.forEach(child => {
//         const detailBtn = `
//         <button class="btn btn-primary detailBtn">
//             <i class="fa-solid fa-copy"></i>
//         </button>`;

//         const columnsData = {
//             ParentId: child.ParentId,
//             Id: child.ParentId, //test
//             Name: child.Name,
//             RCurrent: child.RCurrent,
//             SCurrent: child.SCurrent,
//             TCurrent: child.TCurrent,
//             ContractCapacity: child.ContractCapacity,
//             NonOCPPChargeNum: child.NonOCPPChargeNum,
//             MACAddress: child.MACAddress,
//             copy: copyBtn,
//             edit: editBtn,
//             trash: trashBtn,
//             new: '',
//         };

//         const tr = document.createElement('tr');
//         tr.classList.add('pid-' + columnsData.ParentId);

//         Object.entries(columnsData).forEach(item => {
//             const td = document.createElement('td');
//             td.style.verticalAlign = 'middle';
//             td.innerHTML = item[0] === 'ParentId' ? '└' : item[1];

//             if (item[0] === 'Id')
//                 td.style.display = 'none';

//             if (item[0] === 'copy') {
//                 td.addEventListener('click', () => {
//                     this.setCopyData(child);
//                     this.openCopyModal();
//                 });
//             }

//             if (item[0] === 'edit') {
//                 td.addEventListener('click', () => {
//                     this.setModifyData(child);
//                     this.openModifyModal();
//                 });
//             }

//             if (item[0] === 'trash') {
//                 td.addEventListener('click', () => {
//                     this.setDeleteData(child);
//                     this.openDeleteModal();
//                 });
//             }


//             tr.appendChild(td);
//         });

        
//         groupDom.after(tr);
//     });
// };


// const setGroupStatus = (parentData) => {
//     const isExpandGroup = this.expandGroups.some(item => item === parseInt(parentData.Id));
//     if (isExpandGroup)
//         this.openGroup(parentData);
//     else
//         this.closeGroup(parentData);
// };

// const toggleGroup = (parentData) => {
//     const isExpandGroup = this.expandGroups.some(item => item === parseInt(parentData.Id));
//     if (isExpandGroup)
//         this.closeGroup(parentData);
//     else
//         this.openGroup(parentData);
// };
// const closeGroup = (parentData) => {
//     // hide child's data
//     const doms = document.querySelectorAll('.pid-' + parentData.Id);
//     doms.forEach(dom => dom.style.display = 'none');

//     // change parent's icon
//     const parentDom = document.querySelector('.gid-' + parentData.Id);
//     parentDom.firstElementChild.innerHTML = `<i class="fa-solid fa-plus"></i>`;

//     // remove parent id from expandGroups[]
//     const pIndex = this.expandGroups.findIndex(item => item === parentData.Id);
//     if (pIndex > -1)
//         this.expandGroups.splice(pIndex, 1);
// };
// const openGroup = (parentData) => {
//     //console.log('openGroup', parentData.Id);

//     // show child's data
//     const doms = document.querySelectorAll('.pid-' + parentData.Id);
//     doms.forEach(dom => dom.style.display = 'table-row');

//     // change parent's icon
//     const parentDom = document.querySelector('.gid-' + parentData.Id);
//     parentDom.firstElementChild.innerHTML = `<i class="fa-solid fa-minus"></i>`;

//     // insert parent id to expandGroups[]
//     const isIdExist = this.expandGroups.some(item => item === parentData.Id);
//     if (!isIdExist)
//         this.expandGroups.push(parentData.Id);
// };

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
                data: 'dataid',
                title: '',
                orderable: false,
                // render: (data, type, row) => {
                //     return type === 'export' && !data ? '-' : '';
                // },
                createdCell: (td, cellData, rowData, row, col) => {
                    let res = `<i class="fa-solid fa-minus"></i>`;
                    $(td).html(res).css('cursor', 'pointer');
                    $(td).click(() => {
                        // toggleGroup(rowData);
                    });
                },
             },
            { data: 'dateOrNo', title: '購買日期<br>/訂單編號' },
            { data: 'buyOrPray', title: '購買人<br>/祈福人' },
            { data: 'templeOrService', title: '宮廟<br>/服務項目' },
            { data: 'totalOrPrice', title: '總額<br>/服務金額' },
            { 
                data: null, 
                title: '詳細',
                className: 'text-center w-20',
                // render: (data, type, row, meta) => {
                //     return define.parseDefaultToIcon(data);
                // },
                createdCell: (td, cellData, rowData, rowIndex, colIndex) => {
                    const button = document.createElement('button');
                    button.classList.add('bg-red-950', 'text-white', 'px-2', 'py-1', 'rounded-lg', 'hover:bg-red-950/[.5]');
                    button.textContent = '查看';
                    
                    $(td).html(button);
                }
            },
        ],
        createdRow: (row, data, dataIndex) => {
            $(row).addClass('gid-' + data.Id + ' align-middle bg-dark bg-gradient');
        },
        initComplete: function (settings, json) {
            //console.log('DataTables has finished its initialisation.');
            // const initCompleteThis = this;
            // mapGroup(initCompleteThis);

            // $('#displayTable').on('draw.dt', function (e, settings) {
            //     // add child's data after sorting completed
            //     mapGroup(initCompleteThis);
            // })
        },
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


    GetOrderList();
    
})

</script>

<style>
@import "~/assets/css/plugins/dataTables.tailwindcss.css";

.dt-info {
    display: none;
}
</style>
