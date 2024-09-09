<template>
    <div class="w-full grid place-items-center">
        <form @submit.prevent="saveData" class="w-96">
            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div class="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
                    <form @submit.prevent="saveData">
                        <div>
                            <label for="email"
                                class="block text-sm font-medium leading-5  text-gray-700">Nombres</label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <input id="name" name="name" placeholder="tablet" type="text" required
                                    v-model="FormData.name"
                                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </div>
                        </div>

                        <div class="mt-6">
                            <span class="block w-full rounded-md shadow-sm">
                                <button type="submit"
                                    class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    Guardar
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

import router from '@/router';
import type { Category } from '../../../../interfaces';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ref } from 'vue';

const FormData = ref<Category>({
    id: 0,
    name: ''
});

const saveData = async (): Promise<void> => {
    try {
        const { data } = await axios.post('http://localhost:8080/api/v1/categories', FormData.value, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        Swal.fire({
            icon: 'success',
            title: 'Categoria creada correctamente',
            showConfirmButton: false,
            timer: 1000
        })

        await router.push({ name: 'categoryList' });

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Se ha producido un error',
            text: 'Intente nuevamente',
        })
    }
}
</script>