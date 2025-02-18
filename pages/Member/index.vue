<template>
    <div>
        會員登入
        <div>
            手機 <input v-model='mobile' type='text' required>
            <button v-on:click='sendVerifyCode'>發送驗證碼</button>
        </div>
        <div v-if='isSendVerifyCode'>
            輸入驗證碼 <input type="text" v-model='verifyCode'>
            <button v-on:click='matchVerifyCode'>驗證</button>
        </div>
        
        <div v-if='verifyResult === 1'>
            <button v-on:click='handleLogin'>登入</button>
        </div>

        <!-- 會員身分檢查 -->
        <div v-if='checkMember===2'>還不是會員，立即註冊</div>

        <!-- 驗證碼結果 -->
        <div v-if='verifyResult === 1'>驗證成功</div>
        <div v-if='verifyResult === 2'>驗證失敗，請重新驗證</div>

        <!-- 登入錯誤訊息 -->
        <div v-if='loginError.code === 2'>{{loginError.msg}}</div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
// import { useAuthStore } from '@/stores/auth'

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