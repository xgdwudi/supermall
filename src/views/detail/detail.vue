<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @shopClick="shopClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="scroll1" :probe-type="3">
      <detail-swiper :ImageTop="topImages"/>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info ref="goodsinfo" :detailInfo="detailInfo" @imageLoad="imgLoad"/>
      <detail-param-info ref="paraminfo" :paramInfo="paramInfo"/>
      <detail-comment-info ref="commentinfo" :commentInfo="commentInfo"/>
      <goods-list ref="goodlist" :goods="recommend"/>
    </scroll>
    <back-top @click.native="backtop" v-show="isshow"/>
    <detailbuttom-bar @shopClick="shopClick"/>
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

  import {Backtopadd} from '../../common/mixin'

  import {
    getdetail, Goods, Shop, GoodsParam, getTuiijian
  } from "../../network/detail";
  import BackTop from "../../components/content/backtop/BackTop";

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
        commentInfo: {},
        recommend: [],
        zhuanttai: [],
      }
    },
    mixins:[Backtopadd],
    components: {
      BackTop,
      detailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
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
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })
      //获取推荐信息
      getTuiijian().then(res => {
        this.recommend = res.data.list

      })
    },

    methods: {
      imgLoad() {
        this.$refs.scroll.refresh()
        this.zhuanttai.push(0)
        this.zhuanttai.push(this.$refs.paraminfo.$el.offsetTop)
        this.zhuanttai.push(this.$refs.commentinfo.$el.offsetTop)
        this.zhuanttai.push(this.$refs.goodlist.$el.offsetTop)
      },
      shopClick(index) {
        this.$refs.scroll.scrollTo1(0, -this.zhuanttai[index] + 44)
      },
      scroll1(position) {
        this.demo(position)
        for (let i in this.zhuanttai) {
          const j = parseInt(i)
          // console.log(position.y,55555);
          if (position.y < -this.zhuanttai[j]+44 && -this.zhuanttai[j+1]+44  < position.y) {
            this.$refs.nav.active = j
          }else if(position.y < -this.zhuanttai[j]+44){
            this.$refs.nav.active = j
          }
        }
      },
      shopClick(){
        const product={};
        product.image=this.topImages[0];
        product.title=this.goods.title;
        product.desc=this.goods.desc;
        product.price=this.goods.nowPrice;
        product.iid=this.iid
        product.count=1;
        product.isActive=true
        // this.$store.commit('addshops',product)
        this.$store.dispatch('addCart',product).then(res=>{
          this.$toast.isshow1(res,2000)
        })


      },

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
    height: calc(100% - 93px);
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background: #FFF;
  }
</style>
