<template>
  <div class="BlogClip">
    <div class="card">
      <h5 class="card-header">Blog <a class="more" @click="goToBlog">More <i class="fas fa-angle-double-right"></i></a></h5>
      <div class="card-body">
        <HomeBlogClipItem v-for="(item,index) in homeBlogList" :key="index" :blog-data="item" ></HomeBlogClipItem>
      </div>

    </div>
  </div>
</template>

<script>
  import HomeBlogClipItem from "./HomeBlogClipItem";
  export default {
    name: "HomeBlogClip",
    props:{
      homeBlogList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      HomeBlogClipItem,
    },
    methods:{
      goToBlog(){
        this.$router.push("/blog")
      }
    }

  }
</script>

<style scoped>
  .BlogClip{

    color: #ffffff;

    margin-bottom: 10px;
  }
  .card{
    background-color: rgb(36,36,36);
  }
  .card-body{

  }
  .more{
   float: right;
    color: rgb(152,152,158);
    cursor: pointer;
  }
  .more:hover{
    text-decoration-line: none;
    color: #4682b4
  }


</style>