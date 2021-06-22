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
            <li v-if="name==null">您好，欢迎来到商城！[<nuxt-link to="/login">登陆</nuxt-link>] [<nuxt-link to="/regist">免费注册</nuxt-link>] </li>
            <li v-else>您好，欢迎{{name}} [<a href="javascript:;" @click.prevent="logout(name)" to="/logout">注销</a>]<!-- [<nuxt-link to="/regist">免费注册</nuxt-link>]--> </li>
<!--            <li>您好，欢迎来到商城！[<a href="login.html">登录</a>] [<a href="register.html">免费注册</a>] </li>-->
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
import {mapMutations, mapState} from "vuex";
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
    ],
  },  mounted() {
    //给vuex中的name属性赋值
    this.checkLoginState()
  },
  //通过计算属性从vuex中拿到name属性
  computed:{
    ...mapState(`loginStore`,{
      name :state =>state.name
    })
  },methods:{
    ...mapMutations({
      //指定checkLoginState方法在哪里
      checkLoginState:`loginStore/checkLoginState`
    }),
    logout(name){
      localStorage.removeItem("name");
      localStorage.removeItem("token");
      // console.log(this.state)
      this.$router.push("/Login")
    }

  }
};
</script>
