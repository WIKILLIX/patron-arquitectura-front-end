<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Crea tu cuenta
            </h2>
            <p class="mt-2 text-center text-sm leading-5 text-gray-500 max-w">

                <router-link :to="{ name: 'Login' }"
                    class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    incia sesión
                </router-link>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form @submit.prevent="register">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-5  text-gray-700">Nombres</label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input id="name" name="name" placeholder="John Doe" type="text" required
                                v-model="FormData.username"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                            Contraseña
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input id="password" name="password_confirmation" type="password" required
                                v-model="FormData.password"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <label for="passwordConfirmation" class="block text-sm font-medium leading-5 text-gray-700">
                            Confirmar contraseña
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input id="passwordConfirmation" name="passwordConfirmation" type="password" required
                                v-model="FormData2.password"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>

                    <div class="mt-6">
                        <span class="block w-full rounded-md shadow-sm">
                            <button type="submit"
                                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Registrarse
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
import axios from 'axios';
import type { User } from '@/interfaces';
import { ref } from 'vue';
import router from '@/router';

const FormData = ref<User>({
    id: 0,
    username: '',
    password: ''
});

const FormData2 = ref<any>({
    password: ''
});

const register = async (): Promise<void> => {

    if (FormData.value.password !== FormData2.value.password) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseñas no coinciden',
            text: 'La contraseña y la confirmación de contraseña deben coincidir.',
        });
        return;
    }

    try {
        const { data } = await axios.post<User>('http://localhost:8080/api/v1/users/registerUser', {
            username: FormData.value.username,
            password: FormData.value.password,
            role: 'ADMIN'
        });
        Swal.fire({
            title: '¡Bienvenido!',
            text: 'Has creado tu cuenta correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 1000
        });
        await router.push({ name: 'Login' });
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Se ha producido un error',
            text: 'Intente nuevamente',
        });
    }
}
</script>