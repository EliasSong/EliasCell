<template>
  <div class="item">
    <a href="/home"><h1>{{blogData.blogTitle}}</h1></a>
    <p>{{blogData.blogContent}}</p>
    <p class="lead">{{blogData.blogTime}}</p>
    <hr class="my-4">
  </div>
</template>

<script>
  export default {
    name: "HomeBlogClipItem",
    props:{
      blogData:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .item hr{
    border-style: solid;
    background-color: rgb(152,152,158);
  }
  .item a{
    color:#ffffff;
  }
  .item p{
    color: rgb(152,152,158)
  }
  .item a:hover{
    color:#4682b4;
    text-decoration:none;
  }
</style>