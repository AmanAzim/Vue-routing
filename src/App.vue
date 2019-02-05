<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <!-- <app-header></app-header> -->

                <router-view name="header-top"></router-view>

                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>

                <br><br>
                <router-view name="header-bottom"></router-view>

                <!-- <app-header></app-header> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components:{
            'app-header':Header
        }
    }
</script>

<style>
    .slide-enter{
        /*transform:translateY(20px);*/
        opacity: 0;
    }
    .slide-enter-active{
        animation: slide-in 0.5s ease-out forwards;
        transition: opacity 0.5s;
    }
    .slide-leave{

    }
    .slide-leave-active{
        animation: slide-out 0.5s ease-out forwards;
        transition: opacity 0.5s;
        opacity: 0;
        position: absolute;
    }

    @keyframes slide-in {
        from{
            transform:translateY(20px);
        }
        to{
            transform:translateY(0px);
        }
    }
    @keyframes slide-out {
        from{
            transform:translateY(0px);
        }
        to{
            transform:translateY(20px);
        }
    }
</style>
