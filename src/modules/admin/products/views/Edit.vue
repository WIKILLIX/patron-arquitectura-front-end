<template>
    <div class="w-full grid place-items-center">
        <form @submit.prevent="updateData" class="w-96">
            <div>
                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                <div class="mt-2">
                    <input id="name" name="name" type="text" autocomplete="email" required v-model="FormData.name"
                        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div>
                <label for="model" class="block text-sm font-medium leading-6 text-gray-900">Categoria</label>
                <div class="mt-2">
                    <select id="category" name="category" required v-model="FormData.category.id"
                        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name
                            }}</option>
                    </select>
                </div>
            </div>
            <div>
                <label for="model" class="block text-sm font-medium leading-6 text-gray-900">Marca</label>
                <div class="mt-2">
                    <select id="brand" name="brand" required v-model="FormData.brand.id"
                        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option v-for="brand in brands" :key="brand.id" :value="brand.id">{{ brand.name }}</option>
                    </select>
                </div>
            </div>
            <div>
                <label for="img" class="block text-sm font-medium leading-6 text-gray-900">Img</label>
                <div class="mt-2">
                    <input id="img" name="img" type="text" autocomplete="img" required v-model="FormData.img"
                        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div>
                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Precio</label>
                <div class="mt-2">
                    <input id="price" name="price" type="text" autocomplete="price" required v-model="FormData.price"
                        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div>
                <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Descripcion</label>
                <div class="mt-2">
                    <textarea name="description" id="description" rows="2" required v-model="FormData.description"
                        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
            </div>
            <div class="mt-5">
                <button type="submit" class="btn-success">Actualizar</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import Swal from 'sweetalert2';
import { useRoute } from 'vue-router';
import type { Smartphone, Category, Brand } from '../../../../interfaces';

const route = useRoute();

const FormData = ref<Smartphone>({
    name: '',
    img: '',
    price: '0',
    description: '',
    brand: {
        id: 0,
    },
    category: {
        id: 0,
    }
});

const categories = ref<Category[]>([]);

const brands = ref<Brand[]>([]);

const getCategories = async () => {
    try {
        const { data } = await axios.get('http://localhost:8080/api/v1/categories');
        categories.value = data;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
        });
    }
}

const getBrands = async () => {
    try {
        const { data } = await axios.get('http://localhost:8080/api/v1/brands');
        brands.value = data;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
        });
    }
}

const getElementById = async (id: number): Promise<void> => {
    try {
        const { data } = await axios.get<Smartphone>(`http://localhost:8080/api/v1/products/${id}`);
        FormData.value = data;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Se ha producido un error',
            text: 'Intente nuevamente',
        })
    }
}

const updateData = async (): Promise<void> => {
    try {
        await axios.post<Smartphone>(`http://localhost:8080/api/v1/products`, FormData.value);
        Swal.fire({
            icon: 'success',
            title: 'Producto actualizado correctamente',
            showConfirmButton: false,
            timer: 1000
        })
        setTimeout(() => {
            router.push({ name: 'Products' });
        }, 1000);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Se ha producido un error',
            text: 'Intente nuevamente',
        })
    }
}

onMounted(() => {

    let id = parseInt(route.params.id);
    getCategories();
    getBrands();
    getElementById(id);

})
</script>
