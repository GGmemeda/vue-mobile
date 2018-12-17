<template>
  <div class="menu-container">
    <div class="left-nav">
      <scroll ref="leftScroll" :click="options.click" :tap="options.tap"
              :listenBeforeScroll="options.listenBeforeScroll"
              @beforeScrollStart="beforeScrollStart">
        <ul class="left-content" ref="formList">
          <template v-for="(item, index) in items">
            <li @click="clickItem(index)" :class="{'left-active':currentId===index}">
              <a>
                <p class="dishes-text" v-clamp>{{ index }}菜单名称菜单名称名称</p>
              </a>
            </li>
          </template>
        </ul>
      </scroll>
    </div>
    <div class="right-nav">

      <div class="fixed-title">
        <div class="inner-title">菜品{{currentId}}({{currentId}})</div>
      </div>
      <scroll :bounce="false" ref="rightScroll" :click="options.click" :tap="options.tap"
              :listenScroll="true"
              :probeType="3"
              @scroll="onRightScroll"
      >
        <div ref="menuFoodList">
          <template v-for="(item, index) in items">
            <div class="dishes-contain">
              <div class="dishes-type">
                菜品名称{{index}}({{index}})
              </div>
              <div class="item-dishes">
                <div class="left-img">
                  <img v-lazy="imgObj" :key="imgObj.src" alt="">
                </div>
                <div class="right-content">
                  <div class="title">标题在这儿呢</div>
                  <div class="content" v-clamp="2">我是内容要多一点点，我是内容要多一点点，我是内容要多一点点，我是内容要多一点点，我是内容要多一点点</div>
                  <group class="no-padding no-border">
                    <x-number :min="0"  v-model="valueObj[index]"></x-number>
                  </group>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="item-dishes">
          <div class="left-img">
            <img src="../../assets/default.png" alt="">
          </div>
          <div class="right-content">
            <div class="title">标题在这儿呢</div>
            <div class="content">我是内容没有那么多哦</div>
          </div>
        </div>

      </scroll>
    </div>

  </div>
</template>

<script>
  import Scroll from '../../components/scroll/scroll.vue';
  import clamp from '../../directive/clamp';
  import defaultImg from '../../assets/default.png';
  import { XNumber,Group } from 'vux';
  export default {
    name: 'dishesNav',
    components: {
      Scroll,
      XNumber,
      Group
    },
    directives: {
      clamp
    },
    data () {
      return {
        options: {
          click: true,
          listenBeforeScroll: true, // 用于input blur
          listenScroll: true,
        },
        imgObj: {
          src: 'http://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg',
          error: defaultImg,
          loading: defaultImg,
        },
        currentId: 0,
        valueObj: {},
        items: Array(20),
        goods: Array(20),
        checkedItems: [],
        goodsListTop: [],
        menuIndexChange: true
      };
    },
    mounted () {
      this.$nextTick(() => {
        this.getFoodListHeight();
      });
      this.$Lazyload.$on('loaded', function (listener) {
      });
    },
    methods: {
      clickItem (num) {
        this.currentId = num;
        //menuIndexChange解决运动时listenScroll依然监听的bug
        this.menuIndexChange = false;
        this.$refs.rightScroll.scrollTo(0, -this.goodsListTop[num], 400);
        this.$refs.rightScroll.scroll.on('scrollEnd', () => {
          this.menuIndexChange = true;
        });
      },
      beforeScrollStart () {
      },
      onRightScroll (pos) {
        this.goodsListTop.forEach((item, index) => {
          if (this.$refs.leftScroll && this.menuIndexChange && Math.abs(Math.round(pos.y)) >= item) {
            this.currentId = index;
            const menuList = this.$refs.leftScroll.$el.querySelectorAll('.left-active');
            const el = menuList[0];
            const wrapMenuHeight = this.$refs.leftScroll.clientHeight;
            // this.$refs.leftScroll.scrollToElement(el, 800, 0, -(wrapMenuHeight/2 - 50));
          }
        });
      },
      //获取食品列表的高度，存入shopListTop
      getFoodListHeight () {
        const listContainer = this.$refs.menuFoodList;
        if (listContainer) {
          const listArr = Array.from(listContainer.children);
          listArr.forEach((item, index) => {
            this.goodsListTop[index] = item.offsetTop;
            // console.log(item.clientHeight);
          });
        }
      },
    }
  };
