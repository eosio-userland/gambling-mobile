<template>
<div class="index-wrapper">
  <div class="title-box">
    <img class="title-img" src="~@/assets/images/game/tmp/index_title.png">
  </div>

  <!--介绍-->
  <div class="introduction">
    <img class="introduction-img" src="~@/assets/images/game/tmp/introduction_bk.png">
  </div>

  <!--进入游戏-->
  <div class="game-entry">
    <img class="game-entry-img" src="~@/assets/images/game/tmp/game_entry.png">
  </div>
</div>
</template>
<style lang="scss" scoped>
@import '~@/assets/styles/_var.scss';
.index-wrapper{
width: 100%;
height: px2rem(2088);
background: url('~@/assets/images/game/index/index.png') no-repeat;
background-size: 100% 100%;
  .title-box{
    width: 100%;
    height: px2rem(400);
    .title-img{
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .introduction {
    width: 100%;
    height: px2rem(1288);
  }
  .game-entry{
    width: 100%;
    height: px2rem(400);
    .game-entry-img{
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
}
</style>
