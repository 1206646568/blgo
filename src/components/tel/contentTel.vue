<template>
  <div>
    <div class="pagebg ab"> </div>
    <div class="container">
      <h1 class="t_nav">
        <span>{{setLink.text}}</span>
        <router-link tag="a" class="n1" to="/">网站首页</router-link>
        <router-link tag="a" class="n2" :to="setLink.setLink.url">{{setLink.setLink.name}}</router-link>
      </h1>
      <div class="news_infos">
        <slot name="leftContent">介绍内容</slot>
      </div>
      <div class="sidebar">
        <slot name="rightContent">右侧资料</slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [ 'setLink' ],
  data () {
    return {

    }
  }
}
</script>
