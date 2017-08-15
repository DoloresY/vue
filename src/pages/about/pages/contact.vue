<template>
	<div id="contact">
		<div class='wrap'>
			<h1>您可以通过以下方式联系到我们</h1>
			<row :gutter='32'>
				<Col span='8'>
					<a><i class="iconfont">&#xe768;</i></a>
					<h3>客服</h3>
					<p>客服邮箱：</p>
					<p>工作时间：工作日9:00~18:00</p>
				</Col>
				<Col span='8'>
					<a><i class="iconfont">&#xe766;</i></a>
					<h3>平台入驻</h3>
					<p>商务邮箱：</p>
				</Col>
				<Col span='8' >
					<a><i class="iconfont">&#xe767;</i></a>
					<h3>市场合作</h3>
					<p>合作邮箱：</p>
				</Col>
			</row>
			<h1>您也可以在以下地址找到我们</h1>
			<div class='map'>
				<p><i class="iconfont">&#xe755;</i>xxxx</p>
				<p><i class="iconfont">&#xe75d;</i>邮政编码：xxxx</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
	    name: 'contact',
	    data () {
	    	return {
	    		
		    }
	    }
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../../public/css/variable.less';
	.wrap{
		padding:40px 0;
		h1{
			font-weight:normal;
			margin-bottom:25px;
			position:relative;
			color:@cmain_y;
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
				left:-10px;
				top:40%;
			}
		}
		.ivu-row{
			padding:25px 0px;
			.ivu-col{
				text-align:center;
				a{	
					display:inline-block;
					width:70px;
					height:70px;
					border:1px solid @cgray_q;
					border-radius:50%;
					i{
						.fonts(40px);
						line-height:70px;
					}
				}
				h3{
					font-weight:normal;
					line-height:40px;
					.fonts(18px);
					color:@cmain_b;
				}
				p{
					.fonts(14px);
					line-height:30px;
					color:@cgray_s;
					text-align:left;
					padding-left:25px;
				}
			}
		}
		.map{
			width: 685px;
			margin: 0 auto;
			img{
				display:block;
				width: 100%;
				.bdr(5px);
				margin-bottom: 20px;
			}
			p{
				.fonts(14px);
				line-height:30px;
				color:@cgray_s;
				i{
					padding:0 14px 0 0 ;
					.fonts(22px);
					color:@cmain_y;
					line-height:30px;
				}

			}
		}
	}
</style>