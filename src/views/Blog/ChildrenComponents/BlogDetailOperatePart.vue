<template>
  <div class="operatepart">
      <div class="card pre" @click="itemClick(preBlogData._id)">
        <h5 class="card-header">Previous</h5>
        <div class="card-body">
          <p>{{preBlogData.blogTitle}}</p>
        </div>
      </div>
    <div class="card next" @click="itemClick(nextBlogData._id)">
      <h5 class="card-header">Next</h5>
      <div class="card-body">

        <p>{{nextBlogData.blogTitle}}</p>
      </div>
    </div>
    </div>
</template>

<script>
  export default {
    name: "BlogDetailOperatePart",
    methods:{
      itemClick(id){
        if(id != -1){
          this.$router.push("/blog/"+id)
        }
      },
      nextItemClick(){

      }
    },
    props:{
      preBlogData:{
        type:Object,
        default(){
          return {
            _id:-1,
            blogTitle:"无"
          }
        }
      },
      nextBlogData:{
        type:Object,
        default() {
          return {
            _id:-1,
            blogTitle:"无"
          }
        }
      }
    }
  }
</script>

<style scoped>
  .operatepart{
    margin-bottom: 15px;

  }
  .card{
    background-color: rgb(28,28,28);
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
  }
  .card:hover{
    transform: scale(1.08);
    -webkit-transform: scale(1.08);
  }
  .card:hover p{
    color:#4682b4;
  }
  .pre{
    margin-bottom: 15px;
  }
  .card-body {
    padding: 10px 20px;
  }



</style>