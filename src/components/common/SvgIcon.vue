<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon'
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  }
})
</script>

<template>
  <svg aria-hidden="true">
    <use :fill="color" :href="symbolId" style="pointer-events: none" />
  </svg>
</template>
