<template>
  <div class="error-page">
    <div> <span class="white-text">401</span><span class="error-text">error</span></div>
    <router-link :to="'/'" class="go-back"> 返 回 首  页</router-link>
    <div class="page-img">
      <img src="../../assets/errorPage/401.png" alt="">
    </div>
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
    .white-text{
      font-size: 5rem;
      color: #fff;
      user-select: none;
    }
    .error-text{
      color: #a6cee8;
      font-size: 6rem;
      user-select: none;
    }
    .page-img {
      text-align: center;
    }
    .go-back{
      letter-spacing: 2px;
      color: #89b6d2;
      text-align: center;
      display: block;
      font-size: 1rem;
      margin: 1.5rem 0;
    }
    .go-back:active{
      color: #f3bf6c;
    }
  }
</style>
