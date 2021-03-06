import { createRouter, createWebHistory } from 'vue-router';
import { AppRoutes, RouteNames } from './router-types';

const routes = [
  {
    path: AppRoutes.root,
    name: RouteNames.home,
    component: () => import('../views/Home.vue'),
  },
  {
    path: AppRoutes.about,
    name: RouteNames.about,
    component: () => import('../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

export default router;
