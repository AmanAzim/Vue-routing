<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <!-- <p>The loaded id: {{id}}</p> -->
        <button class="btn btn-primary" v-on:click="navigateToHome">Navigate to Home</button>
        <br><br><hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        data(){
            return{
               // id:this.$route.params.id,
            };
        },
        watch:{
           /* '$route'(to, from){
                this.id=to.params.id;
            }*/
        },
        methods:{
            navigateToHome(){
                this.$router.push('/');
            }
        }
    }
</script>