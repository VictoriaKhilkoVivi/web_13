import Vue from 'vue'
import Router from 'vue-router'
import Origin from '@/views/Origin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Origin
    },
    {
      path: '/Forma',
      component: () => import('./views/Forma')
    }
  ]
})