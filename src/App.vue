<template>
  <div id="app">
    <BlogNavbar ref="navbar"></BlogNavbar>
    <keep-alive>
      <router-view ></router-view>
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

    }
}
</script>

<style>
  @import "assets/css/base.css";
  #app{
    background-color: #030303;
  }

</style>
