<template>
  <div class="recommend">
    <div class="card">
      <h5 class="card-header">
        Recommendation
      </h5>
      <div class="card-body">
        <BlogRecommendItem v-for="(item,index) in recommendedBlogData" :key="index" :blog-data="item" ></BlogRecommendItem>
      </div>
    </div>
  </div>
</template>

<script>

  import BlogRecommendItem from "./BlogRecommendItem";
  export default {
    name: "BlogDetailBlogRecommend",
    props:{
      recommendedBlogData:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      BlogRecommendItem
    },
    created() {

    }
  }
</script>

<style scoped>
 .card{
   background-color: rgb(36,36,36);
   color: #eeeeee;
 }
</style>