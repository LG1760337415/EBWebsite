<template>
  <div>
    <!-- 顶部导航 start -->
    <div class="topnav">
      <div class="topnav_bd w1210 bc">
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
    <!-- 顶部导航 end -->

<!--    <div style="clear:both;"></div>-->
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name:"Header",
  //vue的挂载事件，就相当于html中的onload
  mounted() {
    //给vuex中的name属性赋值
    this.checkLoginState()
  },
  //通过计算属性从vuex中拿到name属性
  computed:{
    ...mapState(`loginStore`,{
      name :state =>state.name
    })
  },
  methods:{
    ...mapMutations({
      //指定checkLoginState方法在哪里
      checkLoginState:`loginStore/checkLoginState`
    }),
    logout(name){
      localStorage.removeItem("name");
      localStorage.removeItem("token");
      // console.log(name)
      this.$router.push("/Login")
    }

  }
}
</script>

<style>

</style>
