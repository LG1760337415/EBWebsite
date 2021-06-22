//在state中专门用于定义变量
export const state = () => ({
  // 是否登录
  // isLogin:false,
  // 登录用户的姓名
  name:null
})

//专门用来定义各种方法，到时候在vue中去调用这些方法，并且改变state中的变量
export const mutations = {
  //检查登录状态
  checkLoginState(state){
    // 从localStorage中取名字，如果能取到，就放到vuex中保存，供后面多个vue组件共享
    let name = localStorage.getItem("name")
    state.name = name
    // if(name !=null){
    //   //给vuex中的name属性进行赋值
    //   state.name = name
    // }else {
    //   state.name= null;
    // }
  }
}
