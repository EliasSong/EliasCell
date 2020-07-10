<template>
  <div id="app">
    <BlogNavbar ref="navbar"></BlogNavbar>
    <keep-alive>
      <router-view @enterSignal="enterHomePage"></router-view>
    </keep-alive>

  </div>
</template>

<script>
  import BlogNavbar from "./components/navbar";
  export default {
    name: 'App',
    components: {
      BlogNavbar,
    },
    methods:{
      enterHomePage(){
        this.$refs.navbar.setCurrentPath();
      }
    }
}
</script>

<style>
  @import "assets/css/base.css";
  #app{
    background-color: #000000;
  }
</style>
