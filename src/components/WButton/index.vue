<template>
  <button class="w-button">
    <i class="weui-loading" v-if="showLoading"></i>
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
  import { go } from '../../utils/skipUrl'
  export default {
    name: 'w-button',
    props: {
      type: {
        default: 'default'
      },
      disabled: Boolean,
      mini: Boolean,
      plain: Boolean,
      text: String,
      actionType: String,
      showLoading: Boolean,
      link: [String, Object],
    },
    methods: {
      onClick () {
        !this.disabled && go(this.link, this.$router)
      }
    },
  };
</script>

<style scoped  lang="less">
  .w-button {
    height: 3.8rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    border: none;
    outline: none;
    background: #2495ee;
    color: #fff;
    font-size: 1.4rem;
    user-select: none;
  }
  .w-button:active {
    background: #2488DF;
  }
</style>
