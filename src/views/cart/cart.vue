<template>
  <div class="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <cart-list/>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  import {mapGetters} from 'vuex'


  import CartList from "./childCompts/CartList";

    export default {
        name: "cart",
        components:{
          CartList,
        NavBar
       },
      comments:{
        CartList
      },
      computed:{
          // ...mapGetters([
          //   'cartLength','cartList'
          // ])
        ...mapGetters({
          cartLength:'cartLength',
          cartList:'cartList'
        })
      }
    }
</script>

<style scoped>
.nav-bar{
  background: var(--color-tint);
  color: #ffffff;
}
</style>
