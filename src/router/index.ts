import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/DetailView.vue'),
    props: (route) => {
      const id = Number(route.params.id);
      // const userRole = localStorage.getItem('userRole')
      return isNaN(id) ? { id: null } : { id };
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
