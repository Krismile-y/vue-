import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home'
import category from '../views/category/category'
import profile from '../views/profile/profile'
import cart from '../views/cart/cart'
const Detail =()=> import('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    component:home
  },
  {
    path: '/category',
    component:category
  },
  {
    path:'/profile',
    component:profile
  },
  {
    path: '/cart',
    component:cart
  },
  {
    path: '/detail/:id',
    component: Detail
  }

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
