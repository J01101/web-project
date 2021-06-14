<template>
  <div id="app">
    <Sidebar />
    
    <Content />

    <Footer />
  </div>
</template>

<script>
import Footer from './components/layout/Footer'; //import 풋터 추가
import Sidebar from './components/layout/Sidebar'; //import 사이드바 추가
import Content from './components/layout/Content';

export default {
  name: 'App',
  components: {
    Content,
    Sidebar,  
    Footer         //풋터 컴포넌트 추가
  }
}
</script>

<style>
tml,body{padding:0; margin:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{color:#43b984;}
table{width:100%; border-collapse:collapse;}
.wrap{width:100%;}
.container{width:800px; margin:0 auto;}
a{text-decoration:none;}
.btn{padding:10px; background:#34445c; color:#fff;}
</style>
