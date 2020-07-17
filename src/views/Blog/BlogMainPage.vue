<template>
  <div class="blog">
    <div class="container">

    </div>
  </div>

</template>

<script>
  import {getAllBlog} from "../../network/blog";

  export default {
    name: "blog",
    data(){
      return{
        blogSubPage:[]
      }
    },
    created() {
      getAllBlog().then(res => {
        while(res.length !== 0)
        {

          this.blogSubPage.push(res.splice(0,10));
        }
        console.log(this.blogSubPage);
      })
    }
  }
</script>

<style scoped>

</style>