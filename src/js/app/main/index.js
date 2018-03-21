import Vue from 'vue';
import LoadingPlugin from '../../../component/index';
import slideout from 'ct-adc-slideout';

Vue.use(LoadingPlugin);

new Vue({
	el: '#app',
	data: {
		isShow: true,
		isShow1: false,
		isShow2: false
	},
	methods: {
		save(){
			this.isShow1 = true;
			setTimeout(()=>{
				this.isShow1 = false;
				this.isShow2 = false;
			}, 2000)
		},
		getInfo(){
			this.isShow2 = true;
			this.isShow1 = true;
			setTimeout(()=>{
				this.isShow1 = false;
			}, 1000)
		}
	},
	components: {
		slideout
	}
})