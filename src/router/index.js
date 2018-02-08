import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const Home = () => import( '../page/homePage/Home');
const NotFound = () => import( '../page/NotFound');
const Mall = () => import( '../page/mall/Mall');
const ShoppingCar = () => import( '../page/shoppingCar/ShoppingCar');
const Personal = () => import( '../page/personal/Personal');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      alias:'/',
      component: Home
    },
    {
      path: '/mall',
      name:'Mall',
      component: Mall
    },
    {
      path: '/shopping',
      name:'ShoppingCar',
      component: ShoppingCar
    },
    {
      path: '/personal',
      name:'Personal',
      component: Personal
    },
    {
      path: '*',
      name:'NotFound',
      component: NotFound
    }
  ]
})
