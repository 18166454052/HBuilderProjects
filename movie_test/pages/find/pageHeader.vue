<template>
	<view>
		<view class="header">
			<!-- 定位城市 -->
			<!-- <view class="addr">
				<view class="icon iconfont">&#xe650;</view> {{city}}
			</view> -->
			<!-- 搜索框 -->
			<view class="input-box">
				<input type="text" v-model="searchContent" placeholder="琅琊榜   lyb    langyabang" placeholder-style="color:#c0c0c0" 
				@input="input"
				
				/>
				<view class="iconsearch">
					<view class="icon iconfont">&#xe65a;</view>
				</view>
				<view class="iconclose" v-show="showClose"
				@tap="clearsearch"
				>
					<view class="icon iconfont ">&#xe605;</view>
				</view>
				
			</view>

			<!-- 提示信息 -->
			<view class="icon-btn" @tap="search">
				<view class="icon iconfont">搜索</view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				showClose:false,
				searchContent:''
			}
		},
		methods:{
			input(){// 事件处理函数内实时修改当前值不生效
				setTimeout(() => {
					if(this.searchContent && this.searchContent.trim().length){
						this.showClose=true;
					}
					else{
						this.showClose=false;
					}
					
				}, 0)
				
			},
			clearsearch(){
				this.searchContent=""
			},
			search(){
				console.log("-search-")
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		top: 0;
		// 条件编译 设置离顶部的高度
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */

		
		.input-box {
			width: 650rpx;
			height: 70rpx;
			background-color: #f5f5f5;
			border-radius: 30rpx;
			position: relative;
			display: flex;
			align-items: center;

			.icon {
				font-size: 34rpx;
				color: #c0c0c0;
			}
			.iconsearch{
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				top: 0;
				left:0;
				width: 60rpx;
				height: 100%;
				font-size: 34rpx;
				color: #c0c0c0;
			}
            .iconclose{
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				top: 0;
				right: 0;
				width: 60rpx;
				height: 100%;
				font-size: 34rpx;
				color: #c0c0c0;
			}
			
			input {
				padding-left: 60rpx;
				padding-right:60rpx;
				height: 30rpx;
				width:100%;
				font-size: 30rpx;
			}
		}

		.icon-btn {
			width: 100rpx;
			height: 70rpx;
			flex-shrink: 0;
			display: flex;

			.icon {
				width: 100rpx;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 32rpx;
			}
		}
	}

	.place {
		background-color: #ffffff;
		height: 100rpx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
</style>
