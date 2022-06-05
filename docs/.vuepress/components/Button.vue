<!--
 * @Author: 41
 * @Date: 2022-05-10 14:36:19
 * @LastEditors: 41
 * @LastEditTime: 2022-05-10 21:01:17
 * @Description: 
-->
<template>
  <button @click="emitClick" :class="['m-button', `btn-${type}`, btnShadow ? 'btn-shadow' : '']">
    {{ text }}
  </button>
</template>

<script>
import './scss/button.scss'
const typeMap = [
  'default',
  'primary',
  'success',
  'danger',
  'warning'
]

export default {
  name: 'Button',
  emits: ['click'],
  props: {
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return typeMap.includes(value)
      }
    },
    btnShadow: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: '按钮'
    }
  },
  methods: {
    emitClick (ev) {
      this.$emit('click', ev)
    },
  },

}
</script>