<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid homejubotron text-white">
      <div class="container">
        <h1 class="display-4">欢迎来到Elias Cell</h1>
        <hr class="my-4">
        <p class="lead">地球Online某处不知名角落</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8  col-md-8  col-sm-12 col-xs-12">
          <HomeBlogClip :home-blog-list="homeBlogList"></HomeBlogClip>
          <HomeAlbumClip></HomeAlbumClip>
        </div>
        <div class="col-lg-4  col-md-4  col-sm-12 col-xs-12 ">
          <HomeAboutme></HomeAboutme>
        </div>
      </div>
    </div>
    <HomeCopyright></HomeCopyright>

  </div>
</template>

<script>
  import HomeCopyright from "../../components/copyright";
  import HomeBlogClip from "./ChildrenComponents/HomeBlogClip";
  import HomeAlbumClip from "./ChildrenComponents/HomeAlbumClip";
  import HomeAboutme from "./ChildrenComponents/aboutme";
  import {getHomeBlogData} from "../../network/home";

  export default {
    name: "Home",
    data(){
      return{
        homeBlogList:[]
      }
    },
    components:{
      HomeAboutme,
      HomeCopyright,
      HomeBlogClip,
      HomeAlbumClip
    },
    methods:{



    },
    created() {
      getHomeBlogData().then(res => {

        this.homeBlogList = res.splice(0,5)

      })
    },
  }
</script>

<style scoped>
 .home{
   color: #eeeeee;
 }
  .homejubotron{
    background-image: url("../../assets/image/Home/HomeBackgroundImg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
 .homejubotron hr{
   border-style: solid;
   height: 1px;
   background-color: #ffffff;
 }

</style>