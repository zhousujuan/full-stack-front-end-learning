import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Search from '../views/Search'

Vue.use(VueRouter)

const routes=[
    {
        name:'Home',
        path:'/',
        component:Home,
    },
    {
        name:'Login',
        path:'/login',
        component:Login
    },
    {
        name:'Register',
        path:'/register',
        component:Register
    },
    {
        name:'Search',
        path:'/search',
        component:Search
    } 
]

const router=new VueRouter({
    mode:"history",
    base:process.env.BASE_URL,
    routes
})

export default router