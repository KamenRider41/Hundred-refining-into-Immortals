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

@media only screen and (max-width: 750px) {
  .nav-list {
    &-title {}

    &-list {
      display: grid;
      grid-template-columns: repeat(7, 96px);
    }
  }
}

@media only screen and (max-width: 650px) {
  .nav {
    &-list {
      display: grid;
      grid-template-columns: repeat(6, 94px);
    }
  }
}

@media only screen and (max-width: 550px) {
  .nav {
    &-list {
      display: grid;
      grid-template-columns: repeat(5, 92px);
    }
  }
}

@media only screen and (max-width: 450px) {
  .nav {
    &-list {
      display: grid;
      grid-template-columns: repeat(4, 90px);
    }

  }
}
</style>
