<template>
	<view>
		<!-- 状态栏 -->
		<view class="place">
			
		</view>
		<view class="user">
			
		
			<view class="my">
				我的介绍
			</view>
			<view class="vip">
				vip
			</view>
			<view class="info-box">
				<view class="title-box">
					<view class="ttile ">
						观看历史
					</view>
					<view class="more" @tap="recoreddetail">
						更多><text></text>
					</view>
				</view>
				<view class="">
					<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="10">
					    <view class="scroll-view-item_H" 
						
						v-for= "cat in catList" :key="cat">{{cat}}</view>  
					</scroll-view>
				</view>
				
			</view>
			<view class="info-box">
			<view class="title-box">
				<view class="ttile">
					我的下载
				</view>
				<view class="more"  @tap="loadingdetail">
					更多><text></text>
				</view>
			</view>
			<view class="">
				滚动条数据
			</view>	
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				catList:['院线','动作','冒险','喜剧','爱情','恐怖','犯罪'],
				
			}
		},
		methods:{
			recoreddetail(){
				uni.navigateTo({
					url:"./playrecord"
				})
			},
			loadingdetail(){
				uni.navigateTo({
					url:"./loading"
				})
			}
		}
	}
</script>

<style lang="scss">
	.place{
		height: var(--status-bar-height); //覆盖样式
	}
	.user {
		width: 92%;
		padding: 0 4%;
		font-size: 14px;
		color: #000028;
	}
	.title-box{
		
		display:flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		line-height: 40px;	
		
	}
	.more{
		 color: #a2a2b6;
		 padding:0 10px;
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
</style>
