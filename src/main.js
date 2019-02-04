import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from "./routes"; //the { same }  from "./same"  means the name of the route array and its js fine have to be same

Vue.use(VueRouter);

const router=new VueRouter({routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
