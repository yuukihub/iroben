import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../ProductList.vue'
import Product from '../Product.vue'

const routes = [
    { path: '/product', component: ProductList},
    { path: '/product/:id(\\d+)',
        component: Product,
        // propsにidとデータ型の指定をする
        props: route => ({ id: Number(route.params.id) })},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
