<template>
  <div class="error-page">
    <div class="page-img">
      <img src="../../assets/errorPage/404.png" alt="">
    </div>
    <router-link :to="'/'" class="go-back"> 返 回 首  页</router-link>
  </div>
</template>

<style scoped type="text/less" lang="less">
  .error-page {
    height: 100%;
    background: url("../../assets/errorPage/error-bg.png");
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .page-img {
      text-align: center;
    }
    .go-back{
      letter-spacing: 2px;
      color: #89b6d2;
      text-align: center;
      display: block;
      font-size: 1rem;
      margin-top: 3rem;
    }
    .go-back:active{
      color: #f3bf6c;
    }
  }
</style>
