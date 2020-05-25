<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!--查询列表-->
		<view class="scroll-box">
		  
			<varietyCategory
			@getitem="varietyItem"
			></varietyCategory>
		</view>
		
		
		<!--结果列表-->
		<view class="list-box">
		    <view class="list-item" v-for="variety in varietyList"
			:key="variety.variety_url+'_'+variety.variety_title"
			@tap="toplay"
			>
				<image class="image"
					 :src="variety.variety_image" 
					 lazy-load 
				 >
				 </image>
				<view class="title">
					<view class="title-content">{{variety.variety_title}}</view>
				</view>	
		    </view>
		</view>
		
		<view class="loading-text">{{varietyLoadingText}}</view>

	</view>
</template>

<script>
 import mix from "./mix.js"
   export default{
	   mixins:[mix],
	   onLoad(option) {
		   console.log("----onLoad-----")
	   	   this.getVarietyItem()
	   },
	   onReachBottom(){
	   
	   	 if(this.varietyLoadingAll){//数据加载完成
	   		this.varietyLoadingText= "没有更多数据啦！"
	   	 }
	   	 else{
	   		 this.varietyPage = this.varietyPage+1;
	   		 this.getVarietyItem()
	   	 }
	   },
   }
</script>

<style lang="scss" scoped>
	page{
		padding:0 0;
	}
	/*  修改状态栏样式 */
	.status {
		/* #ifdef APP-PLUS */
		opacity: 0;
		/* #endif */
	}
	

		
</style>
