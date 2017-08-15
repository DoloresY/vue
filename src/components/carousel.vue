<template>
	<div id="carousel">
		<template v-if="$route.name == 'index'">
			<Carousel v-model="value"
				:autoplay="setting.autoplay"
		        :autoplay-speed="setting.autoplaySpeed"
		        :dots="setting.dots"
		        :height="setting.height">
		        <Carousel-item  v-for="list in lists" :key="list.id">
	        		<router-link :to="{ path: '/activity', query: { id:list.id, prev: 'index' }}">
	        			<div class="demo-carousel" v-bind:style="{ backgroundImage:'url(' + list.img + ')' }">
		            	<!--<div v-bind:class="{ hide: isHide }"><a :href="list.href"><p>{{ list.msg }}<span>{{ list.dates }}</span></p></a></div>-->
		            </div>
	           </router-link>
	        </Carousel-item>
	        </Carousel>
	    </template>
	    <template v-else>
	    	<Carousel v-model="value"
				:autoplay="setting.autoplay"
		        :autoplay-speed="setting.autoplaySpeed"
		        :dots="setting.dots"
		        :height="setting.height">
		        <Carousel-item  v-for="list in lists" :key="list.id">
	        		<router-link to="">
		    			<div class="demo-carousel" v-bind:style="{ backgroundImage:'url(' + list.img + ')' }">
			            </div>
			        </router-link>
	           </router-link>
	        </Carousel-item>
	       </Carousel>
    	</template>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	export default {
	    name: 'carousel',
	    data () {
            return {
                value: 0,
                isHide: false,
                lists: [],
                setting: {
                	height: 340,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: 'inside',
                    trigger: 'click',
                    arrow: 'hover'
                }
            }
        },
        props:['adType','location'],
        computed:{
           type() {
               return this.$route.params.name;
		   }
		},
		mounted: function() {
			this.getList();
		},
		methods: {
        	getList() {
        		var timestamp = Date.parse(new Date());
				var arr = [
					['adType', this.adType],
					['location', this.location]
				];
				var datas = {
	        		t: timestamp,
            		i: localStorage.callToken,
            		v: md5(""), 
            		c: "PC",
            		adType: 2,		//1->banner  2->广告
            		adType: this.adType,		//1->banner  2->广告
	            	location: this.location,	//8->banner  9->商务合作banner  10-> 广告首页
	            };
				this.getCallId(arr, "/ad/list", datas, timestamp, this.getDatas, this.work);
        	},
        	work(response) {
        		if(response.data.result == 200){
           			this.lists = response.data.Ad;
           			if(this.location == 8){
           				this.setting.height = 535;
           			}
           		}
        	}
		}
	};
</script>
<style lang="less" rel="stylesheet/less" type="text/css">
	@import '../public/css/variable.less';
	.demo-carousel{
		position: relative;
		height: 100%;
		background-size: cover;
		background-position: 50% 50%;
		div{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			line-height: 35px;
			.fonts(12px);
			background: url(../public/images/opacity1.png) repeat repeat;
			a{ color: @cw; }
			p{
				width: 1200px;
				margin: 0 auto;
				padding: 0 0 0 30px;
				box-sizing: border-box;
				span{
					float: right;
				}
			}
		}
	}
	.ivu-carousel-arrow.left {
	    left: 50% !important;
	    margin-left: -600px;
	    width: 14px;
	    height: 45px;
	    background: url(../public/images/arrorLeft.png) no-repeat;
	    background-size: 100%;
	    i{ display: none; }
	}
	.ivu-carousel-arrow.right {
	    right: 50% !important;
	    margin-right: -600px; 
	    width: 14px;
	    height: 45px;
	    background: url(../public/images/arrorRight.png) no-repeat;
	    background-size: 100%;
	    i{ display: none; }
	}
	.ivu-carousel-arrow:hover{
		background-color: transparent !important;
	}
	.ivu-carousel-dots{
		bottom: 15px !important;
		li{
			margin: 0 5px !important;
			button{
				width: 10px !important;
				height: 10px !important;
				background: @cw border-box;
				opacity: 0.6 !important;
				.bdr(50%) !important;
			}
			&.ivu-carousel-active{
				button{
					background: @cw;
				}
			}
		}
	}
</style>	
