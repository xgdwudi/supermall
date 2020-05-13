<template>
  <div class="buttom-sum">
    <div class="sum-item">
      <div class="sum-item">
        <check-button :isActive="quanxuan" class="check-buttom" @click.native="selectAll"/>
        <div>全选</div>
      </div>
      <div>合计:￥{{zonngshu}}</div>
      <div>去计算:{{jisuan}}</div>
    </div>

  </div>
</template>

<script>
  import CheckButton from "./CheckButton";

  export default {
    name: "ButtomSum",
    components: {
      CheckButton
    },
    data() {
      return {
      }
    },
    computed: {
      zonngshu() {
        return this.$store.state.shops.filter(item => {
          return item.isActive
        }).reduce((previousValue, currentValue) => {
          return previousValue + currentValue.price * currentValue.count
        }, 0)
      },
      jisuan() {
        return this.$store.getters.cartList.filter(item => {
          return item.isActive == true
        }).length
      },
      quanxuan() {
        if(this.$store.getters.cartList.length==0) return false
        return !this.$store.getters.cartList.filter(item =>!item.isActive).length
      },
    },
    methods: {
      selectAll() {
        if(this.quanxuan){
          this.$store.state.shops.filter(item=>
            item.isActive=false
          )
        }else{
          this.$store.state.shops.filter(item=>
            item.isActive=true
          )
        }


      }
    }
  }
</script>

<style scoped>
  .buttom-sum {
    background: #eee;
    height: 44px;
    line-height: 44px;
  }


  .sum-item {
    display: flex;
    align-items: center;
  }
</style>
