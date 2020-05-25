<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!--查询列表-->
		<view class="scroll-box">
		  
			<movieCategory
			@getitem="movieItem"
			></movieCategory>
		</view>
		
		
		<!--结果列表-->
		<view class="list-box">
		    <view class="list-item" v-for="movie in movieList"
			:key="movie.movie_url+'_'+movie.movie_title"
			@tap="toplay"
			>
				<image class="image"
					 :src="movie.movie_image" 
					 lazy-load 
				 >
				 </image>
				<view class="title">
					<view class="title-content">{{movie.movie_title}}</view>
				</view>	
		    </view>
		</view>
		
		<view class="loading-text">{{movieLoadingText}}</view>

	</view>
</template>

<script>
 import mix from "./mix.js"
   export default{
	   mixins:[mix],
	   onLoad(option) {
		   console.log("----onLoad-----")
	   	   this.getMovieItem()
	   },
	   onReachBottom(){
	   
	   	 if(this.movieLoadingAll){//数据加载完成
	   		this.movieLoadingText= "没有更多数据啦！"
	   	 }
	   	 else{
	   		 this.moviePage = this.moviePage+1;
	   		 this.getMovieItem()
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
