<template>
	<view>
		<sqliteDB ref="sqlite"></sqliteDB>
		<uni-list>
			<uni-list-item v-for="(item,index) in list" v-bind:key="index" :title="item.line" >   
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import sqldb from '@/common/sqldb.js';
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				list: sqldb.allPoetryList
			};
		},
		mounted: async function(e) {
			this.showLoading();
			//清空上次的记录
			sqldb.allPoetryList.splice(0,sqldb.allPoetryList.length);
			//获取新纪录
			await this.$refs.sqlite.openDB();
			this.$refs.sqlite.getAllData();
			this.$refs.sqlite.closeDB();
		},
		methods: {
			showLoading: function() {
				uni.showLoading({
					title: 'loading'
				});
				this._showTimer && clearTimeout(this._showTimer);
				this._showTimer = setTimeout(() => {
					this.hideLoading();
				}, 1000)
			},
			hideLoading: function() {
				uni.hideLoading();
				plus.nativeUI.toast("功能尚待完善~",{duration:'long'});
			}
		},
		onUnload() {
			this._showTimer && clearTimeout(this._showTimer);
		}
	}
</script>

<style>
</style>
