import { createWebHistory, createRouter } from 'vue-router';
import PortfolioPageVue from '@/views/PortfolioView.vue';
import PlaygroundViewVue from '@/views/PlaygroundView.vue';

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
        path: '/:catchAll(.*)',
        redirect: '/',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;