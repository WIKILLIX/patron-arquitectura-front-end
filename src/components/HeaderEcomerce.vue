<template>
    <nav class="bg-gray-200 shadow shadow-gray-300 w-full px-8 md:px-auto">
        <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
            <!-- Logo -->
            <div class="text-indigo-500 md:order-1">
                <!-- Heroicon - Chip Outline -->
                <img src="../imgs/logo.webp" alt="logo tilin" class="h-12">
            </div>



            <div class="order-2 md:order-3">
                <div>
                    <router-link :to="{ name: 'Login' }"
                        class="text-gray-700 p-2 border border-black rounded w-80">Login</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const search = ref('');

const getByname = () => {
    //traigo la lista u la dejo en un store global con pinia?
};
</script>

<style scoped></style>