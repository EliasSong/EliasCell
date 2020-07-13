<template>
  <div class="BlogClip">
    <div class="card">
      <h5 class="card-header">Blog <a class="more" href="/home">More <i class="fas fa-angle-double-right"></i></a></h5>
      <div class="card-body">
        <HomeBlogClipItem></HomeBlogClipItem>
        <HomeBlogClipItem></HomeBlogClipItem>
        <HomeBlogClipItem></HomeBlogClipItem>
      </div>

    </div>
  </div>
</template>

<script>
  import HomeBlogClipItem from "./HomeBlogClipItem";
  export default {
    name: "HomeBlogClip",
    components:{
      HomeBlogClipItem,
    }
  }
</script>

<style scoped>
  .BlogClip{

    color: #ffffff;

    margin-bottom: 10px;
  }
  .card{
    background-color: rgb(28,28,29);
  }
  .card-body{

  }
  .more{
   float: right;
    color: rgb(152,152,158);
  }
  .more:hover{
    text-decoration-line: none;
    color: #4682b4
  }


</style>