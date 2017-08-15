<template>
	<div id="account">
		<div class="wrap">
			<Breadcrumb separator=">">
				<router-link class="modifypwd" to="/set/modifyPwd?step=1"><i class="iconfont">&#xe75c;</i>修改密码 >></router-link>
		        <Breadcrumb-item href="/">目录</Breadcrumb-item>
		        <Breadcrumb-item>个人中心</Breadcrumb-item>
		        
		    </Breadcrumb>
		    <Row class="slide">
		    	<Col span="10">
		    		<input type="file" v-on:change="previewFile()">
		    		<img id="head_pic" :src="usrImg"/>
		    		<p>
		    			<template v-if="editorShow">
		    				<input v-model="nickName" type="text" v-on:blur="Blur" value="" placeholder="请设置您的昵称^_^"/>
		    			</template>
		    			<template v-if="!editorShow">
		    				<template v-if="usrNickname">
			    				<h3>Hi,{{ usrNickname }}<i @click="Editor" class="iconfont">&#xe74a;</i></h3>
			    			</template>
			    			<template v-else>
			    				<h3>Hi,{{ userPhone }}<i @click="Editor" class="iconfont">&#xe74a;</i></h3>
			    			</template>
		    			</template>

		    			<template v-if="lastLoginTime">
		    				<span>上次登录时间：{{ lastLoginTime }}</span>
		    			</template>
		    		</p>
		    	</Col>
		    	<Col span="14">
		    		<ul>
		    			<template v-if="userAlipay">{{type}}
		    				<li><p>{{ alipayType }}<router-link to="/set/alipay?step=1">更换</router-link></p>
		    					<i class="iconfont">&#xe773;</i>已绑定
		    				</li><!--支付宝-->
		    			</template>
		    			<template v-if="!userAlipay">
		    				<li class="unbind"><p>绑定获得返现等福利<router-link to="/set/alipay?step=1">填写</router-link></p>
		    					<i class="iconfont">&#xe773;</i>未填写
		    				</li>
		    			</template>
		    			
		    			<template v-if="userEmail">
		    				<li><p>{{userEmail}}<router-link to="/set/bindEmail?step=1">更换</router-link></p>
		    					<i class="iconfont">&#xe770;</i>已绑定
		    				</li><!--邮件-->
		    			</template>
		    			<template v-if="!userEmail">
		    				<li class="unbind">
		    					<p>绑定邮箱获得第一手消息<router-link to="/set/bindEmail?step=1">绑定</router-link></p>
		    					<i class="iconfont">&#xe770;</i>未绑定
		    				</li><!--邮件-->
		    			</template>
		    			
		    			<li>
		    				<p>{{ userPhone.substr(0,3) }}****{{ userPhone.substr(7,11) }}<router-link to="/set/modifyPhone?step=1">更换</router-link></p>
		    				<router-link to="/set/modifyPhone?step=1"><i class="iconfont">&#xe772;</i>已绑定</router-link>
		    			</li><!--手机-->
		    			<li>
		    				<p>{{usrRealname}}&nbsp;   {{ userCardnum.substr(0,1) }}****************{{ userCardnum.substr(userCardnum.length-1,userCardnum.length) }}</p>
		    				<i class="iconfont">&#xe771;</i>已认证
		    			</li>
		    		</ul>
		    	</Col>
		    </Row>
			<div class="lists">
				<h2><span>我的绑定情况</span></h2>
				<Row :gutter="16">
					<Col span="6" v-for="list in lists" :key="list.id">
						<div class="list_col">
							<img :src="list.logo" />
							<template v-if="list.isBind == '1'">
								<span>已绑定</span>
							</template>
							<p>
								<i class="iconfont">&#xe74d;</i>
								{{ list.bg }}
								<router-link :to="{ path: '/platdetail', query: { id:list.id, isbind:list.isBind }}">点击了解更多</router-link>
							</p>
						</div>
					</Col>
				</Row>	
				<div id="pagination">
		    		<Page :total="total" show-elevator :pageSize='12' @on-change="change"></Page>
		    	</div>
			</div>
		</div>		
	</div>
