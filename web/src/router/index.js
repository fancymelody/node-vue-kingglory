import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Main'
import Article from '@/components/Article'
import Hero from '@/components/Hero'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        { path: '/', component: Home },
        { path: '/articles/:id', name: 'article', component: Article, props: true },
      ]
    },
    { path: '/heroes/:id', name: 'hero', component: Hero, props: true }
  ]
})
