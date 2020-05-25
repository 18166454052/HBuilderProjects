

<script>
	import {movieCategory} from "@/api/movie/index.js"
	import {tvCategory} from "@/api/tv/index.js"
	import {varietyCategory} from "@/api/variety/index.js"
	import {cartoonCategory} from "@/api/cartoon/index.js"
	export default {
		onLaunch: function() {
			
			movieCategory().then(res=>{
				if(res.code==200){
					try{
						uni.setStorageSync("movie_category",res.data || {})
					}catch(e){
						console.log(e)
					}
					
					console.log(res)
				}
			})
			
			tvCategory().then(res=>{
				console.log("--------tvCategory--------")
				if(res.code==200){
					try{
						uni.setStorageSync("tv_category",res.data || {})
					}catch(e){
						console.log(e)
					}
					
					console.log(res)
				}
			})
			
			varietyCategory().then(res=>{
				console.log("--------varietyCategory--------")
				if(res.code==200){
					try{
						uni.setStorageSync("variety_category",res.data || {})
					}catch(e){
						console.log(e)
					}
					
					console.log(res)
				}
			})
			
			cartoonCategory().then(res=>{
				console.log("--------cartoonCategory--------")
				if(res.code==200){
					try{
						uni.setStorageSync("cartoon_category",res.data || {})
					}catch(e){
						console.log(e)
					}
					
					console.log(res)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	
	/**
	 * category  查询列表
	 **/
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
	/****
	 CATEGORY  查询页面列表      开始
	****/
	//查询列表
	.list-box{
		margin-top:10px;
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.list-box .list-item{
		flex:0 0 240rpx;
		margin-bottom:15px;
	}
	.list-box .image{
		width:100%;
		height:300rpx;
	}
	.list-box .title, .list-box .info{
		text-align:center;
		width:230rpx;
		padding: 0 5rpx;
		// overflow:hidden;
		// text-overflow:ellipsis;
		// white-space: nowrap;
	}
	.list-box .title{
		//margin-top: 12px;
		color: #000028;
		font-size: 14px;
		line-height: 20px;	
	}
	.list-box .title-content{
		display:inline-block;
		text-align:left;
	}
	.list-box .info{
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
	/****
	 CATEGORY  查询页面列表    结束
	****/
</style>