</template>
<script>
	import md5 from 'js-md5';
    import * as Common from '../../components/main';
    import { mapActions } from 'vuex' //在个人中心调用vuex的actions
	export default {
	    name: 'account',
	    data () {
            return {
            	lists: {},
            	userEmail: localStorage.userEmail,
            	userAlipay: localStorage.userAlipay==1? '':localStorage.userAlipay,
            	lastLoginTime: localStorage.lastLoginTime,
            //	usrNickname: this.$store.state.Check.usrNickname,
            	usrNickname: localStorage.usrNickname,
            	userPhone: localStorage.userPhone,
            	userCardnum: localStorage.userCardnum,
            	editorShow: false,
            	usrImg: localStorage.usrImg,
            	usrRealname: localStorage.usrRealname,
            	total: 1,
            	haveImg: false
            }
      	},
        computed:{
           	type() {
               return this.$route.params.type;
		   	},
		    alipayType(){
		   		if(this.userAlipay.indexOf('@')>=0){
		   			return this.userAlipay.substr(0,3)+'****@'+this.userAlipay.split('@')[1];
		   		}else{
		   			return this.userAlipay.substr(0,3)+'****'+this.userAlipay.substr(7,11);
		   		}
		    },
		    userimg() {
		    	return this.usrImg.indexOf("null")? '': this.usrImg;
		    }
        },
		mounted: function () {
            this.getLists(1);
        },
		methods: {
			change: function(page){
        		this.getLists(page);
        	},
			uploadImgsa(SrcImg) {
				var preview = document.querySelector('#head_pic');
				var timestamp = Date.parse(new Date());
				var arr = [
					['token', localStorage.token],
					['ImgData', SrcImg]
				];
				var datas = {
	        		t: timestamp,
            		i: localStorage.callToken,
            		v: md5(""), 
            		c: "PC",
            		token: localStorage.token,
	            	ImgData: SrcImg
	            };
				this.getCallId(arr, "/user/modImg", datas, timestamp, this.getDatas, this.modImg);
			},
			modImg(response) {
				if(response.data.result == 200){
            		this.usrImg = response.data.img;
            		localStorage.usrImg = response.data.img;
            	}
			},
			previewFile() {
			  	var preview = document.querySelector('#head_pic');
				var file    = document.querySelector('input[type=file]').files[0];
				var reader  = new FileReader();
				var _this = this;
			    reader.addEventListener("load", () => {
	            	_this.uploadImgsa(reader.result);
	            //	preview.src = reader.result;
			    }, false);

			  if (file) {
			    reader.readAsDataURL(file);
			  }
			},

			Editor(){
				this.editorShow = true;
			},
			//编辑昵称
			Blur(){
				this.usrNickname = this.nickName;
				
				var timestamp = Date.parse(new Date());
				var arr = [
					['token', localStorage.token],
					['nickName', this.usrNickname]
				];
				var datas = {
	        		t: timestamp,
            		i: localStorage.callToken,
            		v: md5(""), 
            		c: "PC",
            		token: localStorage.token,
	            	nickName: this.usrNickname
	            };
				this.getCallId(arr, "/user/modNickName", datas, timestamp, this.getDatas, this.modNickName);
			},
			modNickName(response) {
				if(response.data.result == 200){
            		localStorage.usrNickname = this.usrNickname;
					this.editorShow = false;
					this.$store.state.Check.usrNickname = localStorage.usrNickname;
					location.reload();
            	}
			},
        	getLists(currpage) {
        		var timestamp = Date.parse(new Date());
				var arr = [
					['token', localStorage.token],
					['curPage', currpage],
					['curNum',12]
				];
				var datas = {
	        		t: timestamp,
            		i: localStorage.callToken,
            		v: md5(""), 
            		c: "PC",
            		token: localStorage.token,
            		curPage: currpage,
            		curNum: 12
	            };
				this.getCallId(arr, "/user/bindList", datas, timestamp, this.getDatas, this.bindList);
        	},
        	bindList(response) {
        		if(response.data.result == 200){
					this.lists = response.data.Bind;
					this.total = response.data.allNum;
            	}else if(response.data.result == 305){
           			this.$router.push('/');
           			this.$store.state.Check.isShow = true;
           		}
        	}
		},
		created() {
            this.$store.dispatch('changeType',1).then(() => {
            	if(localStorage.token==''){
            		this.$router.push('/index');
            	}
			}); //修改state.type为1
		}
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../public/css/variable.less';
	.wrap{
		width: 1200px;
		margin: 0 auto 50px;
	}
	.ivu-breadcrumb{
		padding: 12px 0;
		span:last-child{ font-weight: normal; color: @cmain_y; }
	}
	.modifypwd{
		float: right;
		color: #46aaff;
		i{
			padding-right: 5px;
		}
	}
	.slide{
		background: @cw;
		border: 1px solid @cborder;
		padding: 50px 0;
		box-sizing: border-box;
		text-align: center;
		color: @cgray_q;
		.fonts(12px);
		margin-bottom: 20px;
		ul{
			li{
				position: relative;
				display: inline-block;
				text-align: center;
				width: 90px;
				i{
					display: block;
					.fonts(55px);
					color: #ffbc07;
				}
				a{ color: @cgray_q; }
				&:first-child{
					i{
						color: #00aeff;
					}
				}
				&:nth-child(2){
					i{
						color: #ff3e67;
					}
				}
				&:nth-child(3){
					i{
						color: #32dc8a;
					}
				}
				&.unbind{
					color: #ccc;
					i{
						opacity: 0.5;
					}
					p{
						color: @cgray_q;
					}
				}
				p{
					display: none;
					position: absolute;
					top: -30px;
					left: 0;
					width: 200px;
					border: 1px solid @cborder;
					padding: 5px 0;
					.bdr(3px);
					a{
						color: #67B6FE;
						padding-left: 10px;
					}
					&:after{
						content: "";
						display: block;
						width: 10px;
						height: 10px;
						border-left: 1px solid @cborder;
						border-bottom: 1px solid @cborder;
						.rotate(-45deg);
						position: absolute;
    					left: 38px;
    					bottom: -5px;
    					background: @cw;
					}
				}
				&:hover{
					p{
						display: block;
					}
				}
			}
		}
		.ivu-col-span-10{
			position: relative;
			padding-left: 100px;
			text-align: left;
			img{
				float: left;
				display: inline-block;
				width: 80px;
				height: 80px;
				.bdr(50%);
				margin-right: 20px;
			}
			h3{
				font-weight: normal;
				.fonts(16px);
				padding-bottom: 15px;
				color: @cmain_b;
				i{
					cursor: pointer;
					display: inline-block;
					.fonts(22px);
					padding-left: 10px;
					color: @cmain_y;
					vertical-align: middle;
				}
			}
			p{
				position: absolute;
				display: inline-block;
				vertical-align: middle;
			    top: 50%;
			    transform: translate(0,-50%);
			}
			input[type='text']{
				display: block;
				.fonts(12px);
				width: 185px;
				height: 30px;
				padding-left: 10px;
				margin-bottom: 15px;
			}
			input[type='file']{
				position: absolute;
				top: 0;
				left: 100px;
				width: 80px;
				height: 80px;
				.bdr(50%);
				opacity: 0;
			}
		}
	}
	.lists{
		border: 1px solid @cborder;
		background: @cw;
		padding: 20px 0;
		.bdr(5px);
		h2{
			.fonts(16px);
			color: @cmain_b;
			border-bottom: 1px solid @cborder;
			font-weight: normal;
			span{
				display: inline-block;
				padding: 15px 40px;
				border-bottom: 1px solid @cmain_b;
			}
		}
		.ivu-row{
			text-align: center;
			padding: 40px 80px 0;
			box-sizing: border-box;
			.ivu-col{
				padding: 0 15px;
				box-sizing: border-box;
				overflow: hidden;
				margin-bottom: 40px;
				.list_col{
					position: relative;
					border: 1px solid @cborder;
					padding: 30px 0;
					overflow: hidden;
				}
				img{
					height: 75px;
				}
				span{
					position: absolute;
					color: @cw;
					background: #17cd75;
					width: 90px;
				    height: 60px;
				    line-height: 95px;
					right: -40px;
    				top: -23px;
					.rotate(45deg);
				}
				p{
					position: absolute;
					top: -100%;
					left: 0;
					width: 100%;
					height: 100%;
					background: url(../../public/images/opacity1.png) repeat repeat;
					background-size: 100% 100%;
					color: @cw;
					.fonts(14px);
					text-align: center;
					.trans(.3s);
					i{
						display: block;
						.fonts(45px);
						
					}
					a{
						display: block;
						.fonts(12px);
						padding: 2px 0;
						.bdr(10px);
						border: 1px solid @cw;
						margin: 10px auto 0;
						color: @cw;
						width: 90px;
					}
				}
				&:hover{
					p{
						top: 0;
					}
				}
			}
		}
	}
</style>	

