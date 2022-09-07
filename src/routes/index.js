import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/Layout/Layout'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'layout',
            path: '/',
            redirect: 'index',
            components: Layout,
        },
    ]
})

export default router