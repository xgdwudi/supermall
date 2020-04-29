<template>
  <swiper>
    <swiper-item v-for="item in banner">
      <a href="#">
        <img :src="item.image" @load="imgload">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "../../../components/common/swiper"

  export default {
    name: "HomeSwiper",
    props:{
      banner:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
          isLoad:false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      imgload(){
        if(!this.isLoad){
          this.$emit('swiperImgload')
          this.isLoad=true
        }

      }
    }
  }
</script>

<style scoped>

</style>
