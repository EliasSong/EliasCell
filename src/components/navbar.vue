<template>
  <div class="blognavbar">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
          <a class="navbar-brand" href="/">
            <i class="fas fa-blog fa-2x"></i>
          </a>
          <div class="navbar-toggler" id="navBtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <div class="nav-link" :class="{'active':currentPath === '/home'}" @click="navItemClick('/home')">Home <span class="sr-only">(current)</span></div>
              </li>
              <li class="nav-item">
                <div class="nav-link" :class="{'active':currentPath === '/blog'}" @click="navItemClick('/blog')">Blog <span class="sr-only">(current)</span></div>
              </li>
              <li class="nav-item">
                <div class="nav-link" :class="{'active':currentPath === '/album'}" @click="navItemClick('/album')">Album <span class="sr-only">(current)</span></div>
              </li>
              <li class="nav-item">
                <div class="nav-link" :class="{'active':currentPath === '/app'}" @click="navItemClick('/app')">App <span class="sr-only">(current)</span></div>
              </li>
            </ul>
          </div>
      </nav>
  </div>
</template>

<script>
  export default {
    name: "navbar",
    methods:{
      navItemClick(path){
        if(document.body.clientWidth<990){
          document.querySelector("#navBtn").click();
        }
        if(this.currentPath !== path){
          this.$router.push(path);
          this.currentPath = path;
        }
      },
      setCurrentPath(){
        this.currentPath = "/home"
      }
    },
    data(){
      return {
        currentPath: window.location.pathname,
      }
    },
    created() {
      console.log(this.currentPath);
    }
  }

</script>

<style scoped>
  .navbar{
    font-size: 1.5em;
    background-color: rgb(28,28,29);
  }

</style>