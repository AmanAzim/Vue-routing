import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/UserStart.vue';
import Header from './components/Header.vue';


//Fixed name "routes"
export const routes=[
    {path:'', name:'Home' , components:{default:Home, 'header-top':Header}},
    {path:'/user', components:{default:User, 'header-bottom':Header}, children:[
            {path:'/user/', component:UserStart},
            {path:':id', component:UserDetail, beforeEnter:(to, from, next)=>{console.log("local beforeEnter() in userDetail"); next();} },
            {path:':id/edit', component:UserEdit, name:'UserEdit'}
        ]},
    {path:'/anything', redirect:{name:'Home'} },
    {path:'*', redirect:'/' }// to redirect any undefined path to Home
];