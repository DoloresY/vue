<template>
	<div id="platdetail">
		<div class='main'>
			<div class='nav'>
				<Breadcrumb separator=">">
		        	<Breadcrumb-item href="../index">爱分享</Breadcrumb-item>
			        <Breadcrumb-item href="/platform">优选平台</Breadcrumb-item>
			        <Breadcrumb-item>平台详情</Breadcrumb-item>
	   			</Breadcrumb>
   			</div>
   			<div class='pingtai' v-for="item in items" :key="item.id">
   			 	<div class='maintop'>
   			 		<img :src="item.logo">
   			 		<div class='txt'>
						<h3>{{ item.name }}</h3>
						<p>
	   			 			<span>{{ item.bg }}</span>
   			 			</p>
   			 		</div>
   			 		<a :target="blank" v-on:click="fillOrder(item.id,item.website)" :href="website">进入平台</a>
   			 		<!--<a target="_blank" v-on:click="fillOrder(item.id)" :href="item.website">进入平台</a>-->
   			 	</div>
   			 	<div class='mainbot'>
   			 		<Tabs value="name1" class='toptabs'>
        				<Tab-pane label="平台概况" name="name1">
        					<row>
        						<Col span='6'>
        							<p><span>平台名称:</span>{{ item.name }}</p>
        							<p><span>平均预期收益率:</span>{{ item.yield.substring(0,item.yield.indexOf('-')) }}%-{{ item.yield.split('-')[1] }}%</p>
        							<p><span>投资期限:</span>{{ item.period.substring(0,item.yield.indexOf('-')) }}天-{{ item.period.split('-')[1] }}天</p>
        						</Col>
        						<Col span='9'>
        							<p><span>存托管:</span>{{ item.secArr }}</p>
        							<p><span>背景:</span>{{ item.bg }}</p>
        							<p><span>风险准备金:</span>{{ item.provisions }}元</p>
        						</Col>
        						<Col span='9'>
        							<p><span>上线时间:</span>{{ item.onlineTime }}</p>
        							<p><span>注册地址:</span>{{ item.regAddr }}</p>
        							<p><span>注册资本:</span>{{ item.regCapital }}</p>
        						</Col>
        					</row>
        				</Tab-pane>
   				 	</Tabs>
   				 	<Tabs value="name1" class='bottabs'>
       					<Tab-pane label="平台简介" name="name1" class='page1'><div v-html="item.summary"></div></Tab-pane>
        				<Tab-pane label="高管简介" name="name2" class='page2'>
        					<ul>
	        					<li v-for="list in item.Se" :key="list.id">
	        						<img :src="list.seImg"/>
	        						<div>
	        							<h2>{{ list.seName }}</h2>
	        							<h3>{{ list.sePositions }}</h3>
	        							<p>{{ list.seSummary }}</p>
	        						</div>
	        					</li>
        					</ul>
        				</Tab-pane>
        				<Tab-pane label="工商信息" name="name3" class='page3'>
        					<div>
        						<ul>
	        						<li>企业名称：<span>{{ item.Ci.companyName }}</span></li>
	        						<li>企业法人：<span>{{ item.Ci.busiEntity }}</span></li>
	        						<li>公司类型：<span>{{ item.Ci.companyType }}</span></li>
	        						<li><p>{{ item.Ci.shareStruct }}<span>股东结构：</span></p></li>
	        					</ul>
	        					<ul>
	        						<li>注册资本：<span>{{ item.Ci.regCapital }}</span></li>
	        						<li>实缴资本：<span>{{ item.Ci.conCapital }}</span></li>
	        						<li>注册地址：<span>{{ item.Ci.regAddr }}</span></li>
	        					</ul>
	        					<ul>
	        						<li>开业日期：<span>{{ item.Ci.openDate }}</span></li>
	        						<li>核准日期：<span>{{ item.Ci.approveDate }}</span></li>
	        						<li>登记机关：<span>{{ item.Ci.regAuth }}</span></li>
	        						<li class='zhuce'>营业执照注册号：<span>{{ item.Ci.busiRegNum }}</span></li>
	        						<li class='zuzhi'>组织机构代码：<span>{{ item.Ci.orgCode }}</span></li>
	        						<li class='shuiwu'>税务登记号：<span>{{ item.Ci.taxRegNum }}</span></li>
	        					</ul>
	        					<p><span>经营范围：</span>{{ item.Ci.businScope }}</p>
        					</div>
        				</Tab-pane>
        				<Tab-pane label="现场实拍" name="name4" class='page4'>
        					<h1>平台证件</h1>
        					<row :gutter='48' style='margin:0 24px' >
			                    <Col span='6' v-for="list in item.Photos.cred.credImg" :key="list.id"><a><img :src="list"></a></Col>
			                </row>
        					<h1>公司环境</h1>
        					<row :gutter='48'  style='margin:0 24px'>
			                   <Col span='6' v-for="list in item.Photos.envi.enviImg" :key="list.id"><a><img :src="list"></a></Col>
			                </row>
        				</Tab-pane>
    				</Tabs>
   			 	</div> 	
   			 </div>	 
		</div>

		<div class="detailBox tbox hide">
			<div class="boxs">
				<Icon type="ios-close-empty" @click="CloseBtn"></Icon>
				<img src="http://www.ifd.club/ishare/logo2.jpg" />
				<p>国资互金平台</p>
				<span>国资背景</span>
				<div class="grade">
					<font>10</font>%
					<p>平均预期收益率</p>
					<router-link to="" class="main_b">已开通，进入平台官网</router-link>
					<!--<router-link to="" class="main_y">一键开通平台账号</router-link>-->
				</div>
			</div>
		</div>
		
		<div class="jiaodan tbox" v-show="jiaodan">
			<div class="boxs">
				<h3>请提交您的订单</h3>
				<span @click="CloseBtn"><Icon type="ios-close-empty"></Icon></span>
				<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
				 	<Form-item label="投资平台">
			            <Select :placeholder="PlatName" v-model="plfId">
			                <Option v-for="listName in ListNames" :key="listName.id" :value="listName.id">{{ listName.name }}</Option>
			            </Select>
			            <p class="hide">{{ plfId }}</p>
			        </Form-item>
			        <Form-item label="投资产品名称" prop="proname">
			            <Input v-model="formValidate.proname" placeholder="请输入产品名称" type="textarea"></Input>
			        </Form-item>
			        <Form-item label="买入金额" prop="money">
			            <Input v-model="formValidate.money" :maxlength=8 placeholder="请输入买入金额"></Input>
			        </Form-item>
			        <p>投资成功后务必保存投资信息，以便我们追踪订单</p>
			        <Form-item>
			            <Button type="primary" v-on:click="handleSubmit('formValidate')">确认</Button>
			        </Form-item>
				</Form> 	
			</div>
		</div>

	</div>
