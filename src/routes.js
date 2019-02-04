import Home from './components/Home.vue';
import User from './components/user/User.vue';


//Fixed name "routes"
export const routes=[
    {path:'', component:Home},
    {path:'/user', component:User}
];