<template>
  <div class="cart-list">
    <scroll class="scroll">
      <div>
        <cart-list-item v-for="(item,index) in cartList" :item-info="item"/>
      </div>
    </scroll>
  </div>

</template>

<script>
  import scroll from "../../../components/common/scroll/scroll";
  import {mapGetters} from 'vuex'

  import CartListItem from "./CartListItem";

  export default {
    name: "CartList",
    components: {
      scroll,
      CartListItem
    },
    computed: {
      ...mapGetters([
        'cartList'
      ])
    }
  }
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 44px - 49px - 44px);
  }

  .scroll {
    /*position: absolute;*/
    /*top: 0px;*/
    /*right: 0;*/
    /*left: 0;*/
    /*bottom: 49px;*/
    height: 100%;
    overflow: hidden;
  }
</style>
