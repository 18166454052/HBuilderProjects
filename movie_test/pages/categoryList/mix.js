
import movieCategory  from "@/components/category/movie"
import { movieItem }  from "@/api/movie/index"

import tvCategory  from "@/components/category/tv"
import { tvItem }  from "@/api/tv/index"

import varietyCategory  from "@/components/category/variety"
import { varietyItem }  from "@/api/variety/index"

import cartoonCategory  from "@/components/category/cartoon"
import { cartoonItem }  from "@/api/cartoon/index"

export default {
		components: {
			movieCategory,
			tvCategory,
			varietyCategory,
			cartoonCategory
		},
		data() {
			return {
				// movie
				moviePage:1,
				movieSize:20,
				movieLoadingAll:false,
				movieCategory:{},
				movieList:[],
				movieLoadingText:"正在加载中...",
				
				// tv
				
				tvPage:1,
				tvSize:20,
				tvLoadingAll:false,
				tvCategory:{},
				tvList:[],
				tvLoadingText:"正在加载中...",
				
				//variety
				
				varietyPage:1,
				varietySize:20,
				varietyLoadingAll:false,
				varietyCategory:{},
				varietyList:[],
				varietyLoadingText:"正在加载中...",
				
				//cartoon
				
				cartoonPage:1,
				cartoonSize:20,
				cartoonLoadingAll:false,
				cartoonCategory:{},
				cartoonList:[],
				cartoonLoadingText:"正在加载中...",
				
			}
		},
		methods:{
			movieItem(info){
				this.movieCategory=info;
				this.moviePage = 1;
				this.movieList=[];
				this.movieLoadingAll = false;
				this.getMovieItem();
			},
			getMovieItem(){
				 this.movieLoadingText= "正在加载中..."
				movieItem({
			        page:this.moviePage,
			        size:this.movieSize,
			        category:this.movieCategory
			      }).then(res=>{
			        if(res.code==200){
			          this.movieList = [...this.movieList,...res.data];
					  this.movieLoadingText= "数据加载完成啦！"
			          if(res.data && res.data.length<this.size){
			             this.movieLoadingAll = true
			          }
			        }
			      })
			},
			tvItem(info){
				this.tvCategory=info;
				this.tvPage = 1;
				this.tvList=[];
				this.tvLoadingAll = false;
				this.getTvItem();
			},
			getTvItem(){
				this.tvLoadingText= "正在加载中..."
				tvItem({
			        page:this.tvPage,
			        size:this.tvSize,
			        category:this.tvCategory
			      }).then(res=>{
			        if(res.code==200){
			          this.tvList = [...this.tvList,...res.data];
					  this.tvLoadingText= "数据加载完成啦！"
			          if(res.data && res.data.length<this.size){
			             this.tvLoadingAll = true
			          }
			        }
			      })
			},
			varietyItem(info){
				this.varietyCategory=info;
				this.varietyPage = 1;
				this.varietyList=[];
				this.varietyLoadingAll = false;
				this.getVarietyItem();
			},
			getVarietyItem(){
				this.varietyLoadingText= "正在加载中..."
				varietyItem({
			        page:this.varietyPage,
			        size:this.varietySize,
			        category:this.varietyCategory
			      }).then(res=>{
			        if(res.code==200){
			          this.varietyList = [...this.varietyList,...res.data];
					  this.varietyLoadingText= "数据加载完成啦！"
			          if(res.data && res.data.length<this.size){
			             this.varietyLoadingAll = true
			          }
			        }
			      })
			},
			cartoonItem(info){
				this.cartoonCategory=info;
				this.cartoonPage = 1;
				this.cartoonList=[];
				this.varietyLoadingAll = false;
				this.getCartoonItem();
			},
			getCartoonItem(){
				this.cartoonLoadingText= "正在加载中..."
				cartoonItem({
			        page:this.cartoonPage,
			        size:this.cartoonSize,
			        category:this.cartoonCategory
			      }).then(res=>{
			        if(res.code==200){
			          this.cartoonList = [...this.cartoonList,...res.data];
					  this.cartoonLoadingText= "数据加载完成啦！"
			          if(res.data && res.data.length<this.size){
			             this.cartoonLoadingAll = true
			          }
			        }
			      })
			},
			toplay(){
				uni.navigateTo({
					url:"../play/index"
				})
			}
		}
}