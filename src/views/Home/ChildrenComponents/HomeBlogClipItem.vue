<template>
  <div class="item">
    <a href="/home"><h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quas.</h1></a>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, est eum in laborum modi necessitatibus voluptate. Aut illum numquam quae quasi quidem! Architecto asperiores atque autem commodi, corporis dicta esse fugit iste laudantium minima neque nostrum praesentium quis ratione sit, tempore vel vero voluptate. A accusamus accusantium atque aut culpa deleniti deserunt dolores ea enim expedita facilis fuga ipsum laudantium neque nesciunt, nobis numquam obcaecati officia omnis quaerat quisquam repudiandae sed similique vel vero? Amet asperiores corporis doloribus fugiat illum iste maxime perferendis, placeat, quisquam, reiciendis sapiente sit unde voluptatem. Eaque magni maiores molestias nostrum provident quaerat quisquam quo ullam?</p>
    <hr class="my-4">
  </div>
</template>

<script>
  export default {
    name: "HomeBlogClipItem"
  }
</script>

<style scoped>
  .item hr{
    border-style: solid;
    background-color: rgb(152,152,158);
  }
  .item a{
    color:#ffffff;
  }
  .item p{
    color: rgb(152,152,158)
  }
  .item a:hover{
    color:#4682b4;
    text-decoration:none;
  }
</style>