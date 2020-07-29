<template>
  <div class="col">
    <p class="text-h5">{{$i18n.t(`home.${title}`)}}</p>
    <p class="text-h6">{{content}}</p>
  </div>
</template>

<script>
  export default {
    name: "DashboardItem",
    props:{
      title:'',
      content:''
    }
  }
</script>

<style scoped>

</style>
