import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import CategoryCreate from '../components/CategoryCreate'
import CategoryEdit from '../components/CategoryEdit'
import CategoryList from '../components/CategoryList'
import ItemCreate from '../components/ItemCreate'
import ItemEdit from '../components/ItemEdit'
import ItemList from '../components/ItemList'
import HeroCreate from '../components/HeroCreate'
import HeroEdit from '../components/HeroEdit'
import HeroList from '../components/HeroList'

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
        { path: '/categories/edit/:id', component: CategoryEdit, props: true },
        { path: '/items/create', component: ItemCreate },
        { path: '/items/edit/:id', component: ItemEdit, props: true },
        { path: '/items/list', component: ItemList },
        { path: '/heros/create', component: HeroCreate },
        { path: '/heros/edit/:id', component: HeroEdit, props: true },
        { path: '/heros/list', component: HeroList }
      ]
    }
  ]
})
