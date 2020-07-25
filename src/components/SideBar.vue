<template>
  <q-list bordered class="rounded-borders">
    <template v-for="item in routerList">
      <SideBarItem :item="item" />
    </template>
  </q-list>
</template>

<script>
  import SideBarItem from "./SideBarItem";

  export default {
    name: "SideBar",
    components:{
      'SideBarItem':SideBarItem
    },
    data(){
      return{
        routerList:[]
      }
    },
    methods:{

    },
    mounted() {
      this.routerList = this.$store.getters['user/getRouter']
    }
  }
</script>

<style scoped>

</style>
