<template>
  <div class="welcome">
    <div class="container">
      <div class="jumbotron">
        <p class="lead">您好！请折返罢，这里除了我，什么都没有。</p>
        <hr class="my-4">
        <a class="btn btn-danger btn-lg"  href="/home">仍要前往<i class="fas fa-forward"></i></a>
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
    transform: translate(-50%,-50%);
  }
  .jumbotron{
    min-width: 320px;
    background-color: rgb(28,28,29);
    color:#fff;
  }
  hr{
    border-style: solid;
    height: 1px;
    background-color: #fff;
  }
  .btn>i{
    margin-left: 8px;
  }


</style>