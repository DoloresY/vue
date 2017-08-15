<template>
	<div id="culture">
		<div class='wrap'>
			<h1>平台愿景</h1>
			<p>让投资人获得收益，为投资保驾护航。</p>
			<h1>平台使命</h1>
			<p>让互联网金融走进千家万户，让财富不再遥不可及。</p>
			<h1>核心价值观</h1>
			<p>成人达己</p>
			<h1>经营理念</h1>
			<p>作为互联网理财第三方服务平台，“成人达己”的核心价值观，、更安全的理财收益，，实现共赢的美好画面。平台自有的安全审核体系，涵盖了入驻平台前期考察审核到后期项目追踪等全程产业链的追溯评审及考核。严谨客观多维度的考核，为用户提供了更安全可靠的理财选择，为用户投资保驾护航。</p>
		</div>
	</div>
</template>
<script>
	export default {
	    name: 'culture'
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
			max-width:760px;
		}
	}
</style>