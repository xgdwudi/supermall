<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物车</div>
    </NavBar>
<home-swiper :banner="banner"></home-swiper>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidate} from "../../network/home";
  import HomeSwiper from "./childComps/HomeSwiper";


  export default {
    name: "Homes",
    data() {
      return {
        banner: [],
        recommend:[]
      }
    },
    components: {
      NavBar,
      HomeSwiper
    },
    created() {
      //请求多个数据
      getHomeMultidate().then(res => {
        console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background: var(--color-tint);
    color: #fff;
  }
</style>
