import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogInView.vue'),
   },
   {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue'),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
