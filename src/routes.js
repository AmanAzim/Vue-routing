import Home from './components/Home.vue';
import Header from './components/Header.vue';
/*import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/UserStart.vue'; */

//Creating Lazy Route//

const User = resolve=>{
    require.ensure(['./components/user/User.vue'], ()=>{
        resolve(require('./components/user/User.vue'));
    }, "OptionalGroupName");
};
const UserDetail = resolve=>{
    require.ensure(['./components/user/UserDetail.vue'], ()=>{
        resolve(require('./components/user/UserDetail.vue'));
    }, "OptionalGroupName");
};
const UserEdit = resolve=>{
    require.ensure(['./components/user/UserEdit.vue'], ()=>{
        resolve(require('./components/user/UserEdit.vue'));
    }, "OptionalGroupName");
};
const UserStart = resolve=>{
    require.ensure(['./components/user/UserStart.vue'], ()=>{
        resolve(require('./components/user/UserStart.vue'));
    }, "OptionalGroupName");
};



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