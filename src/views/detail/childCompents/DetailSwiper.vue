<template>

  <swiper class="swiper1">
    <swiper-item v-for="item in ImageTop">
      <img :src="item">
    </swiper-item>
  </swiper>

</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper'
    export default {
        name: "DetailSwiper",
      props:{
          ImageTop:{
            type:Array,
            default(){
              return []
            }
          }
      },
      components:{
        Swiper,
        SwiperItem
      }
    }
</script>

<style scoped>
.swiper1{
  height: 300px;
  overflow: hidden;
}
</style>
