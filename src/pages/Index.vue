<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
  </q-page>
</template>

<script>
import {test} from "../api/test";

export default {
  name: 'PageIndex',
  mounted() {
    test().then(response=>{
      console.log(response)
    })
  }
}
</script>
