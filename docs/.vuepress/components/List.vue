<template>
  <div class="list">
    <Button v-for="(button, index) in mypage" :type="button.type" :text="button.text" :key="index"
      @click="changePage(index)" />
    <Item v-for="data in mylist" :key="data.id" :data="data.leetcode" />
  </div>
</template>


<script>
import page1 from './data/1'
import page2 from './data/2'
import page3 from './data/3'
import Item from './Item'
import Button from './Button'
export default {
  name: 'List',
  components: {
    Item,
    Button
  },
  data () {
    return {
      mylist: '',
      mypage: [
        { text: '1', type: 'success' },
        { text: '2', type: 'default' },
        { text: '3', type: 'default' },
      ]
    }
  },
  methods: {
    changePage (target) {
      switch (target) {
        case 0:
          this.mylist = page1.list
          break
        case 1:
          this.mylist = page2.list
          break
        case 2:
          this.mylist = page3.list
          break
      }
      this.mypage.forEach((item, index) => {
        if (index === target) {
          item.type = 'success'
        } else {
          item.type = 'default'
        }
      })
    }
  },
  created () {
    this.mylist = page1.list
  }
}
</script>