<template>
  <div class="card" :style="style" @click="clickMethods">
    <div class="card-icon">
      <img alt="web-logo" :src=imgSrc :style="imgStyle">
    </div>
    <div class="card-content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'NavItem',
  props: {
    height: {
      type: String,
      default: '80px'
    },
    width: {
      type: String,
      default: '60px'
    },
    imgHeight: {
      type: String,
      default: '30px'
    },
    imgWidth: {
      type: String,
      default: '30px'
    },
    content: {
      type: String,
      default: '这是一个网站'
    },
    imgSrc: {
      type: String,
      default: "/Hundred-refining-into-Immortals/nav.png"
    },
    url: {
      type: String,
      default: 'https://www.baidu.com'
    }
  },
  computed: {
    style () {
      return {
        height: this.height,
        width: this.width
      }
    },
    imgStyle () {
      return {
        height: this.imgHeight,
        width: this.imgWidth
      }
    }
  },
  methods: {
    clickMethods () {
      window.open(this.url, "_black")
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(168, 166, 166, 0.1);
  border-radius: 20px;
  padding: 10px 10px;
}

.card:hover {
  background-color: rgb(168, 166, 166);
}

.card-content {
  flex: 0.3;
  font-size: xx-small;
  text-align: center;
}

.card-icon {
  flex: 0.7;
}
</style>
