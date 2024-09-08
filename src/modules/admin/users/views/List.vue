<template>
    <div class="relative overflow-x-auto">
        <div class="py-5">
            <router-link :to="{ name: 'userCreate' }" class="btn-primary inline-block">
                Crear usuario
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
                        correo
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td class="px-6 py-4">
                        {{ user.id }}
                    </td>
                    <td class="px-6 py-4">
                        {{ user.name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ user.email }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex gap-1">
                            <router-link :to="{ name: 'userEdit', params: { id: user.id } }" type="button" role="button"
                                class="btn-warning">Editar</router-link>
                            <button class="btn-danger" @click="deleteUser(user.id)">Eliminar</button>
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
import type { User } from '@/interfaces';
import { ref, onMounted } from 'vue';

const users = ref<User[]>();

const getData = async () => {
    try {
        const { data } = await axios.get<User[]>('http://localhost:8080/api/v1/users');
        users.value = data;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
        });
    }
};

const deleteUser = (id: number) => {
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
            axios.delete(`http://localhost:8080/api/v1/users/${id}`).then(() => {
                Swal.fire({
                    icon: "success",
                    title: "El usuario fue eliminado",
                    showConfirmButton: false,
                    timer: 1000,
                });
                users.value = users.value?.filter((user) => user.id !== id);
            }).catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "No se pudo eliminar el usuario",
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