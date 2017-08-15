<template>
	<div id="about">
		<!-- content -->
		<div class="content">
			<Row :gutter="16">
				<Col span="5">
					<h2>关于我们<span>bout us</span><em>A</em></h2>
					<p class="navs_list">
						<router-link :class="{'selected':$route.path == '/about/intro'}" to="/about/intro">公司简介<Icon type="ios-arrow-right"></Icon></router-link>
						<router-link :class="{'selected':$route.path == '/about/culture'}" to="/about/culture">企业文化<Icon type="ios-arrow-right"></Icon></router-link>
						<router-link :class="{'selected':$route.path == '/about/safe'}" to="/about/safe">安全体系<Icon type="ios-arrow-right"></Icon></router-link>
						<router-link :class="{'selected':$route.path == '/about/contact'}" to="/about/contact">联系我们<Icon type="ios-arrow-right"></Icon></router-link>
					</p>
					<div class="contact">
						<div class="hotline">
							<p><i class="iconfont">&#xe751;</i>QQ群</p>
							<span>111111</span>工作日：
						</div>
					</div>
				</Col>
        		<Col span="19">
        			<div class="plat_content">
        				<template v-if="type == 'intro'">
        					<h2><i class="iconfont">&#xe759;</i>公司简介</h2>
        					<div class="plat_list">
	        					<aboutIntro></aboutIntro>
	        				</div>
						</template>
						<template v-if="type == 'culture'">
							<h2><i class="iconfont">&#xe757;</i>企业文化</h2>
							<div class="plat_list">
	        					<aboutCulture></aboutCulture>
	        				</div>
						</template>
						<template v-if="type == 'safe'">
							<h2><i class="iconfont">&#xe756;</i>安全体系</h2>
        					<div class="plat_list">
	        					<aboutSafe></aboutSafe>
	        				</div>
						</template>
						<template v-if="type == 'contact'">
							<h2><i class="iconfont">&#xe74b;</i>联系我们</h2>
        					<div class="plat_list">
	        					<aboutContact></aboutContact>
	        				</div>
						</template>
        			</div>
        		</Col>
			</Row>
		</div>
	</div>
</template>
<script>
   import * as Common from '../../components/main';
   import * as About from './pages/main';
	export default {
	    name: 'about',
	    components:{
            aboutIntro: About.Intro,
            aboutSafe: About.Safe,
            aboutCulture: About.Culture,
            aboutContact: About.Contact
	    },
	    data () {
            return {
            }
       },
       computed:{
           type() {
               return this.$route.params.type;
		   }
		},

		created() {
		//	console.log(this.$route.params.type);
		}
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../public/css/variable.less';
	.content{
		width: 1200px;
		margin: 40px auto 50px;
		.ivu-col-span-5{
			.bdr(3px);
			text-align: center;
			h2{
				position: relative;
				background: @cmain_b;
				color: @cw;
				.fonts(18px);
				font-weight: normal;
				padding: 15px 0 15px 90px;
				box-sizing: border-box;
				text-align: left;
				line-height: 20px;
				box-shadow:0px -4px 8px #ccc;
				-moz-box-shadow:0px -4px 8px #ccc; 
				-webkit-box-shadow:0px -4px 8px #ccc; 
				span{
					display: block;
				}
				em{
					position: absolute;
					top: 50%;
				    left: 50px;
				    .fonts(50px);
				    margin-top: -10px;
				}
			}
			.navs_list{
				background: @cw;
				padding: 10px 0;
				a{
					position: relative;
					display: block;
					.fonts(16px);
					color: @cgray_s;
					padding: 20px;
					.trans(.3s);
					.ivu-icon{
						opacity: 0;
						.fonts(24px);
						float: right;
						.trans(.3s);
					}
					&.selected,&:hover{
						color: @cmain_b;
						.ivu-icon{ opacity: 1; }
					}
				}
			}
			.contact{
				margin-top: 50px;
				text-align: center;
				.hotline{
					color: @cgray_s;
					.fonts(14px);
					p{
						position: relative;
						width: 165px;
						height: 40px;
						text-align: center;
						line-height: 40px;
						.bdr(5px);
						margin: 0 auto;
						border: 1px solid @cmain_y;
						.fonts(18px);
						margin-bottom: 30px;
						color: @cmain_y;
						i{
							display: inline-block;
							.fonts(30px);
							padding-right: 10px;
							vertical-align: middle;
						}
						&:after{
							position: absolute;
							bottom: -6px;
							left: 50%;
							content: "";
							width: 10px;
							height: 10px;
							border-left: 1px solid @cmain_y;
							border-bottom: 1px solid @cmain_y;
							.rotate(-45deg);
							background: @cw;
						}
					}
					span{
						display: block;
						.fonts(30px);
						font-family: Arial;
						color: @cmain_y;
					}
				}
				.qr{
					margin-top: 45px;
					img{
						display: block;
						width: 100px;
						margin: 0 auto 15px;
					}
				}
			}
		}
		.plat_content{
			background: @cw;
			min-height: 710px;
			box-shadow:0px -4px 8px @cborder;
			-moz-box-shadow:0px -4px 8px @cborder; 
			-webkit-box-shadow:0px -4px 8px @cborder; 
			
			h2{
				position: relative;
				.fonts(20px);
				color: @cmain_b;
				padding: 17px 30px;
				box-sizing: border-box;
				font-weight: normal;
				border-bottom: 1px solid @cborder;
				i{
					display: inline-block;
					.fonts(24px);
					vertical-align: middle;
					padding-right: 10px;
				}
				&:after{
					content: "";
					width: 180px;
					height: 1px;
					background: @cmain_b;
					position: absolute;
					left: 0;
					bottom: 0;
				}
			}
			.plat_list,.plat_detail{
				padding: 0 80px 0 90px;
			}
		}
	}
</style>	
