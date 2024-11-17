<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const narudzbe = ref([]);

onMounted(async () => {
    const response = await axios.get('http://localhost:3000/narudzbe');
    narudzbe.value = response.data;
});
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Pregled narudžbi</h1>
        <ul>
            <li v-for="narudzba in narudzbe" :key="narudzba.id" class="border p-4 mb-4">
                <h2 class="text-lg font-bold">Narudžba #{{ narudzba.id }}</h2>
                <p><strong>Datum:</strong> {{ new Date(narudzba.datum).toLocaleString() }}</p>
                <ul>
                    <li v-for="proizvod in narudzba.proizvodi" :key="proizvod.id">
                        {{ proizvod.naziv }} - {{ proizvod.cijena }}€
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>