<template>
  <q-list bordered class="rounded-borders">
    <template v-for="item in $store.getters['user/getRouter']">
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

      }
    },
    methods:{

    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
