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
import ArticleCreate from '../components/ArticleCreate'
import ArticleEdit from '../components/ArticleEdit'
import ArticleList from '../components/ArticleList'
import AdCreate from '../components/ads/AdCreate'
import AdEdit from '../components/ads/AdEdit'
import AdList from '../components/ads/AdList'

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
        { path: '/heros/list', component: HeroList },
        { path: '/articles/create', component: ArticleCreate },
        { path: '/articles/edit/:id', component: ArticleEdit, props: true },
        { path: '/articles/list', component: ArticleList },
        { path: '/ads/create', component: AdCreate },
        { path: '/ads/edit/:id', component: AdEdit, props: true },
        { path: '/ads/list', component: AdList }
      ]
    }
  ]
})
