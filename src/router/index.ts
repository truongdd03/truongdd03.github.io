import { createWebHistory, createRouter } from 'vue-router';
import PortfolioPageVue from '@/components/portfolio/PortfolioPage.vue';
import BlogPageVue from '@/components/blog/BlogPage.vue';

const routes = [
    {
        path: '/',
        name: 'Portfolio',
        component: PortfolioPageVue,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: BlogPageVue,
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
