import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css' 
import './assets/css/hexa.css'
 
import './assets/js/jquery.diamonds'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTwitter,faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret,faArrowRightToBracket,faCalendarDays,faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './router'



library.add(faUserSecret,faArrowRightToBracket,faTwitter,faGoogle,faCalendarDays,faUsers)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.baseURL = process.env.VUE_APP_APIHOST
Vue.prototype.$http.defaults.headers.common['Content-Type'] = 'multipart/form-data';
Vue.prototype.$http.defaults.headers.common['Content-Type'] = 'application/json';
new Vue({router,
  render: h => h(App),
}).$mount('#app')
