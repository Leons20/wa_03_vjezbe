<script setup>
import { ref, computed } from 'vue';
import { dohvatiKosaricu } from '../kosarica';
import axios from 'axios';

const kosarica = ref(dohvatiKosaricu());

const ukupnaCijena = computed(() =>
    kosarica.value.reduce((suma, proizvod) => suma + proizvod.cijena, 0)
);

const ukloniIzKosarice = (id) => {
    kosarica.value = kosarica.value.filter((proizvod) => proizvod.id !== id);
};

const posaljiNarudzbu = async () => {
    try {
        await axios.post('http://localhost:3000/narudzbe', kosarica.value);
        alert('Narudžba je uspješno poslana!');
        kosarica.value = []; // Prazni košaricu nakon slanja
    } catch (error) {
        console.error('Greška prilikom slanja narudžbe:', error);
    }
};
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Vaša košarica</h1>
        <div v-if="kosarica.length === 0">
            <p>Košarica je prazna. <router-link to="/proizvodi" class="text-blue-500">Pogledajte proizvode.</router-link></p>
        </div>
        <ul>
            <li v-for="proizvod in kosarica" :key="proizvod.id" class="flex justify-between items-center mb-4">
                <div>
                    <h2 class="text-lg font-semibold">{{ proizvod.naziv }}</h2>
                    <p>{{ proizvod.cijena }}€</p>
                </div>
                <button @click="ukloniIzKosarice(proizvod.id)" class="bg-red-500 text-white px-4 py-2">Ukloni</button>
            </li>
        </ul>
        <div v-if="kosarica.length > 0" class="mt-6">
            <h2 class="text-xl font-semibold">Ukupna cijena: {{ ukupnaCijena }}€</h2>
            <button @click="posaljiNarudzbu" class="bg-green-500 text-white px-6 py-3 mt-4">Pošalji narudžbu</button>
        </div>
    </div>
</template>