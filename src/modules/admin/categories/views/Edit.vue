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
import type { Category } from '../../../../interfaces';
import router from '@/router';

const route = useRoute();

const FormData = ref<Category>({
    id: 0,
    name: ''
});


const getElementById = async (id: number): Promise<void> => {
    try {
        const { data } = await axios.get<Category>(`http://localhost:8080/api/v1/categories/${id}`);
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
        await axios.post<Category>(`http://localhost:8080/api/v1/categories`, FormData.value);

        setTimeout(() => {
            router.push({ name: 'categoryList' });
        }, 1000);

        Swal.fire({
            icon: 'success',
            title: 'Caregoria actualizada correctamente',
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
