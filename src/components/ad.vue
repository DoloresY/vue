<template>
	<div id="ad">
		<div v-for="list in lists" :key="list.id">
			<a :href="list.innerLink">
				<img :src="list.img" />
				<p><span>广告</span><span>{{ list.titile }}</span></p>
			</a>
		</div>
	</div>
</template>

<script>
	import md5 from 'js-md5';
	export default {
	    name: 'ad',
	    data(){
	    	return {
	    		lists:[]
            }
	    },
	    mounted: function () {
            this.getList();
        },
	    methods: {
        	getList() {
        		var timestamp = Date.parse(new Date());
				var arr = [
					['adType', 2],
					['location', 10],
					['token', localStorage.token]
				];
				var datas = {
	        		t: timestamp,
            		i: localStorage.callToken,
            		v: md5(""), 
            		c: "PC",
            		adType: 2,		//1->banner  2->广告
            		location: 10,
            		token: localStorage.token
	            };
				this.getCallId(arr, "/ad/list", datas, timestamp, this.getDatas, this.work);
        	},
        	work(response) {
        		if(response.data.result == 200){
           			this.lists = response.data.Ad;
           		}
        	}
	    }
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../public/css/variable.less';
	#ad{
		margin: 20px auto 40px;
		a{
			position: relative;
			display: block;
			margin-bottom: 10px;
			img{
				width: 100%;
			}
			p{
				position: absolute;
				width: 100%;
				right: 0;
				bottom: 5px;
				text-align: right;
				color: @cw;
			}
			span{
				display: inline-block;
				background: url(../public/images/opacity1.png) repeat repeat;
				background-size: 100%;
				padding: 0 10px;
				box-sizing: border-box;
				&:first-child{
					float: left;
				}
			}
		}
	}
</style>	
