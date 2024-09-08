<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Inicia sesión
            </h2>
            <p class="mt-2 text-center text-sm leading-5 text-gray-500 max-w">

                <router-link :to="{ name: 'Register' }"
                    class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Registrate
                </router-link>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form @submit.prevent="login">

                    <div class="mt-6">
                        <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                            Email
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input id="email" name="email" placeholder="user@example.com" type="email" required
                                v-model="email"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                            Contraseña
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input id="password" name="password" type="password" required v-model="password"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <span class="block w-full rounded-md shadow-sm">
                            <button type="submit"
                                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Iniciar sesión
                            </button>
                        </span>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Swal from 'sweetalert2';
import type { User } from '@/interfaces';
import axios from 'axios';
import { ref } from 'vue';
import router from '@/router';

const email = ref('');
const password = ref('');

const login = async () => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/login', {
            email: email.value,
            password: password.value
        });
        if (response.status === 200) {
            // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
            console.log('Inicio de sesión exitoso');
        }
    } catch (error: unknown) {
        /**  if (axios.isAxiosError(error)) {
             if (error.response?.status === 401) {
                 Swal.fire({
                     icon: 'error',
                     title: 'Se ha producido un error',
                     text: 'Correo o contraseña incorrectos',
                 })
             } else {
                 Swal.fire({
                     icon: 'error',
                     title: 'Se ha producido un error',
                     text: 'Error en el servidor. Intenta nuevamente más tarde.',
                 })
             }
         } else {
             Swal.fire({
                 icon: 'error',
                 title: 'Se ha producido un error',
                 text: 'Ocurrió un error inesperado.',
             })
         }
             */

        router.push({ name: 'Admin' });
    }
};
</script>