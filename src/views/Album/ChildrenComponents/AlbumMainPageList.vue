<template>
  <div class="albumlist">
    <div class="card" v-for="(item,index) in albumMainPageList" :key="index">
      <h5 class="card-header">{{item.albumTitle}}<a class="more" @click="goToDetail(item._id)">Photos <i class="fas fa-angle-double-right"></i></a></h5>



    </div>
  </div>
</template>

<script>
  import $ from "jquery"
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
        col:1 + document.body.clientWidth/720,
        currentWidth:0,
      }
    },
    created() {

    },
    methods:{
      goToDetail(id){
        $("body,html").animate({scrollTop:0},10);
        this.$router.push("/album/"+id)
      }
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
  .card{
    background-color: rgb(36,36,36);
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