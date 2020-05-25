<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!--查询列表-->
		<view class="scroll-box">
		  
			<tvCategory
			@getitem="tvItem"
			></tvCategory>
		</view>
		
		
		<!--结果列表-->
		<view class="list-box">
		    <view class="list-item" v-for="tv in tvList"
			:key="tv.tv_url+'_'+tv.tv_title"
			@tap="toplay"
			>
				<image class="image"
					 :src="tv.tv_image" 
					 lazy-load 
				 >
				 </image>
				<view class="title">
					<view class="title-content">{{tv.tv_title}}</view>
				</view>	
		    </view>
		</view>
		
		<view class="loading-text">{{tvLoadingText}}</view>

	</view>
</template>

<script>
 import mix from "./mix.js"
   export default{
	   mixins:[mix],
	   onLoad(option) {
		   console.log("----onLoad-----")
	   	   this.getTvItem()
	   },
	   onReachBottom(){
	   
	   	 if(this.tvLoadingAll){//数据加载完成
	   		this.tvLoadingText= "没有更多数据啦！"
	   	 }
	   	 else{
	   		 this.tvPage = this.tvPage+1;
	   		 this.getTItem()
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
