<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!--查询列表-->
		<view class="scroll-box">
		  
			<cartoonCategory
			@getitem="cartoonItem"
			></cartoonCategory>
		</view>
		
		
		<!--结果列表-->
		<view class="list-box">
		    <view class="list-item" v-for="cartoon in cartoonList"
			:key="cartoon.cartoon_url+'_'+cartoon.cartoon_title"
			@tap="toplay"
			>
				<image class="image"
					 :src="cartoon.cartoon_image" 
					 lazy-load 
				 >
				 </image>
				<view class="title">
					<view class="title-content">{{cartoon.cartoon_title}}</view>
				</view>	
		    </view>
		</view>
		
		<view class="loading-text">{{cartoonLoadingText}}</view>

	</view>
</template>

<script>
 import mix from "./mix.js"
   export default{
	   mixins:[mix],
	   onLoad(option) {
		   console.log("----onLoad-----")
	   	   this.getCartoonItem()
	   },
	   onReachBottom(){
	   
	   	 if(this.cartoonLoadingAll){//数据加载完成
	   		this.cartoonLoadingText= "没有更多数据啦！"
	   	 }
	   	 else{
	   		 this.cartoonPage = this.cartoonPage+1;
	   		 this.getCartoonItem()
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
