<template>
	<view class="">
		<showPoetry/>
	</view>
</template>

<script>
	import showPoetry from "@/components/showPoetry.vue"
	
	export default {
		components:{
			showPoetry
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		onShow() {
		},
		onReady: function () {
			
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

</style>
