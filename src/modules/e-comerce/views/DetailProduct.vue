<template>
    <div class="container mx-auto p-5">
        <div class="flex flex-col gap-10">
            <div class="flex items-center justify-between mt-20">
                <div class="grid place-items-center">
                    <img src="https://gravatar.com/avatar/3cae7f50a6d9fa6c0d3bc9b07b4c5b05?s=400&d=robohash&r=x"
                        alt="foto smartphone" class="object-cover">
                </div>
                <main class="flex flex-col justify-between h-96 p-5 max-w-96">
                    <div>
                        <h1 class="text-2xl font-semibold">{{ smartphone.name }} <small>{{ smartphone.brand.name
                                }}</small>
                        </h1>
                        <div class="flex items-center">
                            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                    </div>

                    <p class="text-4xl">${{ smartphone.price }}</p>

                    <p>{{ smartphone.description }}</p>
                </main>
                <section class="border p-2 rounded h-96 w-60 flex flex-col justify-between items-center">
                    <p><span class="text-green-500">Envío gratis</span> a todo el pais</p>
                    <b>Stock disponible</b>
                    <small><b>cantidad: </b> 5</small>
                    <button class="btn-success w-full">Comprar</button>
                </section>
            </div>
            <div class="">
                <h3>comentar: </h3>
                <textarea rows="3" class="border rounded w-full h-20" v-model="comment.comment">

                </textarea>
                <div class="text-right mt-4">
                    <button class="btn-primary" disabled>
                        Comentar
                    </button>
                </div>
            </div>
            <div>
                <h3 class="mb-5">Comentarios:</h3>
                <div class="flex flex-col gap-5">
                    <p v-for="comentario in comentarios" class="w-full border rounded p-3">{{ comentario }}</p>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import type { Smartphone, Comment, User } from '@/interfaces';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Swal from 'sweetalert2';

const route = useRoute();

const smartphone = ref<Smartphone>({
    name: '',
    price: '0',
    description: '',
    brand: {
        id: 0,
    },
    category: {
        id: 0,
    }
});

const comment = ref<Comment>({
    comment: '',
    product: {
        id: 0,
    },
    user: {
        id: 0,
    }
});

const comentarios = ref<string[]>([]);

const getElementById = async (id: number): Promise<void> => {
    try {
        const { data } = await axios.get<Smartphone>(`http://localhost:8080/api/v1/products/${id}`);
        smartphone.value = data;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Se ha producido un error',
            text: 'Intente nuevamente',
        })
    }
}

const getUserById = async (id: number): Promise<void> => {
    try {
        const { data } = await axios.get<User>(`http://localhost:8080/api/v1/users/${id}`);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Se ha producido un error',
            text: 'Intente nuevamente',
        })
    }
}

const addComment = () => {
    try {
        //comment.value.product.id = smartphone.value.id;
        const { data } = axios.post('http://localhost:8080/api/v1/comments', comment.value);
    } catch (error) {

    }
}

onMounted(() => {
    let id = parseInt(route.params.id);

    getElementById(id);
})
</script>

<style scoped></style>