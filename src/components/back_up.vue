<template>
	<div id="backup">
		<div class="hide"><i class="iconfont">&#xe751;</i></div>
		<i class="iconfont backTop" @click="BackTop()">&#xe769;</i>
		<!--<Back-top :height="100" :bottom="200">
			<i class="iconfont">&#xe769;</i>
		</Back-top>-->
	</div>
</template>
<script>
	export default {
	    name: 'backup',
	    created() {
	    	console.log("=="+document.body.scrollTop);
	    },
	    methods: {
	    	BackTop: function(){
	    		window.scrollTo(0,0);
	    	}
	    }
	};
</script>
<style lang="less" rel="stylesheet/less" type="text/css">
	@import '../public/css/variable.less';
	.ivu-icon-chevron-up:before {
	    content: "";
	}
	.backTop{
		position: fixed;
		right: 20px;
		bottom: 200px;
		z-index: 9;
		cursor: pointer;
		.fonts(50px) !important;
		width: 65px;
		height: 65px;
		color: #afafaf;
		.trans(.3s);
		&:hover{
			color: @cmain_b;
		}
	}
</style>	
