<template>
  <div class="about">
    <div class="card">
      <h5 class="card-header">About me</h5>
      <img src="../../../assets/image/Aboutme/aboutme.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h1>宋颍博</h1>
        <h1>Elias Song</h1>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <hr class="my-4">
        <p class="lead"><i class="fas fa-envelope"></i> : eliassong1997@gmail.com</p>
        <p class="lead"><i class="fab fa-weixin"></i> : SagenSiebitte</p>
        <p class="lead"><i class="fab fa-github"></i> : EliasSong</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "aboutme"
  }
</script>

<style scoped>
  .card{
    background-color: rgb(28,28,29);
    color:#eeeeee
  }
  hr{
    border-style: solid;
    height: 1px;
    background-color: #ffffff;
  }



</style>