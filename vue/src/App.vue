<script setup>
import ProductView from './components/ProductView.vue';
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div>
    <!-- Uključujemo komponentu -->
    <ProductView />
  </div>
  <header class="bg-gray-800 text-white py-4">
      <nav class="container mx-auto flex justify-between">
          <router-link to="/proizvodi" class="text-xl font-bold">Početna</router-link>
          <router-link to="/kosarica" class="text-lg">Košarica</router-link>
      </nav>
  </header>
  <router-view />
</template>