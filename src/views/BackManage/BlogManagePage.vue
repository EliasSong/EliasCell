<template>
  <div class="manage">
    <div class="container">
      <div class="card" v-for="(item,index) in allBlogData" :key="index">
        <div class="card-body">
          <h1>{{item.blogTitle}}</h1>
          <div class="bodycontent">
            <hr class="my-4">
            <p class="lead">{{item.blogDesc}}</p>
            <p class="lead">{{item.blogTime}}</p>
          </div>
        </div>
        <div class="card-footer">
          <div class="btn btn-primary btn-lg">修改</div>
          <div v-if="!confirmFlag" class="btn btn-danger btn-lg" @click="confirm">删除</div>
          <div v-else class="btn btn-danger btn-lg" @click="deleteBlog(item._id)">确认删除</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {getAllBlog} from "../../network/blog";

  export default {
    name: "BlogManagePage",
    data(){
      return{
        allBlogData:[],
        confirmFlag:false
      }
    },
    created() {
      getAllBlog().then(res => {
        this.allBlogData = res
      })
    },
    methods:{
      confirm(){
        this.confirmFlag = true
      },
      deleteBlog(id){
        console.log(id);
        this.confirmFlag= false
      }
    }
  }
</script>

<style scoped>
  .manage{
    color: #eeeeee;
    padding-top: 15px;
  }
  .card{
    background-color: rgb(28,28,28);
    margin-bottom: 15px;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
  }
  .card-body{
  }
  .bodycontent{
    color: rgb(152,152,158);
  }
  .btn{
    margin-right: 15px;
  }
</style>