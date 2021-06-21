<template>
  <div>
    <!-- 登录主体部分start -->
    <div class="login w990 bc mt10">
      <div class="login_hd">
        <h2>用户登录</h2>
        <b></b>
      </div>
      <div class="login_bd">
        <div class="login_form fl">
          <form action="" method="post">
            <ul>
              <li>
                <label for="">手机号：</label>
                <input type="text" class="txt" name="mobile" v-model="regForm.mobile"/>
              </li>
              <li>
                <label for="">密码：</label>
                <input type="password" class="txt" name="password"  v-model="regForm.password"/>
                <a href="">忘记密码?</a>
              </li>
              <li class="checkcode">
                <label for="">验证码：</label>
                <input type="text"  name="checkcode"  v-model="regForm.code"/>
                <img :src="codeSrc" alt="验证码" />
                <span>看不清？<a @click="updateImageCode()">换一张</a></span>
              </li>
              <li>
                <label for="">&nbsp;</label>
                <input type="checkbox" class="chb"  /> 保存登录信息
              </li>
              <li>
                <label for="">&nbsp;</label>
                <input type="button" value="登录" @click.prevent="submit" class="login_btn" />
              </li>
            </ul>
          </form>

          <div class="coagent mt15">
            <dl>
              <dt>使用合作网站登录商城：</dt>
              <dd class="qq"><a href=""><span></span>QQ</a></dd>
              <dd class="weibo"><a href=""><span></span>新浪微博</a></dd>
              <dd class="yi"><a href=""><span></span>网易</a></dd>
              <dd class="renren"><a href=""><span></span>人人</a></dd>
              <dd class="qihu"><a href=""><span></span>奇虎360</a></dd>
              <dd class=""><a href=""><span></span>百度</a></dd>
              <dd class="douban"><a href=""><span></span>豆瓣</a></dd>
            </dl>
          </div>
        </div>

        <div class="guide fl">
          <h3>还不是商城用户</h3>
          <p>现在免费注册成为商城用户，便能立刻享受便宜又放心的购物乐趣，心动不如行动，赶紧加入吧!</p>

          <a href="regist" class="reg_btn">免费注册 >></a>
        </div>

      </div>
    </div>
    <!-- 登录主体部分end -->
  </div>
</template>

<script>
import sysConfig from "~/plugins/sysConfig";

export default {
  name: "login",
  head(){
    return　{
      title:'京西商城-用户登录'
    }
  },
  layout:'loginAndRegist',
  data(){
   return {regForm:{
      mobile:'13786100417',
      password:'123456',
       code:'345321'
     },
     codeSrc:sysConfig.baseURL+"web/user/code"
   }
  },
  methods:{
    async submit(){
      let user = this.regForm;
      let data = await this.$axios.$post(sysConfig.baseURL+'user/login',user);
      if (data.error==200){
        alert("登录成功，token为"+data.token);
      }else {
        alert("登录失败！！！！")
      }
      console.log(this.regForm+''+data);
    },
    updateImageCode(){
      this.codeSrc = sysConfig.baseURL+"web/user/code?rd="+Math.random();
    }
  }
}
</script>

<style scoped>
</style>
