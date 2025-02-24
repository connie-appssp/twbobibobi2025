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
            this.isLoggedIn = true;
            this.user = userData;
            
            useCookie('isLoggedIn').value = "true";
            useCookie('user').value = JSON.stringify(this.user);
        },
        logout() {
            this.isLoggedIn = false;
            this.user = null;

            useCookie('isLoggedIn').value = "false";
            useCookie('user').value = null;
        }
    }
})