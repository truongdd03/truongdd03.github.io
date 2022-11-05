import { createWebHistory, createRouter } from "vue-router";
import PortfolioPageVue from "@/components/portfolio/PortfolioPage.vue";
import BlogsPageVue from "@/components/blogs/BlogsPage.vue";

const routes = [
	{
		path: "/",
		name: "Portfolio",
		component: PortfolioPageVue,
	},
	{
		path: "/blogs",
		name: "Blogs",
		component: BlogsPageVue,
	},
	{
		path: "/:catchAll(.*)",
		redirect: '/'
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
