<template>
  <div class="nav">
    <div class="nav-title">{{ navList.navTitle }}</div>
    <div class="nav-list">
      <NavItem class="nav-item" v-for="navItem in navList.navList" :key="navItem.url" :content="navItem.content"
        :imgSrc="navItem.imgSrc" :url="navItem.url" :imgHeight="navItem.imgHeight" :imgWidth="navItem.imgWidth">
      </NavItem>
    </div>

  </div>
</template>

<script>
import NavItem from './NavItem.vue'
export default {
  name: 'NavList',
  components: {
    NavItem,
  },
  props: {
    navList: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang='scss' scoped>
.nav {
  margin: 10px;

  &-title {
    font-size: 20px;
    margin: 10px;
    color: rgba(0, 0, 0, 0.64)
  }


  &-list {
    display: grid;
    grid-template-columns: repeat(8, 100px);
  }

  &-item {
    margin: 10px;
  }
}
</style>
