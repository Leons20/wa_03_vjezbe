import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ProductDetails from './components/ProductView.vue';
import CartView from './components/CartView.vue';
import OrdersView from './components/OrdersView.vue';

const routes = [
    { path: '/proizvodi', component: HomePage },
    { path: '/proizvodi/:id', component: ProductDetails },
    { path: '/kosarica', component: CartView },
    { path: '/narudzbe', component: OrdersView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;