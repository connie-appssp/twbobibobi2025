<template #content>
    <div class="container mx-auto px-4">
        <nav aria-label="breadcrumb" class="border-b border-zinc-300 p-2 text-zinc-400 text-sm">
            <ol class="flex space-x-1">
                <li><a href="/">首頁</a></li>
                <li>&gt;</li>
                <li><a href="/category">信眾服務</a></li>
                <li>&gt;</li>
                <li>訂單查詢</li>
                <li>&gt;</li>
                <li>信眾身份驗證</li>
            </ol>
        </nav>

        <div class="w-fit mx-auto space-y-2 mt-3">

            <div class="w-fit flex items-center space-x-2">
                <div class="w-16 text-justify" style="text-align-last: justify;">
                    <label for="phone" class="font-semibold">手機</label>
                </div>
                <div class="w-48">
                    <input type="text" placeholder="請輸入手機號碼"  v-model='mobile'
                            class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                            required>
                </div>
                <div class="w-20">&nbsp;</div>
            </div>
            
            <div class="w-fit flex items-center space-x-2">
                <div class="w-16">&nbsp;</div>
                <div class="w-48">
                    <button type="button" 
                            class="w-full bg-red-950 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-950 transition"
                            v-on:click='sendVerifyCode'>
                        傳送驗證碼
                    </button>
                    <button type="button" 
                            class="bg-red-950 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-950 transition hidden"
                            v-on:click='sendVerifyCode'>
                        90 秒後可重新傳送驗證碼
                    </button>
                </div>
                <div class="w-20">&nbsp;</div>
            </div>

            <div v-if='isSendVerifyCode' class="w-fit flex items-center space-x-2">
                <div class="w-16 text-justify" style="text-align-last: justify;">
                    <label for="verifyCode" class="font-semibold">驗證碼</label>
                </div>
                <div class="w-48">
                    <input type="text" placeholder="輸入驗證碼" v-model='verifyCode'
                            class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                            required>
                </div>
                <div class="w-20">
                    <button type="button" 
                            class="w-fit bg-red-950 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-950 transition"
                            v-on:click='matchVerifyCode'>
                        驗證
                    </button>
                </div>
            </div>

            <div class="w-full">

                <div v-if='checkMember===2' class="w-full p-2 bg-white/75">還不是會員，立即註冊</div>

                <div v-if='verifyResult === 1' class="w-full p-2 bg-white/75">驗證成功</div>
                <div v-if='verifyResult === 2' class="w-full p-2 bg-white/75">驗證失敗，請重新驗證</div>

                <div v-if='loginError.code === 2' class="w-full p-2 bg-white/75">{{loginError.msg}}</div>

            </div>

            <div v-if='verifyResult === 1' class="w-full">
                <button class="w-full bg-red-950 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-950 transition"
                        v-on:click='handleLogin'>登入</button>
            </div>

        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'member',
  title: '會員登入',
  })

const mobile = ref('');
const checkMember = ref(0);
const isSendVerifyCode = ref(false);
const verifyCode = ref('');
const verifyResult = ref(0);
const loginError = reactive({
    code: null,
    msg: ''
})

const authStore = useAuthStore()

const sendVerifyCode = () => {
    // fetch api to check member's mobile number
    // if mobile number exists, then verify number
    if (mobile.value === '0987654321') {
        checkMember.value = 1;
        isSendVerifyCode.value = true;
    } else {
        checkMember.value = 2;
        isSendVerifyCode.value = false;
    }
    
}

const matchVerifyCode = () => {
    
    if (verifyCode.value === '2511') 
        verifyResult.value = 1
    else
        verifyResult.value = 2;

    console.log('matchVerifyCode', verifyResult.value)
}

const handleLogin = () => {
    if (mobile.value === '0987654321') {
        loginError.code = 1;
        loginError.msg = '登入成功，歡迎回來';
        authStore.login({mobile: mobile.value, name: '王大明'})
        useRouter().push('/Member/profile') // 跳轉到會員資料頁
    } else {
        loginError.code = 2;
        loginError.msg = '手機號碼不存在';
    }

}

</script>