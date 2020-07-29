<template>
  <MainPage>
    <Dashboard :data-list="dashboard" />
    <UserOnLineChart :data-list="userLine" />
    <PayChart :data-list="payLine" />
  </MainPage>
</template>

<script>
  import MainPage from "./usermanage/MainPage";
  import Dashboard from "../components/Dashboard";
  import {home} from "../api/home"
  import UserOnLineChart from "../components/UserOnLineChart";
  import {date} from "quasar";
  import PayChart from "../components/PayChart";

  export default {
    name: "Home",
    components:{
      PayChart,
      UserOnLineChart,
      Dashboard,
      'MainPage':MainPage
    },
    data(){
      return{
        dashboard:[],
        userLine:[],
        payLine:[]
      }
    },
    methods:{

    },
    mounted() {
      home().then(response=>{
        this.dashboard = response.data.dashboard
        // 格式化日期
        let formatDataList = []
        for(let i of response.data.userLine){
          formatDataList.push({
            date:date.formatDate(i.date, 'YYYY-MM-DD'),
            number:i.number
          })
        }
        this.userLine = formatDataList
        // 格式化日期
        let payFormatDataList = []
        for(let i of response.data.payLine){
          payFormatDataList.push({
            date:date.formatDate(i.date, 'YYYY-MM-DD'),
            number:i.number
          })
        }
        this.payLine = payFormatDataList
      })
    }
  }
</script>

<style scoped>

</style>
