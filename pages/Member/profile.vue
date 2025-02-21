<template #content>

    <div class="px-2 md:px-8 bg-white/75 shadow-md flex-auto">

        <h1 class="w-full text-center text-xl font-medium text-red-950 border-b pb-2 my-4 md:text-2xl">購買人基本資料</h1>

        <div class="w-fit mx-auto space-y-2">
            
            <div class="w-fit flex items-center space-x-2">
                <div class="w-20 text-justify" style="text-align-last: justify;">
                    <label for="phone">信眾姓名</label>
                </div>
                <div class="w-60">
                    <input type="text" v-model='input.name'
                            class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                            required>
                </div>
            </div>

            <div class="w-fit flex items-center space-x-2">
                <div class="w-20 text-justify" style="text-align-last: justify;">
                    <label for="phone">手機</label>
                </div>
                <div class="w-60">
                    <input type="text" placeholder="請輸入手機號碼"  v-model='input.mobile'
                            class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                            required>
                </div>
            </div>
            
            <div class="w-fit flex items-center space-x-2">
                <div class="w-20"></div>
                <div class="w-60">
                    <button type="button" 
                            class="w-full bg-red-950 text-white px-4 py-2 rounded-lg hover:bg-yellow-950 transition"
                            ref="sendVerifyCodeBtn"
                            v-on:click='verifyMember'>
                        傳送驗證碼
                    </button>
                    <button type="button" 
                            class="bg-red-950 text-white px-4 py-2 rounded-lg hover:bg-yellow-950 transition hidden"
                            v-on:click='verifyMember'>
                        90 秒後可重新傳送驗證碼
                    </button>
                </div>
            </div>

            <div v-if='isSendVerifyCode' class="w-fit flex items-center space-x-2">
                <div class="w-20 text-justify" style="text-align-last: justify;">
                    <label for="verifyCode">驗證碼</label>
                </div>
                <div class="w-58">
                    <input type="text" placeholder="輸入驗證碼" v-model='verifyCode'
                            class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                            required>
                </div>
                
            </div>

            <button type="button" 
                    class="w-full bg-red-950 text-white px-4 py-2 rounded-lg hover:bg-yellow-950 transition disabled:opacity-50"
                    ref="sendVerifyCodeBtn"
                    v-on:click='verifyMember' disabled>
                儲存
            </button>

        </div>


        <h1 class="w-full text-center text-xl font-medium text-red-950 border-b mt-8 mb-4 pb-2 md:text-2xl">收件基本資料</h1>

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

        </div>
        
    </div>
    <!-- <div class="p-2 md:p-8" v-if='authStore.isLoggedIn'>
        購買人基本資料
        <div>
            <div>
                姓名: 
                <input type='text' v-model='input.name'>
            </div>
            <div>
                手機: 
                <input type='text' v-model='input.mobile'>
            </div>
        </div>
        <div>
            <button v-on:click='handleLogout'>登出</button>
        </div>
    </div> -->


</template>

<script setup>
import { useRoute } from 'vue-router'

definePageMeta({
  layout: 'member',
  title: '基本資料',
})

const isSendVerifyCode = ref(false);
const authStore = useAuthStore()

const input = reactive({
    name: authStore.user?.name,
    mobile: authStore.user?.mobile
    // name: '',
    // mobile: ''
})

const handleLogout = () => {
    authStore.logout()
    useRouter().push('/Member')
}

onMounted(() => {
    if (!authStore.isLoggedIn) {
        useRouter().push('/Member')
    }
})

</script>