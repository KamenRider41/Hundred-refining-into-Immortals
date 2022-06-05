<template>
  <div class="item">
    <a target="_blank" :href="`https://leetcode-cn.com/problems/${data.slug_title}`">{{
        `${data.question_id}.${data.title}`
    }}</a>
    <Button type='success' text="容易" v-show="data.level === 1" />
    <Button type='warning' text="中等" v-show="data.level === 2" />
    <Button type='danger' text="困难" v-show="data.level === 3" />
  </div>
</template>

<script>
import Button from './Button';
export default {
  name: 'Item',
  props: {
    data: {
      type: Object,
    },
  },
  components: {
    Button
  },
}
</script>

<style>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 20px;
}
</style>