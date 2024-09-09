<template>
    <!-- component -->
    <nav class="bg-gray-200 shadow shadow-gray-300 w-full px-8 md:px-auto">
        <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
            <!-- Logo -->
            <div class="text-indigo-500 md:order-1">
                <!-- Heroicon - Chip Outline -->
                <img src="../imgs/logo.webp" alt="logo tilin" class="h-12">
            </div>

            <div class="order-2 md:order-3">
                <div class="relative inline-block text-left">
                    <div>
                        <button type="button"
                            class="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            id="menu-button" aria-expanded="true" aria-haspopup="true" @click="dropdown = !dropdown">
                            <img src="https://gravatar.com/avatar/bc404e5ba5fc6ab114fd31f62d1ae82d?s=400&d=robohash&r=x"
                                alt="avatar" class="h-8">
                        </button>
                    </div>

                    <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"
                        v-show="dropdown">
                        <div class="py-1" role="none">
                            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                            <!-- <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                id="menu-item-0">Account settings</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                id="menu-item-1">Support</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                id="menu-item-2">License</a> -->

                            <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-700"
                                @click="logout" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const dropdown = ref(false);
import { useAuthStore } from '../stores/auth';
import router from '@/router';

const logout = () => {
    useAuthStore().logout();
    router.push({ name: 'Login' });
}
</script>

<style scoped></style>