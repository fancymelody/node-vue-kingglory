import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import CategoryCreate from '../components/CategoryCreate'
import CategoryEdit from '../components/CategoryEdit'
import CategoryList from '../components/CategoryList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      redirect: '/categories/list'
    },
    {
      path: '/main',
      component: Main,
      redirect: '/categories/list',
      children: [
        { path: '/categories/create', component: CategoryCreate },
        { path: '/categories/list', component: CategoryList },
        { path: '/categories/edit/:id', component: CategoryEdit, props: true }
      ]
    }
  ]
})
