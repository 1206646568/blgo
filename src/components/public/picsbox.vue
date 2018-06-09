<template>
  <div>
    <div class="picsbox">
      <div class="banner">
        <el-carousel trigger="click" height="450px">
          <el-carousel-item v-for="el in item" :key="el.url">
            <img :src="el.url">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="toppic">
        <li>
          <a href="/" target="_blank">
            <i>
              <img src="./../../assets/images/toppic01.jpg">
            </i>
            <h2>别让这些闹心的套路，毁了你的网页设计!</h2>
            <span>学无止境</span>
          </a>
        </li>
        <li>
          <a href="/" target="_blank">
            <i>
              <img src="./../../assets/images/zd01.jpg">
            </i>
            <h2>个人博客，属于我的小世界！</h2>
            <span>学无止境</span>
          </a>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * 此处有轮播等
 */
export default{
  data () {
    return {
      item: [
        {url: require('@/assets/images/banner01.jpg')},
        {url: require('@/assets/images/banner02.jpg')},
        {url: require('@/assets/images/banner03.jpg')}
      ]
    }
  }
}
</script>
<style scoped>
</style>