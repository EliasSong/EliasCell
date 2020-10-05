<template>
  <div class="blognavbar">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
          <div class="navbar-brand navicon" @click="goToRoot">
            <i class="fas fa-blog fa-2x"></i>
          </div>
          <button class="navbar-toggler" id="navBtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <div class="nav-link" :class="{'active':currentPath === '/home'}" @click="navItemClick('/home')">Home <span class="sr-only">(current)</span></div>
                <div class="nav-link-bottom" ></div>
              </li>
              <li class="nav-item">
                <div class="nav-link" :class="{'active':currentPath === '/blog'}" @click="navItemClick('/blog')">Blog <span class="sr-only">(current)</span></div>
                <div class="nav-link-bottom"></div>
              </li>
              <li class="nav-item">
                <div class="nav-link" :class="{'active':currentPath === '/album'}" @click="navItemClick('/album')">Album <span class="sr-only">(current)</span></div>
                <div class="nav-link-bottom"></div>
              </li>
              <li class="nav-item">
                <div class="nav-link" :class="{'active':currentPath === '/app'}" @click="navItemClick('/app')">App <span class="sr-only">(current)</span></div>
                <div class="nav-link-bottom"></div>
              </li>
            </ul>
          </div>
      </nav>
  </div>
</template>

<script>
  import $ from "jquery";

  export default {
    name: "navbar",
    methods:{
      navItemClick(path){
        if(document.body.clientWidth<990){
          document.querySelector("button").click();
        }
        if(this.currentPath !== path){
          this.$router.push(path);
          this.currentPath = path;
        }
        $("body,html").animate({scrollTop:0},0);
      },
      goToRoot(){
        window.location.href="http://eliassong.cn"
      }

    },
    data(){
      return {
        currentPath: window.location.pathname,
      }
    },

    created() {
    },
    props:{

    },
    watch:{
      '$route'(to, from) {
       this.currentPath = this.$route.path;
      }
    }
  }

</script>

<style scoped>
  .navbar{
    font-size: 1.5em;
    background-color: rgb(28,28,29);
    z-index: 1700;

  }
  .nav-link{
    cursor: pointer;
  }
  .nav-link-bottom{
    height: 2px;
    width: 0px;
    background-color: #eeeeee;
    transition: all 0.5s ease;
  }
  .nav-item:hover .nav-link-bottom{
    width: 100%;
  }
  .navicon:hover{
    animation: shake 0.5s;
    -webkit-animation: shake 0.5s;

  }
  @keyframes shake{
    0%,
    100%{
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90%{
      transform: translateX(-5px) rotate(-8deg);

    }
    20%,
    40%,
    60%,
    80%{
      transform: translateX(5px) rotate(8deg);
    }
  }
  @-webkit-keyframes shake{
    0%,
    100%{
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90%{
      transform: translateX(-5px) rotate(-8deg);

    }
    20%,
    40%,
    60%,
    80%{
      transform: translateX(5px) rotate(8deg);
    }
  }





</style>