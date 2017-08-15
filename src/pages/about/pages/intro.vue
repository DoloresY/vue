<template>
	<div id="intro">
		<div class="wrap">
			<h1>标题</h1>
			<p>内容</p>
			<p>内容</p>
		</div>
	</div>
</template>
<script>
	export default {
	    name: 'intro'
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../../public/css/variable.less';
	.wrap{
		padding:40px 0 0;
		h1{
			font-weight:normal;
			position:relative;
			color:@cmain_y;
			padding-left:20px;
			.fonts(18px);
			line-height:36px;
			&:before{
					content:'';
					display:block;
					width:5px;
					height:5px;
					border-radius:50%;
					background-color:@cmain_y;
					position:absolute;
					left:0;
					top:40%;
			}
		}
		p{
			.fonts(14px);
			line-height:24px;
			color:@cgray_s;
			padding:15px 0 45px 0;
			max-width:720px;
		}
	}
</style>