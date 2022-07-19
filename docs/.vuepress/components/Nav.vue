<template>
  <div class="container">
    <NavItem class="nav-item" v-for="nav in navs" :key="nav.url" :content="nav.content" :imgSrc="nav.imgSrc"
      :url="nav.url" :imgHeight="nav.imgHeight" :imgWidth="nav.imgWidth"></NavItem>
  </div>
</template>

<script>
import NavItem from './NavItem.vue'
import navs from './data/nav'
export default {
  name: 'Nav',
  components: {
    NavItem,
  },
  data () {
    return {
      navs: navs
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(6, 100px);
  /* grid-template-rows: 100px, 100px; */
}

.nav-item {
  margin: 10px;
}
</style>
