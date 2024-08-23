<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import type { Smartphone } from '@/interfaces';
const props = defineProps<{
    product: Smartphone
}>();
</script>
<template>
    <article
        class="group flex rounded-xl max-w-xs flex-col overflow-hidden border border-slate-300 bg-slate-100 text-slate-700">
        <!-- Images -->
        <div>
            <img src="https://gravatar.com/avatar/3cae7f50a6d9fa6c0d3bc9b07b4c5b05?s=400&d=robohash&r=x"
                alt="product.name" class="w-full h-48 object-cover object-center">
        </div>
        <div class="flex flex-col justify-center gap-3 p-5">
            <h3 class="text-lg font-semibold">{{ product.name }}</h3>
            <p class="text-sm">{{ product.description }}</p>
            <p class="text-sm">{{ product.price }}</p>
            <router-link :to="{ name: 'SmartphonesDetail', params: { id: product.id } }"
                class="btn-primary w-full text-center">Ver
                detalle</router-link>
        </div>
    </article>
</template>