<template>
  <div class="copyright">
    <div class="container">
      <div class="icon">
        <i class="fab fa-github fa-2x" @click="turnToGit"></i>
        <i class="fab fa-zhihu fa-2x" @click="turnToZhihu"></i>
        <i class="fab fa-youtube fa-2x" @click="turnToBilibili"></i>
        <i class="fab fa-facebook fa-2x" ></i>
        <i class="fab fa-linkedin fa-2x" @click="turnToLinkedIn"></i>
      </div>
      <hr class="my-1">
      <div>
        <footer class="text-muted">Copyright © EliasSong. All Rights Reserved.</footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "copyright",
    methods:{
      turnToGit(){
        window.location.href="https://github.com/EliasSong"
      },
      turnToBilibili(){
        window.location.href="https://space.bilibili.com/51678263"
      },
      turnToZhihu(){
        window.location.href="https://www.zhihu.com/people/song-ni-ma-69"
      },
      turnToLinkedIn(){
        window.location.href="https://www.linkedin.com/in/%E9%A2%8D%E5%8D%9A-%E5%AE%8B-ba878318a/"
      }
    }
  }
</script>

<style scoped>
  .copyright{
    padding: 50px 0px;
  }
  .container{
    width: 330px;
  }
  .icon{
    padding: 0 20px;
    display: flex;
    text-align: center;
  }
  .icon i{
    flex: 1;
  }
  hr{
    border-style: solid;
    height: 1px;
    background-color: #eeeeee;
  }
  .text-muted{
    text-align: center;
  }
  .icon i{
    transition: all ease 0.2s;
    cursor: pointer;
    -webkit-transition: all ease 0.2s;
  }
  .icon i:hover{
    transform: translateY(-10px);
    color: #4682b4
  }

</style>