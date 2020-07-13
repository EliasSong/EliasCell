<template>
  <div class="AlbumClip">
    <div class="card">
      <h5 class="card-header">Album <a class="more" href="/home">More <i class="fas fa-angle-double-right"></i></a></h5>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" >
              <img src="../../../assets/image/Home/DarkSoul1.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
              <img src="../../../assets/image/Home/DarkSoul2.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
              <img src="../../../assets/image/Home/DarkSoul3.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
              <img src="../../../assets/image/Home/DarkSoul4.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
              <img src="../../../assets/image/Home/DarkSoul5.jpg" class="d-block w-100">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      <div class="AlbumBtn">
        <div v-for="(item,index) in albumClipNameList" :key="index" class="AlbumName" :class="{'active':index === currentIdx}"
           @click="carouselChange(index)"><p class="lead">{{item}}</p></div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "HomeAlbumClip",
    data(){
      return {
        albumClipNameList:["黑暗之魂","血源诅咒","只狼"],
        currentIdx:0,
      }
    },
    methods:{
      carouselChange(index){
        this.currentIdx = index;
      }
    }
  }
</script>

<style scoped>
  .AlbumClip{
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
  .AlbumBtn{
   display: flex;
    text-align: center;

  }
  .AlbumName{
    flex: 1;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    transition: all 0.5s ease;
    -webkit-transition:all 0.5s ease ;
  }
  .AlbumName:hover{
    background-color: rgb(40,40,40);
  }
  .active{
    background-color: rgb(45,45,45);
  }

</style>