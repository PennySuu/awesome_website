import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import ustwo from '@/components/ustwo/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: index
    },
    {
      path: '/ustwo',
      name: 'ustwo',
      component: ustwo
    }
  ]
})
