<template>
  <div class="albummanage">
    <div class="container">
      <div class="card" v-for="(item,index) in allAlbumData" :key="index">
        <div class="card-body">
          <h1 @click="albumDetialShow(item._id)">{{item.albumTitle}}</h1>
          <div class="bodycontent">
            <hr class="my-4">
            <p class="lead">{{item.albumTime}}</p>
          </div>
        </div>
        <div class="card-footer">
          <div class="btn btn-primary btn-lg" @click="goToImageCreatePage(item._id)">添加照片</div>
          <div v-if="!confirmFlag" class="btn btn-danger btn-lg" @click="confirm">删除</div>
          <div v-else class="btn btn-danger btn-lg" @click="deleteAlbum(item._id)">确认删除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getAllAlbum,deleteAlbum} from "../../network/album";

  export default {
    name: "AlbumManagePage",
    data(){
      return{
        allAlbumData:[],
        confirmFlag:false
      }
    },
    created() {
      getAllAlbum().then(res => {
        console.log(res);
        this.allAlbumData = res;
      })
    },
    methods:{
      goToImageCreatePage(id){
        this.$router.push("/manage/album/" + id + "/image/create")
      },
      albumDetialShow(id){
        this.$router.push("/album/"+id)
      },
      confirm(){
        this.confirmFlag = true
      },
      deleteAlbum(id){
        this.confirmFlag= false;
        deleteAlbum(id).then(res => {
          console.log(res);
          getAllAlbum().then(res => {
            this.allAlbumData = res
          })
        })
      },
    }
  }
</script>

<style scoped>
  .albummanage{
    color: #eeeeee;
    padding-top: 15px;
  }
  .card{
    background-color: rgb(36,36,36);
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
  h1:hover{
    color:#4682b4;
    text-decoration:none;
  }
</style>