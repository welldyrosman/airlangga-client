import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css' 
import './assets/css/hexa.css'
import './assets/css/testimoni.css' 

import './assets/js/jquery.diamonds'
import '@fortawesome/fontawesome-free/css/all.css'

import 'animate.css';

import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTwitter,faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret,faArrowRightToBracket,faCalendarDays,faUsers, fa1, fa2, fa3, fa4, fa5 ,faAnglesLeft,faAnglesRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ObserveVisibility } from "vue-observe-visibility";
import router from './router'
import Toasted from 'vue-toasted';
import loader from "vue-ui-preloader";
import {func} from "./assets/js/myfunction"
import store from './store';
import VueAnimateOnScroll from 'vue-animate-onscroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1500,
  easing: 'ease-in-out',
});

Vue.use(VueAnimateOnScroll)
Vue.prototype.$func = func;
Vue.directive("observe-visibility", ObserveVisibility);
library.add(faUserSecret,faArrowRightToBracket,faTwitter,faGoogle,faCalendarDays,faUsers,fa1,fa2,fa3,fa4,fa5,faAnglesLeft,faAnglesRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if(error&&error.response) {
      Vue.toasted.error(error.response.data.data)
    }
    if (error.response.data.data === "Token is Expired" ) {
      store.dispatch("auth/logout");
      document.location="/"
    }
    if (error.response.data.data === "Token is Invalid" ) {
      store.dispatch("auth/logout");
      document.location="/"
    }
   
    return Promise.reject(error);
  }
);
axios.interceptors.request.use(function(config) {
  if(store.state.auth.user){
    const token = store.state.auth.user.token;
    console.log("token",store.state.auth.user.token)
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
  }
  console.log("Interceptio ok")
  return config;
}, function(err) {
  console.log("Interceptio fails")
  return Promise.reject(err);
});

Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.baseURL = process.env.VUE_APP_APIHOST
Vue.prototype.$http.defaults.headers.common['Content-Type'] = 'multipart/form-data';
Vue.prototype.$http.defaults.headers.common['Content-Type'] = 'application/json';


Vue.use(loader);
Vue.use(Toasted,{
  duration: 1500,
  position: 'bottom-center', // ['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']
  theme: 'outline', // ['toasted-primary', 'outline', 'bubble']
  iconPack: 'material' // ['material', 'fontawesome', 'mdi', 'custom-class', 'callback']
});
new Vue({router,store,
  render: h => h(App),
}).$mount('#app')
