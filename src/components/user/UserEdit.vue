<template>
   <div>
       <h3>Edit the User</h3>
       <p>User id: {{$route.params.id}}</p>
       <p>Query key: {{$route.query.key1}}</p>
       <p>Query p: {{$route.query.q}}</p>
       <hr><br><br>

       <button class="btn btn-primary" v-on:click="confirm=true">Click to Confirm Leave</button>

       <div style="height: 700px"></div>

       <p id="data">Extra texts..</p>
   </div>
</template>

<script>
    export default {
        data(){
            return{
                confirm:false,
            }
        },
        beforeRouteLeave(to, from, next){
            if(this.confirm){
                next();
            }else{
                if(alert('Are you sure?')){
                    next();
                }else{
                    next(false);
                }
            }
        }
    }
</script>