<template>
  <div class="albumlist">
    <div class="card" v-for="(item,index) in albumMainPageList" :key="index">
      <h5 class="card-header">{{item.albumTitle}}<a class="more" href="/home">More <i class="fas fa-angle-double-right"></i></a></h5>

        <waterfall  class="list" :col="2"
                   :data="item.albumImage">
          <template>
            <div v-for="(image, imageIdx) in item.albumImage.slice(0,10)" :key="imageIdx">
              <img :src="image.imageURL" alt="..." class="img-thumbnail">
            </div>
          </template>
        </waterfall>

    </div>
  </div>
</template>

<script>
  export default {
    name: "AlbumMainPageList",
    props:{
      albumMainPageList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
      }
    },
    created() {
      console.log(this.albumMainPageList);
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
  /*.card:hover{*/
  /*  transform: scale(1.01);*/
  /*  -webkit-transform: scale(1.01);*/
  /*  !*box-shadow:1px 1px 5px rgba(28,28,28,.5),-1px -1px 5px rgba(28,28,28,.5);*!*/
  /*}*/
  .list::-webkit-scrollbar{
    display: none;
  }
  .img-thumbnail{
    border-color: rgb(50,50,50) ;
    background-color: rgb(28,28,28);
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