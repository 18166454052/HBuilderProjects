<template>
	<view>
		<view class="header">
			<!-- 定位城市 -->
			<view class="addr">
				<view class="icon iconfont">&#xe650;</view> {{city}}
			</view>
			<!-- 搜索框 -->
			<view class="input-box">
				<input type="text" placeholder="some words..." placeholder-style="color:#c0c0c0" />
				<view class="icon iconfont">&#xe65c;</view>
			</view>

			<!-- 提示信息 -->
			<view class="icon-btn">
				<view class="icon iconfont">&#xe70a;</view>
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
				city: "北京"
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 92%;
		padding: 0 4%;
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

		.addr {
			width: 120rpx;
			height: 60rpx;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			font-size: 28rpx;

			.icon {
				height: 60rpx;
				margin-right: 5rpx;
				display: flex;
				align-items: center;
				font-size: 42rpx;
				color: #ffc50a;
			}
		}

		.input-box {
			width: 100%;
			height: 60rpx;
			background-color: #f5f5f5;
			border-radius: 30rpx;
			position: relative;
			display: flex;
			align-items: center;

			.icon {
				display: flex;
				align-items: center;
				position: absolute;
				top: 0;
				right: 0;
				width: 60rpx;
				height: 60rpx;
				font-size: 34rpx;
				color: #c0c0c0;
			}

			input {
				padding-left: 28rpx;
				height: 28rpx;
				font-size: 28rpx;
			}
		}

		.icon-btn {
			width: 60rpx;
			height: 60rpx;
			flex-shrink: 0;
			display: flex;

			.icon {
				width: 60rpx;
				height: 60rpx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42rpx;
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
