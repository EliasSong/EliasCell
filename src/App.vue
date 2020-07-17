<template>
  <div id="app">
    <BlogNavbar ref="navbar"></BlogNavbar>
    <div class="appContent" @click="bodyClick">
    <keep-alive exclude="BlogDetailPage">
      <router-view ></router-view>
    </keep-alive>
    </div>
    <MusicpPlayer ref="player"></MusicpPlayer>
  </div>
</template>

<script>
  import BlogNavbar from "./components/navbar";
  import MusicpPlayer from "./components/MusicPlayer";
  export default {
    name: 'App',
    components: {
      BlogNavbar,
      MusicpPlayer
    },
    methods:{
      bodyClick(){
        this.$refs.player.setDisactive()
      }

    }
}
</script>

<style>
  @import "assets/css/base.css";
  #app{
    background-color: #030303;
  }
  .appContent{
    margin-top: 68px;
  }

</style>
