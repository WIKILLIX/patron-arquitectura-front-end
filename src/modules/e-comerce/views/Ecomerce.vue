<template>
    <div class="flex gap-5 p-5">
        <aside>
            <div class="pt-2 relative mx-auto text-gray-600 md:order-2">

                <input
                    class="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" v-model="search">

            </div>
            <form @submit.prevent="filterProducts">

                <div class="mt-6">
                    <label for="marca" class="block text-sm font-medium leading-5 text-gray-700">
                        marca
                    </label>
                    <select name="marca" id="marca" class="rounded p-1 border w-full" v-model="filters.brand">
                        <option v-for="brand in brands" :value="brand.id" :key="brand.id">{{ brand.name }}</option>
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
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import type { Smartphone, Brand } from '@/interfaces';
import Swal from 'sweetalert2';
import _ from 'lodash';

const brands = ref<Brand[]>([]);
const products = ref<Smartphone[]>();
const search = ref('');

const filters = ref({
    price: {
        min: '',
        max: ''
    },
    brand: 0
});

watch(search, _.debounce((newQuestion: string) => {
    if (newQuestion.length < 1) {
        getDevices();
    }
    if (newQuestion.length > 4) {
        axios.get<Smartphone[]>(`http://localhost:8080/api/v1/products/name=${newQuestion}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                products.value = response.data;
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }
}, 500));

const getBrands = async () => {
    try {
        const { data } = await axios.get('http://localhost:8080/api/v1/brands', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        brands.value = data;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
        });
    }
}

const getDevices = async () => {
    try {
        const { data } = await axios.get('http://localhost:8080/api/v1/products', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        products.value = data;
    } catch (error) {
        console.error(error);
    }
}

const filterProducts = async () => {
    try {
        const brand = brands.value.find(brand => brand.id === filters.value.brand);
        const { data } = await axios.post('http://localhost:8080/api/v1/products/productsByBrand', brand, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        products.value = data;
    } catch (error) {
        console.error(error);
    }
}
onMounted(() => {
    getBrands();
    getDevices();
});

</script>

<style scoped></style>