import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetailsView from '../views/Event/DetailsView.vue'
import EventRegister from '../views/Event/Register.vue'
import EventEdit from '../views/Event/Edit.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView
    },
    {
      path: '/event/:id/register',
      name: 'EventRegister',
      props: true,
      component: EventRegister
    },
    {
      path: '/event/:id/edit',
      name: 'EventEdit',
      props: true,
      component: EventEdit
    }
  ]
})

export default router
