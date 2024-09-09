<template>
    <div class="relative overflow-x-auto">
        <div class="py-5">
            <router-link :to="{ name: 'productCreate' }" class="btn-primary inline-block">
                Crear producto
            </router-link>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        #
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Producto
                    </th>
                    <th scope="col" class="px-6 py-3">
                        marca
                    </th>
                    <th scope="col" class="px-6 py-3">
                        categoria
                    </th>
                    <th scope="col" class="px-6 py-3">
                        precio
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="product in products"
                    :key="product.id">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ product.id }}
                    </th>
                    <td class="px-6 py-4">
                        {{ product.name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ product.brand.name }}
                    </td>
                    <td>
                        {{ product.category.name }}
                    </td>
                    <td>
                        {{ product.price }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex gap-1">
                            <router-link :to="{ name: 'productEdit', params: { id: product.id } }" type="button"
                                role="button" class="btn-warning">Editar</router-link>
                            <button class="btn-danger" @click="deleteProduct(product.id)">Eliminar</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Swal from 'sweetalert2';
import axios from 'axios';
import type { Smartphone } from '@/interfaces';
import { ref, onMounted } from 'vue';

const products = ref<Smartphone[]>();

const getData = async () => {
    try {
        const { data } = await axios.get('http://localhost:8080/api/v1/products', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        products.value = data;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
        });
    }
};

const deleteProduct = (id: number) => {
    Swal.fire({
        title: "Esta seguro?",
        text: "Esta accion es irreversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminalo!"
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:8080/api/v1/products/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(() => {
                products.value = products.value?.filter((product) => product.id !== id);
                Swal.fire({
                    icon: "success",
                    title: "EL producto ha sido elimindo",
                    showConfirmButton: false,
                    timer: 1000,
                });
            }).catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "No se pudo eliminar el producto",
                    showConfirmButton: false,
                    timer: 1000,
                });
            });
        }
    });
};

onMounted(() => {
    getData();
});
</script>