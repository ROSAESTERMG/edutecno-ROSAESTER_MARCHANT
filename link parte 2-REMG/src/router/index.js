import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    
    component: () => import(/* webpackChunkName: "portada" */ '../views/Home.vue')
    
  },            
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sobremi.vue')
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  },
  {
    path: '/admin/:id',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
   
  },
  { path: '/inicio',
   redirect: '/' }
   ,
  { path: '/home',
   redirect: '/' }
   ,
  { path: '/portada',
   redirect: '/' }
   ,
   { path: '/contactame',
    redirect: '/contacto' }
    ,
   { path: '/acerca',
    redirect: '/about' }
    ,
    { path: '/sobremi',
     redirect: '/about' }  
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
