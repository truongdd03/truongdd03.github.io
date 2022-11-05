import { createWebHistory, createRouter } from "vue-router";
import PortfolioPageVue from "@/components/portfolio/PortfolioPage.vue";
// import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Portfolio",
    component: PortfolioPageVue,
  },
//   {
//     path: "/about",
//     name: "About",
//     component: About,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
