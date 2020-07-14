<template>
  <div class="welcome">
    <div class="container">
      <div class="jumbotron">
        <p class="lead">您好！请折返罢，这里除了我，什么都没有。</p>
        <hr class="my-4">
        <a class="btn btn-danger btn-lg enter" href="/home">仍然前往 <i class="fas fa-angle-double-right"></i></a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "WelcomePage",
    data(){
      return {
        flag:"first"
      }
    },
    methods:{

    },
    deactivated() {


    },
    activated() {

    }
  }
</script>

<style scoped>
  .welcome{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 9;
    transform: translate(-50%,-50%);
  }
  .jumbotron{
    min-width: 320px;
    background-color: rgb(28,28,29);
    color:#ffffff;
  }
  hr{
    border-style: solid;
    height: 1px;
    background-color: #fff;
  }





</style>