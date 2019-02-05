<template>
    <div>
        <h3>Some User Details</h3>
        <p>User Id: {{$route.params.id}}</p>
        <br><br><hr>
       <!-- <router-link tag="button" class="btn btn-primary"
                     v-bind:to="'/user/' + $route.params.id + '/edit'">Edit</router-link> -->
       <!-- <router-link tag="button" class="btn btn-primary"
                     v-bind:to="{ name:'UserEdit', params:{ id: $route.params.id }, query:{ key1:'Value1', q:100 } }">Edit</router-link> -->

        <router-link tag="button" class="btn btn-primary"
                     v-bind:to="link">Edit</router-link>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                link:{ name:'UserEdit',
                       params:{ id: this.$route.params.id },
                       query:{ key1:'Value1', q:100 },
                       hash:'#data'}
            };
        }
    }
</script>