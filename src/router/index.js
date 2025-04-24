import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('../views/ExperienceView.vue'),
    meta: { title: 'Experience' }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: { title: 'Portfolio' }
  },
  {
    path: '/awards',
    name: 'awards',
    component: () => import('../views/AwardsView.vue'),
    meta: { title: 'Awards' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/ContactForm.vue'),
    meta: { title: 'Contact', requiresAuth: true }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - Personal Websites'; // Mengambil judul dari meta atau mengatur judul default jika tidak ada
  next();
});

export default router