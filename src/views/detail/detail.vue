<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :ImageTop="topImages"/>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imgLoad"/>
      <detail-param-info :paramInfo="paramInfo"/>
      <detail-comment-info :commentInfo="commentInfo"/>
      <goods-list :goods="recommend"/>
    </scroll>
  </div>
</template>

<script>
  import detailNavBar from "./childCompents/detailNavBar";
  import DetailSwiper from "./childCompents/DetailSwiper";
  import DetailBaseInfo from "./childCompents/DetailBaseInfo";
  import DetailShopInfo from "./childCompents/DetailShopInfo";
  import DetailGoodsInfo from "./childCompents/DetailGoodsInfo";
  import DetailParamInfo from "./childCompents/DetailParamInfo";
  import DetailCommentInfo from "./childCompents/DetailCommentInfo";
  import GoodsList from "../../components/content/goods/GoodsList";

  import Scroll from '../../components/common/scroll/scroll'

  import {
    getdetail, Goods, Shop, GoodsParam,getTuiijian
  } from "../../network/detail";

  export default {
    name: "detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo:{},
        recommend:[]
      }
    },
    components: {
      detailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList
    },
    created() {
      console.log(this.$route.params.iid);
      this.iid = this.$route.params.iid
      //  根据iid请求数据
      getdetail(this.iid).then(res => {
        console.log(res);
        const data = res.result
        this.topImages = data.itemInfo.topImages
        //  获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        //  创建店铺信息
        this.shop = new Shop(data.shopInfo)

        //  保存上平的详情数据
        this.detailInfo = data.detailInfo;
        //  获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //  去除评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo=data.rate.list[0]
        }
      })
      //获取推荐信息
      getTuiijian().then(res=>{
        this.recommend=res.data.list

      })
    },
    methods: {
      imgLoad() {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background: #fff;
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px);
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background: #FFF;
  }
</style>
