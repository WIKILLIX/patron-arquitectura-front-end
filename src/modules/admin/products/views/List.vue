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
                        modelo
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1
                    </th>
                    <td class="px-6 py-4">
                        Apple MacBook Pro 17"
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td>
                        1700000
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex gap-1">
                            <router-link :to="{ name: 'productEdit', params: { id: 1 } }" type="button" role="button"
                                class="btn-warning">Editar</router-link>
                            <button class="btn-danger" @click="deleteProduct(1)">Eliminar</button>
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
            axios.delete(`http://localhost:3000/api/products/${id}`).then(() => {
                Swal.fire({
                    icon: "success",
                    title: "La dependencia ha sido eliminda",
                    showConfirmButton: false,
                    timer: 1000,
                });
            }).catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "No se pudo eliminar el estado",
                    showConfirmButton: false,
                    timer: 1000,
                });
            });
        }
    });
};  
</script>

<style scoped></style>