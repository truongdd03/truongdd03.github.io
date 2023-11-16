import { createWebHistory, createRouter } from 'vue-router';
import PortfolioPageVue from '@/views/PortfolioView.vue';
import AdminViewVue from '@/views/AdminView.vue';

const routes = [
    {
        path: '/',
        name: 'Portfolio',
        component: PortfolioPageVue,
    },
    // {
    //     path: '/newsfeed',
    //     name: 'Newsfeed',
    //     component: NewsfeedVue,
    // },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminViewVue,
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
