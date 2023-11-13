import { createWebHistory, createRouter } from 'vue-router';
import PortfolioPageVue from '@/views/PortfolioView.vue';
import NewsfeedVue from '@/components/newsfeed/Newsfeed.vue';

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
        path: '/:catchAll(.*)',
        redirect: '/'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
