import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import expertsRoutes from "@/pages/experts";

const routes = [...expertsRoutes];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
