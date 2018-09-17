<template>
  <div class="list_container">
    {{list}}
  </div>
</template>
<script>
  module.exports = {
    name:'list',
    data:function(){
      return {
        list:'list'
      }
    }
  }
</script>
<style lang="less">
  .list_container{
    width:100%;
  }
</style>
