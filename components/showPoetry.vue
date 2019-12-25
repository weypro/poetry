<template>
	<view>
		<sqliteDB ref="sqlite"></sqliteDB>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="poetry-view">
				<scroll-view scroll-y="true" show-scrollbar="true" class="poetry-view-content">
					<!-- class="poetry-view"-->
					<text>{{ poetryText }}</text>
				</scroll-view>
				<view class="poetry-view-detail">
					<text>{{ poetryDetail }}</text>
				</view>
			</view>
			<view class="poetry-btn"><button type="default" plain="true" @click="refreshPoetry">换一句</button></view>
			<view class="poetry-btn">
				<button type="default" plain="true" @click="savePoetry">{{ savBtnText }}</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			poetryText: '',
			poetryAuthor: '',
			poetryOrigin: '',
			poetryLine: '',
			poetryDetail: '',
			savBtnText: '存个档'
		};
	},
	onLoad: function() {},
	mounted: function(e) {
		console.log('show poetry component');
		//刷新一下
		this.refreshPoetry();
		//启动前先测
		this.$refs.sqlite.openDB();
		//this.$refs.sqlite.clean();
		//this.$refs.sqlite.init();
		this.$refs.sqlite.closeDB();
	},
	methods: {
		savBtnStateChange: function(num) {
			if (num == 1) this.savBtnText = '存档成功';
			if (num == 0) this.savBtnText = '存个档';
		},
		savePoetry: function(e) {
			this.$refs.sqlite.openDB();

			/*
			clearTimeout(this.timer);  //清除延迟执行 
			this.timer = setTimeout(()=>{   //设置延迟执行
			    this.$refs.sqlite.isOpen();
				console.log('ok');
			},2000);
			*/
			this.$refs.sqlite.isOpen();
			this.$refs.sqlite.insertLine(this.poetryLine, this.poetryAuthor, this.poetryOrigin, this.savBtnStateChange);
			this.$refs.sqlite.closeDB();
		},
		refreshPoetry: function(e) {
			this.savBtnStateChange(0);

			uni.request({
				url: 'https://v1.jinrishici.com/all.json',
				data: {
					text: ''
				},
				success: res => {
					console.log(res.data);
					this.poetryText = '';
					this.poetryLine = res.data.content.toString();
					var tempString = res.data.content
						.toString()
						.replace(new RegExp('，', 'g'), '\n')
						.replace(new RegExp('。', 'g'), '\n')
						.replace(new RegExp('？', 'g'), '\n')
						.replace(new RegExp('！', 'g'), '\n')
						.replace(new RegExp('；', 'g'), '\n');
					/*
					if (tempString.indexOf('？') != -1) {
						tempString = tempString.slice(0, tempString.indexOf('？')) + '？\n' + tempString.slice(tempString.indexOf('？') + 1);
					}
					if (tempString.indexOf('!') != -1) {
						tempString = tempString.slice(0, tempString.indexOf('!')) + '!\n' + tempString.slice(tempString.indexOf('!') + 1);
					}*/
					this.poetryText = tempString;
					//this.poetryText = 'f\nf\nf\nsdf\nawer\nasf\naewrfsdf\nadsf\naretwr\n';
					this.poetryAuthor = res.data.author;
					this.poetryOrigin = res.data.origin;
					this.poetryDetail = this.poetryAuthor;
				},
				fail: res => {
					uni.showToast({
						title: '需要联网使用~',
						duration: 2000,
						'icon':'none'
					});
				}
			});
		}
	}
};
</script>

<style lang="scss">
.poetry-view {
	margin-bottom: 50upx;
	padding: 40upx 0;
	display: flex;
	height: 530upx;
	background-color: #ffffff;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 50upx;
	color: #353535;
	line-height: 1.6;
	flex-direction: column;
	font-family: KaiTi;
}
.poetry-view-content {
	font-size: 70rpx;
}
.poetry-view-detail {
	margin-top: 10px;
	font-size: 50rpx;
	text-align: right;
	justify-content: flex-end;
	flex-direction: row;
}
.poetry-btn {
	margin-top: 20upx;
	padding: 10px 40px;
}
.uni-common-mt {
	margin-top: 12px;
}
.uni-padding-wrap {
	padding: 0 12px;
}
</style>
