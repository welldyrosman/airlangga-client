import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../Main.vue'
import Alltrip from '../components/pages/Trips/All.vue'
import detailtrip from '../components/pages/Trips/DetailTrip.vue'
import preinvoice from '../components/pages/Invoices'
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
    , {
        name:"detailtrip",
        path:'/detailtrip/:id',
        component:detailtrip,
    },{
        name:"preinvoice",
        path:'/preinvoice/:tourid/:qty/:dateid',
        component:preinvoice
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
export default router
