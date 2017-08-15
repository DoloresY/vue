<template>
	<div id="person">
		<div class="modify">
			<div class="bg"></div>
			<!-- 注册 -->
			<template v-if="type == 'register'">
				<div class="steps">
					<template v-if="step == '1'">
						<Row class="setpwd">
							<Col span="8" class="selected">
								<span><i class="iconfont">&#xe76c;</i>基本信息</span>
							</Col>
							<Col span="8">
								<span><i class="iconfont">&#xe76d;</i>实名认证</span>
							</Col>
							<Col span="8">
								<span><i class="iconfont">&#xe76b;</i>注册成功</span>
							</Col>
						</Row>
						<RegistStep1></RegistStep1>
					</template>
					<template v-if="step == '2'">
						<Row class="setpwd">
							<Col span="8">
								<span><i class="iconfont">&#xe76c;</i>基本信息</span>
							</Col>
							<Col span="8" class="selected">
								<span><i class="iconfont">&#xe76d;</i>实名认证</span>
							</Col>
							<Col span="8">
								<span><i class="iconfont">&#xe76b;</i>注册成功</span>
							</Col>
						</Row>
						<RegistStep2></RegistStep2>
					</template>
					<template v-if="step == '3'">
						<Row class="setpwd">
							<Col span="8">
								<span><i class="iconfont">&#xe76c;</i>基本信息</span>
							</Col>
							<Col span="8">
								<span><i class="iconfont">&#xe76d;</i>实名认证</span>
							</Col>
							<Col span="8" class="selected">
								<span><i class="iconfont">&#xe76b;</i>注册成功</span>
							</Col>
						</Row>
						<RegistStep3></RegistStep3>
					</template>
				</div>
			</template>

			<template v-if="type == 'modifyPwd'">
				<div class="sets">
					<h2><span>修改登录密码</span></h2>
					<template v-if="step == '1'">
						<ModifyPwdStep1></ModifyPwdStep1>
					</template>
					<template v-if="step == '2'">
						<ModifyPwdStep2></ModifyPwdStep2>
					</template>
				</div>
			</template>

			<template v-if="type == 'findPwd'">
				<div class="sets">
					<h2><span>找回登录密码</span></h2>
					<template v-if="step == '1'">
						<FindPwdStep1></FindPwdStep1>
					</template>
					<template v-if="step == '2'">
						<FindPwdStep2></FindPwdStep2>
					</template>
				</div>
			</template>

			<template v-if="type == 'bindEmail'">
				<div class="sets">
					<h2><span>绑定邮箱</span></h2>
					<template v-if="step == '1'">
						<BindEmailStep1></BindEmailStep1>
					</template>
					<template v-if="step == '2'">
						<BindEmailStep2></BindEmailStep2>
					</template>
					<template v-if="Key">
						<BindEmailStep3></BindEmailStep3>
					</template>
				</div>
			</template>

			<template v-if="type == 'modifyPhone'">
				<div class="sets">
					<h2><span>修改绑定手机</span></h2>
					<template v-if="step == '1'">
						<ModifyPhoneStep1></ModifyPhoneStep1>
					</template>
					<template v-if="step == '2'">
						<ModifyPhoneStep2></ModifyPhoneStep2>
					</template>
					<template v-if="step == '3'">
						<ModifyPhoneStep3></ModifyPhoneStep3>
					</template>
					<template v-if="step == '4'">
						<ModifyPhoneStep4></ModifyPhoneStep4>
					</template>
					<template v-if="step == '5'">
						<ModifyPhoneStep5></ModifyPhoneStep5>
					</template>
				</div>
			</template>

			<template v-if="type == 'alipay'">
				<div class="sets">
					<h2><span>支付宝账号</span></h2>
					<template v-if="step == '1'">
						<AlipayStep1></AlipayStep1>
					</template>
					<template v-if="step == '2'">
						<AlipayStep2></AlipayStep2>
					</template>
				</div>
			</template>	

		</div>
	</div>
