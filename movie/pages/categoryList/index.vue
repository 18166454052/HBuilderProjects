<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!-- header -->
		<goodsHeader />

		<!--查询列表-->
		<view class="scroll-box">
		    <!-- <scroll-view class="scroll-view_H" scroll-x="true" scroll-left="10">
		        <view class="scroll-view-item_H" 
				:class="{'current':curcat==cat}"
				 @tap="curcat=cat"
				v-for= "cat in catList" :key="cat">{{cat}}</view>
		        
		    </scroll-view> -->
			<!-- <scroll-view class="scroll-view_H" scroll-x="true" scroll-left="10">
			    <view class="scroll-view-item_H" 
				:class="{'current':curcat==cat}"
				 @tap="curcat=cat"
				v-for= "cat in catList" :key="cat">{{cat}}</view>
			    
			</scroll-view> -->
		</view>
		
		
		<!--结果列表-->
		<view class="list-box">
			<!-- <view class="list-item">
				<image class="image"
					 src="http://puui.qpic.cn/vcover_vt_pic/0/m5zzglrbt5zdv6d1580713226/220" 
					 lazy-load 
				 >
				 </image>
				<view class="title">
					<view class="title-content">叶问叶问叶问叶问叶问</view>
				</view>	
			</view> -->
		    <!-- <view class="list-item" v-for="i in 10"
			:key="i"
			@tap="toplay"
			>
				<image class="image"
					 src="http://puui.qpic.cn/vcover_vt_pic/0/m5zzglrbt5zdv6d1580713226/220" 
					 lazy-load 
				 >
				 </image>
				<view class="title">
					<view class="title-content">叶问4</view>
				</view>	
		    </view> -->
		</view>
	</view>

	</view>
</template>

<script>
	import goodsHeader from './header.vue'

	export default {
		components: {
			goodsHeader,
		},
		data() {
			return {
				catList:['院线','动作','冒险','喜剧','爱情','恐怖','犯罪'],
				curcat:'动作'
				
			}
		},
		methods:{
			scroll(){},
			toplay(){
				uni.navigateTo({
					url:"../play/index"
				})
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: "电影"
			})
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
	.scroll-box{
		padding:0 2%;
	}
	.scroll-view_H{
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_H{
		display: inline-block;
	    height: 20px;
		padding:0 20px;
		line-height: 20px;
		text-align: center;
		font-size: 14px;
	}
	.current{
		color:#f06c7a;
		background-color:#f6f6f7;
		border-radius:5px;
	}
	//查询列表
	.list-box{
		margin-top:10px;
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.list-item{
		flex:0 0 240rpx;
		margin-bottom:15px;
	}
	.image{
		width:100%;
		height:300rpx;
	}
	.title,.info{
		text-align:center;
		width:230rpx;
		padding: 0 5rpx;
		// overflow:hidden;
		// text-overflow:ellipsis;
		// white-space: nowrap;
	}
	.title{
		//margin-top: 12px;
		color: #000028;
		font-size: 14px;
		line-height: 20px;	
	}
	.title-content{
		display:inline-block;
		text-align:left;
	}
	.info{
		 margin-top: 4px;
		 color: #a2a2b6;
		 font-size: 12px;
		 line-height: 18px;
	}
	

	
	
		
</style>
