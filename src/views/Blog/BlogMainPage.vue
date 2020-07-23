<template>
  <div class="blog">
    <div class="jumbotron jumbotron-fluid blogjubotron text-white">
      <div class="container">
        <h1 class="display-4">Blog</h1>
        <hr class="my-4">
        <p class="lead">生活中的点滴记录</p>
      </div>
    </div>
    <div class="container">
      <BlogMainPageList :blog-sub-page-list="blogSubPage[currentPage]"></BlogMainPageList>
      <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <div class="page-link pagecount" @click="pageControl(0)" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </div>
            </li>
            <li class="page-item" v-for="(index,item) in blogSubPage.length" :key="index"><div class="page-link pagecount" :class="{'active':item === currentPage}" @click="pageChange(item)">
              {{item+1}}</div></li>
            <li class="page-item">
              <div class="page-link pagecount" @click="pageControl(1)" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </div>
            </li>
          </ul>
        </nav>
      <BlogMainPageCopyright></BlogMainPageCopyright>
  </div>

  </div>

</template>

<script>
  import {getAllBlog} from "../../network/blog";
  import BlogMainPageList from "./ChildrenComponents/BlogMainPageList";
 import BlogMainPageCopyright from "../../components/copyright";
  export default {
    name: "blog",
    data(){
      return{
        blogSubPage:[],
        currentPage:0,
      }
    },
    methods:{
      pageChange(index){
        this.currentPage = index
      },
      pageControl(flag){
        if(flag === 1 && this.currentPage < this.blogSubPage.length - 1){
          this.currentPage += 1
        }
        else if(flag ===0 && this.currentPage > 0 ){
          this.currentPage -= 1;
        }
      }
    },
    created() {
      getAllBlog().then(res => {
        while(res.length !== 0)
        {
          this.blogSubPage.push(res.splice(0,3));
        }

      })
    },
    components:{
      BlogMainPageList,
      BlogMainPageCopyright
    }
  }
</script>

<style scoped>
  .blog{
    color: #eeeeee;
  }
  .blogjubotron{
    background-image: url("https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/image/Blog/BlogBackgroundImg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .blogjubotron hr{
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