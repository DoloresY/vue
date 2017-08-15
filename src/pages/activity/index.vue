<template>
	<div id="activity">
		<p v-bind:style="{ backgroundImage:'url(' + img + ')', height: Height }"></p>
	</div>
</template>
<script>
    import md5 from 'js-md5';
	export default {
	    name: 'activity',
	    data () {
            return {
            	img: '',
            	Height: ''
            }
       },
       computed:{
		    id() {
		   		return this.$route.query.id;
		    },
		    prev() {
		   		return this.$route.query.prev;
		    }
		},
		mounted: function(){
			this.getImg();
		},
		methods: {
			getImg() {
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
					if(_this.$route.query.prev == 'index'){
	                	//排序
	                	var	arr = [
							['t', timestamp],
							['c', 'PC'],
							['i', data.callToken],
							['key','2i0f1x7'],
							['adType',1],
							['location',8],
							['actId', _this.$route.query.id]
						];
		            	arr.sort(_this.sortCustom);
		            	var str = "";
						for (var i=0; i<arr.length; i++) {
							str += arr[i][0] + arr[i][1];
						}
	                	_this.axios.post(_this.$store.state.Check.url+"/ad/list",{
		            		t: timestamp,
		            		i: data.callToken,
		            		v: md5(str),   
		            		c: "PC",
		            		adType: 1,
		            		location: 8,
		            		actId: _this.$route.query.id
		                }).then(function (response) {
		                	if(response.data.result == 200){
		                		_this.img = response.data.img;
								_this.Height = response.data.height+'px';
		               		}
		               		
		                }).catch(function (error){
		                    console.log("error2");
		                });
	                } else if(_this.$route.query.prev == 'cooperate'){
	                	//排序
	                	var	arr = [
							['t', timestamp],
							['c', 'PC'],
							['i', data.callToken],
							['key','2i0f1x7'],
							['actId', _this.$route.query.id]
						];
		            	arr.sort(_this.sortCustom);
		            	var str = "";
						for (var i=0; i<arr.length; i++) {
							str += arr[i][0] + arr[i][1];
						}
	                	_this.axios.post(_this.$store.state.Check.url+"/info/list",{
		            		t: timestamp,
		            		i: data.callToken,
		            		v: md5(str),   
		            		c: "PC",
		            		actId: _this.$route.query.id
		                }).then(function (response) {
		                	if(response.data.result == 200) {
		                		_this.img = response.data.img;
								_this.Height = response.data.height+'px';
		               		}
		                }).catch(function (error){
		                    console.log("error2");
		                });
	                }
                }).catch(function (error){
                    console.log(error);
                });
			}
		}
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../public/css/variable.less';
	#activity{
		p{
			background-position: 50% 50%;
			background-repeat: no-repeat;
		}
	}
</style>	