</script>

<style scoped type="text/less" lang="less">
  .menu-container {
    height: 100%;
    display: flex;
    flex: 1;
    overflow-y: hidden;
    position: relative;
    .left-nav {
      height: 100%;
      background: rgb(253, 230, 224);
      width: 23%;
      overflow: hidden;
      position: relative;
      .left-active {
        border-left: 3px solid #2495ee;
        background: #fff;
      }
      /deep/ .scroll-content {
        background: rgb(253, 230, 224);
      }
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        width: 100%;
        overflow: hidden;
        li {
          width: 100%;
          position: relative;
          background: #f8f8f8;
          border-bottom: 1px solid #eeeeee;
          overflow: hidden;
          &.current {
            border-left: 3px solid #2495ee;
            background: #fff;
            p {
              color: #2495ee;
              font-weight: 600;
            }
          }
          a {
            color: #555;
            display: inline-block;
            width: 100%;
            padding: 0.2rem 0 0.2rem 0.2rem;
            margin: 0.6rem 0;
            vertical-align: middle;
            box-sizing: border-box;
            p {
              position: relative;
              margin: 0;
              font-size: 14px;
              /*display: -webkit-box;*/
              /*-webkit-line-clamp: 2;*/
              /*-moz-line-clamp: 2;*/
              /*-ms-line-clamp: 2;*/
              /*-o-line-clamp: 2;*/
              /*line-clamp: 2;*/
              /*-webkit-box-orient: vertical;*/
              /*text-overflow: -o-ellipsis-lastline;*/
              overflow: hidden;
              word-break: break-all;
              word-wrap: break-word;
              line-height: 1.2;
            }
          }
          i {
            display: block;
            position: absolute;
            background: #2395ee;
            max-width: 3rem;
            height: .8rem;
            border-radius: 3rem;
            right: .2rem;
            top: .03rem;
            margin: auto;
            font-style: normal;
            color: #fff;
            font-size: .5rem;
            line-height: .8rem;
            padding: 0 .25rem;
            text-align: center;
          }
        }
      }
    }
    .right-nav {
      flex: auto;
      width: 77%;
      min-height: 100%;
      background: rgb(220, 226, 241);
      padding: 0 5px 10px 5px;
      box-sizing: border-box;
      position: relative;
      .dishes-contain {
        margin-bottom: 10px;
      }
      .dishes-type, .inner-title {
        background: #cbcbcb;
        line-height: 30px;
        padding-left: 8px;
        margin-bottom: 10px;
        color: #257243;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .fixed-title {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        .inner-title {
          margin: 0 5px;
        }
      }
      .dishes-type + .dishes-type {
        margin-top: 10px;
      }
      .item-dishes {
        display: flex;
        padding: 15px 0;
        background: #fff;
        box-shadow: 0 1px 0 rgba(0, 0, 0, .1);
        margin-top: 5px;
        .left-img {
          box-sizing: border-box;
          display: flex;
          margin: 12px 5% 0 5%;
          img {
            height: 80px;
            width: 80px;
          }
        }
        .right-content {
          display: flex;
          flex-direction: column;
          .title {
            padding: 10px 0;
            font-size: 14px;
          }
          .content {
            font-size: 12px;
            line-height: 1.4;
            padding-right: 10px;
          }
        }
      }
    }
  }
 /deep/ .vux-number-selector svg {
    fill: #FF9900;
  }
  /deep/.weui-cell{
    padding: 0;
  }
  /deep/ .weui-cells:after{
    border: none;
  }
  /deep/ .weui-cells:before{
    border: none;
  }
</style>
