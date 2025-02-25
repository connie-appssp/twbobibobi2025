<template #content>

    <div class="px-2 pt-1 pb-5 bg-white/75 shadow-md md:col-span-4 md:px-8 md:pt-0">

        <h1 class="w-full text-center text-xl font-medium text-red-950 border-b pb-2 my-4 md:text-2xl">基本資料</h1>

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

            <div class="w-fit flex items-center space-x-2">
                <div class="w-20 text-justify self-start pt-2" style="text-align-last: justify;">
                    <label for="phone">電子信箱</label>
                </div>
                <div class="w-60">
                    <input type="text" v-model='input.email[0]'
                            class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                            placeholder="account@example.com"
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
        
    </div>

</template>

<script setup>
import { useRoute } from 'vue-router'

definePageMeta({
  layout: 'member',
  title: '基本資料',
})

const isSendVerifyCode = ref(false);
const authStore = {
    isLoggedIn: useCookie('isLoggedIn'),
    user: useCookie('user')
};
// const authStore = useAuthStore()

const input = reactive({
    name: authStore.user?.name,
    mobile: authStore.user?.mobile,
    email: ['', ''],

})

const handleLogout = () => {
    authStore.logout()
    useRouter().push('/Member')
}

onMounted(() => {
    
    console.log('profile', authStore)
    if (!authStore.isLoggedIn) {
        useRouter().push('/Member')
    }
})

</script>