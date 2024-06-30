import { createRouter, createWebHistory } from 'vue-router'
import PersonalInformationView from '../views/PersonalInformationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PersonalInformationView.vue')
    },
    {
      path: '/EducationView',
      name: 'EducationView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EducationBackgroundView.vue')
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/WorkExperience',
      name: 'WorkExperience',
      component: () => import('../views/WorkExperienceView.vue')
    },

    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
  ]
})

export default router
