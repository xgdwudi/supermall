<template>
  <div class="buttom-sum">
    <div class="sum-item">
      <div @click="selectAll"  class="sum-item">
        <check-button :isActive="quanxuan" class="check-buttom"/>
        <div>全选</div>
      </div>
      <div>合计:￥{{zonngshu}}</div>
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
    data(){
      return{
        quanxuan:true
      }
    },
    computed: {
      zonngshu() {
        return this.$store.state.shops.filter(item => {
          return item.isActive
        }).reduce((previousValue, currentValue) => {
          return previousValue + currentValue.price*currentValue.count
        }, 0)
      },
    },
    methods: {
      selectAll() {
        this.quanxuan=!this.quanxuan
        if(this.quanxuan==true){
          this.$store.state.shops.filter(item=>{
            item.isActive=true
          })

        }else{
          this.$store.state.shops.filter(item=>{
            item.isActive=false
          })
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
