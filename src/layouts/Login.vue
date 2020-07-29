<template>
  <div class="fullscreen bg-secondary column justify-center items-center">
    <h3 class="text-white">{{$t('login.title')}}</h3>
    <q-form
      @submit="Login()"
      class="q-gutter-md"
      style="width: 20%;"
    >
      <q-input
        outlined
        borderless
        bg-color="white"
        v-model="loginForm.username"
        :label="$t('login.userNameLabel')"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || $t('login.userNameInputWarn'),
          val => val.length > 4 || $t('login.numberInputWarn')
          ]"
      />

      <q-input
        outlined
        bg-color="white"
        type="password"
        v-model="loginForm.password"
        :label="$t('login.passwordLabel')"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || $t('login.passwordInputWarn'),
          val => val.length > 4 || $t('login.numberInputWarn')
          ]"
      />

      <div class="row justify-center">
        <q-btn :label="$t('login.login')" type="submit" color="primary"/>
      </div>
    </q-form>
  </div>
</template>

<script>
  import {login} from "../api/login";

  export default {
    name: "Run",
    data(){
      return{
        loginForm:{
          username:'',
          password:''
        }
      }
    },
    methods:{
      Login(){
        login(this.loginForm).then(async response=>{
          await this.$store.dispatch('user/setToken',response.token)
          this.$router.go(0)
        })
      },
      vLogin(){
        if(this.$q.localStorage.getItem('token')!==null){
          this.$router.replace({name:'Home'})
        }
      }
    },
    mounted() {
      this.vLogin()
    }
  }
</script>

<style scoped>

</style>
