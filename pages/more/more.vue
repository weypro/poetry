<template>
	<view>
		<sqliteDB ref="sqlite"></sqliteDB>
		<uni-list>
			<navigator url="../datamanage/datamanage" hover-class="navigator-hover"><uni-list-item title="管理数据" /></navigator>
			<uni-list-item title="一键清空" @click="deleteAllData" />
			<navigator url="../about/about" hover-class="navigator-hover"><uni-list-item title="关于" /></navigator>
		</uni-list>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
export default {
	components: {
		uniList,
		uniListItem
	},
	data() {
		return {};
	},
	methods: {
		deleteAllData: function() {
			uni.showModal({
				title: '提示',
				content: '真的要清空吗？清空后无法恢复',
				success: res => {
					if (res.confirm) {
						console.log('用户点击确定');
						this.$refs.sqlite.openDB();
						this.$refs.sqlite.clean();
						this.$refs.sqlite.init();
						this.$refs.sqlite.closeDB();
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	}
};
</script>

<style></style>
