import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '@/components/CustomerTable.vue')
    },
    {
        path: '/add',
        name: 'add',
        component: () => import( /* webpackChunkName: "post.index" */ '@/components/CustomerForm.vue')
    },
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router