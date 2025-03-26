import { createRouter, createWebHistory } from 'vue-router'
import LoginScreen from '@/views/LoginScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginScreen,
    },
    {
      path: '/password',
      name: 'password',
      component: () => import('@/views/PasswordScreen.vue'),
    },
    {
      path: '/password/validation-code',
      name: 'validation-code',
      component: () => import('@/views/ValidationCodeScreen.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterScreen.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardScreen.vue')
    },
  ],
})

export default router
