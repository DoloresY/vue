<template>
	<div id="detail">
		<div v-for="item in items" :key="item.id">
			<div class="return"><a href="javascript:;" @click="go()">&lt; 返回</a></div>
			<h2>{{ item.title }}<span>{{ item.dates}}</span></h2>
			<div class="intro">{{ item.intro }}
				<span>{{ item.from }}</span>
			</div>
			<div v-html="item.article">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	    name: 'detail',
	    data(){
	    	return {
	    		items: []
            }
	    },
	    computed:{
            type() {
                return this.$route.params.type;
		    },
		    id() {
		   		return this.$route.query.id;
		    }
		},
		mounted: function () {
            this.getDetail();
        },
        methods: {
        	getDetail() {
        		const _this = this;
				this.axios.get("http://www.ifd.club/json/newsdetail.json").then(function(response){
					console.log(response.data);
					if(_this.$route.params.type == "info") {
        				for(var i = 0; i< response.data.data.info.length; i++){
	                		if(_this.$route.query.id == response.data.data.info[i].id){
	                			_this.items = response.data.data.info.slice(i,i+1);
	                		}
	               		}
					}else if(_this.$route.params.type == "dynamic") {
						for(var i = 0; i< response.data.data.dynamic.length; i++){
	                		if(_this.$route.query.id == response.data.data.dynamic[i].id){
	                			_this.items = response.data.data.dynamic.slice(i,i+1);
	                		}
	               		}
					}else if(_this.$route.params.type == "notice"){
						for(var i = 0; i< response.data.data.notice.length; i++){
	                		if(_this.$route.query.id == response.data.data.notice[i].id){
	                			_this.items = response.data.data.notice.slice(i,i+1);
	                		}
	               		}
					}
				}).catch(err => {
					console.log(err);
               });
        	},
			go(){
				history.go(-1);
			}
		}
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../public/css/variable.less';
	#detail{
		line-height: 24px;
		.fonts(14px);
	}
	.return{
		position: relative;
		text-align: right;
	    margin-top: -40px;
	    margin-bottom: 40px;
	    a{
	    	color: @cmain_b;
	    }
	}
	h2{
		.fonts(18px);
		text-align: center;
		color: @cgray_s;
		font-weight: normal;
		padding-top: 45px;
		span{
			display: block;
			padding: 30px 0 40px;
			color: @cgray_q;
			.fonts(14px);
		}
	}
	.intro{
		text-indent: -40px;
		color: @cgray_q;
		padding-left: 40px;
		span{
			display: block;
			text-align: right;
			padding-top: 15px;
		}
	}
	p{
		margin: 20px 0;
	}
</style>	
