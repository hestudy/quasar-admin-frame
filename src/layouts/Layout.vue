<template>
  <q-layout view="lHh lpR fFf">

    <q-header elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left"/>

        <q-toolbar-title>
          {{$t('login.title')}}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <SideBar />
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
  import SideBar from "../components/SideBar";

  export default {
    name: "Layout",
    components:{
      'SideBar':SideBar
    },
    data() {
      return {
        left: false
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
