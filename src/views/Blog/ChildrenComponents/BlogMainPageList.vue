<template>
  <div class="pagelist">
    <div class="card" @click="blogDetailShow(item._id)" v-for="(item,index) in blogSubPageList" :key="index">
      <div class="card-body">
        <h1>{{item.blogTitle}}</h1>
        <div class="bodycontent">
          <hr class="my-4">
          <p class="lead">{{item.blogDesc}}</p>
          <p class="lead">{{item.blogTime}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogMainPageList",
    props:{
      blogSubPageList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      blogDetailShow(id){
        this.$router.push("/blog/"+id)
      }
    }
  }
</script>

<style scoped>
  .card{
    background-color: rgb(28,28,28);
    margin-bottom: 15px;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
  }
  .card:hover{
    transform: scale(1.01);
    -webkit-transform: scale(1.01);
    /*box-shadow:1px 1px 5px rgba(28,28,28,.5),-1px -1px 5px rgba(28,28,28,.5);*/

  }
  .card-body{
    border-left: solid 5px #eeeeee;
  }
  .bodycontent{
    color: rgb(152,152,158);
  }
  .bodycontent hr{
    height: 1px;
    border-style: solid;
    background-color: rgb(152,152,158);
  }
</style>