<template>
  <div>
    <h1>{{ title }}</h1>
    <span class="hello">{{ helloText }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    title: String,
  },
  setup(){
    return{
      helloText: 'Hello World!'
    }
  }
})
</script>

<style lang="scss" scoped>
.hello {
  color: red;
}
</style>
