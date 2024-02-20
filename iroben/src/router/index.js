import { createRouter, createWebHistory } from 'vue-router'
import thirdColorLists from '../vue/pages/thirdColorLists.vue'
import thirdColorDetail from '../vue/pages/thirdColorDetail.vue'

const routes = [
    { path: '/product', component: thirdColorLists},
    { path: '/product/:id(\\d+)',
        component: thirdColorDetail,
        // propsにidとデータ型の指定をする
        props: route => ({ id: Number(route.params.id) })},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
