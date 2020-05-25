<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!-- 自定义顶部导航栏 -->
		<pageHeader />
		<view class="">
			搜索历史
		</view>
	</view>
</template>

<script>
	import pageHeader from './pageHeader.vue'
	export default{
		components:{
			pageHeader
		}
	}
</script>

<style>
</style>
