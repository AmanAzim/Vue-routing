import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/UserStart.vue';


//Fixed name "routes"
export const routes=[
    {path:'', component:Home, name:'Home'},
    {path:'/user', component:User, children:[
            {path:'/user/', component:UserStart},
            {path:':id', component:UserDetail},
            {path:':id/edit', component:UserEdit, name:'UserEdit'}
        ]}
];