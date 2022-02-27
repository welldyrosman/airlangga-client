import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../Main.vue'
import Alltrip from '../components/pages/Trips/All.vue'
Vue.use(VueRouter)
const routes = [
    {
        name:"",
        path:'/',
        component:Main,
    }
    , {
        name:"alltrip",
        path:'/alltrip',
        component:Alltrip,
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
export default router
