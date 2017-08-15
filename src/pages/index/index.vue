<template>
	<div id="index">
		
		<!-- banner -->
		<bannerCarousel adType="1" location="8"></bannerCarousel>
		<div class="platlist">
			<h2 class="title_icon"><i class="iconfont">&#xe746;</i>优选平台</h2>
			<platList platType="1"></platList>
		</div>
		<!-- 广告新闻 -->
		<div class="ads">
			<Ad></Ad>
			<platListH></platListH>
		</div>
		<!-- about iShare -->
		<div class="about">
			<div class="wrap">
				<h2 class="title_icon"><i class="iconfont">&#xe748;</i>关于</h2>
				<Row :gutter="16">
			        <Col span="6"><i class="iconfont">&#xe763;</i>优质平台<br/>精选项目</Col>
			        <Col span="6"><i class="iconfont">&#xe762;</i>多重风控<br/>安全保障</Col>
			        <Col span="6"><i class="iconfont">&#xe764;</i>收益稳健<br/>投资首选</Col>
			        <Col span="6"><i class="iconfont">&#xe765;</i>资源整合<br/>共创财富</Col>
			    </Row>
			</div>
		</div>
	</div>
</template>
<script>
   import * as Common from '../../components/main';
	export default {
	    name: 'index',
	    components:{
            platList: Common.Platlist,
            bannerCarousel: Common.Carousel,
	    	Ad: Common.Ad,
	    	platListH: Common.PlatlistH
	    }
	};
</script>
<style lang="less" rel="stylesheet/less" type="text/css">
	@import '../../public/css/variable.less';
	.platlist{
		width: 1200px;
		margin: 60px auto 20px;
	}
	.ads{
		width: 1200px;
		margin: 0 auto 50px;
	}
	.about{
		background: @cw;
		border-top: 1px solid @cborder;
		.wrap{
			width: 1200px;
			margin: 0 auto;
			padding: 25px 160px 70px;
			box-sizing: border-box;
			.title_icon{
				&:before{
					content: "";
					background: @cw;
				}
			}
			.ivu-col{
				text-align: center;
				.fonts(18px);
				line-height: 24px;
				color: @cgray_s;
				padding: 30px 0;
				border: 1px solid transparent;
				.trans(.3s);
				.bdr(5px);
				i{
					display: block;
					.fonts(55px);
					width: 105px;
					height: 105px;
					.bdr(50%);
					margin: 0 auto 15px;
					line-height: 105px;
					border: 1px solid @cborder;
					color: @cmain_b;
					.trans(.3s);
				}
				&:hover{
					border-color: @cmain_b;
					color: @cmain_b;
					i{ border-color: @cmain_b; }
					&:first-child,&:last-child{
						border-color: @cmain_y;
						color: @cmain_y;
						i{ border-color: @cmain_y; }
					}
				}
				&:first-child,&:last-child{
					i{ color: @cmain_y; }
				}
			}
		}
	}
</style>	

