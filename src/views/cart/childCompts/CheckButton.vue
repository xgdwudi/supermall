<template>
    <div class="check-button"  :class="{active:isActive}">
      <img src="@/assets/img/cart/tick.svg">
    </div>
</template>

<script>
    export default {
        name: "CheckButton",
        props:{
          isActive:{
            type:Boolean,
            default:false
          }
      }
    }
</script>

<style scoped>
.check-button{
  width: 25px;
  height: 25px;
  border-radius: 25px;
  border: 2px solid #C1C1C1;
}
.check-button img{
  width: 25px;
  height: 25px;
}
.active{
    background: #00FF00;
}
</style>
