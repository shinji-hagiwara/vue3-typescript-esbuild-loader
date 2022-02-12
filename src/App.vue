<template>
  <HelloWorld title="Welcome to Your Vue3 App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: { HelloWorld }
})
</script>
