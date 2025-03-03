import { createWebHistory, createRouter } from 'vue-router';
import PortfolioPageVue from '@/views/PortfolioView.vue';
import PlaygroundViewVue from '@/views/PlaygroundView.vue';
import HomeView from '@/views/BunboaView/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'Portfolio',
        component: PortfolioPageVue,
    },
    {
        path: '/playground',
        name: 'Playground',
        component: PlaygroundViewVue,
    },
    {
        path: '/bunboa',
        component: HomeView,
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;