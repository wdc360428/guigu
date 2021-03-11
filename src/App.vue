<template>
  <div class="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.FooterGuide"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'app',
  components: {
    FooterGuide
  }
}
</script>

<style scoped>
  .app {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
</style>
