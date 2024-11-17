<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const proizvodi = ref([]);
const router = useRouter();

onMounted(async () => {
    const response = await axios.get('http://localhost:3000/proizvodi');
    proizvodi.value = response.data;
});

const idiNaDetalje = (id) => {
    router.push(`/proizvodi/${id}`);
};
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <div v-for="proizvod in proizvodi" :key="proizvod.id" class="border p-4">
            <img :src="proizvod.slike[0]" alt="Slika proizvoda" class="w-full h-48 object-cover" />
            <h2 class="text-lg font-bold">{{ proizvod.naziv }}</h2>
            <p>{{ proizvod.cijena }}€</p>
            <button @click="idiNaDetalje(proizvod.id)" class="bg-blue-500 text-white py-2 px-4 mt-2">Detalji</button>
        </div>
    </div>
</template>