</template>
<script>
   import md5 from 'js-md5';
   import * as Common from '../../components/main';
	export default {
	    name: 'platdetail',
	    data () {
            return {
            	jiaodan: false,
            	blank: '_self',
            	website: 'javascript:;',
            	plfId: '',		//交单中投资平台Id
            	items:[],
            	ListNames:[],
            	formValidate: {
            		proname: '',
            		money: ''
            	},
            	ruleValidate: {
            		proname: [
                        { required: true, message: '产品名称不能为空', trigger: 'blur' }
                    ],
                    money: [
                        { required: true, message: '购买金额不能为空', trigger: 'blur' }
                    ]
            	}
            }
        },
	    computed:{
		    id() {
		   		return this.$route.query.id;
		    },
		    isbind() {
		    	return this.$route.query.isbind;
		    }
		},
		mounted: function () {
            this.getDetail();
        },
        methods: {
        	CloseBtn(){
        		this.jiaodan = false;
        	},
        	fillOrder(id,href) {	//交单弹框
        		if(!localStorage.token){
			        this.$store.state.Check.isShow = true;
			        return false;
        		}
        		this.blank = '_blank';
        		this.website = href;
        		this.plfId = id;
        		this.getListName();
        		this.jiaodan = true;
        		if(this.isbind == 0){
        			this.bindPlat(id);
        		}
        	},
        	handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    	const _this = this;
		            	var timestamp = Date.parse(new Date());
		            	this.axios.post(_this.$store.state.Check.url+"/getCallId",{
		            		t: timestamp,
		            		c: "PC"
		                }).then(function (response) {
		                	const data = response.data;
		                	console.log(data);
		                	timestamp = Date.parse(new Date());
							_this.sorts = data.key;
							localStorage.sorts = data.key;
		                	//排序
		                	var	arr = [
								['t', timestamp],
								['c', 'PC'],
								['i', data.callToken],
								['key','2i0f1x7'],
								['token',localStorage.token],
								['plfId', _this.plfId],
								['productName', _this.formValidate.proname],
								['amount', _this.formValidate.money]
							];
			            	arr.sort(_this.sortCustom);
			            	var str = "";
							for (var i=0; i<arr.length; i++) {
								str += arr[i][0] + arr[i][1];
							}
		                	console.log(str);
			        		_this.axios.post(_this.$store.state.Check.url+"/user/fillOrder",{
			            		t: timestamp,
			            		i: data.callToken,
			            		v: md5(str), 
			            		c: "PC",
			            		token: localStorage.token,
			            		plfId: _this.plfId,
								productName: _this.formValidate.proname,
								amount: _this.formValidate.money
			               }).then(function (response) {
			                	console.log(response.data);
			                	if(response.data.result == 200){
			               			_this.jiaodan = false;
			               		}else if(response.data.result ==303){	//未登录
			               			_this.jiaodan = false;
			               			_this.$store.state.Check.isShow = true;
			               		}
			                }).catch(function (error){
			                    console.log("error2");
			                });
		                }).catch(function (error){
		                    console.log(error);
		                });
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
			getDetail() {
            	const _this = this;
            	var timestamp = Date.parse(new Date());
            	this.axios.post(_this.$store.state.Check.url+"/getCallId",{
            		t: timestamp,
            		c: "PC"
                }).then(function (response) {
                	const data = response.data;
                	timestamp = Date.parse(new Date());
					_this.sorts = data.key;
					localStorage.sorts = data.key;
                	//排序
                	var	arr = [
						['t', timestamp],
						['c', 'PC'],
						['i', data.callToken],
						['plfId', _this.$route.query.id],
						['key','2i0f1x7']
					];
	            	arr.sort(_this.sortCustom);
	            	var str = "";
					for (var i=0; i<arr.length; i++) {
						str += arr[i][0] + arr[i][1];
					}
                	console.log(str);

                	_this.axios.post(_this.$store.state.Check.url+"/plf/detail",{
	            		t: timestamp,
	            		i: data.callToken,
	            		v: md5(str),   
	            		c: "PC",
	            		plfId: _this.$route.query.id
	                }).then(function (response) {
	                	console.log("-------------------");
	                	console.log(response.data);
	                	if(response.data.result == 200){
	                		_this.items = response.data.Plf;
	               		}
	               		
	                }).catch(function (error){
	                    console.log("error2");
	                });
	                
                }).catch(function (error){
                    console.log(error);
                });
            },
            
            getListName() {
            	const _this = this;
            	var timestamp = Date.parse(new Date());
            	this.axios.post(_this.$store.state.Check.url+"/getCallId",{
            		t: timestamp,
            		c: "PC"
                }).then(function (response) {
                	const data = response.data;
                	console.log(data);
                	timestamp = Date.parse(new Date());
					_this.sorts = data.key;
					localStorage.sorts = data.key;
                	//排序
                	var	arr = [
						['t', timestamp],
						['c', 'PC'],
						['i', data.callToken],
						['key','2i0f1x7'],
						['token',localStorage.token],
						['plfType', 3]
					];
	            	arr.sort(_this.sortCustom);
	            	var str = "";
					for (var i=0; i<arr.length; i++) {
						str += arr[i][0] + arr[i][1];
					}
                	console.log(str);
	        		_this.axios.post(_this.$store.state.Check.url+"/plf/list",{
	            		t: timestamp,
	            		i: data.callToken,
	            		v: md5(str), 
	            		c: "PC",
	            		token: localStorage.token,
	            		plfType: 3
	               }).then(function (response) {
	                	console.log(response.data);
	                	if(response.data.result == 200){
	               			_this.ListNames = response.data.Plf;
	               		}
	                }).catch(function (error){
	                    console.log("error2");
	                });
                }).catch(function (error){
                    console.log(error);
                });
            },
			bindPlat(id) {
        		const _this = this;
            	var timestamp = Date.parse(new Date());
            	this.axios.post(_this.$store.state.Check.url+"/getCallId",{
            		t: timestamp,
            		c: "PC"
                }).then(function (response) {
                	const data = response.data;
                	timestamp = Date.parse(new Date());
					_this.sorts = data.key;
					localStorage.sorts = data.key;
                	//排序
                	var	arr = [
						['t', timestamp],
						['c', 'PC'],
						['i', data.callToken],
						['plfId', id],
						['token', localStorage.token],
						['key','2i0f1x7']
					];
	            	arr.sort(_this.sortCustom);
	            	var str = "";
					for (var i=0; i<arr.length; i++) {
						str += arr[i][0] + arr[i][1];
					}

					//bind plat
	        		_this.axios.post(_this.$store.state.Check.url+"/user/bindPlf",{
	            		t: timestamp,
	            		i: data.callToken,
	            		v: md5(str),   
	            		c: "PC",
	            		plfId: id,
	            		token: localStorage.token
	              }).then(function (response) {
	                	if(response.data.result == 200){
	                		_this.text("已绑定");
	               		}
	                }).catch(function (error) {
	                    console.log("error2");
	                });

	            }).catch(function (error){
                    console.log(error);
                });    
        	}
        }
	};
