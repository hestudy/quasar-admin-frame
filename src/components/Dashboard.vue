<template>
  <div class="full-width row shadow-3 rounded-borders" style="padding: 10px;margin: 10px;">
    <DashboardItem v-for="(item,index) in dataList" :key="index" :title="item.title" :content="item.content" />
  </div>
</template>

<script>
  import DashboardItem from "./DashboardItem";

  export default {
    name: "Dashboard",
    components:{
      "DashboardItem":DashboardItem
    },
    props:{
      dataList:{
        type:Array,
        default:[]
      }
    }
  }
</script>

<style scoped>

</style>
