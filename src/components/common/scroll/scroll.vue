<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        bcroll: null,
      }
    }, mounted() {
      // 1，a创建scorll的对象
      this.bcroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      // 2、监听滚动的位置
      this.bcroll.on('scroll', (position => {
        this.$emit('scroll', position)
      }))
      //  3 监听上啦事件
      this.bcroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo1(x, y, time) {
        console.log(x, y, time);
        this.bcroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.bcroll.finishPullUp()
      },
      refresh() {
        console.log("log");
        this.bcroll && this.bcroll.refresh()
      },
      getscrollY() {
        return this.bcroll ? this.bcroll.y : 0
      }

    }
  }
</script>

<style scoped>

</style>
