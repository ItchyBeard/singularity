import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFoundView,
  },
  {
    path: '/zombies',
    name: 'zombies',
    component: () => import('../views/ZombiesView.vue'),
  },
  {
    path: '/warzone',
    name: 'warzone',
    component: () => import('../views/WarzoneView.vue'),
  },
  {
    path: '/campaign',
    name: 'campaign',
    component: () => import('../views/CampaignView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/requirements',
    name: 'requirements',
    component: () => import('../views/RequirementsView.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/SettingsView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
