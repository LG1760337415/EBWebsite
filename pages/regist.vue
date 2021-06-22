<template>
	<!-- 登录主体部分start -->
	<div class="login w990 bc mt10 regist">
		<div class="login_hd">
			<h2>用户注册</h2>
			<b></b>
		</div>
		<div class="login_bd">
			<div class="login_form fl">
				<form action="" method="post">
					<ul>
						<li>
							<label for="">用户名：</label>
							<input type="text" class="txt" v-model="regForm.name" name="username" />
							<p>3-20位字符，可由中文、字母、数字和下划线组成</p>
						</li>
						<li>
							<label for="">密码：</label>
							<input type="password" class="txt" name="password" v-model="regForm.password"/>
							<p>6-20位字符，可使用字母、数字和符号的组合，不建议使用纯数字、纯字母、纯符号</p>
						</li>
						<li>
							<label for="">确认密码：</label>
							<input type="password" v-model="password" class="txt" name="password" />
							<p> <span>请再次输入密码</span></p>
						</li>
					    <li>
							<label for="">手机号码：</label>
							<input type="text" class="txt" name="mobile" v-model="regForm.mobile" />
							<button @click.prevent="sendSMS" :disabled="smsBinDisabled"> 点击发送短信验证码
                <span v-if="smsBinDisabled">{{seconds}}秒</span>
              </button>
						</li>
						<li class="checkcode">
							<label for="">验证码：</label>
							<input type="text"  v-model="regForm.code" name="code" />
						</li>
						<li>
							<label for="">&nbsp;</label>
							<input type="checkbox" class="chb" checked="checked" /> 我已阅读并同意《用户注册协议》
						</li>
						<li>
							<label for="">&nbsp;</label>
							<input type="button" @click="submit()" value="" class="login_btn" />
						</li>
					</ul>
				</form>


			</div>

			<div class="mobile fl">
				<h3>手机快速注册</h3>
				<p>中国大陆手机用户，编辑短信 “<strong>XX</strong>”发送到：</p>
				<p><strong>1069099988</strong></p>
			</div>

		</div>
	</div>
	<!-- 登录主体部分end -->


<!--  <div>hh</div>-->
</template>

<script>
import sysConfig from "~/plugins/sysConfig";
export default {
	layout: 'loginAndRegist',
  head:{
	  title:'京西商城--用户注册'
  },
	data(){
		return{
			regForm:{
			  name:'',
        password:'',
        mobile:'',
        code:''
      },
      password: '',
      seconds:60,
      smsBinDisabled:false,
      timer:null//计时器
		}
	},
	methods:{
		async submit(){
		  // alert(this)
      // console.log(this);
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 50000)
      })

		  return ;
      let user = this.regForm;
      //表单验证
      if(!this.verify_form(user)){
        return false;
      };
			let data = await this.$axios.$post(sysConfig.baseURL+'web/user/regist',user);
			console.log(data);
			if (data.error==200) {
				alert("注册成功，可以登录");
				this.$router.push("/login");
			}else if (data.error==50001){
        alert("验证失败："+data.errmsg);
      }else{
				alert(data.errmsg);
			}
		},
    async sendSMS(){
		  let phone = this.regForm.mobile;
		  if (phone==''){
		    alert('手机号码不能为空')
		    return;
      }

		  let data = await this.$axios.$get(sysConfig.baseURL+'web/sms/'+phone);
		  console.log(data);
      if (data.error==200){
        alert('短信发送成功,请注意查收');
        this.smsBinDisabled = true;

        this.timer = setInterval(this.daoJiShi,1000)
      }else{
        alert(data.errmsg);
      }
    },
    verify_form(user){
      if (user.name==''){
        alert('用户名不能为空');
        return false;
      }else if (user.password==''){
        alert('密码不能为空');
        return false;
      }else if (user.mobile==''){
        alert('手机号码不能为空');
        return false;
      }else if (user.password!=this.password){
        alert('确认密码与密码不相同');
        return false;
      }else if (user.code==''){
        alert('验证码不能为空')
        return false;
      }
      return true;
    }
    ,
    daoJiShi(){
		  if(this.seconds>0){
		    this.seconds --;
      }else{
		    //停止计时器
		    clearInterval(this.timer);
		    //重置计时
        this.seconds = 60;
        //按钮重新生效；
        this.smsBinDisabled = false;
      }
    }
	}
}
</script>

<style>

</style>
