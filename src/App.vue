<template>
  <div id="app">
    <BlogNavbar ref="navbar"></BlogNavbar>
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
    <BlogCopyright></BlogCopyright>
  </div>
</template>

<script>
  import BlogNavbar from "./components/navbar";
  import BlogCopyright from "./components/copyright";
  export default {
    name: 'App',
    components: {
      BlogNavbar,
      BlogCopyright
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
