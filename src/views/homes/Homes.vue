<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物车</div>
    </NavBar>
    <tab-control :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 ref="tabcontroll1"
                 class="isFixd"
    v-show="isTabFixed"/>

    <scroll class="content1" ref="scroll" :probe-type="3" @scroll="scroll" :pull-up-load="true" @pullingUp="loadmore">
      <home-swiper :banner="banner" @swiperImgload="swiperImg"></home-swiper>
      <home-recommend-view :recommend="recommend"/>
      <feature/>
      <tab-control :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabcontroll2"/>
      <goods-list :goods="showgoods"></goods-list>
    </scroll>
    <back-top @click.native="BackClick" v-show="isShow"/>
  </div>
</template>

<script>
  import {
    getHomeMultidate,
    getHomeData

  } from "../../network/home";
  import {debounce} from '@/components/common/utils'

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import Feature from "./childComps/Feature";

  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabcontrol/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import scroll from "../../components/common/scroll/scroll";
  import BackTop from "../../components/content/backtop/BackTop";



  export default {
    name: "Homes",
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        isShow: false,
        currentType: 'pop',
        taboffset:0,
        isTabFixed:false,
        saveY:0,
        //   datas:
        //     {
        //       "data": {
        //         "banner": {
        //           "context": {
        //             "currentTime": 1538014774
        //           },
        //           "isEnd": true,
        //           "list": [
        //             {
        //               "acm": "3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
        //               "height": 390,
        //               "height923": 390,
        //               "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
        //               "image923": "https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg",
        //               "link": "https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
        //               "title": "焕新女装节",
        //               "width": 750,
        //               "width923": 750
        //             },
        //             {
        //               "acm": "3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
        //               "height": 390,
        //               "height923": 390,
        //               "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
        //               "image923": "https://s10.mogucdn.com/mlcdn/c45406/180926_14l41d2ekghbeh771g3ghgll54224_750x390.jpg",
        //               "link": "https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
        //               "title": "入秋穿搭指南",
        //               "width": 750,
        //               "width923": 750
        //             },
        //             {
        //               "acm": "3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
        //               "height": 390,
        //               "height923": 390,
        //               "image": "https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg",
        //               "image923": "https://s10.mogucdn.com/mlcdn/c45406/180919_47iclhel8f4ld06hid21he98i93fc_750x390.jpg",
        //               "link": "https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
        //               "title": "秋季护肤大作战",
        //               "width": 750,
        //               "width923": 750
        //             },
        //             {
        //               "acm": "3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
        //               "height": 390,
        //               "height923": 390,
        //               "image": "https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg",
        //               "image923": "https://s10.mogucdn.com/mlcdn/c45406/180917_0hgle1e2c350a57ekhbj4f10a6b03_750x390.jpg",
        //               "link": "https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
        //               "title": "流行抢先一步",
        //               "width": 750,
        //               "width923": 750
        //             }
        //           ],
        //           "nextPage": 1
        //         },
        //         "dKeyword": {
        //           "context": {
        //             "currentTime": 1538014774
        //           },
        //           "isEnd": true,
        //           "list": [
        //             {
        //               "acm": "3.mce.2_10_1ag5u.6348.0.ccy5br4OlfK0P.pos_0-m_243725-sd_119",
        //               "defaultKeyWord": "套装"
        //             }
        //           ],
        //           "nextPage": 1
        //         },
        //         "keywords": {
        //           "context": {
        //             "currentTime": 1538014774
        //           },
        //           "isEnd": true,
        //           "list": [
        //             {
        //               "acm": "3.mce.2_10_185r2.5868.0.ccy5br4OlfK1Y.pos_0-m_190323-sd_119",
        //               "is_red": "1",
        //               "words": "连衣裙"
        //             },
        //             {
        //               "acm": "3.mce.2_10_185r4.5868.0.ccy5br4OlfK1Z.pos_1-m_190324-sd_119",
        //               "is_red": "0",
        //               "words": "小白鞋"
        //             },
        //             {
        //               "acm": "3.mce.2_10_185r6.5868.0.ccy5br4OlfK10.pos_2-m_190325-sd_119",
        //               "is_red": "1",
        //               "words": "省心套装"
        //             },
        //             {
        //               "acm": "3.mce.2_10_185r8.5868.0.ccy5br4OlfK11.pos_3-m_190326-sd_119",
        //               "is_red": "0",
        //               "words": "碎花连衣裙"
        //             },
        //             {
        //               "acm": "3.mce.2_10_185ra.5868.0.ccy5br4OlfK12.pos_4-m_190327-sd_119",
        //               "is_red": "1",
        //               "words": "明星同款"
        //             },
        //             {
        //               "acm": "3.mce.2_10_185rc.5868.0.ccy5br4OlfK13.pos_5-m_190328-sd_119",
        //               "is_red": "1",
        //               "words": "高跟鞋"
        //             },
        //             {
        //               "acm": "3.mce.2_10_185re.5868.0.ccy5br4OlfK14.pos_6-m_190329-sd_119",
        //               "is_red": "0",
        //               "words": "美妆"
        //             },
        //             {
        //               "acm": "3.mce.2_10_185rg.5868.0.ccy5br4OlfK15.pos_7-m_190330-sd_119",
        //               "is_red": "1",
        //               "words": "墨镜"
        //             }
        //           ],
        //           "nextPage": 1
        //         },
        //         "recommend": {
        //           "context": {
        //             "currentTime": 1538014774
        //           },
        //           "isEnd": true,
        //           "list": [
        //             {
        //               "acm": "3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
        //               "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
        //               "link": "http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
        //               "sort": 1,
        //               "title": "十点抢券"
        //             },
        //             {
        //               "acm": "3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
        //               "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
        //               "link": "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
        //               "sort": 2,
        //               "title": "好物特卖"
        //             },
        //             {
        //               "acm": "3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
        //               "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
        //               "link": "http://act.meilishuo.com/neigouful001?acm=3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
        //               "sort": 3,
        //               "title": "内购福利"
        //             },
        //             {
        //               "acm": "3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
        //               "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
        //               "link": "http://act.meilishuo.com/wap/yxzc1?acm=3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
        //               "sort": 4,
        //               "title": "初秋上新"
        //             }
        //           ],
        //           "nextPage": 1
        //         }
        //       },
        //       "returnCode": "SUCCESS",
        //       "success": true
        //     }
        //
        // ress:{
        //   'data':{filter:{list:[],title:"首页"},list:[{
        //
        //     }]}
        // },
      }
    },
    computed: {
      showgoods() {
        return this.goods[this.currentType].list
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      Feature,
      TabControl,
      GoodsList,
      scroll,
      BackTop
    },
    created() {

      this.lunbo()
      this.getData('pop')
      this.getData('new')
      this.getData('sell')
      // this.banner = res.data.banner.list;
      // this.recommend = res.data.recommend.list;

    },
    mounted() {
      //图片加在的事件监听
      const refresh=debounce(this.$refs.scroll.refresh,500);
      //  监听item中图片加在完成
      this.$bus.$on('imgLoad', () => {
        refresh()
      })


    },
    destroyed() {
      console.log("被销毁");
    },
    activated() {
      console.log(this.saveY);
      //先刷新，在定位
      this.$refs.scroll.refresh()
      this.$refs.scroll.bcroll.scrollTo(0,this.saveY)
    },
    deactivated() {
      this.saveY=this.$refs.scroll.getscrollY()
      console.log(this.$refs.scroll.getscrollY());
    },
    methods: {
      lunbo() {
        //请求多个数据  网络请求
        getHomeMultidate().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        }).catch(err => {
          console.log(err);
        })
      },
      getData(type) {
        const page = this.goods[type].page + 1
        getHomeData(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        }).catch(err => {
          console.log(err);
        })
      },
      //事件监听
      tabClick(index) {
        console.log(index);
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;

        }
        this.$refs.tabcontroll1.active=index
        this.$refs.tabcontroll2.active=index
      },
      BackClick() {
        console.log('baclClick');
        // console.log(this.$refs.scroll.bscroll);
        this.$refs.scroll.scrollTo1(0, 0,500)
      },
      scroll(position) {
        //1.判断backtop是否显示
        this.isShow = position.y < -1000

        // 2.决定tabControl 是否吸顶{position:fixed}
        this.isTabFixed=(-position.y)>this.taboffset
      },
      loadmore() {
        this.getData(this.currentType)
      },
      swiperImg(){
        // 获取tabControl的offsettop
        this.taboffset=this.$refs.tabcontroll2.$el.offsetTop
      }
    }

  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    right: 0;
    z-index: 7;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content1 {
    /*height: calc(100% - 93px);*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 49px;
  }
  .isFixd{
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    top: 44px;
  }


</style>
