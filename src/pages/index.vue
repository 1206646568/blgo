<template>
  <div>
    <article>
      <!--轮播与精彩推荐-->
      <picsbox></picsbox>
      <div class="blank"></div>
      <!--left 博文显示-->
      <div class="blogsbox">
        文章内容<!--标题-->
        <div class="blogs" data-scroll-reveal="enter bottom over 1s">
          <h3 class="blogtitle">
            <a href="/" target="_blank">别让这些闹心的套路，毁了你的网页设计!</a>
          </h3>
          <span class="blogpic">
            <a href="/" title="">
              <!--附件图片上传与获取-->
              <img src="images/toppic01.jpg" alt="">
            </a>
          </span>
          <p class="blogtext">
            <!--超出隐藏功能-->
            如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦！... 
          </p>
          <div class="bloginfo">
            <ul>
              <li class="author">
                <a href="/">杨青</a>
                <!--作者-->
              </li>
              <li class="lmname">
                <a href="/">学无止境</a>
                <!--分类-->
              </li>
              <li class="timer">2018-5-13<!--发布时间--></li>
              <li class="view">
                <span>34567</span>已阅读<!--是否已读功能--></li>
              <li class="like">9999<!--点赞功能--></li>
            </ul>
          </div>
        </div>
      </div>
      <!--right推荐-->
      <div class="sidebar">
        <div class="zhuanti">
          <h2 class="hometitle">特别推荐</h2>
          <ul>
            <li>
              <i>
                <img src="./../assets/images/banner03.jpg">
              </i>
              <p>帝国cms调用方法
                <span>
                  <a href="/">阅读</a>
                </span>
              </p>
            </li>
            <li>
              <i>
                <img src="./../assets/images/b04.jpg">
              </i>
              <p>5.20 我想对你说
                <span>
                  <a href="/">阅读</a>
                </span>
              </p>
            </li>
            <li>
              <i>
                <img src="./../assets/images/b05.jpg">
              </i>
              <p>个人博客，属于我的小世界！
                <span>
                  <a href="/">阅读</a>
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div class="tuijian">
          <h2 class="hometitle">推荐文章</h2>
          <ul class="tjpic">
            <i>
              <img src="./../assets/images/toppic01.jpg">
            </i>
            <p>
              <a href="/">别让这些闹心的套路，毁了你的网页设计</a>
            </p>
          </ul>
          <ul class="sidenews">
            <li>
              <i>
                <img src="./../assets/images/toppic01.jpg">
              </i>
              <p>
                <a href="/">别让这些闹心的套路，毁了你的网页设计</a>
              </p>
              <span>2018-05-13</span>
            </li>
            <li>
              <i>
                <img src="./../assets/images/toppic02.jpg">
              </i>
              <p>
                <a href="/">给我模板PSD源文件，我给你设计HTML！</a>
              </p>
              <span>2018-05-13</span>
            </li>
            <li>
              <i>
                <img src="./../assets/images/v1.jpg">
              </i>
              <p>
                <a href="/">别让这些闹心的套路，毁了你的网页设计</a>
              </p>
              <span>2018-05-13</span>
            </li>
            <li>
              <i>
                <img src="./../assets/images/v2.jpg">
              </i>
              <p>
                <a href="/">给我模板PSD源文件，我给你设计HTML！</a>
              </p>
              <span>2018-05-13</span>
            </li>
          </ul>
        </div>
        <div class="cloud">
          <h2 class="hometitle">标签云</h2>
          <ul>
            <a href="/">陌上花开</a>
            <a href="/">校园生活</a>
            <a href="/">html5</a>
            <a href="/">SumSung</a>
            <a href="/">青春</a>
            <a href="/">温暖</a>
            <a href="/">阳光</a>
            <a href="/">三星</a>
            <a href="/">索尼</a>
            <a href="/">华维荣耀</a>
            <a href="/">三星</a>
            <a href="/">索尼</a>
          </ul>
        </div>
        <div class="links">
          <h2 class="hometitle">友情链接</h2>
          <ul>
            <li>
              <a href="http://www.yangqq.com" target="_blank">杨青博客</a>
            </li>
            <li>
              <a href="http://www.yangqq.com" target="_blank">D设计师博客</a>
            </li>
            <li>
              <a href="http://www.yangqq.com" target="_blank">优秀个人博客</a>
            </li>
          </ul>
        </div>
        <div class="guanzhu" id="float">
          <h2 class="hometitle">关注我们 么么哒！</h2>
          <ul>
            <li class="sina">
              <a href="/" target="_blank">
                <span>新浪微博</span>杨青博客</a>
            </li>
            <li class="tencent">
              <a href="/" target="_blank">
                <span>腾讯微博</span>杨青博客</a>
            </li>
            <li class="qq">
              <a href="/" target="_blank">
                <span>QQ号</span>476847113</a>
            </li>
            <li class="email">
              <a href="/" target="_blank">
                <span>邮箱帐号</span>dancesmiling@qq.com</a>
            </li>
            <li class="wxgzh">
              <a href="/" target="_blank">
                <span>微信号</span>yangqq_1987</a>
            </li>
            <li class="wx">
              <img src="./../assets/images/wx.jpg">
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import picsbox from '@/components/public/picsbox'
export default {
  components: { picsbox },
  data () {
    return {

    }
  }
}
</script>
