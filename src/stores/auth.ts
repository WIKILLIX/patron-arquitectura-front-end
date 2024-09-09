import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useAuthStore = defineStore('auth', () => {
    const token = ref('')
    const localStorageToken = localStorage.getItem('token')
    const isAuthenticated = computed(() => token.value !== '')
    if (localStorageToken) {
        token.value = localStorageToken
    }
    function logout() {
        token.value = ''
        localStorage.removeItem('token')
    }
    return { isAuthenticated, logout }
})