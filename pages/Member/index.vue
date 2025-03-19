<template #content>
    <div class="p-2 md:p-8 bg-white/75 shadow-md md:col-start-2 md:col-span-3 space-y-4" v-cloak>

        <h1 class="w-full text-center text-xl font-medium text-red-950 md:text-2xl">信眾身份驗證</h1>

        <div class="w-fit mx-auto space-y-2 mt-3">

            <div class="w-fit flex items-center space-x-2">
                <div class="w-16 text-justify" style="text-align-last: justify;">
                    <label for="phone">手機</label>
                </div>
                <div class="w-48">
                    <input type="text" placeholder="請輸入手機號碼"  v-model='mobile'
                            class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                            required>
                </div>
            </div>
            
            <div class="w-fit flex items-center space-x-2">
                <div class="w-16"></div>
                <div class="w-48">
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
                <div class="w-16 text-justify" style="text-align-last: justify;">
                    <label for="verifyCode" class="font-semibold">驗證碼</label>
                </div>
                <div class="w-48">
                    <input type="text" placeholder="輸入驗證碼" v-model='verifyCode'
                            class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                            required>
                </div>
                
            </div>

            <div class="w-full">
                <div v-if='verifyResult === 2' class="w-full p-2 bg-white/75">驗證失敗，請重新驗證</div>

                <div v-if='loginError.code === 2' class="w-full p-2 bg-white/75">{{loginError.msg}}</div>
            </div>

            <div v-if='isSendVerifyCode' class="w-full">
                <button class="w-full bg-red-950 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-950 transition"
                        v-on:click='handleLogin'>驗證登入</button>
            </div>

        </div>

        <div v-if="checkMember===2" class="fixed top-0 left-0 w-full h-dvh transition-all duration-300" ref="InfoModal">
            <div class="w-full h-dvh bg-black/25" ref="mask"></div>
            <div class="absolute m-auto inset-0 h-fit w-fit max-w-full p-4">
                <div class="bg-white w-full md:w-[500px] h-48 rounded-lg p-4">
                    <div class="h-8 border-b flex justify-between pr-2" ref="modalHeader">
                        <div>訊息</div>
                        <div class="text-2xl/4">
                            <button v-on:click="checkMember=0">×</button>
                        </div>
                    </div>
                    <div class="min-h-24 p-2 text-center content-center tracking-wider" ref="modalContent">
                        還沒成為信眾會員嗎?<br>立即傳送手機驗證碼成為會員
                    </div>
                    <div class="h-8 py-2 border-t flex justify-center" ref="modalFooter">
                        <div>
                            <button class="px-2 py-1 rounded text-white bg-teal-700 hover:bg-teal-800 focus:bg-teal-800"
                                v-on:click="sendVerifyCode">發送驗證碼</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'member',
  title: '信眾身份驗證',
  })

const sendVerifyCodeBtn = ref(null); // Dom ref
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

const verifyMember = () => {
    // fetch api to check member's mobile number
    // if mobile number exists, then verify number
    if (mobile.value === '0987654321') {
        checkMember.value = 1;
        sendVerifyCode();
    } else {
        checkMember.value = 2;
    }
}

const sendVerifyCode = () => {
    // fetch api to check member's mobile number
    // if mobile number exists, then verify number
    if (mobile.value === '0987654321' || mobile.value === '0912345678') {
        isSendVerifyCode.value = true;
        sendVerifyCodeBtn.value.classList.add('hidden');
    } else {
        isSendVerifyCode.value = false;
        sendVerifyCodeBtn.value.classList.remove('hidden');
    }

    checkMember.value = 0;
    
    
}

const matchVerifyCode = () => {
    
    if (verifyCode.value === '2511') 
        verifyResult.value = 1;
    else {
        verifyResult.value = 2;
        return false;
    }

    return true;
}

const handleLogin = () => {
    console.log('handleLogin', matchVerifyCode())
    if (!matchVerifyCode()) return false;

    if (mobile.value === '0987654321') {
        loginError.code = 1;
        loginError.msg = '登入成功，歡迎回來';
        authStore.login({mobile: mobile.value, name: '王大明'})
        useRouter().push('/member/profile') // 跳轉到會員資料頁
    } else if (mobile.value === '0912345678') {
        loginError.code = 1;
        loginError.msg = '登入成功，歡迎加入';
        authStore.login({mobile: mobile.value, name: '王小明'})
        useRouter().push('/member/profile') // 跳轉到會員資料頁
    } else {
        loginError.code = 2;
        loginError.msg = '手機號碼不存在';
    }

}

</script>