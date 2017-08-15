<template>
	<div id="header">
		<div class="header_top">
			<Row>
		        <Col span="12">QQ群号：111111<router-link class="entin" to="/cooperate">平台入驻</router-link></Col>
		        <Col class="col_right" span="12">
			        <template v-if="loginName == ''">
			        	<a href="javascript:;" @click="LoginBox">登录</a>
						<router-link :to="{ path: '/set/register?step=1'}">立即注册</router-link>
					</template>

					<template v-else>
						<router-link :to="{ path: '/account'}" id="mine">{{ loginName }}</router-link>
						<a href="javascript:;" @click="loginOut">退出</a>
					</template> 
		        </Col>
		  </Row>
		</div>
		<div class="header_navs">
			<Row class="rows">
		   		<Col span="12">
		   			<router-link to="/"><img src="../public/images/logo_top.png" /></router-link>
		   		</Col>
		   		<Col class="col_right" span="12">
		   			<router-link :class="{'active':$route.name == 'index'}" to="/">首页</router-link>
				    <router-link :class="{'active':$route.name == 'platform'}" to="/platform">优选平台</router-link>
				    <router-link :class="{'active':$route.name == 'cooperate'}" to="/cooperate">商务合作</router-link>
				    <router-link :class="{'active':$route.name == 'news'}" to="/news/info">网贷新闻</router-link>
		   		</Col>
		   </Row>
		</div>
	</div>
</template>
<script>
	import * as login from './main.js';
	export default {
	    name: 'header',
	    data () {
            return {
            	loginiShow : true
            }
        },
	    components:{
	    	Login: login.Login
	    },
	    
	    computed:{
           name() {
               return this.$route.name;
		   },
		   loginName(){
		   		if(localStorage.token){
		   			if(localStorage.usrNickname){
		   				return localStorage.usrNickname;
		   			}else{
		   				return localStorage.userPhone;
		   			}
		   		}else{
		   			return '';
		   		}
		   }
		},
		methods:{
			LoginBox: function(){
				this.$store.state.Check.isShow = true;
			},
			loginOut: function(){
			///	localStorage.removeItem("token");
				this.loginiShow = true;
				this.$router.push('/');
				localStorage.clear();
				location.reload();
			}
		}
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../public/css/variable.less';
	#header{
		background: @cw;
		border-bottom: 1px solid @cborder;
	}
	.header_top{
		background: #f0f5fc;
		line-height: 35px;
		color: @cgray_s;
		.fonts(12px);
		border-bottom: 1px solid #dcdcdc;
		.ivu-row{
			width: 1200px;
			margin: 0 auto;
		}
		a{
			color: @cgray_s;
			.trans(.3s);
			&:hover{
				color: @cmain_b;
			}
		}
		.entin{
			padding-left: 40px;
		}
		.col_right{
			text-align: right;
			a{
				display: inline-block;
				height: 100%;
				padding: 0 30px;
				border-left: 1px solid #dcdcdc;
				&:hover{
					background: @cmain_b;
					color: @cw;
				}
			}
		}
	}
	.header_navs{
		padding: 10px 0;
		.fonts(14px);
		.rows{
			width: 1200px;
			margin: 0 auto;
			.col_right{
				text-align: right;
				padding-top: 10px;
				a{
					position: relative;
					display: inline-block;
					color: @cgray_s;
					line-height: 50px;
					width: 60px;
					text-align: center;
					margin-left: 80px;
					.trans(.3);
					&:after{
						content: "";
						position: absolute;
						bottom: 0;
						left: 50%;
						width: 0;
						height: 6px;
						background: url(../public/images/line_arror.png) no-repeat;
						background-size: 100%;
						.trans(.3s);
					}
					&:hover,&.active{
						color: @cmain_b;
						&:after{
							content: "";
							left: 0;
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>	
