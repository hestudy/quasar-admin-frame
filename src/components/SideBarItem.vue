<template>
  <div>
    <q-expansion-item
      v-if="!item.hide&&item.children&&item.children.length>1"
      expand-separator
      :icon="item.meta.icon"
      :label="item.meta.title"
    >
      <q-item
        dense
        v-for="(item,index) in item.children"
        :key="index"
        clickable
        v-ripple
        :to="{name:item.name}"
        replace
        active-class="bg-secondary text-white"
      >
        <q-item-section avatar>
          <q-icon :name="item.meta.icon"/>
        </q-item-section>

        <q-item-section>{{item.meta.title}}</q-item-section>
      </q-item>
    </q-expansion-item>
    <q-item
      clickable
      v-ripple
      :to="item.path"
      replace
      active-class="bg-secondary text-white"
      v-if="!item.hide&&item.children&&item.children.length==1"
    >
      <q-item-section avatar>
        <q-icon :name="item.children[0].meta.icon"/>
      </q-item-section>

      <q-item-section>{{item.children[0].meta.title}}</q-item-section>
    </q-item>
  </div>
</template>

<script>
  export default {
    name: "SideBarItem",
    props:{
      item:{
        type:Object,
        default:{}
      }
    }
  }
</script>

<style scoped>

</style>
