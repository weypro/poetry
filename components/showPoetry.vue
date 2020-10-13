<template>
	<view>
		<sqliteDB ref="sqlite"></sqliteDB>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="poetry-view Kaiti_font">
				<scroll-view scroll-y="true" show-scrollbar="true" class="poetry-view-content">
					<text>{{ poetryText }}</text>
				</scroll-view>
				<view class="poetry-view-detail">
					<text>{{ poetryDetail }}</text>
				</view>
			</view>
			<view class="poetry-btn-wapper">
				<waves><div class="poetry-btn" @click="refreshPoetry">换一句</div></waves>
			</view>
			<view class="poetry-btn-wapper">
				<waves>
					<div class="poetry-btn" @click="savePoetry">{{ savBtnText }}</div>
				</waves>
			</view>
		</view>
	</view>
</template>

<script>
import waves from '@/components/xxley-waves/waves.vue';
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
	components: {
		waves
	},
	onLoad: function() {},
	mounted: async function(e) {
		console.log('show poetry component');
		//刷新一下
		this.refreshPoetry();
		//启动前先保证初始化
		await this.$refs.sqlite.openDB();
		//this.$refs.sqlite.clean();
		this.$refs.sqlite.init();
		this.$refs.sqlite.closeDB();
	},
	methods: {
		savBtnStateChange: function(num) {
			if (num == 1) this.savBtnText = '存档成功';
			if (num == 0) this.savBtnText = '存个档';
		},
		savePoetry: async function(e) {
			await this.$refs.sqlite.openDB();
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
					this.poetryText = tempString;
					this.poetryAuthor = res.data.author;
					this.poetryOrigin = res.data.origin;
					this.poetryDetail = this.poetryAuthor;
				},
				fail: res => {
					uni.showToast({
						title: '需要联网使用~',
						duration: 2000,
						icon: 'none'
					});
				}
			});
		}
	}
};
</script>

<style lang="scss">
.poetry-view {
	margin-bottom: 50rpx;
	padding: 40rpx 0;
	display: flex;
	height: 530rpx;
	background-color: #ffffff;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 50rpx;
	color: #353535;
	line-height: 1.6;
	flex-direction: column;
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
.poetry-btn-wapper {
	margin-top: 20upx;
	padding: 10px 40px;
}

.poetry-btn {
	box-sizing: border-box; /*这个属性很重要*/
	width: 100%;
	align-items: center;
	border: 1px solid transparent;
	border-radius: 3px;
	box-shadow: none;
	display: inline-flex;
	height: 46px;
	vertical-align: top;
	user-select: none;
	background-color: #fff;
	border-color: #dbdbdb;
	color: #363636;
	justify-content: center;
	text-align: center;
	white-space: nowrap;
}

.uni-common-mt {
	margin-top: 12px;
}
.uni-padding-wrap {
	padding: 0 12px;
}
</style>
