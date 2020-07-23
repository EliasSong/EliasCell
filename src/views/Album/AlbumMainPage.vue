<template>
  <div class="albummain">
    <div class="jumbotron jumbotron-fluid albumjubotron text-white">
      <div class="container">
        <h1 class="display-4">Album</h1>
        <hr class="my-4">
        <p class="lead">记录生活的光影</p>
      </div>
    </div>
      <div class="container">
        <AlbumMainPageList :album-main-page-list="albumSubPage[currentPage]"></AlbumMainPageList>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <div class="page-link pagecount" @click="pageControl(0)" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </div>
            </li>
            <li class="page-item" v-for="(index,item) in albumSubPage.length" :key="index"><div class="page-link pagecount" :class="{'active':item === currentPage}" @click="pageChange(item)">
              {{item+1}}</div></li>
            <li class="page-item">
              <div class="page-link pagecount"  @click="pageControl(1)" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </div>
            </li>
          </ul>
        </nav>
        <AlbumMainPageCopyright></AlbumMainPageCopyright>
      </div>



  </div>
</template>

<script>
  import AlbumMainPageList from "./ChildrenComponents/AlbumMainPageList";
  import AlbumMainPageCopyright from "../../components/copyright";
  import {getAllAlbum} from "../../network/album";
  export default {
    name: "AlbumMainPage",
    data(){
      return{

        albumSubPage:[],
        currentPage:0,

      }
    },
    components:{
      AlbumMainPageCopyright,
      AlbumMainPageList
    },
    mounted() {
    },
    created() {
      getAllAlbum().then(res => {
        if(res.length !== 0){
          this.albumSubPage.push(res.splice(0,2))
        }
        console.log(this.albumSubPage);


      })
    },
    methods:{
      pageChange(idx){
        this.currentPage = idx;

      },
      pageControl(flag){
        if(flag === 1 && this.currentPage < this.albumSubPage.length - 1){
          this.currentPage += 1
        }
        else if(flag ===0 && this.currentPage > 0 ){
          this.currentPage -= 1;
        }


      }
    }
  }
</script>

<style scoped>
  .albummain{
    color: #eeeeee;
  }
  .albumjubotron{
    background-image: url("../../assets/image/Album/AlbumBackgroundImg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .albumjubotron hr{
    border-style: solid;
    height: 1px;
    background-color: #ffffff;
  }
  .pagecount{
    background-color: rgb(28,28,28);
    color: #eeeeee;
    border-color:  rgb(50,50,50);
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
  }
  .pagecount:hover{
    background-color: rgb(50,50,50);
  }
  .active{
    background-color: rgb(50,50,50);
  }
</style>