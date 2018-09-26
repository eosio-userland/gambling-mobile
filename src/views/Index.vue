<template>
<div class="index-wrapper">
  <div class="title-box" ref="title">
    <img class="title-img" src="~@/assets/images/game/tmp/index_title.png">
  </div>

  <!--介绍-->
  <div >
  </div>

  <!--进入游戏-->
  <div>
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
    width: px2rem(400);
    height: px2rem(400);
    .title-img{
      width: px2rem(200);
      height: px2rem(200);
    }
  }
}
</style>
