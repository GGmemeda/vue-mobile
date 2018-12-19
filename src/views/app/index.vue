<template>
  <div class="home-page">
    <div class="header">45px头部</div>

    <div class="body">
      <div class="container">
      <scroll ref="bodyScroll" :click="options.click" :tap="options.tap">
        <div class="long-content">中间很长的一部分</div>
      </scroll>
      </div>
    </div>
    <div class="footer">
      <div class="footer-nav">导航1</div>
      <router-link to="dishesNav" class="footer-nav">导航到选择页</router-link>
      <div class="footer-nav">导航3</div>
    </div>
  </div>
</template>

<script>
  import Scroll from '../../components/scroll/scroll.vue';

  export default {
    name: 'index',
    components: {
      Scroll
    },
    data(){
      return {
        options: {
          click: true,
        },
      }
    }
  };
</script>

<style scoped type="text/less" lang="less">
  .home-page {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .header {
      height: 45px;
      text-align: center;
      line-height: 45px;
      background: #00b7b7;
    }
    .body {
      flex: auto;
      position: relative;
      .long-content{
        height: 2000px;
        background: #333333;
        color: #fff;
      }
      .container{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
      }
    }
    .footer {
      display: flex;
      height: 60px;
      line-height: 60px;
      background: darkkhaki;
      .footer-nav {
        flex: 1 1 auto;
        text-align: center;
        border-right: 1px solid #aeaeae;
      }
    }
  }
</style>
