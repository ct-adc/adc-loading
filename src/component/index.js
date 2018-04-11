import LoadingComponent from './main';

let plugin = {
	install: function(vue, options){
		// 添加全局指令
		vue.directive('loading', {
			inserted(el, binding){
				postionParent(el);
				let Loading = vue.extend(LoadingComponent);
				let $vm = new Loading({
					el: document.createElement('div')
				})
				let msg = el.getAttribute('loading-msg') || '';

				el.insertBefore($vm.$el, el.children[0] || null);

				$vm.isShow = binding.value;
				$vm.msg = msg;

				el.loading = $vm;
			},
			update(el, binding){
				el.loading.isShow = binding.value;
			},
			unbind(el){
				el.loading.isShow = false;
			}
		})
	}	
}

function postionParent(el){
	let position = getComputedStyle(el, null).getPropertyValue('position');
	if(position === 'static'){
		el.style.position = 'relative'
	}
}

export default plugin;