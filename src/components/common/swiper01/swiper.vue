<template>
  <div id="hy-swiper">
    <div class="swiper">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "swiper"
  }
</script>

<style scoped>

</style>
