// import { defineStore } from 'pinia'

interface UserData {
    mobile: string
    name: string
}

export const useAuthStore = defineStore('auth', {
    state: ()=> ({
        isLoggedIn: false,
        user: null as UserData | null,
    }),
    actions: {
        login(userData: UserData) {
            // fetch api ... 
            this.isLoggedIn = true,
            this.user = userData
        },
        logout() {
            this.isLoggedIn = false,
            this.user = null
        }
    }
})