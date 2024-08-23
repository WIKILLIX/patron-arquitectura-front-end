<template>
    <div class="flex w-screen h-screen">
        <SideBarAdmin />
        <div class="w-full">
            <HeaderAdmin />
            <RouterView class="p-5" />
        </div>

    </div>

    <!-- <router-view /> -->
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import SideBarAdmin from '@/components/SideBarAdmin.vue';
import HeaderAdmin from '@/components/HeaderAdmin.vue';
</script>