<template>
  <div>
    <div style="clear: both"></div>
    <!-- 顶部导航 start -->
    <div class="topnav">
      <div class="topnav_bd w990 bc">
        <div class="topnav_left">

        </div>
        <div class="topnav_right fr">
          <ul>
            <li>您好，欢迎来到商城！[<a href="login.html">登录</a>] [<a href="register.html">免费注册</a>] </li>
            <li class="line">|</li>
            <li>我的订单</li>
            <li class="line">|</li>
            <li>客户服务</li>

          </ul>
        </div>
      </div>
    </div>
      <!-- 页面头部 start -->
	<div class="header w990 bc mt15">
		<div class="logo w990">
			<h2 class="fl"><a href="index.html"><img src="/images/logo.png" alt="京西商城"></a></h2>
		</div>
	</div>
	<!-- 页面头部 end -->
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  name:'loginAndRegist',
  components: {
    Header,
    Footer
  },
  head: {
    title: '标题',
    link: [
      {rel:'stylesheet',href:'/style/base.css'},
      {rel:'stylesheet',href:'/style/global.css'},
      {rel:'stylesheet',href:'/style/header.css'},
      {rel:'stylesheet',href:'/style/index.css'},
      {rel:'stylesheet',href:'/style/bottomnav.css'},
      {rel:'stylesheet',href:'/style/footer.css'},
      {rel:'stylesheet',href:'/style/login.css'}
    ],
    script: [
     // { type: 'text/javascript', href: '/js/jquery-1.8.3.min.js' },
     // {type: 'text/javascript', href:'https://unpkg.com/axios/dist/axios.min.js'}
    ]
  },
};
</script>
