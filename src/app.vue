<template>
  <div id="main">
    <!-- header -->
    <CommonHeader></CommonHeader>

    <transition name="fade">
    <!-- 路由出口 -->
     	<router-view></router-view>
     	<!-- 路由匹配到的组件将渲染在这里 -->
    </transition>

    <!-- footer -->
    <CommonFooter></CommonFooter>

		<BackUp></BackUp>
    
    <Login></Login>
  </div>
</template>

<script>
  import * as Common from './components/main';
  export default {
    name: 'app',
    components:{
    	CommonHeader: Common.Header,
      CommonFooter: Common.Footer,
    	Login: Common.Login,
    	BackUp: Common.BackUp
    }
  };
</script>
