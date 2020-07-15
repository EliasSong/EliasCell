<template>
  <div id="app">
    <BlogNavbar ref="navbar"></BlogNavbar>
    <keep-alive exclude="BlogDetailPage">
      <router-view ></router-view>
    </keep-alive>
    <MusicpPlayer></MusicpPlayer>
  </div>
</template>

<script>
  import BlogNavbar from "./components/navbar";
  import MusicpPlayer from "./components/MusicPlayer";
  export default {
    name: 'App',
    components: {
      BlogNavbar,
      // MusicpPlayer
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