</script>
<style lang="less" rel="stylesheet/less" type="text/css">
	@import '../../public/css/variable.less';
	.tbox{
		&:before{
			content: "";
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 9;
			background: url(../../public/images/opacity1.png) repeat repeat;
			background-size: 100% 100%;
		}
		.boxs{
			position: fixed;
			top: 50%;
			left: 50%;
			width: 520px;
			height: 450px;
			margin: -225px -260px;
			background: @cw;
			z-index: 10;
			.bdr(5px);
			text-align: center;
			padding: 40px 0;
			box-sizing: border-box;
			color: @cgray_s;
			.fonts(16px);
			.ivu-icon-ios-close-empty{
				cursor: pointer;
				position: absolute;
				top: -20px;
    			right: -20px;
				width: 40px;
				height: 40px;
				.bdr(50%);
				color: #d2d2d2;
				text-align: center;
				line-height: 40px;
				.fonts(40px);
				box-shadow: 0px 1px 1px 1px #ccc;
				background: @cw;
			}
		}
	}
	.detailBox{
		img{
			height: 75px;
		}
		p{
			padding: 10px 0;
		}
		span{
			display: inline-block;
			background: #6fc7ff;
			padding: 0 10px;
			.fonts(12px);
			.bdr(10px);
			color: @cw;
			margin: 0 15px;
		}
		.grade{
			margin: 40px 0;
			border-top: 1px solid #dcdcdc;
			padding: 30px 90px;
			color: @cmain_y;
			.fonts(24px);
			font{
				.fonts(48px);
			}
			p{
				color: @cgray_s;
				.fonts(14px);
				padding:  0 0 20px;
			}
		}
		a{
			display: block;
			color: @cw;
			background: @cmain_b;
			padding: 10px 0;
			.bdr(5px);
			.fonts(16px);
		}
		.main_y{
			background: @cmain_y;
		}
	}
	.jiaodan{
		h3{
			.fonts(16px);
			padding-bottom: 25px;
		}
		form{
			padding: 0 70px;
			.ivu-form .ivu-form-item-label{
				.fonts(14px);
			}
			.ivu-select-placeholder{
				text-align: left;
			}
			button.ivu-btn.ivu-btn-primary{
				background: @cmain_b;
				color: @cw;
				.fonts(16px);
			}
			.ivu-select{
				text-align: left;
			}
			textarea.ivu-input{
				height: 80px;
			}
		}
		p{
			.fonts(12px);
			color: #fa3232;
			padding-left: 100px;
			box-sizing: border-box;
		}
		.ivu-form-item-required .ivu-form-item-label:before{
			color: #f30;
			.fonts(12px);
		}
	}
	.main{
		width:1200px;
		margin:0 auto;
		.nav{
			.cf();
			.ivu-breadcrumb{
				float:left;
				line-height:38px;
				.fonts(14px);
				span{
					color:@cgray_s;
					.ivu-breadcrumb-item-separator{margin:auto 4px}
					&:last-child{
						.ivu-breadcrumb-item-link{color:@cmain_y;}
		       		}
				}		
	   		}
		}
   	.pingtai{
        margin-bottom:50px;
   		background-color:@cw;
   		border:1px solid #e6e6e6;
   		 	.maintop{
   		 		margin:20px 79px 0 79px;
   		 		.txt{
   		 			margin:10px 0 0 30px;
   		 			display:inline-block;
   		 			h3{
   		 				height:55px;
   		 				line-height:55px;
   		 				.fonts(16px);
   		 			}
   		 			p{
						.fonts(12px);
						color: @cw;
						span{
							display: inline-block;
							padding: 0 10px;
							background: #86e0ae;
							.bdr(10px);
							&:first-child{
								background: #6fc7ff;
								margin-right:11px;
							}
						}
					}
   		 		}
		 		a{
	 				width: 120px;
				    height: 40px;
				    float:right;
				    margin-top:37px;
				    background-color:@cmain_y;
				    border-color:@cmain_y;
				    text-align: center;
				    line-height: 40px;
				    .bdr(20px);
				    color: @cw;
		            span{
		                .fonts(16px);
		                line-height:16px;
		            }
	   		 	}
	   		}
   		 	.mainbot{
   		 		margin:30px 79px 0 79px;
   		 		.ivu-tabs-nav{
   		 			.ivu-tabs-tab{
	 					width:80px;
	 					height:36px;
	 					line-height:36px;
	 					.fonts(16px);
	 					padding:0 10px;
	 					color:@cgray_s;
   		 			}
   		 		}
   		 		.toptabs{
   		 			.ivu-tabs-bar{margin-bottom:18px;}
   		 			.ivu-col{
   		 				p{	
                            position:relative;	
   		 					.fonts(14px);
   		 					color:@cgray_q;
                            padding-left:180px;
                            padding-bottom:10px;
                            min-height:31px;
   		 					span{
   		 						color:@cgray_s;
   		 						position: absolute;
                                top: 0;
                                left: 60px;
   		 					}
                           
   		 				}
   		 				
   		 			}
   		 		}
   		 		.bottabs{
            		.ivu-tabs-bar{margin-bottom:40px;}
            		.ivu-tabs-tabpane{
            			padding-bottom: 50px;
            		}
   		 			.page1{
   		 				div{
   		 					.fonts(14px);
		 					line-height:24px;
		 					margin:0 50px 24px 50px;
		 					color:@cgray_s;
   		 				}
	 					
   		 			}
   		 			.page2{
   		 				ul{
                			margin:0 0 5px 50px;
   		 					li{
   		 						.cf();
   		 						padding-bottom:40px;
   		 						img{
                                    display:block;
                                    width:120px;
                                    height:120px;
                                    border-radius:50%;
                                    float:left;
                                    margin-top: 20px;
                  				}
   		 						div{
   		 							float:left;
   		 							max-width:727px;
   		 							margin-left:25px;
   		 							h2{
   		 								height:22px;
   		 								line-height:22px;
   		 								color:@cgray_s;
   		 								.fonts(18px);
   		 							}
   		 							h3{
   		 								.fonts(10px);
   		 								color:@cmain_y;
   		 								line-height:30px;
   		 								margin-bottom:6px;
   		 							}
   		 							p{
   		 								line-height:24px;
   		 								color:@cgray_s;
   		 								.fonts(14px);
   		 							}
   		 						}
   		 					}
   		 				}
   		 			}
   		 			.page3{
   		 				ul{
   		 					margin-bottom:22px;
   		 					li{
   		 						color:@cgray_s;
   		 						.fonts(14px);
   		 						padding-left:63px;
   		 						line-height:30px;
   		 						&.zhuce{padding-left:21px;}
   		 						&.zuzhi{padding-left:35px;}
   		 						&.shuiwu{padding-left:49px;}
   		 						span{
   		 							color:@cgray_q;
   		 							display:inline-block;
   		 							padding-left:20px;
   		 						}
   		 					}
   		 				}
   		 				p{
							margin-top:2px;
							color:@cgray_s;
   		 					.fonts(14px);
   		 					padding-left:63px;
   		 					line-height:30px;
   		 					span{
   		 						color:@cgray_q;
   		 						display:inline-block;
   		 						padding-left:20px;
   		 					}
                            &:last-child{
                            	position: relative;
                                color:@cgray_q;
                                padding-left:153px;
                                span{
                                	position: absolute;
                                	top: 0;
                                	left: 60px;
                                    padding-left:0;
                                    color:@cgray_s;
                                }
                            }
                            &:first-child{
                                min-height:30px;
                                padding-left:90px;
                                margin-top:0;
                                span{
                                    left:0px;
                                }
                            }
   		 				}
   		 			}
   		 			.page4{
   		 				h1{
   		 					margin:26px 0 16px 50px;
   		 					height:22px;
   		 					line-height:22px;
   		 					.fonts(16px);
   		 					color:@cgray_s;
			                &:first-child{
			                  margin-top:0;
			                }
   		 				}	
   		 				.ivu-row{
                   .ivu-col{
                        height:180px;
                        overflow:hidden;
                        padding-top:20px;
                      a{
                         display:block;
                         overflow:hidden;
                        img{
                          width:100%;
                          display:block;
                          .trans(.3s);
                        /*  &:hover{transform:scale(1.5);}*/
                        }
                      }
                   }
              }
   		 			}
   		 		}
   		 	}
   		 }
	}
</style>
