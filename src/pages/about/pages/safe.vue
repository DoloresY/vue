<template>
	<div id="safe">
		<div class='wrap'>
			<p>A</p>
			<h1>标题1</h1>
			<p>xxxx</p>
			<h1>标题2</h1>
			<p>xxxx</p>
			<h1>标题3</h1>
			<p>xxxx</p>
			<h1>标题4</h1>
			<p>xxxx</p>
			<h1>标题5</h1>
			<p>xxxx</p>
		</div>
	</div>
</template>
<script>
	export default {
	    name: 'safe'
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../../public/css/variable.less';
	.wrap{
		padding:40px 0 ;
		h1{
			font-weight:normal;
			.fonts(18px);
			line-height:25px;
			margin-top:25px;
			color:@cmain_y;
		}
		p{
			.fonts(14px);
			line-height:24px;
			color:@cgray_s;
			max-width:760px;
		}
		img{
			display:block;
			padding-bottom:40px;
		}
	}
</style>