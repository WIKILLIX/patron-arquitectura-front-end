<template>
    <div class="flex gap-5 p-5">
        <aside>
            <form @submit.prevent="filterProducts">
                <div class="mt-6">
                    <label for="" class="block text-sm font-medium leading-5 text-gray-700">
                        Precio
                    </label>
                    <div class="flex gap-3 justify-center items-center">
                        <input type="number" placeholder="min" min="0" class="border rounded p-1"
                            v-model="filters.price.min">
                        <input type="number" placeholder="max" max="9999999" class="border rounded p-1"
                            v-model="filters.price.max">
                    </div>
                </div>
                <div class="mt-6">
                    <label for="marca" class="block text-sm font-medium leading-5 text-gray-700">
                        marca
                    </label>
                    <select name="marca" id="marca" class="rounded p-1 border w-full" v-model="filters.brand">
                        <option value="">Seleccionar</option>
                        <option value="1">Marca 1</option>
                        <option value="2">Marca 2</option>
                        <option value="3">Marca 3</option>
                    </select>
                </div>
                <div>
                    <button type="submit" class="btn-primary w-full mt-5">Filtar</button>
                </div>
            </form>


        </aside>
        <main>
            <div class="grid grid-cols-3 gap-4">
                <CardComponent v-for="product in products" :key="product.id" :product="product" />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import CardComponent from '@/modules/global/components/CardComponent.vue';
import { ref } from 'vue';
import axios from 'axios';
import type { Smartphone } from '@/interfaces';



const filters = ref({
    price: {
        min: '',
        max: ''
    },
    brand: ''
});

const products = ref<Smartphone[]>();

const getDevices = async () => {
    try {
        // const { data } = await axios.get('https://api.restful-api.dev/objects');
        const data: Smartphone[] = [
            {
                id: 1,
                name: 'Smartphone 1',
                price: '1000',
                model: 'Marca 1',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                id: 2,
                name: 'Smartphone 2',
                price: '2000',
                model: 'Marca 2',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                id: 3,
                name: 'Smartphone 3',
                price: '3000',
                model: 'Marca 3',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                id: 4,
                name: 'Smartphone 4',
                price: '4000',
                model: 'Marca 4',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
            {
                id: 5,
                name: 'Smartphone 5',
                price: '5000',
                model: 'Marca 5',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            },
        ]

        products.value = data;
    } catch (error) {
        console.error(error);
    }
}

const filterProducts = async () => {
    try {
        const { data } = await axios.post('http://localhost:3000/products', filters.value);

        products.value = data;
    } catch (error) {
        console.error(error);
    }
}

getDevices();

</script>

<style scoped></style>