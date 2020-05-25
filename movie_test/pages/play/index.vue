<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!-- header -->
		<!-- <v-header /> -->
		<view class="videp-box">
		   <video class="myVideo"
		   :src="url"
		   controls
		   autoplay="true"
		   muted="true"
		   @timeupdate="timeupdate"
		   >
		   </video>
		 
		</view>
		<view class="content">
			<view class="">
				<text @tap="download">下载</text>
			</view>
			<view >
				下载进度：{{progress}}
			</view>
			<view class="">
				文件的保存路径: {{file}}
			</view>
		</view>
		
		
	</view>
</template>

<script>
import Header from './header.vue';
export default{
		components:{
			'v-header':Header
		},
		data(){
			return {
				url:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4",
				progress:0,
				file:''
			}
		},
		methods:{
			download(){
				const downloadTask  = uni.downloadFile({
				    url: this.url,
				    success: (res) => {
						if(res.statusCode==200){
							console.log(res)
							uni.saveFile({
								tempFilePath:res.tempFilePath,
								success:(res)=>{
									this.file = res.savedFilePath // 
									console.log(res)
								},
								fail:(err)=>{
									console.log(err)
								}
							})
						}
				        
				    },
					fail:(err)=>{
						console.log(err)
						uni.showToast({
							 title:"失败"
						})
						
					}
				});
				downloadTask.onProgressUpdate((res) => {
					this.progress = res.progress
				    // console.log('下载进度' + res.progress);
				    // console.log('已经下载的数据长度' + res.totalBytesWritten);
				    // console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);
				
				    // 测试条件，取消下载任务。
				    // if (res.progress > 50) {
				    //     downloadTask.abort();
				    // }
				});
			},
			timeupdate(event){
				// event.detail={currentTime, duration} 单位为 s 
				//console.log(event.detail)	
			},
			onHide(){
				console.log("--onhide--")
			},
			onUnload(){
				console.log("--onUnload--")
			}
		}
	}
</script>

<style lang="scss" >
	page{
		padding:0px 0px;
	}
	/*  修改状态栏样式 */
	.status {
		/* #ifdef APP-PLUS */
		opacity: 0;
		/* #endif */
	}
	.videp-box{
	}
	.content{// video向下移动会覆盖  把所有内容移动相同距离
		position:relative;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
	}
	.myVideo{
		width:750rpx;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		
	}
	
</style>
