<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
	
/*每个页面公共css */
.Kaiti_font {
	font-family: 'mykaiti' !important;
	font-size: 70rpx;
}

@font-face {
	font-family: 'mykaiti';
	src: url('./static/mykaiti.ttf') format('truetype');
}
</style>
