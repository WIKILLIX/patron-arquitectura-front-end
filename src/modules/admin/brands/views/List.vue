<template>
    <div class="relative overflow-x-auto">
        <div class="py-5">
            <router-link :to="{ name: 'brandCreate' }" class="btn-primary inline-block">
                Crear marca
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
                <tr v-for="brand in brands" :key="brand.id">
                    <td class="px-6 py-4">
                        {{ brand.id }}
                    </td>
                    <td class="px-6 py-4">
                        {{ brand.name }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex gap-1">
                            <router-link :to="{ name: 'brandEdit', params: { id: brand.id } }" type="button"
                                role="button" class="btn-warning">Editar</router-link>
                            <button class="btn-danger" @click="deleteProduct(brand.id)">Eliminar</button>
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
import { ref, onMounted } from 'vue';
import type { Brand } from '@/interfaces';

const brands = ref<Brand[]>();

const getData = async () => {
    try {
        const { data } = await axios.get<Brand[]>('http://localhost:8080/api/v1/brands');
        brands.value = data;
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
            axios.delete(`http://localhost:8080/api/v1/brands/${id}`).then(() => {
                Swal.fire({
                    icon: "success",
                    title: "La marca fue eliminada",
                    showConfirmButton: false,
                    timer: 1000,
                });
                brands.value = brands.value?.filter((brand) => brand.id !== id);
            }).catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "No se pudo eliminar la marca",
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