<template>
  <div class="container">
    <NavList v-for="nav in Navs" :key="nav.navTitle" :navList="nav"></NavList>
  </div>
</template>

<script>
import NavList from './NavList.vue'
import Navs from './data/nav'
export default {
  name: 'Nav',
  components: {
    NavList,
  },
  data () {
    return {
      Navs: Navs
    }
  },
}
</script>

<style scoped>
</style>
