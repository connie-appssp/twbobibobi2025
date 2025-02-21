<template #content>

    <div class="p-2 md:p-8 bg-white/75 shadow-md flex-auto space-y-4">

        <h1 class="w-full text-center text-xl font-medium text-red-950 md:text-2xl">購買人基本資料</h1>

        <div class="w-fit mx-auto space-y-2">
            
            <div class="w-fit flex items-center space-x-2">
                <div class="w-16 text-justify" style="text-align-last: justify;">
                    <label for="phone" class="font-semibold">信眾姓名</label>
                </div>
                <div class="w-60">
                    <input type="text" v-model='input.name'
                            class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                            required>
                </div>
            </div>

            <div class="w-fit flex items-center space-x-2">
                <div class="w-16 text-justify" style="text-align-last: justify;">
                    <label for="phone" class="font-semibold">手機</label>
                </div>
                <div class="w-60">
                    <input type="text" placeholder="請輸入手機號碼"  v-model='input.mobile'
                            class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                            required>
                </div>
            </div>
            
            <div class="w-fit flex items-center space-x-2">
                <div class="w-16"></div>
                <div class="w-60">
                    <button type="button" 
                            class="w-full bg-red-950 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-950 transition"
                            ref="sendVerifyCodeBtn"
                            v-on:click='verifyMember'>
                        傳送驗證碼
                    </button>
                    <button type="button" 
                            class="bg-red-950 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-950 transition hidden"
                            v-on:click='verifyMember'>
                        90 秒後可重新傳送驗證碼
                    </button>
                </div>
            </div>

            <div v-if='isSendVerifyCode' class="w-fit flex items-center space-x-2">
                <div class="w-16 text-justify" style="text-align-last: justify;">
                    <label for="verifyCode" class="font-semibold">驗證碼</label>
                </div>
                <div class="w-58">
                    <input type="text" placeholder="輸入驗證碼" v-model='verifyCode'
                            class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                            required>
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