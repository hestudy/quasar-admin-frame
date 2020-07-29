<template>
  <q-layout view="lHh lpR fFf">

    <q-header elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left"/>

        <q-toolbar-title>
          {{$t('login.title')}}
        </q-toolbar-title>
        <q-select borderless v-model="language" :options="languageList" @input="changeLanguage()" />
        <q-btn-dropdown color="white" icon="account_box" flat>
          <q-list>

            <q-item clickable v-close-popup @click="logOut()">
              <q-item-section>
                <q-item-label>退出登录</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </q-btn-dropdown>
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
        left: false,
        language:'',
        languageList:[]
      }
    },
    methods:{
      async logOut(){
        await this.$store.dispatch('user/removeToken')
        this.$router.replace('/')
      },
      changeLanguage(){
        this.$i18n.locale = this.language
        this.$store.dispatch("user/resetRouter")
      }
    },
    mounted() {
      this.language = this.$i18n.locale
      this.languageList = this.$i18n.availableLocales
    }
  }
</script>

<style scoped>

</style>
