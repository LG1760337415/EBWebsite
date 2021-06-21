<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <td>ID</td>
          <td>商品详情</td>
          <td>价格</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(v,k) in goods" :key="k">
          <!-- <td>{{v}}</td> -->
          <td>{{v.id}}</td>
          <td>{{v.name}}</td>
          <td>{{v.price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script type="text/javascript">
  export default{
    // layout:'loginAndRegist',
    data:function() {
      return{
      	goods:[
      		{
      			"id":"1",
      			"name":"小米手机",
      			"price":"1999"
      		},
      		{
      			"id":"32",
      			"name":"小米手机",
      			"price":"1999"
      		},
      		{
      			"id":"1",
      			"name":"小米手机",
      			"price":"1999"
      		}
      	]
      }
    }
  }

</script>

<style>
  html{
    background-color: #990000;
  }
</style>
