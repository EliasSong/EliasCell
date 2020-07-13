<template>
  <div class="copyright">
    <div class="container">
      <div class="icon">
        <i class="fab fa-github fa-2x"></i>
        <i class="fab fa-zhihu fa-2x"></i>
        <i class="fab fa-youtube fa-2x"></i>
        <i class="fab fa-steam fa-2x"></i>
        <i class="fab fa-playstation fa-2x"></i>
      </div>
      <hr class="my-1">
      <div>
        <footer class="text-muted"> Copyright©EliasSong. All Rights Reserved.</footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "copyright"
  }
</script>

<style scoped>
  .copyright{
    padding: 50px 0px;
  }
  .container{
    width: 330px;
  }
  .icon{
    padding: 0 20px;
    display: flex;
    text-align: center;
  }
  .icon i{
    flex: 1;
  }
  hr{
    border-style: solid;
    height: 1px;
    background-color: #eeeeee;
  }

</style>