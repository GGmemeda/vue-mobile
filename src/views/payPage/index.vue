<template>
  <div class="pay-page">
    <div class="page-top-part">
      <div class="pay-time-left">剩余时间 14:23</div>
      <div class="pay-show-money"><span>￥</span>0.02</div>
      <div class="pay-company">
        <img src='../../assets/payPage/mendian.png' alt="">
        <span>掌控者网络科技有限公司</span>
      </div>
    </div>
    <div class="radio-part">
      <div class="radio-line" @click="changeRadio('weixin')">
        <div class="radio-content">
          <img class="radio-img" src="../../assets/payPage/weixin.png" alt="">
          <span class="radio-text">微信支付 </span>
        </div>
        <div class="radio-right-button">
          <span class="radio-check" :class="{'radio-check-active':'weixin'===currentRadio}"></span>
        </div>
      </div>
      <div class="radio-line " @click="changeRadio('zhifubao')">
        <div class="radio-content">
          <img class="radio-img" src="../../assets/payPage/zhifubao.png" alt="">
          <span class="radio-text">支付宝支付 </span>
        </div>
        <div class="radio-right-button">
          <span class="radio-check " :class="{'radio-check-active':'zhifubao'===currentRadio}"></span>
        </div>
      </div>
    </div>
    <WButton>确认支付</WButton>
    <x-dialog v-model="show" class="dialog-fail">
      <div @click="show=false" class="close-box">
        <img src="../../assets/payPage/close.png" alt="">
      </div>
      <div class="img-box">
        <img src="../../assets/payPage/fail.png" class="fail-img">
      </div>
      <div class="fail-text">支付失败！</div>
      <x-button class="fail-button" @click="show=false">知道了</x-button>
    </x-dialog>
  </div>
</template>
<script>
  import { Radio, XButton, XDialog } from 'vux';
  import WButton from '../../components/WButton';

  export default {
    components: {
      Radio,
      WButton,
      XDialog,
      XButton
    },
    data () {
      return {
        currentRadio: 'weixin',
        show: true
      };
    },
    created () {
      document.title = '付款';
    },
    methods: {
      changeRadio (e) {
        this.currentRadio = e;
      }
    }
  };
</script>
<style type="text/less" lang="less">
  .pay-page {
    height: 100%;
    background: #f8f8f8;
    .page-top-part {
      text-align: center;
      font-size: 18px;
      margin-bottom: 32px;
      .pay-time-left {
        padding-top: 32px;
        color: #8c8c8c;
      }
      .pay-show-money {
        > span {
          font-size: 23px;
        }
        padding: 0.5rem 0 1.2rem 0;
        font-size: 38px;
      }
      .pay-company {
        font-size: 15px;
        color: #8c8c8c;
        > img {
          height: 20px;
          margin-right: 6px;
          vertical-align: text-top;
        }
        span {
        }
      }
    }
    .radio-part {
      .radio-img {
        height: 32px;
        margin-right: 12px;
        vertical-align: middle;
      }
      .radio-text {
        vertical-align: middle;
      }
      .radio-line {
        cursor: pointer;
        padding: 14px 15px;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        background: #fff;
        font-size: 16px;
        .radio-content {
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          flex: 1;
        }
        .radio-right-button {
          padding-left: .35em;
          align-items: center;
          position: relative;
          top: 3px;
          text-align: right;
        }
      }
      .radio-check:after {
        content: '';
        display: inline-block;
        width: 1rem;
        height: 1rem;
        background: url("../../assets/payPage/uncheck.png") no-repeat center;
        background-size: 100%;
      }
      .radio-check-active:after {
        background: url("../../assets/payPage/check.png") no-repeat center;
        background-size: 100%;
      }
      .radio-line + .radio-line {
        border-top: 1px solid #cccccc;
      }
    }
    .dialog-fail {
      .close-box {
        text-align: right;
        margin: 0.5rem 0.5rem 2rem 0;
        > img {
          width: 1.6rem;
        }
      }
      .img-box {
        text-align: center;
      }
      .fail-img {
        width: 4.5rem;
      }
      .fail-text {
        font-size: 1rem;
        margin: 1rem 0 3rem 0;
        text-align: center;
      }
    }
    .fail-button {
      background-color: #2495ee;
      color: #fff;
      width: 90%;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
</style>

