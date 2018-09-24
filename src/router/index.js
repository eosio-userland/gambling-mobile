import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import HomePage from '@/views/HomePage'
import Rules from '@/views/Rules'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/home', name: 'HomePage', component: HomePage },
    { path: '/rules', name: 'Rules', component: Rules }
  ]
})
