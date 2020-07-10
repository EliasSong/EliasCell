<template>
  <div class="blognavbar">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/">
            <i class="fas fa-blog fa-2x"></i>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <div class="nav-link" :class="{'active':currentPath === '/home'}" @click="navItemClick('/home')">Home <span class="sr-only">(current)</span></div>
              </li>
              <li class="nav-item">
                <div class="nav-link" :class="{'active':currentPath === '/bubble'}" @click="navItemClick('/bubble')">Bubble <span class="sr-only">(current)</span></div>
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
        </div>
      </nav>
  </div>
</template>

<script>
  export default {
    name: "navbar",
    methods:{
      navItemClick(path){
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
        currentPath:""
      }
    }
  }

</script>

<style scoped>
  .navbar{
    font-size: 1.5em;
    background-color: rgb(28,28,29);
  }

</style>