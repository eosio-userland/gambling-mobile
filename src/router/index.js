import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import HomePage from '@/views/HomePage'
import Rules from '@/views/Rules'
import Mine from '@/views/Mine'
import Result from '@/views/Result'
import MyHistory from '@/views/MyHistory'
import Manifest from '@/views/Manifest'
import Bet from '@/views/Bet'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index }, // 欢迎页
    { path: '/home', name: 'HomePage', component: HomePage }, // 首页
    { path: '/rules', name: 'Rules', component: Rules }, // 游戏规则
    { path: '/mine', name: 'Mine', component: Mine }, // 我的
    { path: '/myhistory', name: 'MyHistory', component: MyHistory }, // 个人购买记录
    { path: '/result', name: 'Result', component: Result }, // 游戏结果
    { path: '/manifest', name: 'Manifest', component: Manifest }, // 游戏结果
    { path: '/bet', name: 'Bet', component: Bet } // 投注页面
  ]
})
