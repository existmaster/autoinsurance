import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Index from '@/components/Index'
import RegisterCustomer from '@/components/RegisterCustomer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          component: Index,
        },
        {
          path: '/first',
          component: RegisterCustomer,
        },
      ]
    }
  ]
})
