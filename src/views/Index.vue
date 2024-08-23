<script setup lang="ts">
import card from '../modules/global/components/CardComponent.vue';
import axios from 'axios';
import { ref } from 'vue';

const products = ref([]);

const getProducts = async () => {
    try {
        const response = await axios.get('https://api.restful-api.dev/objects');

        products.value = response.data;

    } catch (error) {
        console.error(error);
    }

};

getProducts();

</script>

<template>
    <div class="flex w-screen p-10">
        <div class="w-1/3 p-5">
            <form class="max-w-lg mx-auto">

            </form>
        </div>
        <div class="w-full grid grid-cols-3 gap-5">
            <card v-for="product in products" :key="product.id" :celular="product" />
        </div>
    </div>


</template>
