<template>
  <div class="appspage">
    <div class="jumbotron jumbotron-fluid blogjubotron text-white">
      <div class="container">
        <h1 class="display-4">App</h1>
        <hr class="my-4">
        <p class="lead">一些小玩意。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App"
  }
</script>

<style scoped>
  .appspage{
    color: #eeeeee;
  }
  .jumbotron{
    background-image: url("../../assets/image/App/AppBackgroundImg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>