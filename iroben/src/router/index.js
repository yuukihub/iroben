import { createRouter, createWebHistory } from 'vue-router'
import RouterTestFirst from '../RouterTestFirs.vue'
import RouterTestSecond from '../RouterTestSecond.vue'

const routes = [
    {
        path: '/',
        name: 'routerTestFirst',
        component: RouterTestFirst
    },
    {
        path: '/second',
        name: 'routerTestSecond',
        component: RouterTestSecond
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
