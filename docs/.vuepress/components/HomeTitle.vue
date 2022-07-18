<template>
  <h1 id="home-title" ref="https://github.com/KamenRider41/Hundred-refining-into-Immortals/discussions" target="_blank">
    钧桐的前端日记</h1>
</template>

<script>
export default {
  name: 'HomeTitle',
  props: {
    data: {
    },
  },
  components: {
  },
}
</script>

<style>
#home-title {
  position: relative;
  font-size: 35px;
  color: #544e58;
}

/* \94a7\6850\7684\524d\7aef\65e5\8bb0 */
#home-title:before {
  position: absolute;
  /* 这里必须是Unicode编码 */
  content: '\94a7\6850\7684\524d\7aef\65e5\8bb0';
  /* 颜色改为透明让背景色显示出来 */
  color: transparent;
  /* 使用linear-gradient函数生成一个渐变图片做背景 */
  background-image: linear-gradient(to right, #bed742, #f8aba6, #585eaa, #ed1941, #7fb80e, #f26522, #ffc20e, #7c8577, #009ad6, #65c294, #f47920, #f15b6c, #2e3a1f);
  /* 这个谷歌浏览器不起作用 */
  background-clip: text;
  /* 谷歌浏览器适配 */
  -webkit-background-clip: text;
  /* 制作一个斜矩形遮罩 使用polygon方法 */
  /* 矩形需要定义四个角的坐标，顺时针方向定义
    分别位左上，右上，右下，左下  单位为百分比*/
  clip-path: polygon(-20% 0%, 0% 0%, -10% 100%, -30% 100%);
  /* 增加动画 */
  animation: light 2s infinite;

}

@keyframes light {
  0% {
    clip-path: polygon(-20% 0%, 0% 0%, -10% 100%, -30% 100%);
  }

  50% {
    clip-path: polygon(100% 0%, 120% 0%, 110% 100%, 90% 100%);
  }

  100% {

    clip-path: polygon(-20% 0%, 0% 0%, -10% 100%, -30% 100%);
  }
}
</style>