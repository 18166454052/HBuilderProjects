<template>
	<view>
		
		<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="10"
			v-for= "(cat,k,index) in categoryList" 
			:key="k"
		>
		
		    <view class="scroll-view-item_H" 
			:class="{'current':cat1['key_val'] == select[cat1['key1']]}"
			@tap="categoryTouch(cat1)"
			v-for= "(cat1,index1) in cat"
		    :key="cat1['key_val']+'_'+cat1['key1']"
			>
			{{cat1.name}}
			</view>  
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				curcat:'',
				select:{
				    exclusive:-1,
				    iarea:-1,
				    iyear:-1,
				    ipay:-1,
				    itype:-1
			    },
				categoryList:{}
			}
		},
		methods:{
			categoryTouch:function(info){
			    this.select[info['key1']] = info['key_val']
			    this.$emit("getitem",this.select)
			}
		},
		created(){
			try {
			    const value = uni.getStorageSync('variety_category');
			    if (value) {
			       this.categoryList = value
			    }
			} catch (e) {
				console.log(e)
			    // error
			}
		}
	}
</script>


