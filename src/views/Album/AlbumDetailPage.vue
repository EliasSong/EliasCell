<template>
  <div class="albumpage">
    <div class="jumbotron jumbotron-fluid albumjubotron text-white">
      <div class="container">
        <h1 class="display-4">{{albumDetailData.albumTitle}}</h1>
        <hr class="my-4">
        <p class="lead">{{albumDetailData.albumTime}}</p>
      </div>
    </div>
    <div class="container-fluid">
      <waterfall id="fall" class="list" :col="col"
                 :data="albumDetailData.albumImage" >
        <template>
          <div v-for="(item, index) in albumDetailData.albumImage" :key="index">
            <div class="card">
                <img :src="item.imageURL" alt="..." class="card-img-top img-thumbnail">
              <div class="card-footer">
                <p class="lead">{{item.imageTime}}</p>
              </div>
            </div>


          </div>
        </template>
      </waterfall>
    </div>

  </div>
</template>

<script>
  import {getAlbumDetail} from "../../network/album";

  export default {
    name: "AlbumDetailPage",
    data(){
      return{
        id:0,
        currentWidth:0,
        col:1 + document.body.clientWidth/720,
        albumDetailData:{
          albumImage:[],
        },
      }
    },
    computed:{

    },
    created() {
      this.id = this.$route.params.albumId
      getAlbumDetail(this.id).then(res => {
        console.log(res);
        this.albumDetailData = res
      })
      console.log(document.body.clientWidth);
    },
    mounted() {
      window.onresize = () => {
          this.currentWidth = document.body.clientWidth;
          if(this.currentWidth>1000){
            this.col = 3
          }
          else if(this.currentWidth>700){
            this.col = 2
          }
          else{
            this.col = 1
          }
      }
    }
  }
</script>

<style scoped>
  .albumpage{
    color: #eeeeee;
  }
  .albumjubotron{
    background-image: url("../../assets/image/Home/HomeBackgroundImg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .albumjubotron hr{
    border-style: solid;
    height: 1px;
    background-color: #ffffff;
  }
  .list::-webkit-scrollbar{
    display: none;
  }
  .img-thumbnail{
    border-color: rgb(50,50,50) ;
    background-color: rgb(28,28,28);
  }
  .card{
    background-color: rgb(28,28,29);
    color: rgb(152,152,158);
    margin: 2px;
    border-collapse:collapse;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
  }
  .card:hover{
    transform: scale(1.01);
    -webkit-transform: scale(1.01);
  }
  .container-fluid{
    height: calc(100vh - 90px);
  }
  .container-fluid #fall{
    height: 100%;
    margin-bottom: 10px;
  }
</style>