<template>
	<div id="footer">
		<div class="fottop">
			<div class='topbox'>
				<Row>
					<Col span='6'>
						<!--<div class='telepic'>
							<i class="iconfont">&#xe760;</i>
						</div>-->
						<div class='teletxt'>
							<p>QQ群号</p>
							<p>218560853</p>
							<p>工作日<span>9:00-18:00</span></p>
						</div>
					</Col>
					<Col span='12' class='mid'>
						<div class='contant'>
							<dl>
								<dt>关于我们</dt>
								<dd><router-link to="/about/intro">公司简介</router-link></dd>
								<dd><router-link to="/about/culture">企业文化</router-link></dd>
								<dd><router-link to="/about/safe">安全体系</router-link></dd>
							</dl>
							<dl>
								<dt>商务合作</dt>
								<dd><router-link to="/cooperate">平台入驻</router-link></dd>
								<dd><router-link to="/about/contact">联系我们</router-link></dd>
							</dl>
						</div>
					</Col>
					<Col span='6'>
						<div class='lastleft'>
							<div class='logo'>
									<img src='../public/images/botlogo.png'>
									<span></span>
									<div class="logotxt">
										<h1>爱分享</h1>
										<p>I Share</p>
									</div>
							</div>
							<!--<ul>
								<li><a herf=""><i class="iconfont">&#xe75e;</i></a></li>
								<li><a herf=""><i class="iconfont">&#xe761;</i></a></li>
								<li><a herf=""><i class="iconfont">&#xe75f;</i></a></li>
							</ul>-->
						</div>	
						<!--<div class='weixin'>
							<img src='../public/images/weixin.jpg'>
							<p>扫码关注微信</p>
						</div>-->
					</Col>
				</Row>
			</div>
		</div>
		<div class='fotbot'>
			<div class='botbox'>
				<p>
					<span>友情链接：</span>
					<a target="_blank" href="http://www.dslc.cn/">大圣理财</a>
					<a target="_blank" href="http://www.pccb.com/">普资华企</a>
					<a target="_blank" href="http://www.yiqijucai.com/">亿企聚财</a>
					<a target="_blank" href="http://www.wdzj.com/">网贷之家</a>
					<a target="_blank" href="http://www.chinapnr.com/">汇付天下</a>
					<a target="_blank" href="http://www.lianlianpay.com/">连连支付</a>
					<a target="_blank" href="http://bbs.wdzj.com/">网贷谈论</a>
					<a target="_blank" href="http://www.niwodai.com/">你我贷</a>
					<a target="_blank" href="http://www.qianshengqian.com/">钱牛牛</a>
				</p>
				<!--<row>
					<Col span='3'  offset='6' class='hangye'  >
						<a href="http://www.anquan.org/authenticate/cert/?site=www.dslc.cn&at=business" target="_blank"></a>
					</Col>
					<Col span='3' class='chengxin'>
						<a href="https://credit.szfw.org/CX20151215012658210138.html" target="_blank"></a>
					</Col>
					<Col span='3' class='jinrong'>
						<a href="http://si.trustutn.org/info?sn=725151228000340041557" target="_blank">
						</a>
					</Col>
					<Col span='3' class='kexing'>
						<a href="https://ss.knet.cn/verifyseal.dll?sn=e16042231011563194xxp2000000&a=1&pa=0.733642161329505" target="_blank">
						</a>
					</Col>
				</row>-->
				<p>版权所有：上海成堃网络科技有限公司 公司总部：上海市虹口区吴淞路575号1F虹口SOHO</p>
				<p><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010902001141" target="_blank"><!--公安备案号31010902001141--></a> <span>沪ICP备17014353号-1</span></p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
	    name: 'footer'
	};
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../public/css/variable.less';
	#footer{
		.fonts(20px);
		.fottop{
			height:280px;
			background-color:@cb;
			.topbox{
					.cf();
					width:1200px;
					margin:0 auto;
					padding-top:75px;
					.telepic{
							margin:22px 22px 0 0;
							text-align:center;
							float:left;
							width:50px;
							height:50px;
							border:1px solid @cw;
							border-radius:50%;
							i{ 
								display:inline-block;
								padding-top:10px;
								color:@cw;
								.fonts(20px);
							}
					}
				.teletxt{
						float:left;
						p{
							.fonts(18px);
							line-height:47px;
							color:@cw;
							&:first-child{
								line-height:22px;
							}
							&:last-child{
								line-height:22px;
								span{
									display:inline-block;
									padding-left:16px;
								}
							}
						}
				}	
				.mid{
					position:relative;
					dl{
						width:204px;
						float:left;
						&:first-child{margin-left:171px;}
						
						
						dt{
							padding-bottom:18px;
							.fonts(14px);
							color:@cw;
							}
						dd{
							.fonts(12px);
							line-height:28px;
							a{
								color:#939393;
								&:hover{color:@cmain_y;}
							}
						}
					}
					&:before{
								content:'';
								display:block;
								width:1px;
								height:120px;
								background-color:#939393;
								position:absolute;
								left:41px;
								top:3px;
					}
					&:after{
							content:'';
							display:block;
							width:1px;
							height:120px;
							background-color:#939393;
							position:absolute;
							right:40px;
							top:3px;
					}
				}
				.lastleft{
						  height:125px;
						  float:left;
						  padding:5px 0 0 27px;
						  .logo{
								height:80px;
								position:relative;
								  span{
									   width:1px;
									   height:24px;
									   background-color:#3f3f3f;
									   position:absolute;
									   left:65px;
								       top:58px;
									}
								.logotxt{
									display:inline-block;
									padding:55px 0 0 8px;
									h1{
										.fonts(12px);
										line-height:16px;
										color:#939393;
									}
									p{
										.fonts(8px);
										line-height:8px;
										color:#939393;
									}
								}
						 }
						 ul{
							.cf();
							margin-top:19px;
							li{
								float:left;
								margin-right:16px;
								a{
								   display:block;
								   width:20px;
								   height:20px;
								   color:#939393;
								   &:hover{
										color:@cmain_y;
								   }
								   i{
									 display:block;
									 .fonts(20px);
									 line-height:20px
									}
								}
								&:first-child{
									margin-left:4px;
								}
							}
						}
				}
				.weixin{
						float:right;
						padding-top:5px;
						i{
						  display:block;
						  text-align:right;
						}
						p{
						  .fonts(12px);
						  text-align:center;
					      color:#939393;
						}
				}
			}
		}
		.fotbot{
				.fonts(12px);
				background-color:@cg;
				text-align:center;
				color:#939393;
				padding-bottom: 10px;
				a{color:#939393}
				.botbox{
						width:1200px;
						margin:0 auto;
						padding-top:14px;
						text-align:center;
						.fonts(14px);
						text-align: center;
					    .ivu-row{
						 		 width:1056px;
			               	     margin:0 auto;
			               		 margin-bottom:10px;
			                	.ivu-col{
			                   			 a{
					                        width: 105px;
					                        height: 38px;
					                        display: block;
			                    		}
				                    &.wenzi{
				                    	height:38px;
				                    	text-align:right;
				                    	span{
				                    		line-height:38px;
				                    		display:inline-block;
				                    	}
				                    }
				                    &.hangye{
				                  			  
				                        	  a{background:url(../public/images/hangye.png) no-repeat;}
				                       		  &:hover{
				                             		 a{background:url(../public/images/hangye1.png) no-repeat;}  
				                        	  }
				                    }
				                    &.chengxin{
				                    		  a{background:url(../public/images/chengxin.png) no-repeat;}
				                        	  &:hover{
				                            		a{background:url(../public/images/chengxin1.png) no-repeat;}
				                       		  }
				                    }
				                    &.jinrong{
						                       a{background:url(../public/images/renzheng.png) no-repeat;}
						                       &:hover{
						                            a{background:url(../public/images/renzheng1.png) no-repeat;}
						                       }
				                    }
				                    &.kexing{
				                        	a{background:url(../public/images/kexing.png) no-repeat;}
				                       		&:hover{
				                           			a{background:url(../public/images/kexing1.png) no-repeat;}
				                        	}
				                    }
				                    &.beian{
					                        a{
					                            background:url(../public/images/beian.png) no-repeat;
					                            width: 129px; 
					                        }
					                        &:hover{
					                            a{background:url(../public/images/beian1.png) no-repeat;}
					                        }
				                    }
				                }
				            }
						p{
							.fonts(12px);
							line-height:24px;
							&:first-child{
								padding-bottom:10px;
								a{
									padding:0 5px;
									color:#939393;
									&:hover{color:@cmain_y}
								}
							}
						}		            		
				}
		}
	}
</style>	