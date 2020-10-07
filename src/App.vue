<template>
  <div id="app">
    <BlogNavbar ref="navbar"></BlogNavbar>
    <div class="appContent">
    <keep-alive exclude="BlogDetailPage,AlbumDetailPage">
      <router-view ></router-view>
    </keep-alive>
    </div>

  </div>
</template>

<script>
  import BlogNavbar from "./components/navbar";

  export default {
    name: 'App',
    data(){
      return{
        mobileDeviceFlag:false
      }
    },
    components: {
      BlogNavbar,
    },
    methods:{

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
