<template>
  <div class="card" :style="style" @click="clickMethods" @mouseout="outMethods" @mousemove="moveMethods">
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
    },
    moveMethods (e) {
      let x = (e.offsetX - 37) / 3
      let y = (e.offsetY - 50) / 3
      e.currentTarget.style.transform = `perspective(250px) rotateX(${-y}deg) rotateY(${x}deg) scale3d(1.15, 1.15, 1.15)`
      e.currentTarget.style.bottom = `10px`
    },
    outMethods (e) {
      e.currentTarget.style.transform = `perspective(250px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      e.currentTarget.style.bottom = `0px`
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(168, 166, 166, 0.1);
  border-radius: 20px;
  padding: 10px 10px;
  will-change: transform;
  transition: all 0.3s cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;
  box-shadow: 2px 2px 1px 0.1px rgba(0, 0, 0, 0.1);

  &-content {
    flex: 0.3;
    font-size: xx-small;
    text-align: center;
  }

  &-icon {
    flex: 0.7;

  }
}

.card:hover {
  background-color: rgb(168, 166, 166);
}
</style>
