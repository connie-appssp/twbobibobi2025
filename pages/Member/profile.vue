<template>
    <div v-if='authStore.isLoggedIn'>
        會員資料
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
    </div>
</template>

<script setup>
const authStore = useAuthStore()
const input = reactive({
    name: authStore.user.name,
    mobile: authStore.user.mobile
})

const handleLogout = () => {
    authStore.logout()
    useRouter().push('/Member')
}

</script>