<template>
    <div class="container mx-auto">
        <div class="flex flex-col gap-10">
            <div class="flex items-center justify-between mt-20">
                <div class="grid place-items-center">
                    <img src="https://gravatar.com/avatar/3cae7f50a6d9fa6c0d3bc9b07b4c5b05?s=400&d=robohash&r=x"
                        alt="foto smartphone" class="object-cover">
                </div>
                <main class="flex flex-col justify-between h-96 p-5 max-w-96">
                    <div>
                        <h1 class="text-2xl font-semibold">{{ smartphone.name }} <small>{{ smartphone.model }}</small>
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
                <textarea rows="3" class="border rounded w-full h-20">

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
import type { Smartphone } from '@/interfaces';
import { ref } from 'vue';

const smartphone = ref<Smartphone>({
    id: 0,
    name: '',
    price: '',
    model: '',
    description: '',
});

const comentarios = ref<string[]>([]);

const getData = async (): Promise<void> => {
    try {
        // const { data } = await axios.get('https://api.restful-api.dev/objects');
        const data = {
            smartphone: {
                id: 1,
                name: 'Samsung Galaxy S21',
                price: '1000',
                model: 'S21',
                description: 'Samsung Galaxy S21 5G Android smartphone. Announced Jan 2021. Features 6.2″ display, Exynos 2100 chipset, 4000 mAh battery, 256 GB storage, 8 GB RAM, Corning Gorilla Glass Victus.',
            },
            comentarios: [
                'Excelente producto',
                'Muy buen producto',
                'No me gusto el producto',
            ]
        }
        smartphone.value = data.smartphone;
        comentarios.value = data.comentarios;
    } catch (error) {
        console.error(error);
    }
}

getData();
</script>

<style scoped></style>