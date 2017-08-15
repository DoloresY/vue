<template>
	<div id="platform">
		<!--<bannerCarousel bannerType="platform"></bannerCarousel>-->
		<div class="platbg"></div>
		<div class="platform">
			<platList platType="3"></platList>
			<!--<template v-show="TotalNum">
				<Pagination></Pagination>
			</template>-->
		</div>
	</div>
</template>
<script>
    import * as Common from '../../components/main';
	export default {
	    name: 'platform',
	    components:{
            bannerCarousel: Common.Carousel,
            platList: Common.Platlist,
            Pagination: Common.Pagination,
            PlatDetail: Common.PlatDetail
	    },
	    data () {
            return {
				total: localStorage.PlatListAllNum
            }
       },
        computed: {
           type() {
               return this.$route.params.type;
		   },
		   TotalNum() {
		   		return this.total>3? this.total:0
		   }
		}
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../public/css/variable.less';
	.platform{
		width: 1200px;
		margin: 50px auto;
	}
	.platbg{
		background: url(../../public/images/cooperate_01.png) no-repeat 50% 50%;
		background-size: cover;
		height: 340px;
	}
</style>	

