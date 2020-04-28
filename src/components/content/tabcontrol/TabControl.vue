<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" @click="itemClick(index)">
      <span :class="active===index?'active':''">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        active: 0
      }
    },
    methods: {
      itemClick(index) {
        this.active = index
        this.$emit('tabClick',index)
      }
    }
  }

</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    background: #fff;
  }

  .tab-control-item {
    flex: 1;

  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }

</style>