</template>
<script>
    import * as Common from '../../components/main';
    import * as Step from './step/main';
	export default {
	    name: 'person',
	    components:{
            RegistStep1: Step.RegistStep1,
            RegistStep2: Step.RegistStep2,
            RegistStep3: Step.RegistStep3,
            ModifyPwdStep1: Step.ModifyPwdStep1,
            ModifyPwdStep2: Step.ModifyPwdStep2,
            FindPwdStep1: Step.FindPwdStep1,
            FindPwdStep2: Step.FindPwdStep2,
            BindEmailStep1: Step.BindEmailStep1,
            BindEmailStep2: Step.BindEmailStep2,
            BindEmailStep3: Step.BindEmailStep3,
            ModifyPhoneStep1: Step.ModifyPhoneStep1,
            ModifyPhoneStep2: Step.ModifyPhoneStep2,
            ModifyPhoneStep3: Step.ModifyPhoneStep3,
            ModifyPhoneStep4: Step.ModifyPhoneStep4,
            ModifyPhoneStep5: Step.ModifyPhoneStep5,
            AlipayStep1: Step.AlipayStep1,
            AlipayStep2: Step.AlipayStep2
	    },
	    data () {
            return {}
      	},
        computed:{
            type() {
               return this.$route.params.type;
		    },
            step() {
		   		return this.$route.query.step;
		    },
		    Key() {
		   		return this.$route.query.Key;
		    }
		},
		created: function() {
			if(this.type == "register"){
				if(localStorage.token){
					this.$router.push('/');
				}
			}else if(this.type == 'modifyPwd' || this.type == 'modifyPhone'  || this.type == 'alipay'){
				if(!localStorage.token){
					this.$router.push('/');
				}
			}
			
		}
	};
</script>
<style lang="less" rel="stylesheet/less" type="text/css">
	@import '../../public/css/variable.less';
	.modify{
		.bg{
			background: url(../../public/images/regbg.jpg) no-repeat 50% 50%;
			background-size: cover;
			height: 547px;
		}
		.steps{
			width: 600px;
			margin: -500px auto 50px;
			.setpwd{
				margin-bottom: 15px;
			}
			.ivu-col-span-8{
				color: @cw;
				.fonts(14px);
				text-align: center;
				opacity: 0.6;
				i{
					.fonts(45px);
					display: block;
				}
				span{
					display: inline-block;
					text-align: center;
					
				}
				&:first-child{ text-align: left; }
				&:last-child{ text-align: right; }
				&:nth-child(2) {
					position: relative;
					&:before,&:after{
						content: "";
						position: absolute;
						left: -50px;
						top: 30px;
						background: url(../../public/images/step.png) no-repeat 50% 50%;
						background-size: cover;
						width: 26px;
						height: 14px;
					}
					&:after{
						left: auto;
						right: -50px;
					}
				}
				&.selected{
					opacity: 1;
				}
			}
		}
		.sets{
			width: 900px;
			padding: 20px 0 0;
			box-sizing: border-box;
			background: @cw;
			margin: -475px auto 50px;
			.bdr(5px);
			border: 1px solid @cborder;
			box-shadow: 2px 2px 2px @cborder;
			h2{
				color: @cmain_b;
				.fonts(16px);
				font-weight: normal;
				span{
					display: inline-block;
					padding: 10px 50px;
					border-bottom: 1px solid @cmain_b;
				}
			}
			a{
				display: block;
				margin: 20px auto 0;
				width: 280px;
				.bdr(4px);
				color: @cmain_b;
				line-height: 40px;
				border: 1px solid @cmain_b;
				.fonts(14px);
				&:hover{
					color: @cw !important;
					background: @cmain_b;
				}
			}
		}
	}
	.ivu-form-item-content{ 
		button{
			.fonts(14px);
			width: 100%;
		    height: 40px;
		    border-color: #06407f;
		    color: #06407f;
		    margin-top: 20px;
		} 
	}
	.ivu-form {
		.ivu-form-item-label{
			padding: 14px 12px 14px 0;
		}
	}
	.ivu-form-item-required .ivu-form-item-label:before{
		.fonts(0);
		color: @cw;
	}
	.errorMsg{
		color: #f30;
		display: block;
		text-align: left;
		line-height: 20px;
	}
</style>	

