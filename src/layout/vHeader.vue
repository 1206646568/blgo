<template>
    <header>
      <div class="menu">
        <nav class="nav" id="topnav">
          <h1 class="logo">
            <router-link tag="a" to="/">Blog</router-link>
          </h1>
          <li>
            <router-link tag="a" to="/">网站首页</router-link>
          </li>
          <li v-for="el in nav" :key="el.name">
            <router-link tag="a" :to="el.href">{{el.name}}</router-link>
          </li>
        </nav>
      </div>
    </header>
</template>
<script>
export default {
  data () {
    return {
      nav: [
        { href: '/about', name: '关于我' },
        { href: '/', name: '模板分享' },
        { href: '/', name: '学无止境' },
        { href: '/', name: '慢生活' },
        { href: '/', name: '时间轴' },
        { href: '/', name: '留言' },
        { href: '/', name: '内容页' }
      ]
    }
  }
}
</script>
