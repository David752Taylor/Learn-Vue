import Find from '@/views/Find.vue'
import Friend from '@/views/Friend.vue'
import My from '@/views/My.vue'

import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/find', component: Find },
    { path: '/friend', component: Friend },
    { path: '/my', component: My },
  ],
  linkActiveClass: 'active',  //模糊匹配类名
  linkExactActiveClass: 'exact-active', //精确匹配类名
})

export default router