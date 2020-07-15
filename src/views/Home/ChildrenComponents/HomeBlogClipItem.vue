<template>
  <div class="item" >
    <h1 @click="changeToBlogDetail(blogData._id)">{{blogData.blogTitle}}</h1>
    <p>{{blogData.blogDesc}}</p>
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
    },
    methods:{
      changeToBlogDetail(id){
        this.$router.push("/blog/"+id)
      }
    },
    created() {

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
  .item h1:hover{
    color:#4682b4;
    text-decoration:none;
  }
</style>