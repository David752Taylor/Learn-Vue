import Home from '@/views/Home.vue';
import Search from '@/views/Search.vue';
import NotFind from '@/views/NotFind.vue';

import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { name: 'home', path: '/home/:key?', component: Home },
    { name: 'search', path: '/search/:key?', component: Search },
    { path: '*', component: NotFind },
  ],
  linkActiveClass: 'active',  //模糊匹配类名
  linkExactActiveClass: 'exact-active', //精确匹配类名
})

export default router


