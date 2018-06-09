<template>
  <div id="app">
    <vHeader></vHeader>
    <transition name="fade">
      <router-view/>
    </transition>
    <vFooter></vFooter>
  </div>
</template>

<script>
import '@/assets/css/base.css'
import '@/assets/css/index.css'
import '@/assets/css/m.css'
import vHeader from '@/layout/vHeader'
import vFooter from '@/layout/vFooter'

export default {
  components: { vHeader, vFooter },
  name: 'App'
}
</script>

<style>
/* 设置路由的简单动画 */
.fade-enter-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
