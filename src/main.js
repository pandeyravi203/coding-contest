import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import ourRoutes from './router'
const router = new VueRouter({
  routes: ourRoutes
});
Vue.config.productionTip = false
Vue.use(Vuetify,{
  iconfont: 'fa'
 })
Vue.use(VueRouter)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
