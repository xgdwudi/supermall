<template>
  <div class="goods">
    <GoodsListItem v-for="item in goods" :goodsitem="item"/>
  </div>

</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "goods",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
