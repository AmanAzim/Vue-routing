import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' //step 1: import the library
import { routes } from "./routes"; //step 3: create routes and import it. fised name : { routes } as the array of route objects

Vue.use(VueRouter); //step 2: use the imported library

const router=new VueRouter({
    routes,
    mode:'history' });  //step 4: create new router instance by passing the imported routes object array

new Vue({
  el: '#app',
  router, // step 5: register the router instance in the root vue instance
  render: h => h(App)
})
