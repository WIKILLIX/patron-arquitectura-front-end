<template>
    <div class="relative overflow-x-auto">
        <div class="py-5">
            <router-link :to="{ name: 'categoryCreate' }" class="btn-primary inline-block">
                Crear categoria
            </router-link>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        #
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in categories" :key="category.id">
                    <td class="px-6 py-4">
                        {{ category.id }}
                    </td>
                    <td class="px-6 py-4">
                        {{ category.name }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex gap-1">
                            <router-link :to="{ name: 'categoryEdit', params: { id: category.id } }" type="button"
                                role="button" class="btn-warning">Editar</router-link>
                            <button class="btn-danger" @click="deleteProduct(category.id)">Eliminar</button>
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
import { ref } from 'vue';
import type { Category } from '@/interfaces';

const categories = ref<Category[]>();

const getData = async () => {
    try {
        const { data } = await axios.get('http://localhost:8080/api/v1/categories', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        categories.value = data;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
        });
    }
};

getData();

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
            axios.delete(`http://localhost:8080/api/v1/categories/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(() => {
                Swal.fire({
                    icon: "success",
                    title: "La categoria fue eliminado",
                    showConfirmButton: false,
                    timer: 1000,
                });
                categories.value = categories.value?.filter((category) => category.id !== id);
            }).catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "No se pudo eliminar la catergoria",
                    showConfirmButton: false,
                    timer: 1000,
                });
            });
        }
    });
};  
</script>