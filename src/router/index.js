import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const HomePage = () => import( '../components/HomePage');
const Store = () => import( '../components/Store');
const NotFound = () => import( '../components/NotFound');


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'HomePage',
      alias:'/',
      component: HomePage
    },
    {
      path:'/store',
      name:'Store',
      component:Store
    },
    {
      path: '*',
      name:'NotFound',
      component: NotFound
    }
  ]
})
