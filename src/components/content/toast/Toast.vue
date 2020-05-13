<template>
  <div class="toast" v-show="isshow">
    <div class="toast-item">{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {

    },
    data(){
      return{
        message:'这是一个消息',
        isshow:false
      }
    },
    methods:{
      isshow1(res,times=2000){
        this.message=res;
        this.isshow=true
        setTimeout(()=>{
          this.message='';
          this.isshow=false
        },times)
      }
    }
  }
</script>

<style scoped>
  .toast{
    background: rgba(0,0,0,.7);
    position: fixed;
    top: 50%;
    right: 35%;
    color: #fff;
    padding: 8px 15px;
    z-index: 999;
  }


</style>
