<template>
	<view>
		<view
		class="header-box"
		>
			<view class="header">
				<view @tap="handleSelect(target)" class="target" v-for="(target,index) in filterByList" :key="index" :class="{'on':target.filterby==filterby}">
					{{target.text}}
				</view>
			</view>
			<view class="category" @tap="categoryHandler">
				<text>院线</text><text>免费</text><text>全部分类</text>
				
			</view>
		</view>
		
		<!-- 占位 tabbar 有定位 -->
		<view class="place"></view>
		<!-- 列表 -->
		<!-- <view class="list-box">
			<view class="list-item" v-for="i in 10" :key="i">
				<image class="image"
					 src="http://puui.qpic.cn/tv/0/777703291_498280/0" 
					 lazy-load 
				 >
				 </image>
				<view class="title">灵兽·奇幻大片</view>
				<view class="info">巨大雪兽激战黄皮子妖！</view>	
			</view>
		</view> -->
		<view class="loading-text" v-show="filterby=='movie'">{{movieLoadingText}}</view>
		<view class="loading-text" v-show="filterby=='tv'">{{tvLoadingText}}</view>
		<view class="loading-text" v-show="filterby=='cartoon'">{{cartoonLoadingText}}</view>
		<view class="loading-text" v-show="filterby=='variety'">{{varietyLoadingText}}</view>
	</view>
</template>

<script>
	import interfaces from '../../utils/interfaces.js'
	import { test } from "@/api/index.js"
	export default {
		data() {
			return {
				goodsList: [], // 商品列表大数组
				filterby: "movie", // 默认选择的tab
				loadingText: "正在加载....",
				filterByList: [
					{
						text: "电影",
						filterby: "movie"
					},
					{
						text: "电视剧",
						filterby: "tv"
					},
					{
						text: "综艺",
						filterby: "variety"
					},
					{
						text: "动漫",
						filterby: "cartoon"
					}
				],
				// 消息提示
				movieLoadingText:"正在加载....",
				tvLoadingText:"正在加载....",
				cartoonLoadingText:"正在加载....",
				varietyLoadingText:"正在加载....",
				
				// 分页
				moviePage:1,
				tvPage:1,
				cartoonPage:1,
				varietyPage:1,
				size:10,
				
				// 列表
				movieList:[],
				tvList:[],
				cartoonList:[],
				varietyList:[],
				
				//
				REQUEST:true, //是否请求接口  在下拉刷新时判断  上次接口是否返回，
				
				//是否已经获取了所有的数据
				movieAll:false, //判断数据是否已经全部请求
				cartoonAll:false,
				tvAll:false,
				varietyAll:false
				
			}
		},
		methods: {
			categoryHandler(){
				uni.navigateTo({
					url:"../categoryList/index"
				})	
			},
			handleSelect(target){
				this.filterby = target.filterby;
			},
			getMovieList(){
				console.log("-getMovieList-")
			},
			getTvList(){
				console.log("-getTvList-")
			},
			getCartoonList(){
				console.log("-getCartoonList-")
			},
			getVarietyList(){
				console.log("-getVarietyList-")
			},
			
		},
		computed:{
			listCom(){// 根据tab选项  渲染不同的列表信息
				return this[this.filterby+'List']
			}
		},
		onLoad(option) {
			//uni.setNavigationBarTitle()
			test().then(res=>{
				console.log("------api----”")
				console.log(res)
			})
		},
		// 上拉加载
		onReachBottom(){
			console.log("----上拉刷新-----")
			console.log(this.filterby)
			if(this.filterby=='movie'){
				this.movieLoadingText="正在加载中..."
				if(this.REQUEST && !this.movieAll){//判断请求是不是完成了 防止重复请求数据
					this.REQUEST=false;
					this.moviePage++;
					test().then(res=>{
						this.movieLoadingText="加载完成!";
					 	this.REQUEST=true;//请求完成
						if(res.data && res.data.length<this.size){
							this.movieAll = true;// 所有的数据加载完成
							this.movieLoadingText=" - 我是有底线的 - ";
						}
						this.movieList = [...this.movieList,...res.data];
						
					})
				}
				
			}
			if(this.filterby=='tv'){
				
			}
			if(this.filterby=='cartoon'){
				
			}
			if(this.filterby=='variety'){
				
			}
		}
	}
</script>

<style lang="scss">
	page{
		padding:0 0;
	}
	.header-box{
		position: fixed;
		width:100%;
		z-index: 10;
		padding-bottom:15rpx;
		background-color: #fff;
		
	}
	.header {
		width: 100%;
		height: 79rpx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		
		border-bottom: solid 1rpx #eee;

		.target {
			width: 25%;
			height: 60rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28rpx;
			margin-bottom: -2rpx;
			color: #aaa;

			&.on {
				color: #555;
				border-bottom: 4rpx solid #f06c7a;
				font-weight: 600;
				font-size: 30rpx;
			}

			.icon {
				font-size: 26rpx;
			}
		}
	}
	.category{
		width:48%;
		margin-left:50%;
		margin-right:2%;
		font-size: 24rpx;
		border-radius:30rpx;
		color:#b3b3b3;
		display:flex;
		background-color:#f6f6f7;
		justify-content: space-around;
		align-items: center;
		height:50rpx;
		margin-top:15rpx;
	}

	.place {
		background-color: #ffffff;
		height: 160rpx;
	}
    /*列表*/
	.list-box{
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.list-item{
		flex:0 0 372rpx;
		margin-bottom:10px;
	}
	.image{
		width:100%;
		height:200rpx;
	}
	.title,.info{
		width:352rpx;
		padding: 0 10rpx;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.title{
		//margin-top: 12px;
		color: #000028;
		font-size: 14px;
		line-height: 20px;	
	}
	.info{
		 margin-top: 4px;
		 color: #a2a2b6;
		 font-size: 12px;
		 line-height: 18px;
	}
	.loading-text {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
		color: #979797;
		font-size: 24rpx;
	}
</style>
