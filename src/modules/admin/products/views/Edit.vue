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
                <label for="brand" class="block text-sm font-medium leading-6 text-gray-900">Marca</label>
                <div class="mt-2">
                    <select name="brand" id="brand" v-model="FormData.brand"
                        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option value="1">Apple</option>
                        <option value="2">Samsung</option>
                        <option value="3">Xiaomi</option>
                    </select>

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
import axios from 'axios';
import { onMounted, ref } from 'vue';
import Swal from 'sweetalert2';
import { useRoute } from 'vue-router';
import type { Smartphone } from '../../../../interfaces';

const route = useRoute();

const FormData = ref<Smartphone>({
    id: 0,
    name: '',
    brand: '',
    price: '0',
    description: ''
});


const getElementById = async (id: number): Promise<void> => {
    try {
        // const response = await axios.get(`http://localhost:3000/api/products/${id}`);
        const response = {
            id: 1,
            name: 'iphone 15 pro max',
            brand: '1',
            price: '1700000',
            description: 'Un teléfono muy caro'
        };

        FormData.value = response;
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
        await axios.put<Smartphone>(`http://localhost:3000/api/products/${FormData.value.id}`, FormData);
        Swal.fire({
            icon: 'success',
            title: 'Producto actualizado correctamente',
            showConfirmButton: false,
            timer: 1000
        })
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

    getElementById(id);
})
</script>
