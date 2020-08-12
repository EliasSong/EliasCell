<template>
  <div id="app">
    <BlogNavbar ref="navbar"></BlogNavbar>
    <div class="appContent" @click="bodyClick">
    <keep-alive exclude="BlogDetailPage,AlbumDetailPage">
      <router-view ></router-view>
    </keep-alive>

    </div>
    <MusicpPlayer v-if="!mobileDeviceFlag" ref="player"></MusicpPlayer>

  </div>
</template>

<script>
  import BlogNavbar from "./components/navbar";
  import MusicpPlayer from "./components/MusicPlayer";
  export default {
    name: 'App',
    data(){
      return{
        mobileDeviceFlag:false
      }
    },
    components: {
      BlogNavbar,
      MusicpPlayer
    },
    methods:{
      bodyClick(){
        this.$refs.player.setDisactive()
      }

    },
    created() {
      if(document.body.clientWidth<990){
        this.mobileDeviceFlag = true
      }
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  #app{
    background-color: #030303;
    height: 100%;
  }
  .appContent{
    margin-top: 68px;
  }

</style>
