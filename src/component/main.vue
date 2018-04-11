<template>
	<transition name="fade">
		<div class="loading-wrap" v-show="isShow">
			<div class="loading-mask"></div>
			<div class="loading-body">
				<div class="loading-icon"></div>
				<div class="loading-msg" v-show="msg">{{msg}}</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript-6">
    export default{
        name: '',
        data(){
            return {
            	isShow: false,
            	msg: ''
            };
        }
    };
</script>

<style lang="css">
	.loading-mask{
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(255, 255, 255, 0.9);
		z-index: 1000000;
	}
	.fade-enter,.fade-leave-active{
		opacity: 0;
	}
	.fade-enter-active,.fade-leave-active{
		transition: opacity 300ms;
	}

	.loading-body{
		position: absolute;
		top: 50%;
		left: 0;
		width: 100%;
		margin-top: -30px;
		text-align: center;
		z-index: 1000001;
	}
	.loading-icon{
		background: url(../imgs/loading.gif) no-repeat;
		background-position: center center;
		width: 55px;
		height: 55px;
		display: inline-block;
	}
	.loading-msg{
		color: #333;
	}
</style>

