<template>
  <div>
    <Header></Header>
    <div style="clear:both;"></div>
    <nuxt />
    <div style="clear:both;"></div>
    <Footer></Footer>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "indexLayout",
  components: {
    Header,
    Footer
  },
  head: {
    title: '京西商城',
    link: [
      {rel:'stylesheet',href:'/style/base.css'},
      {rel:'stylesheet',href:'/style/global.css'},
      {rel:'stylesheet',href:'/style/header.css'},
      {rel:'stylesheet',href:'/style/index.css'},
      {rel:'stylesheet',href:'/style/bottomnav.css'},
      {rel:'stylesheet',href:'/style/footer.css'},
      // {rel:'stylesheet',href:'/style/login.css'}
    ],
    script:[
      { type: 'text/javascript', src: '/js/jquery-1.8.3.min.js' },
      { type: 'text/javascript', src: '/js/header.js' },
      { type: 'text/javascript', src: '/js/index.js' },
    ]
  },
}
</script>

<style scoped>

</style>
